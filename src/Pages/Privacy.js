import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import '../css/style.css';
import '../css/bootstrap.min.css';

const Privacy = () => {
  return (
    <>
    <NavBar />
    <div className="container-fluid tm-container-content tm-mt-60">
            <div class="row mb-4 tm-mb-74 tm-row-1640 ml-5 mr-5">
            <h2 class="col-12 tm-text-primary mb-4"> Privacy Policy of CodeGuruTutorials</h2>
               <p class="col-12 text-secondary">
               At CodeGuruTutorials, we value the privacy of our visitors. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website. By using our website, you agree to the terms of this Privacy Policy.
                <h4 class="col-12 mb-2 mt-2">Information Collection and Use</h4>
                We may collect personal information such as your name, email address, phone number, and any other information you provide voluntarily. 
                This information is used to improve our website, provide customer service, and deliver updates and promotional content.
                <h4 class="col-12 mb-2 mt-2">Log Files and Cookies</h4>
                Like many websites, we use log files and cookies to gather non-personal information, such as IP addresses, browser types, and the pages you visit. 
                This data helps us analyze trends, administer the site, and personalize your browsing experience.
                <h4 class="col-12 mb-2 mt-2">Advertising Partners and Third Parties</h4>
                Some third-party advertising partners may use cookies and similar technologies to display personalized ads. We have no control over these cookies and 
                recommend reviewing the respective Privacy Policies of these advertisers for more information.
                <h4 class="col-12 mb-2 mt-2">Your Rights</h4>
                Under the CCPA and GDPR, you can access, correct, or delete your data. You can also request that we restrict or stop processing your information. 
                To exercise any of these rights, please contact us.
                <h4 class="col-12 mb-2 mt-2">Content Liability</h4>
                We are not responsible for any content that appears on external websites linking to our site. You agree 
                to defend and protect us against any claims arising from the content displayed on your website that links to CodeGuruTutorials.
                Privacy
                Please read our Privacy Policy to understand how we handle your personal information.
                <h4 class="col-12 mb-2 mt-2">Children’s Information</h4>
                We do not knowingly collect personal information from children under 13. If you believe your child has provided such information on our website, 
                please get in touch with us, and we will promptly remove it from our records.
                <h4 class="col-12 mb-2 mt-2">Contact Us</h4>
                Please <a href='/contact'>contact us</a> if you have any questions or need further information about our Privacy Policy.</p>
            </div>
            </div>
    <Footer />
    </>
  )
}

export default Privacy