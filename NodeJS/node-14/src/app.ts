import express, { Application,Request, Response, NextFunction } from 'express';
import * as dotenv from "dotenv";
import morgan from 'morgan';
import 'express-async-errors';
import planetRouter from './routes/planetRouter';

dotenv.config({ path: __dirname+'/.env' });

const app: Application = express();
app.use(express.json());
app.use(morgan('dev'))

app.use('/api/planets', planetRouter)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
})

const port: string = process.env.PORT || '3001';
app.listen(port, () => {
  console.log(`App is listening on port ${port}!`)
})