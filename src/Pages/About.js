import React, { useEffect } from 'react';
import $ from 'jquery';
import '../css/style.css';
import '../css/bootstrap.min.css';
import '../fontawesome/css/all.min.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from '../img/about.png';
import heroImage from '../img/hero.jpg';
import { Parallax } from 'react-parallax';

const about = () => {
    const loader = () => {
        $(window).on("load", function () {
            $('body').addClass('loaded');
        });
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        loader();
    }, []);

    return (
        <>
            <div id="loader-wrapper">
                <div id="loader"></div>
                <div class="loader-section section-left"></div>
                <div class="loader-section section-right"></div>
            </div>
            <NavBar />
            <Parallax bgImage={heroImage} strength={500}>
                <div className="tm-hero d-flex justify-content-center align-items-center" data-parallax="scroll">
                </div>
            </Parallax>
        <div>
            <div class="row mb-4 tm-mb-74 tm-row-1640 ml-5 mr-5">
                <h2 class="col-12 tm-text-primary mt-5 ml-5 mr-5">
                    About CodeGuruTutorials
                </h2>
            </div>
            <div class="row tm-mb-74 tm-row-1640 ml-5 mr-5">
                <div class="col-lg-5 col-md-6 col-12 mb-3">
                    <img src={About} alt="Image" class="img-fluid" />
                </div>
                <div class="col-lg-6 col-md-6 mr-5 lead">
                    <div class="tm-about-img-text">
                    At CodeGuruTutorials, we are passionate about empowering individuals 
                    with the knowledge and skills to excel in the world of web development. 
                    Our website serves as a hub for JavaScript and React tutorials, providing 
                    comprehensive and beginner-friendly guides.<br /> <br /> Whether you're a coding enthusiast 
                    or a seasoned developer, we're here to simplify the learning process and foster 
                    a community that thrives on continuous growth and expertise in JavaScript and React. <br /> <br />
                        <p>Join us on this coding journey, and let's build a strong foundation together for a successful and 
                        fulfilling career in web development 🚀</p>
                    </div>
                </div>
            </div>
            </div>
            <div class="row tm-mb-74 tm-row-1640 ml-5 mr-5">
                <div class="col-md-6 ">
                    <div class="tm-about-2-col">
                        <h2 class="tm-text-primary mb-4">
                            Our Mission
                        </h2>
                        <p class="mb-4">
                        At CodeGuruTutorials, our mission is to empower aspiring and seasoned developers alike by providing high-quality, accessible, 
                        and engaging tutorials in JavaScript and React. We believe in making complex concepts simple, fostering a supportive learning 
                        community, and helping individuals build the skills needed to thrive in the ever-evolving world of web development.
                        </p>
                        <p>
                        Our commitment is 
                        to inspire, educate, and create a platform where every coder can elevate their proficiency and confidence on their coding journey. Join 
                        us as we make learning JavaScript and React an enjoyable and rewarding experience for everyone.
                        </p>
                    </div>
                </div>
                <div class="col-md-6 col-12">
                    <div class="tm-about-2-col">
                        <h2 class="tm-text-primary mb-4">
                            Our Plans
                        </h2>
                        <p class="mb-4">
                        In the future, we envision enhancing our tutorial library with more advanced topics, exploring emerging technologies in the 
                        web development landscape, and incorporating interactive learning experiences. Our goal is to evolve alongside the dynamic field 
                        of Computer Science ensuring that our users stay ahead of the curve.
                        </p>
                        <p>
                        We also plan to introduce community forums, and collaborative projects, fostering a vibrant space for knowledge exchange and skill development. Stay tuned as we work 
                        towards creating an even more enriching and comprehensive learning platform for web developers.
                        </p>
                    </div>
                </div>
            </div>
            <h2 className='tm-text-primary centered mb-5'>User Reviews</h2>
            <div class="row tm-mb-50 ml-5 mr-5">
                <div class="col-md-4 col-12">
                    <div class="tm-about-3-col">
                        <div class="tm-about-icon-container mb-5">
                            <i class="fas fa-user fa-3x  text-success"></i>
                        </div>
                        <h3 class="tm-text-primary mb-4">Incredible Learning Experience!</h3>
                        <p class="mb-4">"I stumbled upon this website while learning React, and it has transformed my coding journey. The tutorials are clear, concise, and beginner-friendly. Thank you for making complex concepts so accessible!" </p>
                        <p>Reviews: ⭐⭐⭐⭐⭐</p>
                    </div>
                </div>
                <div class="col-md-4 col-12">
                    <div class="tm-about-3-col">
                        <div class="tm-about-icon-container mb-5">
                            <i class="fas fa-user fa-3x tm-text-primary"></i>
                        </div>
                        <h3 class="tm-text-primary mb-4">Transformative Learning Platform!</h3>
                        <p class="tm-mb-50">"I can't express how grateful I am for the tutorials on this site. They've transformed my understanding of JavaScript and React. The interactive lessons make learning a breeze. Keep up the fantastic work!"</p>
                        <p>Reviews: ⭐⭐⭐⭐⭐</p>
                    </div>
                </div>
                <div class="col-md-4 col-12">
                    <div class="tm-about-3-col">
                        <div class="tm-about-icon-container mb-5">
                            <i class="fas fa-user fa-3x tm-text-secondary"></i>
                        </div>
                        <h3 class="tm-text-primary mb-4">Perfect for Beginners!</h3>
                        <p class="mb-4">"As a beginner, CodeGuruTutorials has been my go-to resource for learning JavaScript and React. The clear explanations and real-world examples have made complex concepts understandable.
                         Highly recommended for anyone starting their journey in web development!"</p>
                        <p>Reviews: ⭐⭐⭐⭐⭐</p>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default about