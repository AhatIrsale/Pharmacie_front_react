import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Zone1 = () => {
    //Test  numero 2 PourZone
  const [zones, setZones] = useState([]);
  const [zone, setZone] = useState({ id: '', nom: '', ville: '' });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchZones();
  }, []);

  const fetchZones = async () => {
    try {
      const response = await axios.get('/api/zones');
      setZones(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addZone = async () => {
    try {
      const response = await axios.post('/api/Zones/add', zone);
      setZones([...zones, response.data]);
      setZone({ id: '', nom: '', ville: '' });
    } catch (error) {
      console.error(error);
    }
  };

  const updateZone = async () => {
    try {
      const response = await axios.put(`/api/Zones/update/${zone.id}`, zone);
      setZones(
        zones.map((item) => (item.id === response.data.id ? response.data : item))
      );
      setZone({ id: '', nom: '', ville: '' });
      setEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteZone = async (id) => {
    try {
      await axios.delete(`/api/Zones/delete/${id}`);
      setZones(zones.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const editZone = (item) => {
    setZone({ id: item.id, nom: item.nom, ville: item.ville });
    setEditing(true);
  };

  return (
    <div className="container">
      <h1>Zones</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="zoneId" className="form-label">
            ID
          </label>
          <input
            type="text"
            className="form-control"
            id="zoneId"
            value={zone.id}
            onChange={(e) => setZone({ ...zone, id: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="zoneName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="zoneName"
            value={zone.nom}
            onChange={(e) => setZone({ ...zone, nom: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="zoneVille" className="form-label">
            Ville
          </label>
          <input
            type="text"
            className="form-control"
            id="zoneVille"
            value={zone.ville}
            onChange={(e) => setZone({ ...zone, ville: e.target.value })}
          />
        </div>
        {editing ? (
          <button type="button" className="btn btn-primary" onClick={updateZone}>
            Update Zone
          </button>
        ) : (
          <button type="button" className="btn btn-primary" onClick={addZone}>
            Add Zone
          </button>
        )}
      </form>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Ville</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {zones.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nom}</td>
              <td>{item.ville}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-sm btn-primary me-2"
                  onClick={() => editZone(item)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteZone(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Zone1;

