import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import ChatContextProvider from "./context/ChatContext";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { AnimatePresence } from "framer-motion";

const link = new WebSocketLink({
   uri: `ws://localhost:4000/`,
   options: {
      reconnect: true,
   },
});

const client = new ApolloClient({
   link,
   uri: "http://localhost:4000/",
   cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <ApolloProvider client={client}>
         <ChatContextProvider>
            <AnimatePresence>
               <App />
            </AnimatePresence>
         </ChatContextProvider>
      </ApolloProvider>
   </React.StrictMode>
);
