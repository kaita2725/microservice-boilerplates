import dotenv from "dotenv";
const env = process.env.NODE_ENV || 'development'
dotenv.config({ path: `.env.${env}` });

import path from "path";
import fs from 'fs';
import http from 'http'
import https from 'https'

import app from './app';

//db
import dbInit from "./database/DBInit";
import redis from "./config/redisConn";

const startServer = async () => {

    //port
    const PORT = process.env.PORT || 8080;
    // const cert_bundle_1 = process.env.PATH_TO_BUNDLE_CERT_1;
    // const cert_bundle_2 = process.env.PATH_TO_BUNDLE_CERT_2;
    // const cert_cert = process.env.PATH_TO_CERT || 'locahost.crt';
    // const cert_key = process.env.PATH_TO_KEY || 'localhost.key';

    // const serverOptions = {
    //     key: fs.readFileSync(path.join(__dirname, 'certs', cert_key)),
    //     cert: fs.readFileSync(path.join(__dirname, 'certs', cert_cert))
    // }

    try {
        await dbInit()

        redis.on('connect', () => {
            console.log('Connected to Redis');
        });

        redis.on('error', (err) => {
            console.error('Redis connection error:', err);
        });
        //http server
        const server = http.createServer(app)
        //https server
        //const server = https.createServer(serverOptions, app)
        server.listen(PORT, () => console.log(`http server is running on port ${PORT}`));

    } catch (err) {
        console.error('Failed to start the server: ', err)
        process.exit(1)
    }
}

startServer();