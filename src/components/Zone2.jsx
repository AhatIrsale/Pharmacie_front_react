import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Zone = () => {
  //Test numero3 Pour Zone
  const [zones, setZones] = useState([]);
  const [villes, setVilles] = useState([]);
  const [pharmacies, setPharmacies] = useState([]);
  const [selectedZone, setSelectedZone] = useState({
    id: '',
    nom: '',
    villeId: '',
    pharmacies: [],
  });

  useEffect(() => {
    // Charger la liste des zones lors du montage du composant
    fetchZones();
    fetchVilles();
    fetchPharmacies();
  }, []);

  const fetchZones = async () => {
    try {
      const response = await axios.get('/api/zones');
      setZones(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchVilles = async () => {
    try {
      const response = await axios.get('/api/villes');
      setVilles(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPharmacies = async () => {
    try {
      const response = await axios.get('/api/pharmacies');
      setPharmacies(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleZoneChange = (e) => {
    setSelectedZone({
      ...selectedZone,
      [e.target.name]: e.target.value,
    });
  };

  const handleVilleChange = (e) => {
    setSelectedZone({
      ...selectedZone,
      villeId: e.target.value,
    });
  };

  const handlePharmacyChange = (e) => {
    const selectedPharmacies = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedZone({
      ...selectedZone,
      pharmacies: selectedPharmacies,
    });
  };

  const addZone = async () => {
    try {
      await axios.post('/api/Zones/add', selectedZone);
      fetchZones();
      clearForm();
    } catch (error) {
      console.error(error);
    }
  };

  const updateZone = async () => {
    try {
      await axios.put(`/api/Zones/${selectedZone.id}`, selectedZone);
      fetchZones();
      clearForm();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteZone = async (zoneId) => {
    try {
      await axios.delete(`/api/Zones/${zoneId}`);
      fetchZones();
    } catch (error) {
      console.error(error);
    }
  };

  const clearForm = () => {
    setSelectedZone({
      id: '',
      nom: '',
      villeId: '',
      pharmacies: [],
    });
  };

  return (
    <div>
      <h2>Ajouter/Modifier une zone</h2>
      <form>
        <div className="form-group">
          <label>Nom de la zone:</label>
          <input
            type="text"
            className="form-control"
            name="nom"
            value={selectedZone.nom}
            onChange={handleZoneChange}
          />
        </div>
        <div className="form-group">
          <label>Ville:</label>
          <select
            className="form-control"
            value={selectedZone.villeId}
            onChange={handleVilleChange}
          >
            <option value="">Sélectionnez une ville</option>
            {villes.map((ville) => (
              <option key={ville.id} value={ville.id}>
                {ville.nom}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Pharmacies:</label>
          <select
            className="form-control"
            multiple
            value={selectedZone.pharmacies}
            onChange={handlePharmacyChange}
          >
            {pharmacies.map((pharmacie) => (
              <option key={pharmacie.id} value={pharmacie.id}>
                {pharmacie.nom}
              </option>
            ))}
          </select>
        </div>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-primary"
            onClick={selectedZone.id ? updateZone : addZone}
          >
            {selectedZone.id ? 'Modifier' : 'Ajouter'}
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={clearForm}
          >
            Annuler
          </button>
        </div>
      </form>
      <h2>Liste des zones</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Ville</th>
            <th>Pharmacies</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {zones.map((zone) => (
            <tr key={zone.id}>
              <td>{zone.nom}</td>
              <td>{zone.ville}</td>
              <td>
                {/* {zone.pharmacies.map((pharmacie) => (
                  <span key={pharmacie.id}>{pharmacie.nom}, </span>
                ))} */}
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setSelectedZone(zone)}
                >
                  Modifier
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteZone(zone.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Zone;

