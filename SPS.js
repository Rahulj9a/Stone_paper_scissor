function CompCh(){
 let compchoice = Math.floor(Math.random()*(100)) + 1 ;
 let comp
 if(compchoice<33){
comp = "Stone";
 }
 else if (compchoice >=33 && compchoice < 66){
     comp = "Paper";
 }
 else{
     comp="Scissor";
 }

return comp;  
}

let scorejs = document.getElementById("score");

let finalresultjs = document.getElementById("resultfinal");
 
let scoretemp = 0;



 

function functionStone(){
    CompCh();
    let compchoice = CompCh();
    
    if(compchoice=="Scissor"){
        scoretemp++;
        finalresultjs.innerText = "You Win";
        
    }
    else if (compchoice == "Paper"){
        scoretemp--;
        finalresultjs.innerText= "You Lose";
       
    }
    else{
     finalresultjs.innerText="Game Tie";
 } 
 scorejs.innerText=scoretemp; 

}


function functionPaper(){
    CompCh();
    let compchoice = CompCh();
    
    if(compchoice  == "Scissor"){
        scoretemp--;
        finalresultjs.innerText= "You Lose";
        
    }
    else if (compchoice  == "Paper"){
        scoretemp++;
        finalresultjs.innerText = "You Win";
        
    }
    else{
        finalresultjs.innerText="Game Tie";
        }
        scorejs.innerText=scoretemp; 
        
}


function functionScissor(){
    CompCh();
    let compchoice = CompCh();
     
    if(compchoice == "Paper"){
        scoretemp++;
        finalresultjs.innerText= "You Win";
        
    }
    else if (compchoice == "Stone"){
        scoretemp--;
        finalresultjs.innerText = "You Lose";
        
    }
    else{
        finalresultjs.innertText="Game Tie";
    
    }
    scorejs.innerText=scoretemp; 
}


 
 