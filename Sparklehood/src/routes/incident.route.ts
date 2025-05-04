import express from "express";
import { FetchAllIncident } from "../controller/All_Incident";
import { Incident_By_Id } from "../controller/One_Incident";
import { Delete_Incident_By_Id } from "../controller/Delete_Incident";
import { AddIncident } from "../controller/Add_Incident";

const router = express.Router();

router.get("/incidents", FetchAllIncident);
router.post("/incidents", AddIncident);
router.get("/incidents/:id", Incident_By_Id);
router.delete("/incidents/:id", Delete_Incident_By_Id);

export default router;
