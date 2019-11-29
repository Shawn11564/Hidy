// When the user creates or joins a game, they are connected to the server as a client
// We need to have a waiting room while players join (countdown to start)
// Once the countdown ends, a seeker should be chosen randomly from the clients
// The seeker is spawned in a set location and the hiders are spawned in random locations
//
// While the game is running:
// Draw the current view for the client (different views for different clients)
// The server will send a heartbeat that updates the locations of all other clients
// We will have to store location data as one variable to make the heartbeat only require one variable from each client
// We need a way for the seeker to "catch" a hider
//      - hider appears for the seeker when the flashlight is on the hider, then the seeker clicks to capture them
// Captured hiders should be set to spectate
//   Spectators have a different view (arrows to cycle who they are spectating)
//   Easiest way is to have the entire view of the client sent through the heartbeat, allowing the spectator to be given that view

class Game {
  constructor() {}

  show() {
    background(random(255));
  }
}