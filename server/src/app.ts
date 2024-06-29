/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import router from './app/routes';

const app: Application = express();

// parsers
// import cookieParser from 'cookie-parser';
// app.use(cookieParser());

app.use(express.json());

// turn on cors true for redux Credential
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

// application routes
// import router from './app/routes';
app.use('/api', router);

const test = async (req: Request, res: Response) => {
  const a = 'portfolio server is running !!';
  res.send(a.toString()); // Ensure sending a string
};

app.get('/', test);

// import globalErrorHandler from './app/middlewares/globalErrorhandler';
// app.use(globalErrorHandler);

// import notFound from './app/middlewares/notFound';
// app.use(notFound);

export default app;
