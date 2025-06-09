import authMiddleware from '../middleware/auth';
import pingRoutes from './ping.route';
import userRoutes from './users.route';
import draftRoutes from './draft.route';

export default [
  pingRoutes,
  userRoutes,
  //authMiddleware,
  draftRoutes,
];