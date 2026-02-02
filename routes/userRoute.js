import express from "express";
import { get } from "mongoose";
import {
  getUserController,
  updateUserController,
  deleteUserController,
} from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();
//=======  get | POST | DELETE | PUT  =======//

router.get("/getUser", authMiddleware, getUserController);

//=========  User Update route =======//

router.put("/updateUser", authMiddleware, updateUserController);

// router delete

router.delete("/deleteUser/:id", authMiddleware, deleteUserController);

export default router;
