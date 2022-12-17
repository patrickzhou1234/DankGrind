// ==UserScript==
// @name         Discord Dank bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://discord.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

var cmds = ["{\"content\":\"pls beg\",\"tts\":false}", "{\"content\":\"pls fish\",\"tts\":false}", "{\"content\":\"pls hunt\",\"tts\":false}", "{\"content\":\"pls dig\",\"tts\":false}"];
var cooldowntimes = [46, 46, 46, 46]

for (var i=0;i<cmds.length;i++) {
    (function(i) {
   setInterval(function() {
    fetch("https://discord.com/api/v9/channels/channelid/messages", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "authorization": "token lol",
    "content-type": "application/json",
    "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"97\", \"Chromium\";v=\"97\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-debug-options": "bugReporterEnabled",
    "x-discord-locale": "en-US",
    "x-super-properties": "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwic3lzdGVtX2xvY2FsZSI6ImVuLVVTIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzk3LjAuNDY5Mi43MSBTYWZhcmkvNTM3LjM2IiwiYnJvd3Nlcl92ZXJzaW9uIjoiOTcuMC40NjkyLjcxIiwib3NfdmVyc2lvbiI6IjEwIiwicmVmZXJyZXIiOiIiLCJyZWZlcnJpbmdfZG9tYWluIjoiIiwicmVmZXJyZXJfY3VycmVudCI6IiIsInJlZmVycmluZ19kb21haW5fY3VycmVudCI6IiIsInJlbGVhc2VfY2hhbm5lbCI6InN0YWJsZSIsImNsaWVudF9idWlsZF9udW1iZXIiOjExMDQ1MSwiY2xpZW50X2V2ZW50X3NvdXJjZSI6bnVsbH0="
  },
  "referrer": "https://discord.com/channels/877717759352512532/929604250722517022",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": cmds[i],
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
    });
   }, cooldowntimes[i]*1000);
   })(i);
}
