import { useChat } from "../../context/ChatContext";
import { ROBBY, CHAT } from "../../enum/typePage";

function JoinRoom({ setType }) {
   const { chatObject, setChatObject } = useChat();
   const handleSubmit = (e) => {
      e.preventDefault();
      setType(CHAT);
   };
   return (
      <div className="wrapper">
         <h1>เข้าร่วมแชท</h1>
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               name="name"
               required
               value={chatObject.room}
               onChange={(e) =>
                  setChatObject({ ...chatObject, room: e.target.value })
               }
            />
            <div>
               <button
                  type="button"
                  className="btn"
                  onClick={() => setType(ROBBY)}
               >
                  กลับ
               </button>
               <button type="submit" className="btn-primary">
                  ยืนยัน
               </button>
            </div>
         </form>
      </div>
   );
}

export default JoinRoom;
