import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import enseignantsRoutes from './routes/enseignants.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/enseignants', enseignantsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
