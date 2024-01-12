import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
        <footer className="footer-bg p-4 mt-5">
            <div className="container-xxl">
                <div className="row custom-row">
                    {/* Section 1 */}
                    <div className="col-md-3 custom-column">
                        <p className="h125">Oshani D</p>
                        <p className="text-white">Sri Lanka’s No 01 Online Store. You can never go wrong with us! Explore the most stunning designs, sure to grab anyone's attention. Shop Online and get delivered right to your doorstep.</p>
                        <div>
                            <input type="text" className="form-control" placeholder="Enter your email" />
                            <button className="btn form-control btn-subscribe mt-2" type="button">Subscribe</button>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="col-md-3 custom-column px-4">
                        <h5 className="text-white mt-2">Information</h5>
                        <p><Link to="/privacy-policy" className="text-white mt-4">Privacy Policy</Link></p>
                        <p><Link to="/refund-policy" className="text-white">Refund Policy</Link></p>
                        <p><Link to="/shipping-policy" className="text-white">Shipping Policy</Link></p>
                        <p><Link to="/term-conditions" className="text-white">Terms & Conditions</Link></p>
                    </div>

                    {/* Section 3 */}
                    <div className="col-md-3 custom-column px-4">
                        <h5 className="text-white mt-2">Quick Links</h5>
                        <p><Link to="/" className="text-white mt-4">About Us</Link></p>
                        <p><Link to="/" className="text-white">Shop Now</Link></p>
                        <p><Link to="/" className="text-white">FAQ</Link></p>
                        <p><Link to="/" className="text-white">Contact</Link></p>
                    </div>

                    {/* Section 4 */}
                    <div className="col-md-3 custom-column">
                        <h5 className="text-white mt-2">Get in Touch</h5>
                        <p className="text-white mt-4">Visit us at Colombo City Centre</p>
                        <p className="text-white">Visit us at Kandy City Centre</p>
                        <p className="text-white">Hotline: (+94) 112 751 234</p>
                        <p className="text-white">Email: info@oshanid.com</p>
                    </div>
                </div>
            </div>
        </footer>
    </>
  );
};

export default Footer;
