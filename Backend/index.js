const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Love = require('./lovemodel');
 // Make sure the path is correct

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Forme', {
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
    res.status(500).json({ error: 'Failed to save data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
