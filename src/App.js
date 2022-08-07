import React from "react";
import "./index.css";
import 'antd/dist/antd.css';
import 'antd/dist/antd.js';
import { MoralisProvider } from "react-moralis";
import Drop from "./page/Drop";
import HomeTest from './HomeTest';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

const App = () => {

  return (
    <MoralisProvider serverUrl="https://gnqq6qelfdee.usemoralis.com:2053/server" appId="OeFnFXYeJsvYKcuqAHko2a9fPNmn9sqmQvLnYYug">
      {/*<Drop/>*/}
      <QueryClientProvider client={queryClient}>
        <HomeTest/>
      </QueryClientProvider>   
    </MoralisProvider>
  );

}

export default App;
