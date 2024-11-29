class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.context.width = window.innerWidth;
    this.context.height = window.innerHeight;
    this.secretWord = secretWord;

  }

  createBoard() {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    // gallows stake
    this.context.beginPath();
    this.context.moveTo(10, 0);
    this.context.lineTo(10, 450);
    this.context.strokeStyle = "brown";
    this.context.stroke();
    // gallows crossbar
    this.context.beginPath();
    this.context.moveTo(0, 0);
    this.context.lineTo(300, 0);
    this.context.strokeStyle = "brown";
    this.context.stroke();
    //gallows triangle
    this.context.beginPath();
    this.context.moveTo(0, 100);
    this.context.lineTo(100, 0);
    this.context.strokeStyle = "brown";
    this.context.stroke();
    //gallows tag
    this.context.beginPath();
    this.context.moveTo(200, 0);
    this.context.lineTo(200, 80);
    this.context.strokeStyle = "brown";
    this.context.stroke();
    //gallows foot
    this.context.beginPath();
    this.context.moveTo(0, 450);
    this.context.lineTo(150, 450);
    this.context.strokeStyle = "brown";
    this.context.stroke();

    //draw lines for word
    let position = 0;
    let start = 400;
    let end = 450;
    console.log(this.secretWord.length);
    for(let i=0; i<this.secretWord.length; i++){
      console.log(i);
      this.context.beginPath();
      this.context.moveTo(start+position, 350);
      this.context.lineTo(end+position, 350);
      this.context.strokeStyle = "black";
      this.context.stroke();
      start += 50;
      end += 50;
      position += 50;
    }
  }

  drawHead(){
    this.context.beginPath();
    this.context.fillStyle = "bisque"; // #ffe4c4
    this.context.arc(200, 50, 30, 0, Math.PI * 2, true); // draw circle for head
// (x,y) center, radius, start angle, end angle, anticlockwise
    this.context.fill();
  }

  drawEye1(){
    // eyes
    this.context.beginPath();
    this.context.fillStyle = "green"; // color
    this.context.arc(210, 45, 3, 0, Math.PI * 2, true); // draw right eye
    this.context.fill();
  }

  drawEye2(){
    // eyes
    this.context.beginPath();
    this.context.fillStyle = "green"; // color
    this.context.arc(190, 45, 3, 0, Math.PI * 2, true); // draw left eye
    this.context.fill();
  }

  drawMouth(){
    this.context.beginPath();
    this.context.strokeStyle = "red"; // color
    this.context.arc(200, 50, 3, 0, Math.PI, true); // draw mouth point
    this.context.fill();
  }

  drawSmile(){
    this.context.beginPath();
    this.context.strokeStyle = "red"; // color
    this.context.lineWidth = 3;
    this.context.arc(200, 50, 20, 0, Math.PI, false); // draw semicircle for smiling
    this.context.stroke();
  }

  drawBody(){
    // body
    this.context.beginPath();
    this.context.moveTo(200, 80);
    this.context.lineTo(200, 180);
    this.context.strokeStyle = "navy";
    this.context.stroke();
  }

  drawArm1(){
    // arms
    this.context.beginPath();
    this.context.strokeStyle = "#0000ff"; // blue
    this.context.moveTo(200, 80);
    this.context.lineTo(150, 130);
    this.context.stroke();
  }

  drawArm2(){
    // arms
    this.context.beginPath();
    this.context.strokeStyle = "#0000ff"; // blue
    this.context.moveTo(200, 80);
    this.context.lineTo(250, 130);
    this.context.stroke();
  }

  drawLeg1(){
    // legs
    this.context.beginPath();
    this.context.strokeStyle = "orange";
    this.context.moveTo(200, 180);
    this.context.lineTo(150, 280);
    this.context.stroke();
  }
  drawLeg2(){
    // legs
    this.context.beginPath();
    this.context.strokeStyle = "orange";
    this.context.moveTo(200, 180);
    this.context.lineTo(250, 280);
    this.context.stroke();
  }

  drawLetter(letter, x, y){
    let upperLetter = letter.toUpperCase();
    console.log(upperLetter);
    this.context.fillStyle = "blue";
    this.context.font = "bold 40px Arial";
    this.context.textAlign = 'center';
    this.context.textBaseline = 'middle';
    this.context.fillText(upperLetter, x, y);
  }

  drawLines() {

  }

  writeCorrectLetter(index) {
    // ... your code goes here
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    switch(errorsLeft){
      case 9:
        this.drawHead();
        break;
      case 8:
        this.drawBody();
        break;
      case 7:
        this.drawArm1();
        break;
      case 6:
        this.drawArm2();
        break;
      case 5:
        this.drawLeg1();
        break;
      case 4:
        this.drawLeg2();
        break;
      case 3:
        this.drawEye1();
        break;
      case 2:
        this.drawEye2();
        break;
      case 1:
        this.drawMouth();
        break;
      default:
        return "Nothing is happening";

    }
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
