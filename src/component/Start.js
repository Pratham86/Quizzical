import React from 'react'
// import { useNavigate } from 'react-router-dom'
import {Link} from "react-router-dom"

function Start() {

  return(
    <div className = "start--container">
    <h2>Quizzical</h2>
    <p>Give your knowledge a shot!</p>
    
    <Link to = "/question" className='link'>Start Quiz</Link>
    </div>
  )
}

export default Start
