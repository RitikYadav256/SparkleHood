import { Request, Response } from "express";
import Incident from "../models/User";
export const Incident_By_Id =  async (req: Request, res: Response) => {
  const {_id} = req.body;
  try {
    const response = await Incident.find({ _id: _id });
    console.log(response);
    if (response.length===0) {
      res.status(404).json({ message: "Incident id not found" });
    } else {
       res.status(201).json({message:"Successful",response});
    }
  } catch (error) {
    res.status(501).json({ message: error });
  }
};