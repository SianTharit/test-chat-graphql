import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "shards-ui/dist/css/shards.min.css";
import Chat from "./components/Chat/Chat";
import logo from "./assets/images/logo.png";
import Home from "./components/Home/Home";
import Robby from "./components/Robby/Robby";
import NewRoom from "./components/NewRoom/NewRoom";
import JoinRoom from "./components/JoinRoom/JoinRoom";
import { HOME, ROBBY, ROOM, JOIN_ROOM, CHAT } from "./enum/typePage";

function App() {
   const [type, setType] = useState("home");

   console.log(type);
   return (
      <div>
         <div className="app">
            <img src={logo} alt="logo" />
         </div>
         <div className="container">
            {type === HOME && <Home setType={setType} />}
            {type === ROBBY && <Robby setType={setType} />}
            {type === ROOM && <NewRoom setType={setType} />}
            {type === JOIN_ROOM && <JoinRoom setType={setType} />}
            {type === CHAT && <Chat setType={setType} />}
         </div>
      </div>
   );
}

export default App;
