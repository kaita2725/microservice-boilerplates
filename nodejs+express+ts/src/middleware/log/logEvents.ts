import { Request, Response, NextFunction } from "express";
import { format } from "date-fns";
import { v4 as uuid } from "uuid";
import path from "path";
import fs from 'fs';

const fsPromises = fs.promises;

const logEvents = async (message: string, logname: string) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
    try {
        if (!fs.existsSync(path.join(__dirname, '..', '..', 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, '..', '..', 'logs'));
        }
        await fsPromises.appendFile(path.join(__dirname, '..', '..', 'logs', logname), logItem);
    } catch (err) {
        //console.error(err);
    }
}

const logger = (req: Request, res: Response, next: NextFunction) => {
    logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, 'reqLog.txt');
    //console.log(`${req.method} ${req.path}`);
    next();
};

export {
    logger,
    logEvents
}