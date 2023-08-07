import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {IoMdClose} from 'react-icons/io'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <nav className="navbar">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button className="btn" type="button" data-testid="hamburgerIconButton">
          <GiHamburgerMenu className="icon" />
        </button>
      }
      className="home"
    >
      {close => (
        <div className="home">
          <button
            className="closeBtn"
            type="button"
            data-testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose size="35" color="#616e7c" />
          </button>
          <ul className="icons-containers">
            <li className="nav-link-item">
              <Link className="nav-link" to="/" onClick={() => close()}>
                <AiFillHome size="35" />
                <p>Home</p>
              </Link>
            </li>
            <li className="nav-link-item">
              <Link className="nav-link" to="/about" onClick={() => close()}>
                <BsInfoCircleFill size="35" />
                <p>About</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Popup>
  </nav>
)

export default withRouter(Header)
