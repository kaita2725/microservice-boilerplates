import { Request, Response, NextFunction } from "express";
import allowedOrigin from "../config/allowedOrigins";

const credentials = (req: Request, res: Response, next: NextFunction) => {
    const origin = req.headers.origin;
    if (allowedOrigin.includes(origin!)) {
        res.header(`Access-Control-Allow-Credentials`, 'true');
    }
    next();
}

export = credentials