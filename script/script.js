console.log("Hello world");
function computerchoice(){
    const randomNum=Math.random();
    if (randomNUM <0.34){
        return "rock";
    }
    else if (randomNum <0.67) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
function humanchoice(){
    return prompt("Enter rock paper scissors").toLowerCase();
}
function playround(humanchoice,computerchoice){
    if(humanchoice==computerchoice){
        console.log("it is a tie");
    }
    else if ((humanchoice=="rock" && computerchoice=="scissors")||
    (humanchoice=="paper"&&computerchoice=="rock")||
    (humanchoice=="scissors"&&computerchoice=="paper")){
        console.log("You win!!");

    }
    else{
        console.log("you lose");
    }   

}
const human=humanchoice();
const computer=computerchoice();
playround(human,computer)
