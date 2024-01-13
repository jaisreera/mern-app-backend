// mongodbConnection.js
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://8479946428ll:Rahul%40123@cluster0.e0ownwc.mongodb.net/gofoodmern?retryWrites=true&w=majority');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connecting to database'));

db.once('open', async () => {
  console.log("successfully connected to database : mongoDB");
  try {
    const foodCollection = db.collection("food_items");
    global.foodData = await foodCollection.find({}).toArray();
    
    const categoryCollection = db.collection("foodCategory"); 
    global.foodCategory = await categoryCollection.find({}).toArray();
    

  } catch (err) {
    console.error("Error fetching data:", err);
  }
});

module.exports = db;