const express = require('express');
const router = express.Router()
const authMiddleware = require('../middleware/authMiddleware');

router.get('/protected', authMiddleware , (req, res) => {
  res.json({ message: '✅ Access granted to protected route via API key.' });
});

module.exports = router;
