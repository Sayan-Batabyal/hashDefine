import React from 'react';
import {Link} from 'react-router-dom';
import Images from './assets/images/images';
import Icons from './assets/icons/icons';
import './Contact.css';
import NavBar from './NavBar';

class Contact extends React.Component {
    render() {
        return (
                <div className="container">
                    <NavBar />
                    <div className="containment">
                        <div className="contactInfo">
                            <div>
                                <h2>Contact Info</h2>
                                <ul className="info">
                                    <li>
                                        <span><img src={Icons.location} alt="location" /></span>
                                        <span>
                                            HashDefine<br/>
                                            Jalandhar, Punjab<br/>
                                            144402
                                        </span>
                                    </li>
                                    <li>
                                        <span><img src={Icons.email} alt="email" /></span>
                                        <span>hashdefinelpu@gmail.com</span>
                                    </li>
                                    <li>
                                        <span><img src={Icons.phone} alt="phone" /></span>
                                        <span>+91-8700000000</span>
                                    </li>
                                </ul>
                            </div>
                            {/* <ul className="sci">
                                <li>
                                    <img src={Icons.facebook} style="width: 25px; height: 25px" alt="facebook" />
                                </li>
                                <li>
                                    <img src={Icons.instagram} style="width: 25px; height: 25px" alt="insta" />
                                </li>
                                <li>
                                    <img src={Icons.twitter} style="width: 33px; height: 33px" alt="twitter"/>
                                </li>
                                <li>
                                    <img src={Icons.youtube} style="width: 30px; height: 30px" alt="youtube"/>
                                </li>
                                <li>
                                    <img src={Icons.linkedin} style="width: 25px; height: 25px" alt="linkedin"/>
                                </li>
                            </ul> */}
                        </div>
                        <div className="contactForm">
                            <h2>Send a Message</h2>
                            <form method="POST">
                            <div className="formBox" style={{marginRight: '10%'}}>
                                <div className="inputBox w50">
                                    <input type="text" name="First Name" required />
                                    <span>First Name</span>
                                </div>
                                <div className="inputBox w50">
                                    <input type="text" name="Last Name" required />
                                    <span>Last Name</span>
                                </div>
                                <div className="inputBox w50">
                                    <input type="email" name="Email" required />
                                    <span>Email</span>
                                </div>
                                <div className="inputBox w50">
                                    <input type="tel" name="Mobile Number" required />
                                    <span>Mobile Number</span>
                                </div>
                                <div className="inputBox w100">
                                    <textarea required name="Message"></textarea>
                                    <span>Write Your Message Here</span>
                                </div>
                                <div className="inputBox w100">
                                    <input type="submit" name="submit" value="Send" />
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
        )
    }
}
export default Contact;