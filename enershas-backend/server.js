const express = require('express');
const cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Destination for uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename file to include timestamp
  },
});

const upload = multer({ storage: storage });

// Create uploads directory if it doesn't exist
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// Endpoint to handle form submissions
app.post('/api/submit', upload.single('resume'), (req, res) => {
  const { name, qualification, experience, socialMedia } = req.body;

  // Here you can handle the incoming data, for example, save it to a database or file
  const submissionData = {
    name,
    qualification,
    experience,
    resume: req.file ? req.file.path : null,
    socialMedia,
  };

  // Log the submission data for demonstration
  console.log('Submission received:', submissionData);

  // Respond to the client
  res.json({ message: 'Submission received successfully!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
