const game = () => {

    let pScore = 0;
    let cScore = 0;
    const winner = document.querySelector('.winner');


    //start the game
    const startGame = () => {
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playButton.addEventListener('click', () => {

            
            introScreen.classList.add('fadeOut')
            match.classList.add('fadeIn');
            match.classList.remove('.fadeOut')
        });
    };
  
    //play the match
    const playMatch = () => {
        const options = document.getElementById("play")
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');


        hands.forEach(hand => {
            hand.addEventListener('animationend', function () {
                this.style.animation = '';
                winner.style.animation = '';
            });
        });
        //computer options
        const computerOptions = ['rock', 'paper', 'scissors'];

        

            options.addEventListener('keyup', function (e) {
            console.log("a key was pressed!")
            if (e.key === 'Enter') {
              // code for enter
              //computer choice
              const computerNumber = Math.floor(Math.random() * 3);
              const computerChoice = computerOptions[computerNumber];
              winner.textContent = 'Rock Paper Scissors!';
              
              setTimeout(() => {
                  //here is where we call compareHands
              
              

              //update images
              playerHand.src = `./assets/${document.getElementById("hand1").value.toLowerCase().trim()}.png`;
              computerHand.src = `./assets/${computerChoice}.png`;
              compareHands(this.textContent, computerChoice);
              }, 2000)


              //Animation
              computerHand.src = `./assets/rock.png`;
              playerHand.src = `./assets/rock.png`;
              playerHand.style.animation = 'shakePlayer 2s ease';
              computerHand.style.animation = 'shakeComputer 2s ease';
              winner.style.animation = 'shakeComputer 2s ease';
            }
            });

            options.addEventListener('click', function() {

                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                winner.textContent = 'Rock Paper Scissors!';
                
                setTimeout(() => {
                    //here is where we call compareHands
                
                

                //update images
                playerHand.src = `./assets/${document.getElementById("hand1").value.toLowerCase().trim()}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
                compareHands(this.textContent, computerChoice);
                }, 2000)


                //Animation
                computerHand.src = `./assets/rock.png`;
                playerHand.src = `./assets/rock.png`;
                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';
                winner.style.animation = 'shakeComputer 2s ease';
                
            });

    
    };

    


    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.player2-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
        

    };

    const compareHands = (playerChoice, computerChoice) => {

        playerChoice = document.getElementById("hand1").value.toLowerCase().trim();
        //checking for a tie
        if(playerChoice === computerChoice) {
            winner.textContent = 'It is a tie!';
            return;
            
        };

        //check for rock
        if(playerChoice === 'rock') {
            if(computerChoice === 'scissors') {
                winner.textContent = 'Player Wins!'
                pScore++;
                updateScore();
                return;
                
            }

            else {
                winner.textContent = 'Computer Wins!';
                cScore ++;
                updateScore();
                return;
                
            };
        };

        //check for paper

        if(playerChoice === 'paper') {
            if(computerChoice === 'rock') {
                winner.textContent = 'Player Wins!';
                pScore++;
                updateScore();
                return;
            }

            else {
                winner.textContent = 'Computer Wins!';
                cScore++;
                updateScore();
                return;
            };
        };


        //check for scissors
        if(playerChoice === 'scissors') {
            if(computerChoice === 'paper') {
                winner.textContent = 'Player Wins!';
                pScore++;
                updateScore();
                return;
            }

            else {
                winner.textContent = 'Computer Wins!';
                cScore++;
                updateScore();
                return;
            };
        };
        
        winner.textContent = 'NOT ROCK PAPER OR SCISSORS!';
        return;


    }
  
///call all the inner functions
startGame();
playMatch();
}




game();