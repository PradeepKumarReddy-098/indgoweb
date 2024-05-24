import {IoMdArrowDropdown} from 'react-icons/io'
import {IoMenu} from 'react-icons/io5'
import './index.css'

const Header = () => (
  <nav>
    <h4>
      <IoMenu /> IndigoLearn
    </h4>
    <ul className="nav-items">
      <li className="courses">
        <h4>
          BUY COURSES <IoMdArrowDropdown />
        </h4>
        <ul className="courses-list">
          <li>CA</li>
          <li>CFA</li>
          <li>ACCA</li>
          <li>CMA</li>
          <li>OTHERS</li>
        </ul>
      </li>
      <li className="programs">
        <h4>
          PROGRAMS <IoMdArrowDropdown />
        </h4>
        <ul className="program-list">
          <li>CA</li>
          <li>CFA</li>
          <li>ACCA</li>
        </ul>
      </li>
      <li className="free-resources">FREE RESOURCES</li>
    </ul>
    <button className="log-sign-btn" type="button">
      LOGIN/SIGNUP
    </button>
  </nav>
)

export default Header
