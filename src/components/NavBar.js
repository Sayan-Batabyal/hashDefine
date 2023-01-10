import React from "react";
import {Link} from 'react-router-dom';
import Images from './assets/images/images';

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <img className="logo" src={Images.ethereumIcon} alt="ethereum icon" />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#">Certification</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <Link to="/login">
          <img className="user" src={Images.userIcon} alt="user icon" />
        </Link>
      </div>
    );
  }
}
export default NavBar;
