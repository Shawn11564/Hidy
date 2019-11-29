class GameServer {
  constructor(id) {
    this.id = id;
    this.sockets = [];
    console.log('game made');
  }
  
  addClient(socket) {
    this.sockets.push(socket);
    console.log('beef');
    console.log('chicken');
  }
  
}

module.exports = GameServer;