const fs = require("fs");

const data =
  "Node.js is a platform that utilizes JavaScript and is primarily employed for developing web applications that are highly focused on input/output operations, including but not limited to chat applications and multimedia streaming websites. The platform is constructed using Google Chrome's V8 JavaScript engine. A web application is a type of software that executes on a server and is displayed by a client's browser that obtains all the application's resources over the internet.";

fs.writeFileSync("nodejs_architecture.txt", data);

const readData = fs.readFileSync("nodejs_architecture.txt");

console.log(readData.toString());
