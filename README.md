# SparkleHood
Tech Stack
{
  Language: TypeScript

  Runtime: Node.js

  Framework: Express.js

  Database: MongoDB (with Mongoose)
}


Install dependency.

cd Sparklehood
npm init -y

npm install express
npm install --save-dev typescript ts-node-dev @types/node @types/express
npx tsc --init
npm run dev

To Build and run at production
npm run build
npm start



Create .env file
PORT=5001
MONGODB_URI="mongodb+srv://<username>:<password>@cluster0.mongodb.net/incident_db"


Database Schema{
  id: ObjectId,
  title: string,
  description: string,
  severity: "Low" | "Medium" | "High",
  reported_at: Date
}


API Endpoints

GET	      /incidents	          Fetch all incidents
GET	      /incidents/:id	      Fetch one incident by ID
POST	    /incidents	          Create a new incident
DELETE	  /incidents/:id	      Delete an incident by ID

1.http://localhost:5001/incidents
2.http://localhost:5001/incidents/<incident_id>
3.http://localhost:5001/incidents
4.http://localhost:5001/incidents/<incident_id>
