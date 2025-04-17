import express from 'express';
import {
  getEnseignants,
  getEnseignantsStats,
  createEnseignant,
  editEnseignant,
  removeEnseignant
} from '../controllers/enseignantsController.js';

const router = express.Router();

router.get('/', getEnseignants);
router.get('/stats', getEnseignantsStats);
router.post('/', createEnseignant);
router.put('/:id', editEnseignant);
router.delete('/:id', removeEnseignant);

export default router;
