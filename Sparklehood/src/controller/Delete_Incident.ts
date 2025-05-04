import { Request, Response } from "express";
import Incident from "../models/User";
export const Delete_Incident_By_Id =async (req: Request, res: Response) => {
  const { _id } = req.body;
  try {
    const response = await Incident.find({ _id: _id });
    if (response.length===0) {
      res.status(404).json({ message: "Id not found" });
    }
    const response2 = await Incident.deleteOne({ _id: _id });
    console.log(response2);
    if (!response2) {
      res.status(501).json({ message: "Incident not deleted retry" });
    }
    res.status(201).json({ message: "Succcesfull", response2 });
    
  } catch (error) {
    res.status(501).json({ message: error });
  }
};