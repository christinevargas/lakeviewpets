import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";

// import gql from "graphql-tag";


const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:4466/"
});

const client = new ApolloClient({
  cache,
  link
});

//this query works but does not return data in the db...
// client
//   .query({
//     query: gql`
//       query pets {
//         pets {
//           id
//           name
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));



ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);


serviceWorker.unregister();
