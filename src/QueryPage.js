import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_SIMPLE_Query } from "./GraphQL/Queries";

function GetSimpleData() {
  const { error, data } = useQuery(LOAD_SIMPLE_Query);
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

export default GetSimpleData;