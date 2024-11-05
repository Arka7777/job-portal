import express from "express";
import {
  login,
  logout,
  register,
  updateprofile,
} from "../controllers/user_controller.js";
import isauthenticated from "../middlewares/is_authenticated.js";
import { singleUpload } from "../middlewares/multer.js";
const router = express.Router();

router.route("/register").post(singleUpload,register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isauthenticated, updateprofile);

export default router;
