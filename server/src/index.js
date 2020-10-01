const appName = "Server API"; 
const port = process.env.PORT || 8080;
const createServer = require("./server");
createServer().then(server => server.listen(port, 
  () => console.log(`${appName} running on port ${port}!`)));