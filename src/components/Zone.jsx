import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const Zone = () => {
    //Test Numero 1 Pour Zone
  const [zones, setZones] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [villes, setVilles] = useState([]);
  const [zoneData, setZoneData] = useState({
    id: null,
    nom: '',
    ville: null,
  });


  
  const fetchZones = async () => {
    try {
      const [zonesResponse, villesResponse] = await Promise.all([
        axios.get('/api/zones'),
        axios.get('/api/villes')
      ]);
      setZones(zonesResponse.data);
      setVilles(villesResponse.data);
    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(() => {
    fetchZones();
  }, []);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setZoneData({ id: null, nom: '', ville: null });
  };

  const handleInputChange = (e) => {
    if (e.target.name === 'villeId') {
      const selectedVille = villes.find((ville) => ville.id === e.target.value);
      setZoneData({ ...zoneData, ville: selectedVille });
    } else {
      setZoneData({ ...zoneData, [e.target.name]: e.target.value });
    }
  };
  
  
  /*const handleInputChange = (e) => {
    setZoneData({ ...zoneData, [e.target.name]: e.target.value });
    //  setZoneData crée un nouvel objet en utilisant la syntaxe de décomposition (...zoneData) pour copier toutes les propriétés existantes de zoneData
  };*/

  const handleSaveZone = async (e) => {
    e.preventDefault();
    try {
      if (zoneData.id) {
        await axios.put(`/api/Zones/update/${zoneData.id}`, zoneData); 
      } else {
        await axios.post('/api/Zones/add', zoneData); 
      }
      fetchZones();
      handleCloseModal();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditZone = (zone) => {
    setZoneData({ id: zone.id, nom: zone.nom, ville: zone.ville });
    setShowModal(true);
  };

  const handleDeleteZone = async (id) => {
    try {
      await axios.delete(`/api/Zones/delete/${id}`); 
      fetchZones();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShowModal}>
        Add Zone
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Ville</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {zones.map((zone) => (
            <tr key={zone.id}>
              <td>{zone.id}</td>
              <td>{zone.nom}</td>
              <td>{zone.ville}</td>
              <td>
                <Button variant="info" onClick={() => handleEditZone(zone)}>
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteZone(zone.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add/Edit Zone</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSaveZone}>
            <Form.Group controlId="formZoneNom">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                name="nom"
                value={zoneData.nom}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formZoneVille">
              <Form.Label>Ville</Form.Label>
              <Form.Control
                type="text"
                name="ville"
                value={zoneData.ville}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formZoneVille">
                <Form.Label>Ville</Form.Label>
                <Form.Control
                    as="select"
                    name="villeId"
                    value={zoneData.ville ? zoneData.ville.id : ''}
                    onChange={handleInputChange}
                >
                    <option value="">Select Ville</option>
                    {villes.map((ville) => (
                    <option key={ville.id} value={ville.id}>
                        {ville.nom}
                    </option>
                    ))}
                </Form.Control>
                </Form.Group>

            <Button variant="primary" type="submit"   >
              Save
            </Button>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Zone;

