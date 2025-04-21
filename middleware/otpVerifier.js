const redisClient = require('../services/redis');

const otpVerifier = async (req, res, next) => {
  const { email, otp } = req.body;

  try {
    const storedOtp = await redisClient.get(email);
    if (!storedOtp || storedOtp !== otp) {
      return res.status(400).json({ message: 'Invalid or expired OTP' });
    }

    next();
  } catch (err) {
    console.error('OTP Verification Error:', err);
    res.status(500).json({ message: 'Server error during OTP verification' });
  }
};

module.exports = otpVerifier;
