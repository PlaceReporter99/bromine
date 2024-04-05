var mineflayer = require("mineflayer"); // Put a decent chunk of the workload on a package made by someone else
var mcprotocol = require("minecraft-protocol"); // We need the class from here
var classt = require("class-transformer"); // We need to retrieve stuff from the database and convert it to a class
var func = require("firebase-functions"); // functions!
var http = require("http"); // We need a server to accept requests

function databasePush() {
// a miracle happens
}

function actionDecider(action, user, data) {
  console.log({'action': action, 'user': user, 'data': data});
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`<h1>Hello!</h1><p>${`${action}/${user}/${data}`}</p>`); // Will be implemented later
  res.end(); // It will think the request timed out if we don't do this!
}

function botHandler(req, res) {
  var [action, user, data] = req.url.slice(1).split('/', 3); // To do [ACTION] with a bot with id [ID] with data [DATA] send a request to https://bromine-mw3o.onrender.com/[ACTION]/[USER]/[DATA] 
  actionDecider(action, user, data)
  // another half a miracle happens
}

//exports.api = func.http.onRequest(botHandler);
/*, {'Content-Type': 'application/json'}*/
http.createServer(botHandler).listen(process.env.PORT || 3000);
