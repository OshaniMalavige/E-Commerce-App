import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
        <footer className="bg-light p-4 mt-5">
            <div className="container-xxl">
                <div className="row custom-row">
                    {/* Section 1 */}
                    <div className="col-md-3 custom-column">
                        <p className="h125">Oshani D</p>
                        <p>Sri Lanka’s No 01 Online Store. You can never go wrong with us! Explore the most stunning designs, sure to grab anyone's attention. Shop Online and get delivered right to your doorstep.</p>
                        <div>
                            <input type="text" className="form-control" placeholder="Enter your email" />
                            <button className="btn form-control btn-outline-primary mt-2" type="button">Subscribe</button>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="col-md-3 custom-column px-4">
                        <h5>Information</h5>
                        <p><Link to="/privacy-policy">Privacy Policy</Link></p>
                        <p><Link to="/refund-policy">Refund Policy</Link></p>
                        <p><Link to="/shipping-policy">Shipping Policy</Link></p>
                        <p><Link to="/term-conditions">Terms & Conditions</Link></p>
                    </div>

                    {/* Section 3 */}
                    <div className="col-md-3 custom-column px-4">
                        <h5>Quick Links</h5>
                        <p><Link to="/">About Us</Link></p>
                        <p><Link to="/">Shop Now</Link></p>
                        <p><Link to="/">FAQ</Link></p>
                        <p><Link to="/">Contact</Link></p>
                    </div>

                    {/* Section 4 */}
                    <div className="col-md-3 custom-column">
                        <h5>Get in Touch</h5>
                        <p>Visit us at Colombo City Centre</p>
                        <p>Visit us at Kandy City Centre</p>
                        <p>Hotline: (+94) 112 751 234</p>
                        <p>Email: info@oshanid.com</p>
                    </div>
                </div>
            </div>
        </footer>
    </>
  );
};

export default Footer;
