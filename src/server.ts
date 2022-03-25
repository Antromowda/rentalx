import 'dotenv/config';

import express from 'express';

import { categoryRoutes } from './routes/category.routes';

const app = express();
app.use(express.json());

app.use('/categories', categoryRoutes);

app.listen(process.env.PORT, () =>
  console.log(`🔥 Server started at http://localhost:${process.env.PORT}`),
);
