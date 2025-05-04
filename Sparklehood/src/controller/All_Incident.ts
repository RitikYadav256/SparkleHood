import { Request, Response } from "express";
import Incident from "../models/User";
export const FetchAllIncident = async (req: Request, res: Response) => {
  try {
    const response = await Incident.find();
    if (!response) {
      res.status(405).json({ message: "Users not Fount" });
      console.log("User not found");
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};