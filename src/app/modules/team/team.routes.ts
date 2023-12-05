import express from 'express';
import { teamController } from './team.controller';

const router = express.Router();

router.post('/', teamController.createTeam);

router.get('/', teamController.getTeams);

export const TeamRoutes = router;
