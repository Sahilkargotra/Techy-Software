import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

// Helper constants
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Handle form submissions
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Customer Details:', { name, email, message });
    res.send('Thank you for contacting us!');
});

// Handle feedback form submissions
app.post('/feedback', (req, res) => {
    const { name, email, feedback } = req.body;
    console.log('Feedback Received:', { name, email, feedback });
    res.send('Thank you for your feedback!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
