import express from "express";
import { get } from "mongoose";
import {
  createRestorant,
  getAllRestorant,
} from "../controllers/restorantController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();
//=======  get | POST | DELETE | PUT  =======//

router.post("/create", authMiddleware, createRestorant);

//==  get all resotrant

router.get("/getall", authMiddleware, getAllRestorant);

export default router;
