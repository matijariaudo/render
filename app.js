const {init_wsp} = require("./controllers/wsp");
const { Server } = require("./models/server");

//console.clear();
const server=new Server();
server.listen()
init_wsp()
