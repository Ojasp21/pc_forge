import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const port = 5000;

// Enable CORS for the frontend to communicate with the backend
app.use(cors());
app.use(express.json());

// API route to handle requests from frontend
app.post('/api/langflow', async (req, res) => {
  const { input_value, output_type, input_type, tweaks } = req.body;

  const apiEndpoint = 'https://api.langflow.astra.datastax.com/lf/147ee7b2-a885-492e-9918-6f2be297dda0/api/v1/run/686809cb-6e99-4457-ba4a-2ca204746d00?stream=false';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer AstraCS:DZPtHqRDrOxceDOlhaWwQuwm:c395ac30cae87c96c07d58118aa3855335cfb2661b7b245b007bba09a9b5712e'
  };

  const data = {
    input_value,
    output_type,
    input_type,
    tweaks
  };

  try {
    const response = await axios.post(apiEndpoint, data, { headers });
    res.json(response.data);  // Send the API response back to frontend
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while contacting LangFlow API.');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});
