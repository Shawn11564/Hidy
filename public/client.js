// MENU = Show menu
// SERVERLIST = Show server list
// GAME = Show game

var socket;
let id;
let state = "MENU";
var menu, serverlist, game;
let servers;
var isMobile;

var dispX, dispY;

var touch = false;

function setup() {
  declare();
  createCanvas(dispX, dispY);
  menu = new Menu();
  serverlist = new List();
  game = new Game();
  console.log("Hello World!");
  socket = io.connect("https://hidy.glitch.me:443");
  socket.emit("start", "Hello Shawn!");
  id = socket.emit('getid');

  socket.on("get", function(data) {
    if (state == "SERVERLIST") {
      servers = new Map(Object.entries(data));
      serverlist.loopServers();
    }
  });
  
  socket.on("heartbeat", function(data) {
    console.log(data);
  });
}

function draw() {
  if (state == "GAME") {
    game.show();
  } else if (state == "SERVERLIST") {
    serverlist.show();
  } else {
    menu.show();
  }
  updateTouch();
}

function mouseClicked() {
  if (state == "MENU") {
    menu.evalClick();
  }
  if (state == "SERVERLIST") {
    serverlist.evalClick();
  }
}

function touchStarted(){
  touch = true;
  if (isMobile) {
    if (state == "MENU") {
      menu.evalClick();
    }
    if (state == "SERVERLIST") {
      serverlist.evalClick();
    }
  }
}

function updateTouch() {
  if (touch == true) {
    
  }
}

function touchEnded() {
  touch = false;
}

function emitToServer(func, msg) {
  socket.emit(func, msg);
}

function declare() {
  isMobile = (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  if (!isMobile) {
    dispX = displayWidth / 2;
    dispY = displayHeight / 2;
  } else {
    dispX = displayHeight;
    dispY = displayWidth - 109;
  }
}

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}