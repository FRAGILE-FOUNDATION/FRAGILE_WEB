import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import {LOAD_Paladium_NFTs, LOAD_Rhodium_NFTs, LOAD_Iridium_NFTs} from "./GraphQL/Queries";

const NFTCollection = [LOAD_Paladium_NFTs, LOAD_Rhodium_NFTs, LOAD_Iridium_NFTs]

function GetSpecificCollection(collection_loader) {
  const { error, data } = useQuery(LOAD_Paladium_NFTs);
  useEffect(() => {
    if(error){
        console.error(data);
    }
  }, [data, error]);

  return (
    data
  );
}

function GetNFTs() {
  console.log(NFTCollection.map(x => GetSpecificCollection(x)));
  return GetNFTs;
}

export default GetNFTs;