import { useChat } from "../../context/ChatContext";
import classes from "./Robby.module.scss";
import { JOIN_ROOM, ROOM } from "../../enum/typePage";

function Robby({ setType }) {
   const { chatObject } = useChat();
   return (
      <div className="wrapper">
         <div style={{ paddingBottom: "5rem" }}>
            <h1>
               คุณ <span>{chatObject.user}</span>
            </h1>
         </div>
         <div className={classes.wrapper_button}>
            <button className="btn-primary" onClick={() => setType(ROOM)}>
               สร้างห้องใหม่
            </button>
            <button className="btn" onClick={() => setType(JOIN_ROOM)}>
               เข้าร่วมแชท
            </button>
         </div>
      </div>
   );
}

export default Robby;
