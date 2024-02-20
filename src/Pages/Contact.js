import React, { useEffect } from 'react';
import $ from 'jquery';
import '../css/style.css';
import '../css/bootstrap.min.css';
import '../fontawesome/css/all.min.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import heroImage from '../img/hero.jpg';
import me from '../img/me.jpg';
import { Parallax} from 'react-parallax';

const Contact = () => {
  const loader = () => {
    $(window).on("load", function() {
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
      <div className="loader-section section-left"></div>
      <div className="loader-section section-right"></div>
    </div>

    <NavBar />

    <Parallax bgImage={heroImage} strength={500}>
        <div className="tm-hero d-flex justify-content-center align-items-center" data-parallax="scroll">
    </div>
    </Parallax>

    <div className="container-fluid tm-mt-60">
        <div className="row tm-mb-50">
            <div className="col-lg-4 col-12 mb-5">
                <h2 className="tm-text-primary mb-5">Contact Us</h2>
                <form id="contact-form" action="" method="POST" className="tm-contact-form mx-auto">
                    <div className="form-group">
                        <input type="text" name="name" className="form-control rounded-0" placeholder="Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" className="form-control rounded-0" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                        <select className="form-control" id="contact-select" name="inquiry">
                            <option value="-">Support</option>
                            <option value="aboutTutorials">About Tutorials</option>
                            <option value="needHelp">Need Help</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <textarea rows="8" name="message" className="form-control rounded-0" placeholder="Message" required></textarea>
                    </div>
                    <div className="form-group tm-text-right">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>                
            </div>
            <div className="col-lg-4 col-12 mb-5">
                <div className="tm-address-col">
                    <h2 className="tm-text-primary mb-5">Our Address</h2>
                    <p className="tm-mb-50"> Our company is located in a very astounding place. It is known for its scenic surroundings and is part of the vibrant city of Varna, offering a mix of residential and recreational areas. </p>
                    <p className="tm-mb-50">Situated near notable landmarks, our office is easily identifiable, providing convenience for visitors and clients. Feel free to contact us for any inquiries or visit our website for more information.</p>
                    <address className="tm-text-gray tm-mb-50">
                       Working hours: 9:00 to 17:00 Mon-Fr.<br />
                    </address>
                    <ul className="tm-contacts">
                        <li>
                            <a href="/" className="tm-text-gray">
                                <i className="fas fa-envelope"></i>
                                Email: codegurututorials@company.com
                            </a>
                        </li>
                        <li>
                            <a href="/" className="tm-text-gray">
                                <i className="fas fa-phone"></i>
                                Tel: +359890000000
                            </a>
                        </li>
                        <li>
                            <a href="/" className="tm-text-gray">
                                <i className="fas fa-globe"></i>
                                URL: https://codegurututorials.com
                            </a>
                        </li>
                    </ul>
                </div>                
            </div>
            <div className="col-lg-4 col-12">
                <h2 className="tm-text-primary mb-5">Our Location</h2>
              
                <div className="mapouter mb-4">
                    <div className="gmap-canvas">
                        <iframe width="100%" height="520" id="gmap-canvas"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3092.936378117224!2d27.933562006431444!3d43.20472923827141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a455089441c669%3A0x57d5523015b297c5!2s9002%20Primorski%2C%20Varna!5e0!3m2!1sen!2sbg!4v1704234457703!5m2!1sen!2sbg"
                            frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                </div>               
            </div>
        </div>
        <div className="row tm-mb-74 centered " style={{backgroundColor:'#EEEEEE'}}>
            <div className="col col-lg-4 col-md-4 mb-4 mt-5">
                <img src={me} alt="Image" className="row mb-4 img-fluid border-animation img"  />
                </div>
                <div className="col-lg-4 col-md-4 mb-5 mt-4">
                <h2 className="tm-text-primary mb-4">Kookiez</h2>
                <h3 className="tm-text-secondary h5 mb-4">Developer</h3>
                <p className="mb-4">
                With a knack for blending aesthetics and functionality, 
                our creator has meticulously designed an online experience 
                that reflects innovation, user-centricity, and a commitment to 
                quality.
                Explore our digital space, a testament 
                to the dedication and talent
                 of our visionary developer.
                </p>
                <ul className="tm-social pl-0 mb-0">
                    <li><a href="https://facebook.com"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="https://github.com/kookiezwthtea"><i class="fab fa-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/sahem-alieva-00397a254/"><i className="fab fa-linkedin"></i></a></li>
                </ul>
                </div>
                </div>
            </div>
        
    <Footer />
    </>
  )
}

export default Contact