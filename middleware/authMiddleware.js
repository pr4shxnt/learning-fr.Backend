const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
  
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'API key missing or invalid format' });
    }
  
    const apiKey = authHeader.split(' ')[1];
  
    if (apiKey !== process.env.API_KEY) {
      return res.status(403).json({ message: 'Invalid API key' });
    }
  
    next();
  };
  
  module.exports = authMiddleware;
  