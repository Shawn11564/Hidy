// When the user picks serverlist, we need to connect to the server somehow to pull a list of all running games
// We also need to have a button to create a game
// Password protected games are not in v1.0.0

class List {
  
  constructor() {
    this.back = new Button(50, 25, 100, 50, "Menu", 30, 100, 200, 50, 170, 123, 195);
    this.clear = new Button(width - 50, 25, 100, 50, "Clear", 30, 100, 200, 50, 170, 123, 195);
    this.add = new Button(width / 2, 25, 200, 50, "Create Game", 30, 100, 200, 50, 170, 123, 195);
    this.list = [];
    this.loopServers();
    this.array = new ARList(width / 2, 100, 100, 25, this.list, 20, 30, 100, 200, 50, 170, 123, 195);
  }
  
  show() {
    background(83, 28, 179);
    this.back.show();
    this.clear.show();
    this.add.show();
    this.array.show();
  }
  
  loopServers() {
    this.list = [];
    if (servers != null) {
      this.list = Array.from(servers.keys());
      this.array = new ARList(width / 2, 100, 200, 25, this.list, 20, 30, 100, 200, 50, 170, 123, 195);
    }
  }
  
  evalClick() {
    if (this.back.clicked()) {
      state = "MENU";
    }
    if (this.clear.clicked()) {
      emitToServer('clear');
      this.loopServers();
    }
    if (this.add.clicked()) {
      var sid = Math.random().toString(36).substr(2, 5);
      console.log('1');
      emitToServer('create', sid);
      console.log('2');
      emitToServer('addtoserver', sid);
      console.log('3');
      console.log('4');
      state = "GAME";
      console.log('5');
    }
    if (this.array.clicked() != null) {
      console.log('clicked');
    }
  }
  
}