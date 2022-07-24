import { Request, Response } from "express";
import testsService from "../services/testsService";

export async function createTest(req: Request, res: Response){
    const test = req.body;
    await testsService.createTest(test);
    res.sendStatus(201);
}