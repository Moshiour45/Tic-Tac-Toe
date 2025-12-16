let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let turnO = true;
let newGameBtn = document.querySelector("#newGameBtn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO){
            box.innerText = "O";
        }else{
            box.innerText = "X";
        }
        turnO = !turnO;
        box.disabled = true;
        checkWinner();
    })
})

const showWinner = (winner) =>{
    msg.innerText = `Congratulations our Winner is player${winner}!!!`;
    msgContainer.style.display = "flex";
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
                return;
            }
        }
        
    }
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
    }
}

const reset = () =>{
    turnO = true;
    enableBoxes();
    boxes.forEach((box) => {
        box.innerText = "";
    })

    msgContainer.style.display = "none";
}

resetBtn.addEventListener("click", reset)
newGameBtn.addEventListener("click", reset)