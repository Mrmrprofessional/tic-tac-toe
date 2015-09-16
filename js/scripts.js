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

Scores.prototype.addScores = function(gridId) {
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

// create new player and computer player
var playerOneScores = new Scores(0,0,0,0,0,0,0,0);


// determines who goes first
// if(Math.floor((Math.random() * 2) + 1) == 0) {
//     return "PlayerOne";
// } else{
//     return "Computer";
// }



// chooses grid for computer
var grids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var computerPick = function(){
    do {
        var choice = Math.floor((Math.random() * 9) + 1);
    }
    while(grids.indexOf(choice) === -1);
    grids.splice(grids.indexOf(choice), 1);
    computerScores.addScores(choice);
}


// PlayerOneScore.addScores(gridId);
//     //determine who plays first
//
//     //
//     computerPick();
// }

$(document).ready(function(){
    $("button").click(function(){
        event.preventDefault();
        $(this).prop("disabled", true);
        $(this).text("O");
        // refers to id of button clicked
        var choice = parseInt($(this).attr('id'));
        playerOneScores.addScores(choice);
        console.log(choice);
        grids.splice(grids.indexOf(choice), 1);
        console.log(playerOneScores);
    });
});
