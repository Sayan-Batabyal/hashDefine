import React from 'react';
import {Link} from 'react-router-dom';
import Images from './assets/images/images';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="navbar">
                        <img className="logo" src={Images.ethereumIcon} alt="ethereum icon"/>
                        <nav>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="#">Certification</Link></li>
                                <li><Link to="#">About</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                            </ul>
                        </nav>
                        <Link to="/login"><img className="user" src={Images.userIcon} alt="user icon"/></Link>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h1>Verifiable <span className="certi">Certificates</span> are the New Big Thing!</h1>
                            <p>With <strong><i><span className="company">hashDefine</span></i></strong>, Save and Share
                            Your Certificates With Zero Hassle</p>
                            <Link to="/"><button className="explore" type="button">Explore</button></Link>
                            <Link to="/uploadCertificate"><button className="verify" type="button">Get Verified</button></Link>
                        </div>
                        <div className="col">
                            <div className="card card1">
                                <p>Secure Storage</p>
                            </div>
                            <div className="card card2">
                                <p>Analysis</p>
                            </div>
                            <div className="card card3">
                                <p>Easy Save</p>
                            </div>
                            <div className="card card4">
                                <p>Industrial Value</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Home;