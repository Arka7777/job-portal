import express from "express";

import isauthenticated from "../middlewares/is_authenticated.js";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company_controller.js";
const router = express.Router();

router.route("/register").post(isauthenticated,registerCompany);
router.route("/get").get(isauthenticated,getCompany);
router.route("/get/:id").get(isauthenticated,getCompanyById);
router.route("/update/:id").put(isauthenticated, updateCompany);

export default router;
