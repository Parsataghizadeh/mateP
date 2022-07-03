import { React, useState } from 'react'
import './Footer.css'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import EndF from './EndF'
import { Link, useHistory } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Footer() {
const [{ user }, dispatch] = useStateValue();
    const handleAuthenticaton = () => {
      if (user) {
        auth.signOut();
      }
    }
  return (
    <div className='footer' id='con'>
      <div className="footerRap">
      <Container>
        <Row>
            <Col xs={12} sm={12} lg={6}>
                <div className="contactUs">
                    <h3 className="footerH3">
                        <b>Contact With Us</b>
                    </h3>
                    <div className="footerAddress">
                      <p>Centerville Road, DE 19808, US </p>
                      <p class="phone">Mate Phone: <span>(+98 910 457 8373)</span></p>
                      <p class="email">Your E-mail: <span>({!user ? "Empty" : user.email})</span></p>
                    </div>
                    <div className="footerIcon">
                        <ul>
                            <li className='fac' data-tip='Facebook'><a href="url"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg></a></li>
                            <li className='twi' data-tip='Twitter'><a href="url"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></a></li>
                            <li className='goo' data-tip='Google'><a href="url"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8-34.4 23-78.3 36.6-129.9 36.6-99.9 0-184.4-67.5-214.6-158.2-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1 56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100-149.9 0-279.6 86-342.7 211.4-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93 72.5-66.8 114.4-165.2 114.4-282.1 0-27.2-2.4-53.3-6.9-78.5z"></path></svg></a></li>
                            <li className='lin' data-tip='Linkedin'><a href="url"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg></a></li>
                            <li className='ins' data-tip='Instagram'><a href="url"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"></path></svg></a></li>
                        </ul>
                    </div>
                    <div className="SI d-grid gap-2">
                     <Link to={!user && "/login"}>
                      <button onClick={handleAuthenticaton}><b>{user ? "Sign Out" : "Sign In"}</b></button>
                     </Link>
                    </div>
                </div>
            </Col>
            <Col xs={12} sm={12} lg={6}>
                <div className="contactBlock">
                   <form action="" id="footerForm">
                     <Row>
                        <Col md={12}>
                            <div className="formG">
                                <input type="text" className='nameIN' placeholder='Your Name' required />
                                <div className="eerr">
                                    <ul>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className="formG">
                                <input type="email" className='nameIN' placeholder='Your Email' required />
                                <div className="eerr">
                                    <ul>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className="formG">
                                <textarea name="" id="" cols="30" rows="5" className='nameIN' placeholder='Your Message' required></textarea>
                                <div className="eerr">
                                    <ul>
                                        <li></li>
                                    </ul>
                                </div>
                                <div class="submit-button text-center">
                                  <button>SEND MESSAGE</button>
                                </div> 
                            </div>
                        </Col>
                     </Row>
                   </form> 
                </div>
            </Col>
        </Row>
      </Container>
      </div>
      <EndF/>
      <ReactTooltip/>
    </div>
  )
}

export default Footer