const mongoose = require('mongoose');
require("dotenv").config()

const DB_URL = process.env.DB_URL
const connectToDatabase = async () => {
    try {
        //    await mongoose.connect('mongodb+srv://anuragmishra9152:1OiTv9AjQaqJldyx@college-management.zpx6f.mongodb.net/?retryWrites=true&w=majority&appName=College-management')  
           await mongoose.connect(DB_URL)  
        console.log('Database connected successfully.');
    } catch (err) {
      console.error('Error connecting to database:', err);
    }
  }
  module.exports = connectToDatabase;