import cors, { CorsOptions } from 'cors';

const originWhitelist = ['http://localhost:3000'];

const corsConfig: CorsOptions = {
  origin: originWhitelist,
};

export default cors(corsConfig);