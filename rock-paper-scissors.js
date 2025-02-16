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

