import { Router, Request, Response } from 'express';

export const defaultRoute = Router();

defaultRoute.get('/index{.:html}', (req: Request, res: Response) => {
    if (req.accepts('json')) {
        res.json({});
    } else {
        res.type('txt').send("");
    }
})