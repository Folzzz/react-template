import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../button/Button'

import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-subscribe">
                <h4 className="footer-subscribe-header">
                    Join the Adventure newsletter to receive our best vacation deals.
                </h4>
                <p className="footer-subscribe-text">You can unsubscribe at any time</p>
                <div className="footer-subscribe-form">
                    <form>
                        <input type="email" name="email" id="email"/>
                        <Button buttonStyle="btn--primary">Subscribe</Button>
                    </form>
                </div>
            </div>

            <div className="footer-links-container">
                <div className="footer-links-wrapper">
                    <div>
                        <h2>About Us</h2>
                        <ul>
                            <li>
                                <Link to="/services">How It Works</Link>
                            </li>
                            <li>
                                <Link to="/services">Testimonial</Link>
                            </li>
                            <li>
                                <Link to="/services">Careers</Link>
                            </li>
                            <li>
                                <Link to="/services">Investors</Link>
                            </li>
                            <li>
                                <Link to="/services">Terms of Service</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2>Contact Us</h2>
                        <ul>
                            <li>
                                <Link to="/products">Support</Link>
                            </li>
                            <li>
                                <Link to="/products">Contact</Link>
                            </li>
                            <li>
                                <Link to="/products">Destination</Link>
                            </li>
                            <li>
                                <Link to="/products">Sponsorship</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-links-wrapper">
                    <div>
                        <h2>About Us</h2>
                        <ul>
                            <li>
                                <Link to="/services">How It Works</Link>
                            </li>
                            <li>
                                <Link to="/services">Testimonial</Link>
                            </li>
                            <li>
                                <Link to="/services">Careers</Link>
                            </li>
                            <li>
                                <Link to="/services">Investors</Link>
                            </li>
                            <li>
                                <Link to="/services">Terms of Service</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2>Contact Us</h2>
                        <ul>
                            <li>
                                <Link to="/products">Support</Link>
                            </li>
                            <li>
                                <Link to="/products">Contact</Link>
                            </li>
                            <li>
                                <Link to="/products">Destination</Link>
                            </li>
                            <li>
                                <Link to="/products">Sponsorship</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                <p> Copyright &copy; 2021</p>
            </div>
        </footer>
    )
}

export default Footer
