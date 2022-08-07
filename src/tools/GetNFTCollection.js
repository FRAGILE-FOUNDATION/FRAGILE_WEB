import { ZDK } from "@zoralabs/zdk";
import { useEffect, useState } from "react";

const API_ENDPOINT = "https://api.zora.co/graphql";
const zdk = new ZDK(API_ENDPOINT); // Defaults to Ethereum Mainnet

const getCollectionData = async(collectionAddresses)=>{
    /**
     * Function to collect information about a specific NFT collection
     */
    let args = {
        where: {collectionAddresses: [
            collectionAddresses
        ]
        },
        includeFullDetails: true
    }
    let response = await zdk.collections(args);
    return response['collections']['nodes'][0];
}

const useCollectionNFTS = ({collectionAddresses}) =>{
    /**
     * Hook to stream NFTs Information of a specific collection
     */
    const [tokens, setTokens] = useState([]);
    const [collectionData, setCollectionData] = useState();
    const [fetchPagination, setFetchPagination] = useState({hasNextPage:true});

    useEffect(()=>{
        /**
         * useEffect to get collection info
         */
        const fetchData = async()=>{
            let data = await getCollectionData(collectionAddresses);
            setCollectionData(data);
        }
        fetchData();
    }, [collectionAddresses]);

    useEffect(()=>{
        /**
         * useEffect to stream NFT information while tokens array not contain all NFT of the collection
         */

        if(collectionData){
            const totalSupply = collectionData['totalSupply'];

            if(fetchPagination.hasNextPage){

                let args = {
                    where:{
                        collectionAddresses: collectionAddresses
                    },
                    pagination:{
                        after: fetchPagination.endCursor
                    },
                    includeFullDetails: true // Optional, provides more data on the NFT such as all historical events
                }
                console.log(args);
                let response = zdk.tokens(args);
                response.then(async(data)=>{
                    console.log(data);

                    setFetchPagination(data.tokens.pageInfo);
                    setTokens(tokens.concat(data.tokens.nodes));
                })
                
            }
        }

        
    }, [tokens, collectionData, collectionAddresses, fetchPagination]);


    
    

    return tokens;
  
}

function jsonConcat(o1, o2) {
    for (var key in o2) {
        o1[key] = o2[key];
    }
    return o1;
}

export {useCollectionNFTS, getCollectionData};