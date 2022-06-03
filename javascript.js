let rps = ['rock', 'paper', 'scissors'];

function computerPlay() {
  let rando = Math.floor(Math.random() * rps.length);
  let choice = rps[rando];
  return choice;
}

function userPlay() {
  let choice = prompt("Choose rock, paper, or scissors: ");
  //toLowerCase doesn't work here, try something else
  if (choice.toLowerCase() == "rock" || choice.toLowerCase() == "paper" || choice.toLowerCase() == "scissors") {
    return choice;
  }
  else {
    console.log("you have to pick between rock, paper, or scissors");
  }
}

function playRound(computer_choice, player_choice) {
  let player_num = rps.indexOf(player_choice);
  let computer_num = rps.indexOf(computer_choice);
  if (computer_num == player_num) {
    return "You picked the same. Its a tie.";
  }
  if (computer_num == 0 && player_num == 2) {
    return 0;
    //return "You lose! Rock beats scissors.";
  }
  if (computer_num == 0 && player_num == 1) {
    return 1;
    //return "You win! Paper beats rock.";
  }
  if (computer_num == 1 && player_num == 2) {
    return 1;
    //return "You win! Scissors beats paper.";
  }
  if (computer_num == 1 && player_num == 0) {
    return 0;
  //  return "You lose! Paper beats rock.";
  }
  if (computer_num == 2 && player_num == 0) {
    return 1;
    //return "You win! Rock beats scissors.";
  }
  if (computer_num == 2 && player_num == 1) {
    return 0;
    //return "You lose! Scissors beats paper.";
  }
}

function game() {
  let computer_wins = 0;
  let player_wins = 0;
  for (let i = 0; i < 5; i++) {
    let player_choice = userPlay();
    let computer_choice = computerPlay();
    let winner = playRound(computer_choice, player_choice);
      if (winner == 0) {
        computer_wins += 1;
        console.log("computer score is: " + computer_wins);
        console.log("Computer wins this round");
      }
      else if (winner == 1) {
        player_wins += 1;
        console.log("player score is: " + player_wins);
        console.log("You win this round!");
      }
  }
  if (player_wins > computer_wins) {
    console.log("player has: " + player_wins);
    console.log("computer has: " + computer_wins);
    console.log("You win!");
  }
  else if (computer_wins > player_wins) {
    console.log("player has: " + player_wins);
    console.log("computer has: " + computer_wins);
    console.log("The computer wins!");
  }
  else if (computer_wins == player_wins){
    console.log("player has: " + player_wins);
    console.log("computer has: " + computer_wins);
    console.log("Its a tie!");
  }
}

console.log(game());
