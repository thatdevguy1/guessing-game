// Get score element
let scoreEl = our score dom element
// get text (info text) element
let textEl = our text element
// get start button
let startBtn = btn element
// get parent div for 3 choices
let cupWrapper = cup wrapper element

//STATE
score = {
    //wins
    //losses
}

//keeps track of where the ball is
cups = [0, 0, 1]

//user cup selection
selectedCup = 0;

infoText = "press start to play"


//LISTENERS

startBtn.eventListener(click, init)

cupWrapper.eventListener(click, cupSelect)


//FUNCTIONS
init(){
    infoText = "select a cup for the winner ball"

    //randomize winner ball for cups
    randomizeCup()
    render()
}


render(){
    //set info text to textEl
    textEl.textContent = infoText

    //set  win/loss for score on our score element
    scoreEl.textContent = score.win / score.loss
}

randomizeCup(){
    cups.forEach((cup, idx) => {
        cups[idx] = 0
    })

    let ranNum = Math.random(0 - 2);

    cups[ranNum] = 1
}

cupSelect(evt){
    let idNum = parse to int (evt.target.id)
    //selectedCup = idNum

    winLogic(cups[idNum])
  
}

winLogic(win){
    if(win){
        score.win++;
        infoText = "Nice you won, press start to play again"
    }else{
        score.lose++;
        infoText = "Sorry better luck next time, press start to play again"
    }
    render();
}
