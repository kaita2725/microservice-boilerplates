import path from "path";
import express, { Express } from "express";
import cors from 'cors'

//config
import corsOptions from "./config/corsOptions";

//middleware
import cookieParser from "cookie-parser";
import { logger } from "./middleware/log/logEvents";
import errorHandler from "./middleware/log/errorHandler";
import credentials from "./middleware/credential"

//routes
import { defaultRoute } from "./routes/defaultRoute";
import { missingRoute } from "./routes/public/404";

import apiRouter from "./routes/api/apiRouter";
import publicRouter from "./routes/public/publicRoute";


const app: Express = express();

//for security reduce fingerprinting
app.disable('x-powered-by')

//custom middleware logger request
app.use(logger)

// handle options credentials check - before CORS!
// fetch cookies credential requirement
app.use(credentials)

//Cross-Origin Resource Sharing
app.use(cors(corsOptions))

//built-in middleware to handle urlencoded data
app.use(express.urlencoded({ extended: true }));

//built-in middleware for json
app.use(express.json())

//middleware for cookies
app.use(cookieParser())

//serve static files
app.use('/', express.static(path.join(__dirname, '..', 'public')));

// //routes
app.use(defaultRoute)

// //======================//
// //===== API Routes =====//
// //======================//

//public
app.use('/public', publicRouter)

//api
app.use('/', apiRouter)

// Catch all
app.use(missingRoute)

app.use(errorHandler);

export default app