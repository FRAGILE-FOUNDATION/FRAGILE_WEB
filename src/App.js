import React from "react";
import "./index.css";
import 'antd/dist/antd.css';
import 'antd/dist/antd.js';
import { MoralisProvider } from "react-moralis";
import Drop from "./page/Drop";
import QueryPage from './QueryPage';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://api.zora.co/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

const App = () => {

  return (
    <MoralisProvider serverUrl="https://gnqq6qelfdee.usemoralis.com:2053/server" appId="OeFnFXYeJsvYKcuqAHko2a9fPNmn9sqmQvLnYYug">
      {/*<Drop/>*/}
      <ApolloProvider client={client}>
        {" "}
        <QueryPage/>
      </ApolloProvider>
    </MoralisProvider>
  );

}

export default App;
