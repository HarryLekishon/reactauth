import React from 'react'
import "./home.css"

function Footer() {
  return (
    <div>
        <footer id="footer">
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><i className="bx bx-chevron-right"></i> <a href="/">Home</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="/about_us">About us</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="contact">Contact Us</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="/programs">Programs</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="/gallery">Gallery</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Our Programs</h4>
                        <ul>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Rehabilitation Therapy</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">School based therapy</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">religious therapy</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">baby therapy</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">youth therapy</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-contact">
                        <h4>Contact Us</h4>
                        
                        <p> Golden Life Victors Hosptal <br/>PO BOX, 26540-00100<br/>  <br/><br/>
                            <strong>Phone:</strong>
                            +254(0) 724571997<br/> <br/><strong>Email:</strong>goldenlifeinternational.kenya@gmail.org<br/>
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-info">
                        <iframe className='float-right'
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.242091352655!2d36.8111916!3d-1.287825!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x35aa770d9b0b5e0c!2sGolden%20Life%20International!5e0!3m2!1sen!2ske!4v1666091598238!5m2!1sen!2ske"
                            width="300" height="200" style={{border:"0", marginLeft: "20px"}} allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div className="social-links mt-3"> <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a> <a href="#"
                                className="instagram"><i className="bx bxl-instagram"></i></a> <a href="#" className="linkedin"><i
                                    className="bx bxl-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright"> &copy; Copyright <strong><span>DevVE</span></strong>. All Rights Reserved </div>
            <div className="credits"> Designed by <a href="#">Sarima And Lobeku technolgies</a> </div>
        </div>
    </footer>


    </div>
  )
}

export default Footer
