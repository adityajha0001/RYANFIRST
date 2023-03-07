import { BrowserRouter, Routes, Route } from "react-router-dom";
//import './App.css'
import Home from "./components/home";
import SignUp from "./components/sign/signUp";
import Animation from "./components/animation";
import Nev from "./components/nev";
function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/animation"element={<Animation/>}/>
          <Route exact path="/signUp" element={<SignUp/>}/>
      
        </Routes>
      </BrowserRouter>
  
    </>
  )
}

export default App;
