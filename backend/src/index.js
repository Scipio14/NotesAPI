require("dotenv").config();
const app = require("./app");
require("./database.js");

//El conectar con el servidor es una fubciónn asíncrona
async function main() {
  await app.listen(app.get("port"));
  console.log("Server running on port " + app.get("port"));
}
main();
