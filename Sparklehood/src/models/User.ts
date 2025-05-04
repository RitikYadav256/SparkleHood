import mongoose, { Schema, Document } from 'mongoose';

export interface IIncident extends Document {
  title: string;
  description: string;
  severity: 'Low' | 'Medium' | 'High';
  reported_at: Date;
}

const IncidentSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  severity: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    required: true,
  },
  reported_at: {
    type: Date,
    default: Date.now,
  },
});

const Incident = mongoose.model<IIncident>('Incident', IncidentSchema,"incidents");

export default Incident;
