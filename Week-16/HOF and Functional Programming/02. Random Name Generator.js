/*02. The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a 
variable so can be modified. The program displays a message every second indicating the time remaining 
until the random number is generated and then outputs the generated number. */

function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function generateRandomNumberWithDelay(delayInSeconds) {
  console.log(
    `Generating a random number after a delay of ${delayInSeconds} seconds...`
  );

  let countdown = 3;
  const countdownInterval = setInterval(() => {
    console.log(`${countdown} seconds remaining...`);
    countdown--;

    if (countdown === 0) {
      clearInterval(countdownInterval);
      const randomNumber = generateRandomNumber();
      console.log(`Random number generated: ${randomNumber}`);
    }
  }, 1000);
}

generateRandomNumberWithDelay(3);
