import { ZDK } from "@zoralabs/zdk";
import React, { useEffect, useState, useMemo } from "react";

const API_ENDPOINT = "https://api.zora.co/graphql";
const zdk = new ZDK(API_ENDPOINT); // Defaults to Ethereum Mainnet

const getCollectionData = async(collectionAddresses)=>{
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
    const [tokens, setTokens] = useState([]);
    const [collectionData, setCollectionData] = useState();

    useEffect(()=>{
        const fetchData = async()=>{
            let data = await getCollectionData(collectionAddresses);
            setCollectionData(data);
        }
        fetchData();
    }, [collectionAddresses]);

    useEffect(()=>{

        if(collectionData){
            const totalSupply = collectionData['totalSupply'];
    
            const i = tokens.length;
            if(i <= totalSupply){
                let tokenId = i.toString();

                let args = {
                    token: {
                    address: collectionAddresses,
                    tokenId: tokenId
                    },
                    includeFullDetails: false // Optional, provides more data on the NFT such as all historical events
                }
                
                let response = zdk.token(args);
                response.then((data)=>{
                    let tokenInfo = data['token']['token'];
                    setTokens([...tokens, tokenInfo]);
                })
                
            }
        }

        
    }, [tokens, collectionData]);


    
    

    return tokens;
  
}

export default useCollectionNFTS;