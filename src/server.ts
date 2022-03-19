import 'dotenv/config';

import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.status(200).json({message: 'Hello World!'})
})

app.listen(process.env.PORT, () =>
  console.log(`🔥 Server started at http://localhost:${process.env.PORT}`),
);
