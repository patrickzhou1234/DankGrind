var XMLHttpRequest = require('xhr2');

const express = require("express");
const app = express();
const server = require("http").Server(app);

app.use(express.static("public"));
server.listen(3000);

token = process.env.token;

channel_id = "CHANNEL ID";

channel_url = `https://discord.com/api/v9/channels/762348799308857348/messages`

var cmds = ["pls beg", "pls fish", "pls hunt", "pls dig", "pls dep max","pls sell worm max", "pls sell fish max", "pls sell seaweed max", "pls sell rabbit max"];
var cooldowntimes = [46, 46, 46, 46, 46, 10800, 10900, 12000, 10700];

for (var i=0;i<cmds.length;i++) {
    (function(i) {
   setInterval(function() {
      request = new XMLHttpRequest();
      request.withCredentials = true;
      request.open("POST", channel_url);
      request.setRequestHeader("authorization", token);
      request.setRequestHeader("accept", "/");
      request.setRequestHeader("authority", "discord.com");
      request.setRequestHeader("content-type", "application/json");
      request.send(JSON.stringify({ content: cmds[i] }));
   }, cooldowntimes[i]*1000);
   })(i);
}
