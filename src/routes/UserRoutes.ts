import express from "express";
const router = express.Router();

import UserController from "../controllers/UserController";

router.get("/", UserController.index);
router.get("/create", UserController.create);
router.post("/store", UserController.store);
router.get("/:id", UserController.show);
router.get("/edit/:id", UserController.edit);
router.post("/update/:id", UserController.update);
router.get("/delete/:id", UserController.delete);

export default router;