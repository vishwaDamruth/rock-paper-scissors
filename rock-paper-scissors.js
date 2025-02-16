let humanchoice = function(){
    let choice = window.prompt("Enter your choice:");
    console.log("hello " + choice);
    return choice; 
}

let computerchoice = function(){
    randomchoice = Math.floor(3 * Math.random());
    
    if(randomchoice == 0){
        return "Rock";
    }
    else if(randomchoice == 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}



let one = computerchoice();
let two = humanchoice();

let one_score =0;
let two_score = 0;



for(let i = 0; i < 5;i++){

    one = computerchoice();
    two = humanchoice();  
    
    one = one.toLocaleLowerCase();
    two = two.toLocaleLowerCase();



    
    if(one == two){
        alert("Draw!!! No one gets points lol");
    }
    else if(one == "rock" && two == "paper"){
        two_score++;
        alert("Yay you win!!!");

    }
    else if(one == "rock" && two == "scissors"){
        one_score++;
        alert("You lose. Better luck next time:(");
    }
    else if(one == "paper" && two == "rock"){
        one_score++;
        alert("You lose. Better luck next time:(");

    }

    else if(one == "paper" && two == "scissors"){
        two_score++;
        alert("Yay you win!!!");
    }

    else if(one == "scissors" && two == "rock"){
        two_score++;
        alert("Yay you win!!!");
    }

    else if(one == "scissors" && two == "paper"){
        one_score++;
        alert("You lose. Better luck next time:(");
    }

}

console.log("Computer score: " + one_score + "Your Score: " + two_score);