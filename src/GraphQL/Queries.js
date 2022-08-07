import { gql } from "@apollo/client";

export const LOAD_NFTs = gql`
    query MyQuery {
        collections(networks: {chain: RINKEBY}, where: {collectionAddresses: "0x5b940c58273964bdbb7d1f7389122d3bfab5737d"}) {
            nodes {
                name
                description
                address
            }
        }
        tokens(networks: {chain: RINKEBY}, where: {collectionAddresses: "0x5b940c58273964bdbb7d1f7389122d3bfab5737d"}) {
            nodes {
                token {
                    tokenId
                    name
                    owner
                    attributes {
                        traitType
                        value
                    }
                    image {
                        url
                        mimeType
                    }
                }
                
            }
        }
    }  
`;