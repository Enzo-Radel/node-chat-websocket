import express from "express";
const router = express.Router();

import UserController from "../controllers/UserController";

router.get("/", UserController.getAllUsers);

export default router;