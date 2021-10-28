


function rollDice(){
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var dice1 = "images/dice" + randomNumber1 +".png";
    var dice2 = "images/dice" + randomNumber2 +".png";

    document.getElementById("dice1").src = dice1;
    document.getElementById("dice2").src = dice2;

    if(randomNumber1 < randomNumber2){
        document.getElementById("text").innerHTML = "Player 2 Wins!";
    }
    else if(randomNumber1 > randomNumber2){
        document.getElementById("text").innerHTML = "Player 1 Wins!";
    }
    else{
        document.getElementById("text").innerHTML = "Draw!";
    }

}