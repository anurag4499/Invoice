const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
           await mongoose.connect('mongodb+srv://anuragmishra9152:1OiTv9AjQaqJldyx@college-management.zpx6f.mongodb.net/?retryWrites=true&w=majority&appName=College-management')  
        console.log('Database connected successfully.');
    } catch (err) {
      console.error('Error connecting to database:', err);
    }
  }
  module.exports = connectToDatabase;