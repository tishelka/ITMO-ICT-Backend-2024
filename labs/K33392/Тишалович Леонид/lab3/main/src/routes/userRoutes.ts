import express from "express";
import UserController from "../controllers/UserControllers";

const router = express.Router();

router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);
router.get("/:id/reviews", UserController.getUserReviews);
router.get("/:id/cart", UserController.getUserCart);

export default router;
