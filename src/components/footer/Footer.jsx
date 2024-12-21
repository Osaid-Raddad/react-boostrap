import React from 'react'
import './footer.css'
export default function Footer() {
    return (
        <footer className="footer  text-white">
            <div className="container">
                <div className="row text-center">

                    <div className="col-md-4 mb-4">
                        <h5 className="f-h fw-bold">LOCATION</h5>
                        <p>
                            2215 John Daniel Drive
                            <br />
                            Clark, MO 65243
                        </p>
                    </div>


                    <div className="col-md-4 mb-4">
                        <h5 className="f-h fw-bold">AROUND THE WEB</h5>
                        <div className="d-flex justify-content-center gap-3">
                            <a href="#" className="social-link">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="social-link">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="social-link">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" className="social-link">
                                <i className="fab fa-dribbble"></i>
                            </a>
                        </div>
                    </div>


                    <div className="col-md-4 mb-4">
                        <h5 className="f-h fw-bold">ABOUT FREELANCER</h5>
                        <p>
                            Freelance is a free to use, MIT licensed Bootstrap theme created
                            by <a href="https://startbootstrap.com" className="boot">Start Bootstrap</a>.
                        </p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom text-center  py-3">
                <p className="mb-0">Copyright © Your Website 2023</p>
            </div>
        </footer>

    )
}
