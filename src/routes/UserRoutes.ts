import express from "express";
const router = express.Router();

import UserController from "../controllers/UserController";

router.get("/", UserController.getAllUsers);
router.get("/create", UserController.createNewUser);
router.post("/store", UserController.storeNewUser);

export default router;