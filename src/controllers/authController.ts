import {Request, Response} from "express";
import authService from "../services/authService";

export async function signup(req: Request, res: Response) {
    const data = req.body;
    await authService.createUser(data);
    res.sendStatus(201);
}

export async function login(req: Request, res: Response) {
    const data = req.body;
    const token = await authService.login(data);
    return res.status(200).send(token);
    
}