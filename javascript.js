let rps = ['rock', 'paper', 'scissors'];

function computerPlay() {
  let rando = Math.floor(Math.random() * rps.length);
  let choice = rps[rando];
  return choice;
}

//function userPlay(choice) {
//  choice = button.textContent;
//  return choice;
//}
let round = 0;
let computer_wins = 0;
let player_wins = 0;

function playRound(computer_choice, player_choice) {
  let player_num = rps.indexOf(player_choice);
  let computer_num = rps.indexOf(computer_choice);
  if (round < 5) {
    if (computer_num == player_num) {
      return score.innerHTML = "You picked the same. Its a tie.";
    }
    if (computer_num == 0 && player_num == 2) {
      computer_wins += 1;
      //return "You lose! Rock beats scissors.";
    }
    if (computer_num == 0 && player_num == 1) {
      player_wins += 1;
      //return "You win! Paper beats rock.";
    }
    if (computer_num == 1 && player_num == 2) {
      player_wins += 1;
      //return "You win! Scissors beats paper.";
    }
    if (computer_num == 1 && player_num == 0) {
      computer_wins += 1;
    //  return "You lose! Paper beats rock.";
    }
    if (computer_num == 2 && player_num == 0) {
      player_wins += 1;
      //return "You win! Rock beats scissors.";
    }
    if (computer_num == 2 && player_num == 1) {
      computer_wins += 1;
      //return "You lose! Scissors beats paper.";
    }
    return score.innerHTML = "Player score is: " + player_wins +
          "<br>Computer score is: " + computer_wins;
  }
  else {
    if (computer_wins > player_wins){
      return score.innerHTML = "Game over" +
      "<br>Player score is: " + player_wins +
      "<br>Computer score is: " + computer_wins +
      "<br> Computer wins!"
    }
    else if (player_wins > computer_wins) {
      return score.innerHTML = "Game over" +
      "<br>Player score is: " + player_wins +
      "<br>Computer score is: " + computer_wins +
      "<br> Player wins!"
    }
    else if (player_wins == computer_wins) {
      return score.innerHTML = "Game over" +
      "<br>Player score is: " + player_wins +
      "<br>Computer score is: " + computer_wins +
      "<br> Its a tie!"
    }
  }
}



const score = document.createElement('div');

score.classList.add('score')
container.appendChild(score)

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(computerPlay(), button.textContent);
    round += 1;
  });
});
