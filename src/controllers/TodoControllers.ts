import { Request, Response } from "express";
import TodoServices from "../service/TodoServices";

export default new class TodoControllers {
  find(req: Request, res: Response) {
    TodoServices.find(req, res)
  }

  // findOne(req: Request, res: Response) {
  //   TodoServices.findOne(req, res)
  // }
}