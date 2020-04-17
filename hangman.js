var word = "delicious";
var wordLen = word.length;
var guessedWord = [];
var maxGuesses = 12;
var wins = 0;
var lettersGuessedArr = [];


for(var i = 0; i < wordLen; i ++)
{
    guessedWord.push("_");
}

document.getElementById("lets_play").innerText = "Press any key to get started!";

document.getElementById("wins").innerHTML = "Wins <br> " + wins;

document.getElementById("current_word").innerText = "Current Word";

document.getElementById("word").innerText = guessedWord.join("   ");

document.getElementById("remaining_guesses").innerHTML = "Number of guesses remaining: <br /> " + maxGuesses;

document.getElementById("guessed_letters").innerHTML = "Letters already guessed: <br /> " + lettersGuessedArr.join(" ");

document.onkeyup = function(event){
    
    var enteredChar = event.key;
    var charExistsIndex = charExists(enteredChar);
    var includesBool = guessedWord.includes(enteredChar);
    if(charExistsIndex !== -1 && !includesBool)
    {
        guessedWord[charExistsIndex] = enteredChar;
        document.getElementById("word").innerText = guessedWord.join("   ");
        ++wins;
        document.getElementById("wins").innerHTML = "Wins <br> " + wins;
    }
    else
    {
      if(!includesBool && !lettersGuessedArr.includes(enteredChar)){
        lettersGuessedArr.push(enteredChar);
        if(maxGuesses > 0)
            --maxGuesses;
        document.getElementById("remaining_guesses").innerHTML = "Number of guesses remaining: <br /> " + maxGuesses;
        document.getElementById("guessed_letters").innerHTML = "Letters already guessed: <br /> " + lettersGuessedArr.join(", ");
      }
    }
    
}

function charExists(enteredChar){
    var index = word.indexOf(enteredChar);
    console.log(index);
    return index;
}