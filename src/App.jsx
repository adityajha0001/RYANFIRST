import { BrowserRouter, Routes, Route } from "react-router-dom";
//import './App.css'
import Home from "./components/home";
import SignUp from "./components/sign/signUp";
function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/signUp" element={<SignUp/>}/>
      
        </Routes>
      </BrowserRouter>
  
    </>
  )
}

export default App;
