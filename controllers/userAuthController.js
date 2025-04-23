const bcrypt = require('bcryptjs');
const User = require('../models/userModel'); 
const redisClient = require('../services/redis');

exports.registerUser = async (req, res) => {


  const { 
     name, 
     email,
     password, 
     DOB, 
     gender, 
     address, 
     image, 
     otp
     } = req.body;

  try {


    console.log(req.body)


    // 1. Verify OTP
    const storedOtp = await redisClient.get(email);





    if (!storedOtp || storedOtp !== otp) {
      return res.status(400).json({ message: 'Invalid or expired OTP' });
    }




    // 2. Check if user already exists
    const existingUser = await User.findOne({ email });





    if (existingUser) {
      return res.status(409).json({ message: 'User already registered' });
    }




    // 3. Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);




    // 4. Create user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      DOB,
      gender,
      address,
      image, // base64 or file URL
    });




    await newUser.save();




    // 5. Cleanup OTP
    await redisClient.del(email);




    res.status(201).json({ message: 'User registered successfully' });




  } catch (error) {
    console.error('Register Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
