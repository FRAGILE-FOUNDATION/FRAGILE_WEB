import { ZDK } from "@zoralabs/zdk";

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
    console.log(response['collections']['nodes'][0]);
    return response['collections']['nodes'][0];
}

const getCollectionNFTS = async ({collectionAddresses,limit=6}) =>{

    const collectionData = await getCollectionData(collectionAddresses);
    const totalSupply = collectionData['totalSupply'];
    let tokens = [];

    for (let i = 1; i <= Math.min(limit, totalSupply); i++) {
        let tokenId = i.toString();

        let args = {
            token: {
            address: collectionAddresses,
            tokenId: tokenId
            },
            includeFullDetails: false // Optional, provides more data on the NFT such as all historical events
        }
        
        let response = await zdk.token(args);
        let tokenInfo = response['token']['token'];
        tokens.push(tokenInfo);
    }
    console.log(tokens);
    return tokens;
  
}

export default getCollectionNFTS;