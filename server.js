const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoDBconnect = require('./config/mongoDBconfig');
const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/authMiddleware')





// dotenv config
dotenv.config();






// express = app
const app = express();






// middlewares
app.use(cors());
app.use(express.json());





// database connection
mongoDBconnect();





// auth route
app.use('/api', authRoutes); 





// default route
app.get('/api/lol', authMiddleware, async (req, res) => {
    res.send('✅ This route is protected by API key');
  });
  





// listen
if (process.env.NODE_ENV !== "production") {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}/`);
    });
  }

  
  module.exports = app;