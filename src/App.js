import React from "react";
import "./index.css";
import 'antd/dist/antd.css';
import 'antd/dist/antd.js';
import { MoralisProvider } from "react-moralis";
import Drop from "./page/Drop";

const App = () => {

  return (
    <MoralisProvider serverUrl="https://gnqq6qelfdee.usemoralis.com:2053/server" appId="OeFnFXYeJsvYKcuqAHko2a9fPNmn9sqmQvLnYYug">
      <Drop/>
    </MoralisProvider>
  );

}

export default App;
