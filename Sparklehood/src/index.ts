import express from 'express';
import Incident from "./routes/incident.route";
import dotenv from 'dotenv';
import connectDb from './config/db';
const app = express();
const PORT = process.env.PORT || 5001;

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',Incident);

app.listen(PORT, async () => {
  await connectDb();
  console.log(`Server running on http://localhost:${PORT}`);
});
