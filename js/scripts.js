// create new player and computer player
var playerOneScores = new Scores(0,0,0,0,0,0,0,0);
var computerScores = new Scores(0,0,0,0,0,0,0,0);
var playerWins = 0;
var computerWins = 0;
var difficultySelection;
console.log(playerOneScores.row1);

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
Scores.prototype.computerEasy = function() {
    do {
            computerChoice = Math.floor((Math.random() * 9) + 1);
        }while(grids.indexOf(computerChoice) === -1);
    return computerChoice;
}

Scores.prototype.computerHard = function() {
    var computerChoice;
    if( playerOneScores.row1 == 2){
        if(grids.indexOf(1) !== -1){
            computerChoice = 1;
        }else if (grids.indexOf(2) !== -1){
            computerChoice = 2;
        }else if (grids.indexOf(3) !== -1){
            computerChoice = 3;
        }
    }
    if ( playerOneScores.row2 == 2){
        if(grids.indexOf(4) !== -1){
            computerChoice = 4;
        }else if (grids.indexOf(5) !== -1){
            computerChoice = 5;
        }else if (grids.indexOf(6) !== -1){
            computerChoice = 6;
        }
    }
    if ( playerOneScores.row3 == 2){
        if(grids.indexOf(7) !== -1){
            computerChoice = 7;
        }else if (grids.indexOf(8) !== -1){
            computerChoice = 8;
        }else if (grids.indexOf(9) !== -1){
            computerChoice = 9;
        }
    }
    if ( playerOneScores.col1 == 2){
        if(grids.indexOf(1) !== -1){
            computerChoice = 1;
        }else if (grids.indexOf(4) !== -1){
            computerChoice = 4;
        }else if (grids.indexOf(7) !== -1){
            computerChoice = 7;
        }
    }
    if ( playerOneScores.col2 == 2){
        if(grids.indexOf(2) !== -1){
            computerChoice = 2;
        }else if (grids.indexOf(5) !== -1){
            computerChoice = 5;
        }else if (grids.indexOf(8) !== -1){
            computerChoice = 8;
        }
    }
    if ( playerOneScores.col3 == 2){
        if(grids.indexOf(3) !== -1){
            computerChoice = 3;
        }else if (grids.indexOf(6) !== -1){
            computerChoice = 6;
        }else if (grids.indexOf(9) !== -1){
            computerChoice = 9;
        }
    }
    if ( playerOneScores.diag1 == 2){
        if(grids.indexOf(1) !== -1){
            computerChoice = 1;
        }else if (grids.indexOf(5) !== -1){
            computerChoice = 5;
        }else if (grids.indexOf(9) !== -1){
            computerChoice = 9;
        }
    }
    if ( playerOneScores.diag2 == 2){
        if(grids.indexOf(3) !== -1){
            computerChoice = 3;
        }else if (grids.indexOf(5) !== -1){
            computerChoice = 5;
        }else if (grids.indexOf(7) !== -1){
            computerChoice = 7;
        }
    }
    if(computerChoice == undefined){
        do {
            computerChoice = Math.floor((Math.random() * 9) + 1);
        }while(grids.indexOf(computerChoice) === -1);
    }
    return computerChoice;
}

