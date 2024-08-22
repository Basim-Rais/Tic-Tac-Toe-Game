let boxes = document.querySelectorAll(".box");
let resetbutt = document.querySelector(".restButt");
let newGamebutt = document.querySelector(".NewButt");
let showMsg = document.querySelector(".showMsg");
let Msg = document.querySelector("#msg");


let winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]


let turn = true;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
     if(turn === true){
        box.innerHTML = "o";
        turn = false;
     }else{
        box.innerHTML = "x";
        turn = true;
     }
     box.disabled = true;

     checkWinner();
    });  
});

const disButt = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableButt = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
};

const resetGame = () => {
    turn = true
    enableButt();
    showMsg.classList.add("hide");
};

const showWinner = (Winner) => {
    Msg.innerHTML = `Congratulation, winner is ${Winner}`;
    showMsg.classList.remove("hide");
    disButt();
};

const checkWinner = () => {

    for (let pattern of winPattern){

       let patt1 =  boxes[pattern[0]].innerHTML;
       let patt2 =  boxes[pattern[1]].innerHTML;
       let patt3 =  boxes[pattern[2]].innerHTML;
    
    
    if (patt1 != "" && patt2 != "" && patt3 != ""){
        if(patt1 === patt2 && patt2 === patt3){
            console.log("Winner", patt1);
            disButt();
            showWinner(patt1);
        }
     }
  }
};



newGamebutt.addEventListener("click", resetGame);
resetbutt.addEventListener("click", resetGame);

