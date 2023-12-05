import express from 'express';
import { teamController } from './team.controller';

const router = express.Router();

router.get('/', teamController.getTeams);

router.post('/', teamController.createTeam);

export const TeamRoutes = router;
