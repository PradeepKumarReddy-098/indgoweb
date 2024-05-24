import {SlBookOpen} from 'react-icons/sl'
import {TbCalendarClock} from 'react-icons/tb'
import {LuNewspaper, LuCalendarCheck2} from 'react-icons/lu'
import {useState} from 'react'
import RequestCall from '../RequestCall'
import './index.css'

const Acca = () => {
  const [showPopUp, setPopup] = useState(false)
  
  const changePopup = (popup) => {
    setPopup(popup)
  }
  return (
  <div className='Acca-section'>
    <div>
      <h1>Become ACCA in 18 Months</h1>
      <p>
        Acquire globally recognized accountancy qualification, ACCA (also called
        as Global CA), and get placed in top MNCs & Big4s.
      </p>
      <ul className='acca-items'>
        <li>
          <SlBookOpen size={60} color="002379" />
          <div>
            <h4>Levels</h4>
            <p>13 pages</p>
          </div>
        </li>
        <li>
          <TbCalendarClock size={60} color="002379" />
          <div>
            <h4>Duration</h4>
            <p>6-30 months</p>
          </div>
        </li>
        <li>
          <LuNewspaper size={60} color="002379" />
          <div>
            <h4>Exams</h4>
            <p>online</p>
          </div>
        </li>
        <li>
          <LuCalendarCheck2 size={60} color="002379" />
          <div>
          <h4>Exemptions</h4>
          <p>Upto 9 papers</p>
          </div>
        </li>
      </ul>
      <button type="button" className='btn'>Download Brochure</button>
    </div>
    <RequestCall changePopup={changePopup} />
    {showPopUp && 
    <div className='popup'>
      <img src="https://res.cloudinary.com/dvhdil4k3/image/upload/v1697696803/check-circle.1_1_nignfg.png" alt="success" />
      <h4>Your request success</h4>
      <p>You will recieve the call from our team soon.</p>
      <button type="button" onClick={()=>setPopup(false)}>Close</button>
      </div>
      }
  </div>
)
}

export default Acca
