import express from "express";

import isauthenticated from "../middlewares/is_authenticated.js";
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../controllers/job_controller.js";
const router = express.Router();

router.route("/post").post(isauthenticated,postJob);
router.route("/get").get(isauthenticated,getAllJobs);
router.route("/getAdminjobs").get(isauthenticated,getAdminJobs);
router.route("/get/:id").get(isauthenticated,getJobById);


export default router;
