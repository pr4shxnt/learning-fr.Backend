const mongoose = require('mongoose');

const mongoDBconnect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{

        })
        console.log(`Server is live at http://localhost:${process.env.PORT}`)
    } catch (err) {
      console.error(err.message);
      process.exit(1); 
    }
}

module.exports = mongoDBconnect;