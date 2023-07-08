//Libraries
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Style Files
import styles from "./Framework/CSS/Framework.modulus.css"

//Components
import Home from "./Components/Home/Home"
import Topics from "./Components/Topics/Topics"
import NumSys from "./Components/Topics/NumSys/NumSys"
import Scratch from "./Components/Topics/Scratch/Scratch"
import Flowchart from "./Components/Topics/Flowchart/Flowchart"
import Main from "./Components/Main/Main"
import Tasks from "./Components/Tasks/Tasks"
import Error from "./Components/Error/Error";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path ="home" element={<Home />} />
          <Route path ="topics" element={<Topics />} />
          <Route path ="tasks" element={<Tasks />} />
          <Route path ="topics/numsys" element={<NumSys/>} />
          <Route path ="topics/scratch" element={<Scratch />}/>
          <Route path ="topics/flowchart" element={<Flowchart/>} />
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
