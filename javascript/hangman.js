class Hangman {
  constructor(words) {
    this.words = words;
    this.secretArray = [];
    this.winner = [];
    this.letters = [];
    this.guessedLetters = [];
    this.secretWord = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    let word = this.words[Math.floor(Math.random() * this.words.length)];
    this.makeSecretArray(word);
    return word;
  }

  arrayCompare(_arr1, _arr2) {
    if (
        !Array.isArray(_arr1)
        || !Array.isArray(_arr2)
        || _arr1.length !== _arr2.length
    ) {
      return false;
    }

    const arr1 = _arr1.sort();
    const arr2 = _arr2.sort();

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        return true;
      } else {
        return false;
      }
    }
  }

  checkIfInWord(selected){
    console.log(selected);
    let winner = this.arrayCompare(this.secretArray, this.guessedLetters);
    if(winner){
      this.checkWinner();
    }

      if (this.secretWord.indexOf(selected) > -1){
        let temp = this.getIndexes(selected);
        for(let i=0; i<temp.length; i++){
          this.guessedLetters.push(selected);
        }
        // this.addCorrectLetter(selected);
        return true;
      } else {
        let gameOver = this.checkGameOver();
        if(!gameOver){
          if(this.checkClickedLetters(selected)) {
            return false;
          } else {
            this.addWrongLetter(selected);
            return false;
          }
        }
      }


  }

  checkClickedLetters(letter) {
    return this.letters.includes(letter);
  }

  addCorrectLetter(letter) {
      if(this.secretArray.contains(letter)&&!this.winner.contains(letter)){
        this.winner.push(letter);
      }
  }

  makeSecretArray(word) {
    let arr = [];
    for (let i = 0; i < word.length; i++) {
      this.secretArray.push(word.charAt(i));
    }
    //remove duplicates
    arr = [...new Set(this.secretArray)];
    console.log(arr.length);
    this.uniqueArr = arr;
    this.winnerArrLength = arr.length;
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
    this.letters.push(letter);
  }

  checkGameOver() {
    if(this.errorsLeft>0) {
      return false;
    } else {
      document.getElementById("hangman").style.display = "none";
      document.getElementById("game-over").style.display = "block";
      return true;
    }
  }

  checkWinner() {
      document.getElementById("hangman").style.display = "none";
      document.getElementById("winner").style.display = "block";
      return true;
  }

  getIndexes(val) {
    let indexes = [];
    console.log('val check', val);
    for (let i = 0; i < this.secretArray.length; i++) {
      if (this.secretArray[i] === val) {
        indexes.push(i);
      }
    }
    return indexes;
  }

  checkIfLetter(keyCode) {
    switch (keyCode){
      case 65:
        return this.checkIfInWord("a");
        break;
      case 66:
        return this.checkIfInWord("b");
        break;
      case 67:
        return this.checkIfInWord("c");
        break;
      case 68:
        return this.checkIfInWord("d");
        break;
      case 69:
        return this.checkIfInWord("e");
        break;
      case 70:
        return this.checkIfInWord("f");
        break;
      case 71:
        return this.checkIfInWord("g");
        break;
      case 72:
        return this.checkIfInWord("h");
        break;
      case 73:
        return this.checkIfInWord("i");
        break;
      case 74:
        return this.checkIfInWord("j");
        break;
      case 75:
        return this.checkIfInWord("k");
        break;
      case 76:
        return this.checkIfInWord("l");
        break;
      case 77:
        return this.checkIfInWord("m");
        break;
      case 78:
        return this.checkIfInWord("n");
        break;
      case 79:
        return this.checkIfInWord("o");
        break;
      case 80:
        return this.checkIfInWord("p");
        break;
      case 81:
        return this.checkIfInWord("q");
        break;
      case 82:
        return this.checkIfInWord("r");
        break;
      case 83:
        return this.checkIfInWord("s");
        break;
      case 84:
        return this.checkIfInWord("t");
        break;
      case 85:
        return this.checkIfInWord("u");
        break;
      case 86:
        return this.checkIfInWord("v");
        break;
      case 87:
        return this.checkIfInWord("w");
        break;
      case 88:
        return this.checkIfInWord("x");
        break;
      case 89:
        return this.checkIfInWord("y");
        break;
      case 90:
        return this.checkIfInWord("z");
        break;
      default:
        return "Pick a letter";
    }
  }
}



let hangman, hangmanCanvas;

const startGameButton = document.getElementById('start-game-button');
const restartGame = document.getElementById('restart-game-button');

restartGame.addEventListener('click', ()=>window.location.reload());

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();

  });
}



document.addEventListener('keydown', event => {
  // React to user pressing a key
  console.log(event.keyCode);
  console.log(event.key);
  const val = event.key;
  const isInWord = hangman.checkIfLetter(event.keyCode);
  const letters = hangman.letters;

  if(isInWord){
    // let indexLetter= {x: 425, y: 325};
    let indexes = hangman.getIndexes(val);
    console.log(indexes);
    for(let i=0; i<indexes.length; i++){
      if(indexes[i]===0){
        hangmanCanvas.drawLetter(val, 425, 325);
      }else{
        hangmanCanvas.drawLetter(val, 425+(indexes[i]*100), 325);
      }
    }

  } else {
    letters.forEach((letter, index)=>{
      let positionX = 500;
      let positionY = 20;
      let nextrow7 = 40;
      if(index<7){
        if(index===0){
          hangmanCanvas.drawLetter(letter, positionX, positionY);
        }else{
          hangmanCanvas.drawLetter(letter, positionX+(index*50), positionY);
        }
      }else if(index<14){
        if(index===8){
          hangmanCanvas.drawLetter(letter, positionX, positionY+nextrow7);
        }else{
          hangmanCanvas.drawLetter(letter, positionX+((index-8)*50), positionY+nextrow7);
        }
      }
    });
    hangmanCanvas.drawHangman(hangman.errorsLeft);
  }

});
