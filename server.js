// Using express: http://expressjs.com/
var express = require('express');
const GameServer = require('./gameserver');

// Create the app
var app = express();
var servers = new Map();

// Set up the server
// process.env.PORT is related to deploying on heroku
var server = app.listen(process.env.PORT || window.location, listen);

// This call back just tells us that the server has started
function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://' + host + ':' + port);
}

// You need to add the folders that you want to access to here
app.use(express.static(__dirname));
app.use(express.static('public'));
app.use(express.static('public/game'));
app.use(express.static('public/menu'));
app.use(express.static('public/serverlist'));
app.use(express.static('public/server'));
app.use(express.static('utils'));

// WebSocket Portion
// WebSockets work with the HTTP server
var io = require('socket.io')(server);

  // The heartbeat is sent to all clients every X seconds
  // We can use the heartbeat as a way to sync data among users
  // We will need 2 heartbeats, the first one from the client to the server with their data packet (we will need a way of shortening the data to a small packet to avoid loss-of-data)
  //                            the second one from the server to all clients with the data packets (we will need some way of parsing the received data)
  setInterval(heartbeat, 1000);
  setInterval(serv, 50);
  
  function heartbeat() {
    io.sockets.emit('heartbeat', 'Hello');
  }

  function serv() {
    io.sockets.emit('get', Array.from(servers.entries()).reduce((main, [key, value]) => ({...main, [key]: value}), {}));
  }

// Sends the user to index.html on connect
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/view.html");
});

// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.sockets.on('connection',
  // We are given a websocket object in our function
  function(socket) {

    console.log("We have a new client: " + socket.id);

    socket.on('getid', function() { return socket.id });
  
    socket.on('start',
      function(data) {
        console.log('Received data ' + data)
      }
    );

    socket.on('update',
      function(data) {
        console.log('Updating ' + data);
      }
    );
  
    socket.on('create', function(id) {
      console.log('3');
      console.log("Creating server " + id);
      servers.set(id, new GameServer(id));
      console.log(servers);
      console.log('d');
    });
  
    socket.on('addtoserver', function(sid) {
      try {
        console.log('1');
        console.log('Adding socket to ' + servers.get(sid));
        servers.get(sid).addClient(socket);
        console.log('pork');
      }
      catch (err) {
        console.log('error');
      }
    });
  
    socket.on('clear', function() {
      servers = new Map();
    });
  
    socket.on('disconnect', function() {
      console.log("Client has disconnected");
    });
  }
); 