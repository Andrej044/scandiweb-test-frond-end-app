import React from 'react';
import ReactDOM from 'react-dom/client';
import {ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql} from '@apollo/client';

import './styles/index.css';
import App from './App';


const  client = new ApolloClient({
    uri:"http://localhost:4000/",
    cache: new InMemoryCache()
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <ApolloProvider client={client}>
        <App/>
      </ApolloProvider>
    </>
);


