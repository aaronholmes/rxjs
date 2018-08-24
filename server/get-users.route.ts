import {Request, Response} from 'express';
import {USERS} from "./db-data";

export function getAllUsers(req: Request, res: Response) {
  setTimeout(() => {

    res.status(200).json({payload:Object.values(USERS)});

  }, 200);
}
