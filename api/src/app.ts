import bodyParser from 'body-parser';
import express, { type Express, type Response } from 'express';

import corsConfig from './config/cors.config';
import routes from './routes';

// init app
const app: Express = express();

// cors
app.use(corsConfig);

// request payload
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use('/api', routes);

// 404
app.use((_, res: Response) => {
  return res.status(404).send('Not Found.');
});

export default app;