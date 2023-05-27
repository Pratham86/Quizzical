import React from "react";
import {Route,Routes} from "react-router-dom"
import Start from "./component/Start";
import Question from "./component/Question";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/question" element={<Question/>}/>
      </Routes> 
  )
}

export default App;
