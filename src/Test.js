import { useQuery } from "react-query";
import { GraphQLClient, gql } from "graphql-request";

const API_URL = `https://api.zora.co/graphql`;

const graphQLClient = new GraphQLClient(API_URL, {
});

export function useGetCollection() {
  return useQuery("/", async () => {
    console.log('A');
    console.log(await graphQLClient, "T");
    console.log('B');
    const { getPostList } = await graphQLClient.request(gql`
      query CollectionInfo {
        collections(networks: [{network: ETHEREUM, chain: MAINNET}], 
                    pagination: {limit: 8}, 
                    sort: {sortKey: CREATED, sortDirection: ASC},
                    where: {collectionAddresses: "0xc729Ce9bF1030fbb639849a96fA8BBD013680B64"}) 
        {
          nodes {
            address
            name
            symbol
            totalSupply
          }
        }
      }
           
    `);
    return getPostList;
  });
}