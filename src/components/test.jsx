
import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
const Test = () => {
  

  return (
   
     <Container>
       <div>
      <h2>Pharmcie APROPOS </h2>
      
    </div>
     <Row>
       <Col>
         <Card>
           <Card.Body>
             <Card.Title>Welcome to Pharmacy App</Card.Title>
             <Card.Text>
               This is a pharmacy application designed to help you manage and track your medications.
             </Card.Text>
           </Card.Body>
         </Card>
       </Col>
     </Row>
     <Row>
       <Col>
         <Card>
           <Card.Body>
             <Card.Title>About Us</Card.Title>
             <Card.Text>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac turpis sit amet dui posuere tincidunt eu vel odio. Sed sodales facilisis ultrices. Mauris sit amet tincidunt neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In scelerisque aliquet finibus. In hac habitasse platea dictumst.
             </Card.Text>
           </Card.Body>
         </Card>
       </Col>
       <Col>
         <Card>
           <Card.Body>
             <Card.Title>Services</Card.Title>
             <Card.Text>
               <ul>
                 <li>Prescription management</li>
                 <li>Medication reminders</li>
                 <li>Pharmacy locator</li>
                 <li>Medication information</li>
               </ul>
             </Card.Text>
           </Card.Body>
         </Card>
       </Col>
     </Row>
   </Container>
  );
};

export default Test;
