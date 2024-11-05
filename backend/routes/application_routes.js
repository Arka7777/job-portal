import express from "express";

import isauthenticated from "../middlewares/is_authenticated.js";

import {
  applyJob,
  getApplicants,
  getAppliedJobs,
  updateStatus,
} from "../controllers/application_controller.js";
const router = express.Router();

router.route("/apply/:id").get(isauthenticated, applyJob);
router.route("/get").get(isauthenticated, getAppliedJobs);
router.route("/:id/applicants").get(isauthenticated, getApplicants);
router.route("/status/:id/update").post(isauthenticated, updateStatus);

export default router;
