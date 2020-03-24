import React, { FC } from "react"
import { Image } from 'react-bootstrap'

  
const AboutUs: FC = () => {
    return (
      <div className="about-us-page-container">
      <div className="about-us-container">
        <Image src="/AboutUs.png" className="about-us-image"></Image>
        <Image src="/AboutUsText.png" className="about-us-text"></Image>
      </div>
   
      <div className="faq-container">
        <Image src="/FAQs.png" className="faq-image"></Image>
        <div className="faq-text">
            <p>
                Answers to your most frequestly asked questions...
            </p>
        </div>

      </div> 


      </div>
    );
}
  
export default AboutUs;