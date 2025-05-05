import db from '../config/db.js';

const createTables = () => {
  const enseignantsTable = `
    CREATE TABLE IF NOT EXISTS enseignants (
      id INT AUTO_INCREMENT PRIMARY KEY,
      matricule VARCHAR(50) NOT NULL UNIQUE,
      nom VARCHAR(100) NOT NULL,
      tauxhoraire DECIMAL(10, 2) NOT NULL,
      nbheures INT NOT NULL
    )
  `;

  db.query(enseignantsTable, (err, result) => {
    if (err) {
      console.error('Erreur lors de la création de la table enseignants:', err);
    } else {
      console.log('Table enseignants créée ou déjà existante');
    }
    db.end();
  });
};

createTables();
