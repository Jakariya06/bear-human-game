function getUserChoice(userInput) {
 userInput = userInput.toLowerCase();   
 if (userInput=== 'bear'|| userInput=== 'human' || userInput=== 'gun') {
     return userInput
 }
 else {
     return 'Error, your input is must be in valid option'; 
 }

}

//console.log(getUseChoice('human'));
//console.log(getUseChoice('haFmNn'));
//console.log(getUseChoice('BeAr'));

function getComputerChoice() {
    var randomNumber = Math.floor(Math.random()* 3);
    if (randomNumber===0) {
        return 'bear';
    }
    else if (randomNumber===1) {
        return 'human';
    }
    else {
        return 'gun';
    }
}

//console.log(getComputerChoice());

function whoWin(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'The Game is a Tie';
    }
//human choice
if (userChoice ==='human') {
    if (computerChoice==='bear') {
      return 'kamu kalah sama bear';
    }
    else {
        return 'kamu kalah sama gun';
    }
}
// bear choice
if (userChoice ==='bear') {
    if (computerChoice==='gun') {
      return 'kamu kalah sama gun';
    }
    else {
        return 'kamu menang sama human'
    }   
}

if (userChoice ==='gun') {
    if (computerChoice==='human') {
      return 'kamu menang sama human';
    }
    else {
        return 'kamu menang sama bear';
    } 
}
}

//console.log(whoWin('gun', 'gun'));

function playGame() {
    promptUserChoice = prompt('please select human, bear or gun');
    var userChoice = getUserChoice(promptUserChoice);
    var computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(whoWin(userChoice, computerChoice));
}

playGame();
