import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div><footer class="tm-bg-gray pt-5 pb-3 tm-text-gray tm-footer">
            <div class="container-fluid tm-container-small">
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-12 px-5 mb-5">
                        <h3 class="tm-text-primary mb-4 tm-footer-title">About CodeGuruTutorials</h3>
                        <p>Empowering developers with comprehensive tutorials in JavaScript,
                            React, and frontend technologies, CodeGuruTutorials is your go-to
                            resource for mastering coding skills and staying ahead in the dynamic world of web development.</p>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 col-12 px-5 mb-5">
                        <h3 class="tm-text-primary mb-4 tm-footer-title">Our Links</h3>
                        <ul class="tm-footer-links pl-0">
                            <Link to={`/contact`} class='tm-text-gray text-decoration-none'>
                                <li >Support</li>
                            </Link>
                            <Link to={`/about`} class='tm-text-gray text-decoration-none'>
                            <li >Our Company</li>
                            </Link>
                            <Link to={`/contact`} class='tm-text-gray text-decoration-none'>
                            <li>Contact</li>
                            </Link>
                            
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 col-12 px-5 mb-5">
                        <ul class="tm-social-links d-flex justify-content-end pl-0 mb-5">
                            <li class="mb-2"><a href="https://facebook.com"><i class="fab fa-facebook"></i></a></li>
                            <li class="mb-2"><a href="https://twitter.com"><i class="fab fa-twitter"></i></a></li>
                            <li class="mb-2"><a href="https://instagram.com"><i class="fab fa-instagram"></i></a></li>
                            <li class="mb-2"><a href="https://pinterest.com"><i class="fab fa-pinterest"></i></a></li>
                        </ul>
                        <Link to={`/terms`} class="tm-text-gray text-right d-block text-decoration-none">
                            Terms of Use
                            </Link>
                        <Link to={`/privacy`} class="tm-text-gray text-right d-block text-decoration-none">
                            Privacy
                            </Link>
                       
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 col-md-7 col-12 px-5 mb-3">
                        Copyright 2024 CodeGuruTutorials. All rights reserved.
                    </div>
                    <div class="col-lg-4 col-md-5 col-12 px-5 text-right">
                        Made by Kookiez ❤️
                    </div>
                </div>
            </div>
        </footer></div>
    )
}

export default Footer