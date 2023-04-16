import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link,NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../index.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';



const ZoneByCity = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [zones, setZones] = useState([]);
  const [cities, setCities] = useState([]);
  const [pharma, setpharma] = useState([]);
  const [selectedzone, setSelectedzone] = useState("");
  const [selectedCityNom, setSelectedCityNom] = useState("");
  const [selectedpharma, setselectedpharma] = useState("");

 

  useEffect(() => {
    axios.get("api/villes").then((response) => {
      setCities(response.data);
    });
  }, []);

  const handleCityChange = (event) => {
    const cityNom = event.target.value;
    setSelectedCityNom(cityNom);

    axios.get(`api/villes/${cityNom}/zones`).then((response) => {
      setZones(response.data);
    });
  };
  const handlezoneChange = (event) => {
    const zoneNom = event.target.value;
    setSelectedzone(zoneNom);

    
  };
  
  const handlePharmacieChange = (event) => {
    const pharNom = event.target.value;
    setselectedpharma(pharNom);

    axios.get(`/api/villes/ville/zones/${selectedzone}/pharmacies/garde/${pharNom}`).then((response) => {
      setpharma(response.data);
    });
  };

 


  return (
    <div>
      <h2>Zone par ville</h2>

      <div className="form-group">
        <label htmlFor="cityId">Select a city:</label>
        <select
          className="form-control"
          id="cityId"
          value={selectedCityNom}
          onChange={handleCityChange} >
          <option value="">All cities</option>
          {cities.map((city) => (
            <option key={city.nom} value={city.nom}>
              {city.nom}
            </option>
          ))}
        </select>
        </div>


        <div className="form-group">
        <label htmlFor="cityId">Select a zone:</label>
        <select
          className="form-control"
          id="zoneId"
          value={selectedzone}
          onChange={handlezoneChange} 
        >
           <option value="">All zones</option>
          {zones.map((zone) => (
            <option key={zone.nom} value={zone.nom}>
              {zone.nom}
            </option>
          ))}
        </select>
      </div>


      <div className="form-group">
        <label htmlFor="TypeId">Select Type Garde:</label>
        <select
          className="form-control"
          id="cityId"
          value={selectedpharma}
          onChange={handlePharmacieChange}>
           <option key="Jour" value="Jour">Jour</option>
           <option key="Nuit"  value="Nuit">Nuit</option>
        </select>
      </div>


      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {pharma.map((p) => (
            <tr key={p.id}>
              <td>{p.nom}</td>
              <td>
              {/* <Link to="/details" > Details </Link> */}
              <Link variant="primary" onClick={handleShow} > Details </Link>
             
              <>
   

    <Modal
      show={show}
      onHide={handleClose}
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{p.nom}</Modal.Title>
      </Modal.Header>
      <Modal.Body >
      <MDBContainer className="py-5 h-200">
        <MDBRow className="justify-content-center align-items-center h-300">
          <MDBCol lg="12" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src="https://img.freepik.com/vecteurs-libre/logos-pharmacie-mis_1198-60.jpg"
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                  <MDBTypography tag="h5">{p.nom}</MDBTypography>
                  <MDBCardText>{selectedCityNom} - {selectedzone}</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">l'attitude</MDBTypography>
                        <MDBCardText className="text-muted">{p.laltitude}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">L'ongitude</MDBTypography>
                        <MDBCardText className="text-muted">{p.longitude}</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6">other Informatons</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        
                        
                        <MDBTypography tag="h6">Open at:</MDBTypography>
                        <MDBCardText className="text-muted">00:00:00</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">close at:</MDBTypography>
                        <MDBCardText className="text-muted">00:00:00</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <div className="d-flex justify-content-start">

                   <NavLink    className="btn btn-outline-light btn-floating m-1 text-white" role="button" to="" ><FontAwesomeIcon icon={faFacebookF} style={{color: "#1355c9",}} ></FontAwesomeIcon>  </NavLink>
                   <NavLink    className="btn btn-outline-light btn-floating m-1 text-white" role="button" to="">  <FontAwesomeIcon icon={faTwitter} style={{color: "#1355c9",}} ></FontAwesomeIcon>    </NavLink>
                   <NavLink    className="btn btn-outline-light btn-floating m-1 text-white" role="button" to="/" ><FontAwesomeIcon icon={faInstagram} style={{color: "#1355c9",}} ></FontAwesomeIcon>    </NavLink>
                      
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">Understood</Button>
      </Modal.Footer>
    </Modal>
  </>
  </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ZoneByCity;
