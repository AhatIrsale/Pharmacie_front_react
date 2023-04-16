import React from "react";
import { NavLink,Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../images/logop.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faGoogle, faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons";





function Header() {
  return (
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="/">
      <Link to="/home">
          <img width="70px" height="auto" className="img-responsive" src={Logo}  alt="logo" />
                    
      </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/">Accueil</Nav.Link>
          <Nav.Link href="/test">A propos</Nav.Link>
          <NavDropdown title="Contact" id="navbarScrollingDropdown">
            <NavDropdown.Item href="/pgarde">Action</NavDropdown.Item>
            <NavDropdown.Item href="/zone">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/city">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
         
        </Nav>
       
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

const Footer = () => {
  return (
    <footer  className="text-center text-lg-start text-white" style={{backgroundColor : '#45526e'}} >
    
    <div className="container p-4 pb-0">
      
      <section className="">
        
        <div className="row">
          
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Company name
            </h6>
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>
          

          <hr className="w-100 clearfix d-md-none"/>

          
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
            <p>
               <NavLink    className="text-white" to="/" >MDBootstrap  </NavLink>
            </p>
            <p>
               <NavLink    className="text-white" to="/">MDWordPress  </NavLink>
            </p>
            <p>
               <NavLink    className="text-white" to="/">BrandFlow  </NavLink>
            </p>
            <p>
               <NavLink    className="text-white" to="/">Bootstrap Angular  </NavLink>
            </p>
          </div>
          

          <hr className="w-100 clearfix d-md-none"/>

          
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6>
            <p>
               <NavLink    className="text-white" to="/">Your Account  </NavLink>
            </p>
            <p>
               <NavLink    className="text-white" to="/">Become an Affiliate  </NavLink>
            </p>
            <p>
               <NavLink    className="text-white" to="/">Shipping Rates  </NavLink>
            </p>
            <p>
               <NavLink    className="text-white" to="/">Help  </NavLink>
            </p>
          </div>

          
          <hr className="w-100 clearfix d-md-none"/>

          
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold" >Contact</h6>
            <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
        </div>
      </section>

      <hr className="my-3"/>

      
      <section className="p-3 pt-0">
        <div className="row d-flex align-items-center">
          
          <div className="col-md-7 col-lg-8 text-center text-md-start">
           
            <div className="p-3">
              © 2023 Copyright:
               <NavLink    className="text-white" to="/" > MDBootstrap.com  </NavLink>
            </div>
            
          </div>
         
          <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
            
             <NavLink    className="btn btn-outline-light btn-floating m-1 text-white" role="button" to="/" ><FontAwesomeIcon icon={faFacebookF} style={{color: "#1355c9",}} ></FontAwesomeIcon>  </NavLink>

           
             <NavLink    className="btn btn-outline-light btn-floating m-1 text-white" role="button" to="/" >  <FontAwesomeIcon icon={faGoogle} style={{color: "#1355c9",}} ></FontAwesomeIcon>    </NavLink>

            
             <NavLink    className="btn btn-outline-light btn-floating m-1 text-white" role="button" to="/">  <FontAwesomeIcon icon={faTwitter} style={{color: "#1355c9",}} ></FontAwesomeIcon>    </NavLink>

             <NavLink    className="btn btn-outline-light btn-floating m-1 text-white" role="button" to="/" ><FontAwesomeIcon icon={faInstagram} style={{color: "#1355c9",}} ></FontAwesomeIcon>    </NavLink>
          </div>
        </div>
      </section>
    </div>
  </footer>
  );
};

export { Header, Footer };