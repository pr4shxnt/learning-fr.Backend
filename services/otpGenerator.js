const otpGenerator = require('otp-generator');

const  generateOtp = () => {

  return otpGenerator.generate(6, {
    digits: true,
    upperCase: false,
    specialChars: false,
    alphabets: false,
  });
  
}

module.exports = generateOtp;
