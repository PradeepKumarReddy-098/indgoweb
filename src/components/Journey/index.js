import { useState } from "react"
import RequestCall from "../RequestCall"
import './index.css'

const Journey = () =>{
    const [popup,setPopups] = useState(false)
    const changePopup = (popups) =>{
        setPopups(popups)
    }
    return(
    <footer>
        <div>
            <h1>Kick off your journey with IndigoLearn</h1>
            <p>Signin and get instance access to our free courses.</p>
            <button>Sign IN</button>
        </div>
        <RequestCall changePopup={changePopup} />
        {popup && 
    <div className='popups'>
      <img src="https://res.cloudinary.com/dvhdil4k3/image/upload/v1697696803/check-circle.1_1_nignfg.png" alt="success" />
      <h4>Your request success</h4>
      <p>You will recieve the call from our team soon.</p>
      <button type="button" onClick={()=>setPopups(false)}>Close</button>
      </div>
      }
    </footer>
)}

export default Journey