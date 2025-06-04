import bodyParser from 'body-parser';
import express, { type Express, type Response } from 'express';

import corsConfig from './config/cors.config';
//import authRoutes from './routes/auth.route';
//import draftRoutes from './routes/draft.route';
import pingRoutes from './routes/ping.route';
import userRoutes from './routes/users.route';
//import rostersRoutes from './routes/rosters.route';
//import teamsRoutes from './routes/teams.route';
//const authMiddleware = require("./middleware/auth");

// init app
const app: Express = express();

// cors
app.use(corsConfig);

// request payload
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use('/api', [pingRoutes, userRoutes]);

// 404
app.use((_, res: Response) => {
  return res.status(404).send('Not Found.');
});

export default app;