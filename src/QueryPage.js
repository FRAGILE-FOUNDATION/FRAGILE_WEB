import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_NFTs } from "./GraphQL/Queries";

function GetNFTs() {
  const { error, data } = useQuery(LOAD_NFTs);
  useEffect(() => {
    if (data) {
        console.log(data);
    }
    else if(error){
        console.error(data);
    }
  }, [data, error]);

  return (
    <div>
    </div>
  );
}

export default GetNFTs;