import express from "express";
import { getAllTeams } from "../controllers/teams.js";

const router = express.Router();

router.get('/', getAllTeams);

export default router;