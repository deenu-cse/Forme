const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Love = require('./lovemodel');

const app = express();
const PORT = 5000;

// CORS configuration
const corsOptions = {
  origin: 'https://66dd61f2c84f8dbad69adb98--charming-lily-86f461.netlify.app', // Adjust as needed
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://vdeendayal866:deendayal199@forme.3efro.mongodb.net/?retryWrites=true&w=majority&appName=Forme', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Route to handle form submissions
app.post('/submit', async (req, res) => {
  const { loveLevel, message } = req.body;

  if (!loveLevel || !message) {
    return res.status(400).json({ error: 'Please fill all the fields!' });
  }

  try {
    const newLove = new Love({ loveLevel, message });
    await newLove.save();
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error saving data:', err);
    res.status(500).json({ error: 'Failed to save data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
