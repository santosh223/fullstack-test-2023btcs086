const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

const connectDB = require('./config/dbConnect');
connectDB();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const formRoutes = require('./routes/FormRoutes');
app.use('/api', formRoutes);

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
