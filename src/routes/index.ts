import { Router } from "express";
import TodoControllers from "../controllers/TodoControllers";

const router = Router()

router.get("/todos", TodoControllers.find)
router.get("/todo/:id", TodoControllers.findOne)

export default router