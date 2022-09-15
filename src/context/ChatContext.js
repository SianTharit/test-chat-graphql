import { createContext, useContext, useState } from "react";
import { useSubscription, gql, useMutation } from "@apollo/client";

const ChatContext = createContext();

function ChatContextProvider({ children }) {
   const [chatObject, setChatObject] = useState({
      user: "",
      content: "",
      room: "",
   });

   const GET_MESSAGES = gql`
      subscription {
         messages {
            id
            content
            user
         }
      }
   `;

   const POST_MESSAGE = gql`
      mutation ($user: String!, $content: String!) {
         postMessage(user: $user, content: $content)
      }
   `;

   const Messages = ({ user }) => {
      const { data } = useSubscription(GET_MESSAGES);
      if (!data) {
         return null;
      }

      return (
         <div>
            {data.messages.map(({ id, user: messageUser, content }) => (
               <div
                  key={id}
                  style={{
                     display: "flex",
                     justifyContent:
                        user === messageUser ? "flex-end" : "flex-start",
                  }}
               >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                     {user !== messageUser && (
                        <span
                           style={{
                              display: "flex",
                           }}
                        >
                           <span>คุณ</span>
                           {messageUser.toUpperCase()}
                        </span>
                     )}
                     <div
                        style={{
                           background:
                              user === messageUser ? "#58bf56" : "#e5e6ea",
                           color: user === messageUser ? "white" : "black",
                           padding: "1em",
                           borderRadius: "1em",
                        }}
                     >
                        {content}
                     </div>
                  </div>
               </div>
            ))}
         </div>
      );
   };

   const [postMessage] = useMutation(POST_MESSAGE);

   const onSend = () => {
      console.log(postMessage);
      if (chatObject.content.length > 0) {
         postMessage({
            variables: chatObject,
         });
      }
      setChatObject({
         ...chatObject,
         content: "",
      });
   };

   return (
      <ChatContext.Provider
         value={{ Messages, onSend, chatObject, setChatObject }}
      >
         {children}
      </ChatContext.Provider>
   );
}

export default ChatContextProvider;

function useChat() {
   const ctx = useContext(ChatContext);
   return ctx;
}

export { useChat };
