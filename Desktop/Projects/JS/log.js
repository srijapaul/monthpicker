let userscore=0;
let computerscore=0;

const choices=document.querySelectorAll('.choice');
const mgs=document.querySelector('#mgs');
const userScore=document.querySelector('#user-score');
const computerScore=document.querySelector('#comp-score');

const genCompChoice=()=>{
    let options=['rock','paper','scissors'];
    let ranIdx=Math.floor(Math.random()*3)
    return options[ranIdx];
}
const drawgame=()=>{
    console.log("draw");
    mgs.innerText="draw";
    mgs.style.backgroundColor="#1282A2";
}
const showWinner=(userwin)=>{
    if(userwin){
        userscore++;
        userScore.innerText=userscore;
        console.log("you win");
        mgs.innerText="user wins";
        mgs.style.backgroundColor="green";
    }else{
        computerscore++;
        computerScore.innerText=computerscore;    
        console.log("fuck!! you stupid df");
        mgs.innerText="computer wins";
        mgs.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    //console.log(userChoice);
    const compChoice=genCompChoice();
    console.log(compChoice);

    if(userChoice===compChoice){
        drawgame();
    }else{
        userwin=true;
        if(userChoice==='rock'){
            userwin= compChoice==='paper'?false:true;
        }else if(userChoice==='paper'){
            userwin= compChoice==='scissors'?false:true;
        }else{
            userwin=compChoice==='rock'?false:true; 
        }
        showWinner(userwin);
}};

choices.forEach((choice)=>{
       choice.addEventListener("click", ()=>{
        console.log(choice.id);
        const userChoice=choice.id;
        playGame(userChoice);
    });
});
