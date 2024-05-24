import { TbBulb } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiUserLocationLine } from "react-icons/ri";
import {SlBookOpen} from 'react-icons/sl'
import {TbCalendarClock} from 'react-icons/tb'
import {LuNewspaper, LuCalendarCheck2} from 'react-icons/lu'
import './index.css'

const ChooseUs = () => (
    <div className="ChooseUs">
        <h1>Why Choose Us?</h1>
        <div className="choose-us-cards">
            <div className="choose-us-card">
                <TbBulb size={60} color="002379" />
                <h2>Expert Faculty</h2>
                <p>Our qualified Faculty with significant practical experience guide students every step of the way</p>
            </div>
            <div className="choose-us-card">
                <FaPeopleGroup size={60} color="002379" />
                <h2>Complete Success Package</h2>
                <p>Leading Exam Prep Destination with Video classes, Live sessions, Doubt resolution Forums, MCQs, Practice tests, Webinars.</p>
            </div>
            <div className="choose-us-card">
                <RiUserLocationLine size={60} color="002379" />
                <h2>Placements</h2>
                <p>Resume building workshops, mock interviews and placement drives will help you impress the top employers and get your Dream Job.</p>
            </div>
        </div>
        <ul className='why-choose-us-acca-items'>
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
    </div>
)

export default ChooseUs