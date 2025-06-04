import 'dotenv/config';
import http, { type Server } from 'node:http';

import app from './app';

const port = process.env.PORT || '5000';
app.set('port', port);

const server: Server = http.createServer(app);
const env = process.env.NODE_ENV;

server.listen(port, () => {
  console.log(`API running in ${env} mode on localhost:${port}`);
});