import React from "react";
import "./index.css";
import { MoralisProvider } from "react-moralis";
import Home from "./Home";
import ShowCollection from './ShowCollection';

const App = () => {

  return (
    <MoralisProvider serverUrl="https://gnqq6qelfdee.usemoralis.com:2053/server" appId="OeFnFXYeJsvYKcuqAHko2a9fPNmn9sqmQvLnYYug">
      {/*<Home/>*/}
      <ShowCollection/>
    </MoralisProvider>
  );

}

export default App;
