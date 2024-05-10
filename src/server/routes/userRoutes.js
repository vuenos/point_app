import express from "express";
import {
    authUser,
    registerUser,
    getUserProfile,
    updateUser,
    updateUserProfile,
    deleteUser,
    getUserById
} from "../controller/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/")
    .post(registerUser)
    .get(protect, admin)

router
    .post("/login", authUser)

router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile)

router
    .route('/:id')
    .delete(protect, admin, deleteUser)
    .get(protect, admin, getUserById)
    .put(protect, admin, updateUser)
  
export default router;