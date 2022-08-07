import { gql } from "@apollo/client";

export const LOAD_SIMPLE_Query = gql`
    query MyQuery {
        collections(networks: {chain: RINKEBY}, where: {collectionAddresses: "0x5b940c58273964bdbb7d1f7389122d3bfab5737d"}) {
            nodes {
                name
                description
                address
            }
        }
    }  
`;