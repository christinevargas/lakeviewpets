import React, { FC } from "react"
import { Image, Accordion, Card } from 'react-bootstrap'

  
const AboutUs: FC = () => {
    return (
      <div className="about-us-page-container">
      <div className="about-us-container">
        <Image src="/AboutUs.png" className="about-us-image"></Image>
        <Image src="/AboutUsText.png" className="about-us-text"></Image>
      </div>
   
      <div className="faq-container">
        <div className="faq-text">
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    1. How can I adopt a pet?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>In order to adopt a pet from Lakeview Pets, you must:
                                <div>o	Be at least 18 years old</div>
                                <div>o	Have a government-issued photo ID, such as a driver’s license or state ID</div>
                                <div>o	Submit one Adoption Form for each pet being adopted</div>
                                <div>o	Verify that you are allowed to have a pet of the species and size where you currently reside</div>
                                <div>o	Be able to take the pet home on the day of adoption</div>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                    2. What types of animals do you have available for adoption?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>Lakeview Pets is currently home to various dogs, cats, birds, and bunnies. They range in breeds, sizes, and personalities. However, they are all looking forever homes!</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                    3. What are the adoption fees?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>The adoption fee is $50/pet. Keep an eye out for special events where we may discount or even waive the adoption fee entirely!</Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                    4. What is the Lakeview Pets guarantee?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                    <Card.Body>Each of our pets come with the Lakeview Guarantee. We guarantee that your new pet will be 110% healthy, having received all recommended vaccinations and care. We ask that you take your new friend to a veterinarian within 48 hours of taking them home for a checkup to verify their health and wellbeing. If the vet professional finds any health defects, we will gladly accept the pet and refund the adoption fee. </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="5">
                    5. What is the return policy?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                    <Card.Body>We understand that circumstances change. While our adoption fee is nonrefundable, we do ask that if you find yourself unable to care for your new friend, that you return them to our location, no questions asked. </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="6">
                    6. Where are you located?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6">
                    <Card.Body>
                        <div>You can find us at the corner of Broadway & Wellington in Lakeview East! While we don't have parking, we are a 10-minute walk from the Brown and Purple CTA lines.</div>
                        <div>Here's our address: </div>
                        <div>123 W Wellington Ave</div>
                        <div>Chicago, IL 60657</div>
                       
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="7">
                    7. What are your hours? Are walk-ins welcome?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="7">
                    <Card.Body>We are open 7 days a week and walk-ins are always welcome. 
                        <div>Monday: 12pm-8pm</div>
                        <div>Tuesday: 12pm-8pm</div>
                        <div>Wednesday: 12pm-8pm</div>
                        <div>Thursday: 12pm-8pm</div>
                        <div>Friday: 12pm-8pm</div>
                        <div>Saturday: 8am-7pm</div>
                        <div>Sunday: 9am-6pm</div>

                        <div>*Please note: We are closed to the public M-F from 7am-11:30am but we are open to volunteers during these times. To become a volunteer or for more information, please email info@lakeviewpets.com.</div>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="8">
                    8. Unfortunately, my question wasn't answered. Where can I get more info?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="8">
                    <Card.Body>Please feel free to send us an email at info@lakeviewpets.com or give us a call at (312) 312-3123. Please allow 24 hours for an email or phone response.</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
          </div>
          <Image src="/FAQs.png" className="faq-image"></Image>
        </div>
      </div>
    );
}
  
export default AboutUs;