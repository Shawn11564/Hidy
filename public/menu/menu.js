// When the user connects to the website, bring them to a main menu (server list & controls options)
// We don't need to connect them to the server yet

class Menu {
  constructor() {
    this.serverButton = new Button(width / 2, height / 2, width / 2, 50, "View Servers", 30, 100, 200, 50, 170, 123, 195);
    this.infoButton = new Button(width / 2, height - height / 3, width / 2, 50, "How to Play", 30, 100, 200, 50, 170, 123, 195);
    this.title = new Label("Hid(e)y", width / 2, height / 3 - 20, 100, 146, 151, 196);
  }

  show() {
    background(83, 28, 179);
    this.serverButton.show();
    this.infoButton.show();
    this.title.show();
  }

  evalClick() {
    if (this.serverButton.clicked()) {
      state = "SERVERLIST";
    }
    if (this.infoButton.clicked()) {
      console.log("clicked 2");
    }
  }
}
