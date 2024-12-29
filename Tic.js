let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newGamest = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turnO = true;//playerX playerO

const winPatter =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,5],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const restGame =() => {
    let turnO = true; //reset the turn
    enableBoxes();
    msgContainer.classList.add("hide");
};

    
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        
        if(turnO){
            // Player X
        box.innerText="O"
        turnO = false;
       }else{
        //player O
            box.innerText ="X";
        turnO =true;
       }
       box.disabled = true;

       checkWinner();
    });
});
const disabledBoxes =() => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes =() => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
const showWinner =(winner) => {
msg.innerText = `Congratulation , winner is ${winner}`;
 msgContainer.classList.remove("hide");
 disabledBoxes();

};
  
const checkWinner =() => {
    for(let pattern of winPatter){
   
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
    if(pos1Val ===pos2Val && pos2Val ===pos3Val){
        console.log("winner",pos1Val);

        showWinner(pos1Val);
    }
  } 
}
 // Check for a draw

 if ([...boxes].every(box => box.innerText)) {
    msg.innerText = "It's a draw!";
    msgContainer.classList.remove("hide");
    disabledBoxes();
}
};

newGamest.addEventListener("click", restGame);
reset.addEventListener("click", restGame);
