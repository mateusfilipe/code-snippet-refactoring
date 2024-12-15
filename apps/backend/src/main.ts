import express from 'express';
import dotenv from 'dotenv';
import router from './routes/routes';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

dotenv.config();
const app = express();

app.use(express.json());

app.use('/review', router);

app.get('/', (req, res) => {
  res.send({ message: 'Hello World' });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