Scores.prototype.computerMaster = function() {
    var computerChoice;
    if( playerOneScores.row1 == 2){
        if(grids.indexOf(1) !== -1){
            computerChoice = 1;
        }else if (grids.indexOf(2) !== -1){
            computerChoice = 2;
        }else if (grids.indexOf(3) !== -1){
            computerChoice = 3;
        }
    }
    if ( playerOneScores.row2 == 2){
        if(grids.indexOf(4) !== -1){
            computerChoice = 4;
        }else if (grids.indexOf(5) !== -1){
            computerChoice = 5;
        }else if (grids.indexOf(6) !== -1){
            computerChoice = 6;
        }
    }
    if ( playerOneScores.row3 == 2){
        if(grids.indexOf(7) !== -1){
            computerChoice = 7;
        }else if (grids.indexOf(8) !== -1){
            computerChoice = 8;
        }else if (grids.indexOf(9) !== -1){
            computerChoice = 9;
        }
    }
    if ( playerOneScores.col1 == 2){
        if(grids.indexOf(1) !== -1){
            computerChoice = 1;
        }else if (grids.indexOf(4) !== -1){
            computerChoice = 4;
        }else if (grids.indexOf(7) !== -1){
            computerChoice = 7;
        }
    }
    if ( playerOneScores.col2 == 2){
        if(grids.indexOf(2) !== -1){
            computerChoice = 2;
        }else if (grids.indexOf(5) !== -1){
            computerChoice = 5;
        }else if (grids.indexOf(8) !== -1){
            computerChoice = 8;
        }
    }
    if ( playerOneScores.col3 == 2){
        if(grids.indexOf(3) !== -1){
            computerChoice = 3;
        }else if (grids.indexOf(6) !== -1){
            computerChoice = 6;
        }else if (grids.indexOf(9) !== -1){
            computerChoice = 9;
        }
    }
    if ( playerOneScores.diag1 == 2){
        if(grids.indexOf(1) !== -1){
            computerChoice = 1;
        }else if (grids.indexOf(5) !== -1){
            computerChoice = 5;
        }else if (grids.indexOf(9) !== -1){
            computerChoice = 9;
        }
    }
    if ( playerOneScores.diag2 == 2){
        if(grids.indexOf(3) !== -1){
            computerChoice = 3;
        }else if (grids.indexOf(5) !== -1){
            computerChoice = 5;
        }else if (grids.indexOf(7) !== -1){
            computerChoice = 7;
        }
    }
    if( computerScores.row1 == 2){
        if(grids.indexOf(1) !== -1){
            computerChoice = 1;
        }else if (grids.indexOf(2) !== -1){
            computerChoice = 2;
        }else if (grids.indexOf(3) !== -1){
            computerChoice = 3;
        }
    }
    if ( computerScores.row2 == 2){
        if(grids.indexOf(4) !== -1){
            computerChoice = 4;
        }else if (grids.indexOf(5) !== -1){
            computerChoice = 5;
        }else if (grids.indexOf(6) !== -1){
            computerChoice = 6;
        }
    }
    if ( computerScores.row3 == 2){
        if(grids.indexOf(7) !== -1){
            computerChoice = 7;
        }else if (grids.indexOf(8) !== -1){
            computerChoice = 8;
        }else if (grids.indexOf(9) !== -1){
            computerChoice = 9;
        }
    }
    if ( computerScores.col1 == 2){
        if(grids.indexOf(1) !== -1){
            computerChoice = 1;
        }else if (grids.indexOf(4) !== -1){
            computerChoice = 4;
        }else if (grids.indexOf(7) !== -1){
            computerChoice = 7;
        }
    }
    if ( computerScores.col2 == 2){
        if(grids.indexOf(2) !== -1){
            computerChoice = 2;
        }else if (grids.indexOf(5) !== -1){
            computerChoice = 5;
        }else if (grids.indexOf(8) !== -1){
            computerChoice = 8;
        }
    }
    if ( computerScores.col3 == 2){
        if(grids.indexOf(3) !== -1){
            computerChoice = 3;
        }else if (grids.indexOf(6) !== -1){
            computerChoice = 6;
        }else if (grids.indexOf(9) !== -1){
            computerChoice = 9;
        }
    }
    if ( computerScores.diag1 == 2){
        if(grids.indexOf(1) !== -1){
            computerChoice = 1;
        }else if (grids.indexOf(5) !== -1){
            computerChoice = 5;
        }else if (grids.indexOf(9) !== -1){
            computerChoice = 9;
        }
    }
    if ( computerScores.diag2 == 2){
        if(grids.indexOf(3) !== -1){
            computerChoice = 3;
        }else if (grids.indexOf(5) !== -1){
            computerChoice = 5;
        }else if (grids.indexOf(7) !== -1){
            computerChoice = 7;
        }
    }
    if(computerChoice == undefined){
        do {
            computerChoice = Math.floor((Math.random() * 9) + 1);
        }while(grids.indexOf(computerChoice) === -1);
    }
    return computerChoice;
}

