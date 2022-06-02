let rps = ['rock', 'paper', 'scissors'];

function computerPlay() {
  let rando = Math.floor(Math.random() * rps.length);
  let choice = rps[rando];
  return choice;
}
let computer_choice = computerPlay();

function userPlay() {
  //let choice = prompt("Choose rock, paper, or scissors: ");
  let choice = "rock"
  if (choice.toLowerCase() == "rock" || choice.toLowerCase() == "paper" || choice.toLowerCase() == "scissors") {
    return choice;
  }
  else {
    return "you have to pick between rock, paper, or scissors";
  }
}
let player_choice = userPlay();

function playRound(computer_choice, player_choice) {
  let player_num = rps.indexOf(player_choice);
  let computer_num = rps.indexOf(computer_choice);
  let computer_wins = 0;
  let player_wins = 0;

  for (let i = 0; i < 5; i++) {
    if (computer_num == player_num) {
      return "Its a tie.";
    }
    if (computer_num == 0 && player_num == 2) {
      computer_wins += 1
      return "You lose! Rock beats scissors.";
    }
    if (computer_num == 0 && player_num == 1) {
      player_wins += 1
      return "You win! Paper beats rock.";
    }
    if (computer_num == 1 && player_num == 2) {
      player_wins += 1
      return "You win! Scissors beats paper.";
    }
    if (computer_num == 1 && player_num == 0) {
      computer_wins += 1
      return "You lose! Paper beats rock.";
    }
    if (computer_num == 2 && player_num == 0) {
      player_wins += 1
      return "You win! Rock beats scissors.";
    }
    if (computer_num == 2 && player_num == 1) {
      computer_wins += 1
      return "You lose! Scissors beats paper.";
    }
  }
  if (player_wins > computer_wins) {
    return "You win!";
  }
  else {
    return "you lose!";
  }
}

function game() {

}

console.log(playRound(computer_choice, player_choice))
