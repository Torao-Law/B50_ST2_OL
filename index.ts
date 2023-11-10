import express, { Request, Response } from "express"
import { Todo } from "./src/mocks/Todos"
import TodoInterface from "./src/interface/Todos"

const app = express()
const PORT = 5000

app.use(express.json()) 

app.get("/todos", (req: Request, res: Response) : Response => {
  return res.status(200).json({
    message: "Success",
    data: Todo
  })
})

app.get("/todo/:id", (req: Request, res: Response) : Response => {
  const id: number = Number(req.params.id)

  const data: TodoInterface | undefined = Todo.find((data) => data.id == id)

  if (data == undefined) return res.status(400).json({ message: "Data not found" })

  return res.status(200).json({
    message: "Success",
    data: data
  })
})

async function Start() : Promise<void> {
  try {
    app.listen(PORT, () => console.log("Server running"))
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
}

void Start()


// HTTP Method => Metode apa yang akan di kerjakan ketika akses (GET/ Read, POST/ Write, PATCH OR PUT / Upadte, DELETE / Delete)
// HTTP Status => 100 => 199 Information, 200 => 299 Successfull, 300 => 399 Direction, 400 => 499 Client Error, 500 Server Error. 