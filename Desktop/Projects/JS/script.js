let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new-btn");
let mgsBar=document.querySelector(".mgs");
let para=document.querySelector("#m");

let turn0=true;
 
const winCombinations=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];
const resetGame=()=>{
    turn0=true;
    boxesEnabled();
    mgsBar.classList.add("hide");
    
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turn0){
            box.innerText="O";
            turn0=false;        
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const boxesDisabled=()=>{
    for(box of boxes){
        box.disabled=true;
    
    }
}
const boxesEnabled=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winnner)=>{
    m.innerText=`${winnner} is the winner`;
    mgsBar.classList.remove("hide");
    boxesDisabled();
}
const checkWinner=()=>{
    for(comb of winCombinations){
       // console.log(comb[0],comb[1],comb[2]);
        //1st we printed comb which showed the number of winning combinations
        //2nd comb[0] is the first element of the winning combination
        //3rd boxes[comb[0]] is extracting the value from each box of the winning combination
        //4th .innerText is putting X or O in the array of winning combination 
       // console.log(boxes[comb[0]].innerText,boxes[comb[1]].innerText,boxes[comb[2]].innerText);
       let pos1val=boxes[comb[0]].innerText;
       let pos2val=boxes[comb[1]].innerText;
       let pos3val=boxes[comb[2]].innerText;
       
       if(pos1val!="" && pos2val!="" && pos3val!=""){
        if(pos1val===pos2val && pos2val===pos3val) {
            
            showWinner(pos1val);
        }

       }
    }
};
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);