const dotenv = require("dotenv")
dotenv.config()
const APP_PORT = process.env.APP_PORT

function main() {
  const message = "app is running";
  console.log(message);
  console.log("listening on port " + APP_PORT);
}

main();
