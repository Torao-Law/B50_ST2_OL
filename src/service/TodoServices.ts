import { Request, Response } from "express"
import { Todo } from "../mocks/Todos"
import TodoInterface from "../interface/Todos"

export default new class TodoService {
  private todos: TodoInterface[]

  constructor() {
    this.todos = [ ...Todo ]
  }

  find(req: Request, res: Response) : Response {
    try {
      return res.status(200).json({
        message: "success",
        data: this.todos
      })
    } catch (error) {
      return res.status(500).json({ message: "Something error while finding all todos"})
    }
  }

  findOne(req: Request, res: Response) : Response {
    const id: number = Number(req.params.id)
  
    const data: TodoInterface | undefined = this.todos.find((data) => data.id == id)
  
    if (data == undefined) return res.status(400).json({ message: "Data not found" })
  
    return res.status(200).json({
      message: "Success",
      data: data
    })
  }
}
