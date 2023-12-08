import express, { Application, Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import 'express-async-error';

import planetRouter from './routes/planetRouter';
import usersRouter from './routes/usersRouter';

const app: Application = express();
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/planets', planetRouter);
app.use('/api/users', usersRouter)


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	console.error(err.stack);
	res.status(500).send('Something went wrong!');
});

const port = 3000;
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
