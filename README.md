# Mastermind

### Live Site: [Mastermind](https://hansaem-kim.github.io/REACH_Mastermind/)

![Screenshot](/mastermind_screenshot.png)

## Background
This version of mastermind game was implemented as a coding challenge for LinkedIn's REACH program.

## Functionality
* When users click a peg, the mouse cursor changes to the peg color to easily identify which peg they have picked.
* The gameboard shakes when users attempt to check their guess without filling every position.
* A green dot indicates the row users are currently on.
* A timer keeps track of time on the current game.
* When users check their guess, it provides a feedback as a hint.

## Implementation Process
### Day 1
* Plan the features.
* Setup the project.
### Day 2
* Create the gameboard.
* Create the welcome modal.
### Day 3
* Implement peg selection UI (wavered between 'simply clicking the peg in order' and 'switching mouse cursors to indicate selected peg').
* Build a function to check the guess.
* Implement a logic to provide a feedback on each guess.
### Day 4
* Make end-game modal with new game button.
* Implement a shaking feature to warn users to fill every code.
* Add timer.
* Finish styling.

## Code Snippets
The code below shows how I implemented a logic to provide a feedback on each guess. The major challenge was to account for duplicate numbers. I solved the challenge by keeping track of which position of the combination I have already checked.

```javascript
    giveFeedback(){
        //perfectGuess is for correct number & correct spot.
        //okayGuess is for correct number but incorrect spot.
        let perfectGuess = 0;
        let okayGuess = 0;
        let dummyCode = [];
        let dummyGuess = [];

        //create the copy of guess and secret-code so that they are not over written.
        for (let i=0; i<4; i++){
            dummyGuess[i] = this.guess[i];
            dummyCode[i] = this.secretPattern[i];
        }

        //for the guess & secret code pattern, change the number to 0 to indicate that it's already used.
        //check for correct number at correct position.
        for (let i=0; i<4; i++){
            if (dummyGuess[i] == dummyCode[i]){
                perfectGuess += 1;
                dummyGuess[i]=0;
                dummyCode[i]=0;
            }
        }

        //check for correct number at wrong position.
        for (let i=0; i<4; i++){
            if (dummyGuess[i] == 0) continue;
            for (let j=0; j<4; j++){
                if (dummyGuess[i] == dummyCode[j]){
                    okayGuess += 1;
                    dummyCode[j] = 0;
                    break;
                }
            }
        }

        //fill the feedback holes given the number of perfect guess and okay guess.
        let feedbackHoles = document.getElementsByClassName(`feedback-hole ${this.currentAttempt}`)
        for (let i=0; i<perfectGuess; i++){
            feedbackHoles[i].style.backgroundColor = 'red';
        }
        for (let i=perfectGuess; i<perfectGuess+okayGuess; i++){
            feedbackHoles[i].style.backgroundColor = 'white';
        }
    }
```


