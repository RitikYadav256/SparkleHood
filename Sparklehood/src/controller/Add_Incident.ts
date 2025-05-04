import { Request, Response } from "express";
import Incident from "../models/User";

export const AddIncident = async (req: Request, res: Response) => {
  const data = req.body;
  const { id, title, description, severity, reported_at } = req.body;
  if (title && description && severity && reported_at) {
    try {
      const response = await Incident.create(data);
      if (!response) {
        res.status(500).json({
          message: "Not be created",
        });
      }
      res.status(201).json({
        message: "Incidents added successfully",
        data: response,
      });
    } catch (error: any) {
      console.error("Failed to add incident:", error.message);
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(400).json({ message: "Fields are empty" });
  }
};
