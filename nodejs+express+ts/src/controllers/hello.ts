import { Request, Response } from "express";

const hello = async (req: Request, res: Response): Promise<any> => {
    res.json({ "hello": "world" })
    res.status(200)
}

export { hello }