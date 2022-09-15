import "./Home.module.scss";
import { useChat } from "../../context/ChatContext";
import { AnimatePresence, motion } from "framer-motion";

function Home({ setType }) {
   const { chatObject, setChatObject } = useChat();
   const handleSubmit = (e) => {
      e.preventDefault();
      setType("robby");
   };
   return (
      <div className="wrapper">
         <h1>ชื่อของคุณ</h1>
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               name="name"
               value={chatObject.user}
               onChange={(e) =>
                  setChatObject({
                     ...chatObject,
                     user: e.target.value,
                     content: "",
                  })
               }
               required
            />
            {chatObject.user && (
               <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring" }}
               >
                  <button type="submit" className="btn-primary">
                     ยืนยัน
                  </button>
               </motion.div>
            )}
         </form>
      </div>
   );
}

export default Home;
