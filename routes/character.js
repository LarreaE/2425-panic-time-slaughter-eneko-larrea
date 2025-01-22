
import express from 'express';
import { characters } from '../controllers/characters.js';

const router = express.Router();

router.get('/players', characters);

export default router;