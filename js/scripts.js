// keeps track of user scores
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

// adds scores to score object based on their location in the grid
Scores.prototype.addScores = function(gridId) {
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

// determines winner by totalling scores of columns, rows, or diagonals
Scores.prototype.findWinner = function() {
    if( this.row1 === 3 || this.row2 === 3 || this.row3 === 3 ||
        this.col1 === 3 || this.col2 === 3 || this.col3 === 3 ||
        this.diag1 === 3 || this.diag2 === 3){
        return true;
    } else {
        return false;
    }
}

// create new player and computer player
var playerOneScores = new Scores(0,0,0,0,0,0,0,0);
var computerScores = new Scores(0,0,0,0,0,0,0,0);

// keeps track of available spots to move
var grids = [1, 2, 3, 4, 5, 6, 7, 8, 9];

$(document).ready(function(){
    $("button").click(function(){
        event.preventDefault();
        $(this).prop("disabled", true);
        $(this).text("O");
        // refers to id of button clicked
        var playerChoice = parseInt($(this).attr('id'));
        playerOneScores.addScores(playerChoice);
        grids.splice(grids.indexOf(playerChoice), 1);
         if(playerOneScores.findWinner() == true) {
            alert("You won!");
            location.reload();
        } else {
            // computer choice
            do {
                var computerChoice = Math.floor((Math.random() * 9) + 1);
            }
            while(grids.indexOf(computerChoice) === -1);
            grids.splice(grids.indexOf(computerChoice), 1);
            computerScores.addScores(computerChoice);

            $("button#" + parseInt(computerChoice)).prop("disabled", true);
            $("button#" + parseInt(computerChoice)).text("X");
            if(computerScores.findWinner() == true){
                alert("You lost!");
                location.reload();
            }
        }
    });
});
