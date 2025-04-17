import {
    getAllEnseignants,
    getStats,
    addEnseignant,
    updateEnseignant,
    deleteEnseignant
  } from '../models/enseignantModel.js';
  
  export const getEnseignants = (req, res) => {
    getAllEnseignants((err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    });
  };
  
  export const getEnseignantsStats = (req, res) => {
    getStats((err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results[0]);
    });
  };
  
  export const createEnseignant = (req, res) => {
    addEnseignant(req.body, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'Enseignant ajouté avec succès' });
    });
  };
  
  export const editEnseignant = (req, res) => {
    updateEnseignant(req.params.id, req.body, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Enseignant modifié avec succès' });
    });
  };
  
  export const removeEnseignant = (req, res) => {
    deleteEnseignant(req.params.id, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Enseignant supprimé avec succès' });
    });
  };
  