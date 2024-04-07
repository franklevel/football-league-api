
import express, { Router } from 'express';
import { getAll } from '../controllers/competitionController';

const router: Router = express.Router();

router.get('/', getAll);

export { router as competitionRouter };