Scores.prototype.computerTroll = function() {
    do {
            computerChoice = Math.floor((Math.random() * 9) + 1);
        }while(grids.indexOf(computerChoice) === -1);
    return computerChoice;
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

// keeps track of available spots to move
var grids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var icon = "<img width='100%' width='*' src='img/1.jpg'/>";
$(document).ready(function(){
    $("img.icon").click(function(){
        icon = "<img width='100%' width='*' src='" + $(this).attr('src') + "'/>";
        $(this).removeClass('icon');
        $("img.icon").effect("explode");
        var iconName = $(this).attr("alt");
        $("h4.choice").text("You Selected " + iconName + "!");
        $("img").unbind('click');
    });

    $("button.difficulty").click(function(){
        event.preventDefault();
        difficultySelection = $(this).attr('id');
    });

    $(".game button").click(function(){
        event.preventDefault();
        $(this).prop("disabled", true);
        $(this).text("");
        $(this).prepend(icon);
        // refers to id of button clicked
        var playerChoice = parseInt($(this).attr('id'));
        playerOneScores.addScores(playerChoice);
        grids.splice(grids.indexOf(playerChoice), 1);
        if(playerOneScores.findWinner() == true && difficultySelection == "troll"){
            $(".game button").prop("disabled", true);
            $(".game button").text("");
            $(".game button").prepend("<img width='100%' height='*' src='img/computer.jpg'/>");
            $(".game button").addClass('animated infinite flip')
            alert("You lose!...loser.");
            $(".game button").removeClass('animated infinite flip')
            $(".game button").prop("disabled", false);
            $(".game button").text("_");
            playerOneScores = new Scores(0,0,0,0,0,0,0,0);
            computerScores = new Scores(0,0,0,0,0,0,0,0);
            grids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            computerWins += 1;
            $("span#computer").text(computerWins);
        }else if(playerOneScores.findWinner() == true) {
            alert("You won!");
            $(".game button").prop("disabled", false);
            $(".game button").text("_");
            playerOneScores = new Scores(0,0,0,0,0,0,0,0);
            computerScores = new Scores(0,0,0,0,0,0,0,0);
            grids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            playerWins += 1;
            $("span#player").text(playerWins);
            // location.reload();
        } else if (grids.length == 0){
          alert("Its a draw!");
          $(".game button").prop("disabled", false);
          $(".game button").text("_");
          playerOneScores = new Scores(0,0,0,0,0,0,0,0);
          computerScores = new Scores(0,0,0,0,0,0,0,0);
          grids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        } else {
            // computer choice
            if (difficultySelection == "hard") {
                computerChoice = computerScores.computerHard();
            } else if (difficultySelection == "master" || difficultySelection =="troll"){
                computerChoice= computerScores.computerMaster();
            } else {
                computerChoice = computerScores.computerEasy();
            }
            console.log(grids);
            console.log(computerChoice);
            grids.splice(grids.indexOf(computerChoice), 1);
            console.log(grids);

            computerScores.addScores(computerChoice);

            $(".game button#" + computerChoice).prop("disabled", true);
            $(".game button#" + computerChoice).text("");
            $(".game button#" + computerChoice).prepend("<img width='100%' height='*' src='img/computer.jpg'/>");
            if(computerScores.findWinner() == true){
                alert("You got rekt!");
                $(".game button").prop("disabled", false);
                $(".game button").text("_");
                playerOneScores = new Scores(0,0,0,0,0,0,0,0);
                computerScores = new Scores(0,0,0,0,0,0,0,0);
                grids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                computerWins += 1;
                $("span#computer").text(computerWins);
            }
        }
    });
});
