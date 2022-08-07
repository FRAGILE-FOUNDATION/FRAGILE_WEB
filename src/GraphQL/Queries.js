import { gql } from "@apollo/client";

const LOAD_Paladium_NFTs= gql`
    query MyQuery {
        collections(networks: {chain: RINKEBY}, where: {collectionAddresses: "0x099cd1559076b24505c653b7da155d0cc17bb8c9"}) {
            nodes {
                name
                description
                address
            }
        }
        tokens(networks: {chain: RINKEBY}, where: {collectionAddresses: "0x099cd1559076b24505c653b7da155d0cc17bb8c9"}) {
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

const LOAD_Rhodium_NFTs= gql`
    query MyQuery {
        collections(networks: {chain: RINKEBY}, where: {collectionAddresses: "0x44177241427655984ab86ae605b5b9ec2106addc"}) {
            nodes {
                name
                description
                address
            }
        }
        tokens(networks: {chain: RINKEBY}, where: {collectionAddresses: "0x44177241427655984ab86ae605b5b9ec2106addc"}) {
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

const LOAD_Iridium_NFTs= gql`
    query MyQuery {
        collections(networks: {chain: RINKEBY}, where: {collectionAddresses: "0xadcc0d343c818151adf1502a535faed7ae1cdd49"}) {
            nodes {
                name
                description
                address
            }
        }
        tokens(networks: {chain: RINKEBY}, where: {collectionAddresses: "0xadcc0d343c818151adf1502a535faed7ae1cdd49"}) {
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

export {LOAD_Paladium_NFTs, LOAD_Rhodium_NFTs, LOAD_Iridium_NFTs};