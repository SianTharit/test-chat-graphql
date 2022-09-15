import React from "react";
import { useChat } from "../../context/ChatContext";
import classes from "./Chat.module.scss";

const Chat = () => {
   const ENTER_KEY_CODE = 13;
   const { chatObject, setChatObject, onSend, Messages } = useChat();

   return (
      <>
         <h1>ห้อง {chatObject.room}</h1>
         <div className={classes.wrapper_chat}>
            <Messages user={chatObject.user} />
         </div>
         <input
            className="input_chat"
            placeholder="Enter เพื่อส่ง"
            label="Content"
            value={chatObject.content}
            onChange={(event) =>
               setChatObject({
                  ...chatObject,
                  content: event.target.value,
               })
            }
            onKeyUp={(event) => {
               event.preventDefault();
               if (event.keyCode === ENTER_KEY_CODE) {
                  onSend();
               }
            }}
         />
      </>
   );
};

export default Chat;
