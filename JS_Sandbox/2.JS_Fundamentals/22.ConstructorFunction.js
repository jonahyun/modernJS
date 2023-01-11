// costruction function

function Player(playerName, position, activeRoster, yearInLeague, skills) {
  this.playerName = playerName;
  this.position = position;
  this.activeRoster = activeRoster;
  this.yearInLeague = yearInLeague;
  this.skills = skills;
}

let player1 = new Player('Joe Burrow', 'Quarterback', true, 3, ["throwing", "running"]);
let player2 = new Player('Joe Mixon', 'Runningback', true, 6, ["Running", "Jumping"]);

console.log(player1, player2);