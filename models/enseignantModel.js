import db from '../config/db.js';

export const getAllEnseignants = callback => {
  db.query('SELECT *, (tauxhoraire * nbheures) AS prestation FROM enseignants', callback);
};

export const getStats = callback => {
  db.query(`
    SELECT 
      SUM(tauxhoraire * nbheures) AS total,
      MIN(tauxhoraire * nbheures) AS min,
      MAX(tauxhoraire * nbheures) AS max
    FROM enseignants`, callback);
};

export const addEnseignant = (enseignant, callback) => {
  const { matricule, nom, tauxhoraire, nbheures } = enseignant;
  db.query(
    'INSERT INTO enseignants (matricule, nom, tauxhoraire, nbheures) VALUES (?, ?, ?, ?)',
    [matricule, nom, tauxhoraire, nbheures],
    callback
  );
};

export const updateEnseignant = (id, enseignant, callback) => {
  const { nom, tauxhoraire, nbheures } = enseignant;
  db.query(
    'UPDATE enseignants SET nom = ?, tauxhoraire = ?, nbheures = ? WHERE id = ?',
    [nom, tauxhoraire, nbheures, id],
    callback
  );
};

export const deleteEnseignant = (id, callback) => {
  db.query('DELETE FROM enseignants WHERE id = ?', [id], callback);
};
