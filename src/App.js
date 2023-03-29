import "./App.css";
import { Routes, Route } from "react-router-dom";
import Chatpage from "./pages/Chatpage";
import Homepage from "./pages/Homepage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chats" element={<Chatpage />} />
      </Routes>
    </div>
  );
}

export default App;
