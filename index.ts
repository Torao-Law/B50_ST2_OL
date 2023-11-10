import express from "express"
import router from "./src/routes"

async function Start() : Promise<void> {
  try {
    const app = express()
    const PORT = 5000

    app.use(express.json()) 
    app.use("/api/v1", router)

    app.listen(PORT, () => console.log("Server running"))
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
}

void Start()


// HTTP Method => Metode apa yang akan di kerjakan ketika akses (GET/ Read, POST/ Write, PATCH OR PUT / Upadte, DELETE / Delete)
// HTTP Status => 100 => 199 Information, 200 => 299 Successfull, 300 => 399 Direction, 400 => 499 Client Error, 500 Server Error. 