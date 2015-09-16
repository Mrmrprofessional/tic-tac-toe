function Scores(row1, row2, row3, col1, col2, col3, diag1, diag2) {
  this.row1 = row1;
  this.row2 = row2;
  this.row3 = row3;
  this.col1 = col1;
  this.col2 = col2;
  this.col3 = col3;
  this.diag1 = diag1;
  this.diag2 = diag2;
}

Scores.prototype.addScore = function(gridId) {
    // gridId should pass in the span id of the selected grid
    // add to scores based on gridId
    switch (gridId) {
        case 1:
            this.row1 += 1; this.col1 += 1; this.diag1 += 1;
            break;
        case 2:
            this.row1 += 1; this.col2 += 1;
            break;
        case 3:
            this.row1 += 1; this.col3 += 1; this.diag2 += 1;
            break;
        case 4:
            this.row2 += 1; this.col1 += 1;
            break;
        case 5:
            this.row2 += 1; this.col2 += 1; this.diag1 += 1; this.diag2 += 1;
            break;
        case 6:
            this.row2 += 1; this.col3 += 1;
            break;
        case 7:
            this.row3 += 1; this.col1 += 1; this.diag2 += 1;
            break;
        case 8:
            this.row3 += 1; this.col2 += 1;
            break;
        case 9:
            this.row3 += 1; this.col3 += 1; this.diag1 += 1;
            break;
    }
}

Scores.prototype.findWinner = function() {
    if( this.row1 === 3 || this.row2 === 3 || this.row3 === 3 ||
        this.col1 === 3 || this.col2 === 3 || this.col3 === 3 ||
        this.diag1 === 3 || this.diag2 === 3){
        return true;
    }
}

function Players(playerOne, computer) {
    this.playerOne = playerOne;
    this.computer = computer;
}

Players.prototype.something = function() {
    // something
}
