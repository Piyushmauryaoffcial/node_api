import express from "express";
import {
  authController,
  loginController,
} from "../controllers/authControllers/authController.js";

const router = express.Router();
//=======  get | POST | DELETE | PUT  =======//

router.post("/register", authController);
router.post("/login", loginController);

export default router;
