
var i = 1;
var rightGuess = 0;
var wrongGuess = 0;
while(i<=5){
    var guessNumber = prompt("Enter a guess number between 0 to 10: ");
    var randomNumber = Math.floor(Math.random() * 10) + 1;

    if(randomNumber == guessNumber){
        document.write("You guess was right!<br/>" + randomNumber);
        //rightGuess  = rightGuess + 1;
        rightGuess += 1;
    }
    else{
        document.write("You guess was wrong, the number was "+ randomNumber + "Your guess was " + guessNumber  + "<br/>");
        wrongGuess += 1;
    }
    i++;
}

document.write("<h1>You total right guess: </h1>: "+ rightGuess);
document.write("<h1>You total wrong guess: </h1>: "+ wrongGuess);