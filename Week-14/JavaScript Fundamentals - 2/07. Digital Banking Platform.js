/*07. Imagine you are working for a digital banking platform, and your team is tasked with improving the 
security of customer accounts. Your challenege is to create a function that generates a random 4-digit 
OTP (One-Time Password) for authentication purposes.*/

function generateOtp() {
    const min = 1000;
    const max = 9999;
    const otp = Math.floor(Math.random() * (max - min + 1)) + min;
    return otp.toString();
  }

console.log(`Here is your otp: ${generateOtp()}`);

// OUTPUT: Here is your otp: 2951


