var X = "https://media1.tenor.com/m/mJ_Og97j5WwAAAAC/chipi-chapa.gif"
var O = "https://i.pinimg.com/originals/3f/1b/ba/3f1bbacb688be6f52b2c1ffcd8a14c28.gif";
var turn = true , won =false ;
var vs = [false,false,false,false,false,false,false,false,false];
var boxes = [];

window.addEventListener('DOMContentLoaded', () =>{
    for(let i=0;i<9;++i){
        boxes.push(document.getElementById("player-pic-"+i));
        document.getElementById("player-turn-pic").src = (turn ? X : O);
    }
});

function boxClicked(n) {
    if(vs[n] || won) return;
    boxes[n].src = (turn ? X : O);
    document.getElementById("player-turn-pic").src = (turn ? O : X);
    turn = !turn;
    vs[n] = true;
    update();
}

function update(){
    won = true;
    if (boxes[0].src!="" && boxes[0].src==boxes[1].src && boxes[1].src==boxes[2].src){
        document.getElementById("player-turn-pic").src = boxes[0].src;
        document.getElementById("subtitle").innerHTML = " WIN!";
    }
    else if (boxes[3].src!="" && boxes[3].src==boxes[4].src && boxes[4].src==boxes[5].src){
        document.getElementById("player-turn-pic").src = boxes[3].src;
        document.getElementById("subtitle").innerHTML = " WIN!";
    }
    else if (boxes[6].src!="" && boxes[6].src==boxes[7].src && boxes[7].src==boxes[8].src){
        document.getElementById("player-turn-pic").src = boxes[6].src;
        document.getElementById("subtitle").innerHTML = " WIN!";
    }
    else if (boxes[0].src!="" && boxes[0].src==boxes[3].src && boxes[3].src==boxes[6].src){
        document.getElementById("player-turn-pic").src = boxes[0].src;
        document.getElementById("subtitle").innerHTML = " WIN!";
    }
    else if (boxes[1].src!="" && boxes[1].src==boxes[4].src && boxes[4].src==boxes[7].src){
        document.getElementById("player-turn-pic").src = boxes[1].src;
        document.getElementById("subtitle").innerHTML = " WIN!";
    }
    else if (boxes[2].src!="" && boxes[2].src==boxes[5].src && boxes[5].src==boxes[8].src){
        document.getElementById("player-turn-pic").src = boxes[2].src;
        document.getElementById("subtitle").innerHTML = " WIN!";
    }
    else if (boxes[0].src!="" && boxes[0].src==boxes[4].src && boxes[4].src==boxes[8].src){
        document.getElementById("player-turn-pic").src = boxes[0].src;
        document.getElementById("subtitle").innerHTML = " WIN!";
    }
    else if (boxes[2].src!="" && boxes[2].src==boxes[4].src && boxes[4].src==boxes[6].src){
        document.getElementById("player-turn-pic").src = boxes[2].src;
        document.getElementById("subtitle").innerHTML = " WIN!";
    } else {
        won = false;
        let tie = true;
        for(let i=0;i<9;++i)if(!vs[i])tie=false;
        if(!tie)return ;
        document.getElementById("player-turn-pic").style.display = "none";
        document.getElementById("subtitle").innerHTML = "TIE!";
    }
    document.getElementById("restart").style.display = 'block';
}