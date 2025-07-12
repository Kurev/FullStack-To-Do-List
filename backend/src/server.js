import express from 'express';
import notesRoutes from './routes/notesRoutes.js'; // Correct relative path from `src`
import { connectDB } from './config/db.js';
import dotenv from 'dotenv'; 

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

// Middleware to parse JSON bodies
app.use(express.json()); // to get the request body in JSON format inside our notesController which is the req.body
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next(); // Call the next middleware function in the stack
})

app.use('/api/notes', notesRoutes);

app.listen(PORT, () => {
  console.log('Server is running on port:', PORT);
});
