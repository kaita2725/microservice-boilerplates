import { Router, Request, Response } from 'express';

export const missingRoute = Router();

missingRoute.all('{/*path}', (req: Request, res: Response) => {
    res.status(404);
    if (req.accepts('json')) {
        res.json({ error: "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
})
