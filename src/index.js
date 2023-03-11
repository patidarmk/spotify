import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloClient ,ApolloProvider, InMemoryCache } from '@apollo/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

const client = new ApolloClient({
  uri: "https://api.ss.dev/resource/api",
  cache: new InMemoryCache()
});
 
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);