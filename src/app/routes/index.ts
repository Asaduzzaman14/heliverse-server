import express from 'express';
import { TeamRoutes } from '../modules/team/team.routes';
import { UserRoutes } from '../modules/user/user.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/team',
    route: TeamRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
