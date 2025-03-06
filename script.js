let boxes=document.querySelectorAll(".box");
let btn=document.querySelector(".btn");
let btn2=document.querySelector(".btn2");
let msg_container=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let turnO=true;
let count=0;// track count for draw condtion;
const winning_pattern=[[0,1,2],[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],[2,4,6],
[3,4,5],[6,7,8]];
const resetgame=()=>{
    turnO=true;
    count=0;
    enablebox();
    msg_container.classList.add("hide");
}
boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
      console.log("box was clicked");
       if(turnO===true){ //  if player o turn make sure next turn should be X turn
        box.innerText="O";
        turnO=false;
       }
       else{
        box.innerText="X";
        turnO=true;
       }
       box.disabled=true;
       count++;
      let checkwin= checkwinner();
      if(count===9 && checkwin===false){
          gamedraw();
      }
    })
});
const gamedraw=()=>{
    msg.innerText=`Game Draw`;
    msg_container.classList.remove("hide");
    disablebox();
}
const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;// suppose we get one winner we will stop there;
    }
}
const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;// suppose we get one winner we will stop there;
        box.innerText="";
    }
}

const Winner=(wins)=>{
    msg.innerText=`Congratulations, Winner is ${wins}`;
    msg_container.classList.remove("hide");
    disablebox();
}
const checkwinner=()=>{
    for(let patterns of winning_pattern){
        // console.log(patterns);
        // console.log(patterns[0])
        // console.log(patterns[0],patterns[1],patterns[2])
        // console.log(boxes[patterns[0]],boxes[patterns[1]],boxes[patterns[2]]);
        let pos1=boxes[patterns[0]].innerText;
        let pos2=boxes[patterns[1]].innerText;
        let pos3=boxes[patterns[2]].innerText;
        if(pos1!="" && pos2!="" && pos2!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("Winner",pos1);
                Winner(pos1);
                return true;
            }
        }
        
    }
    return false;
}
btn2.addEventListener("click",resetgame);
btn.addEventListener("click",resetgame);