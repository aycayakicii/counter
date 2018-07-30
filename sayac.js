/*
const Counter{
  Current :0;

}

function functionName() {
 document.getElementById('plus')
}
function functionName() {
 document.getElementById('minus')
}
function functionName() {
 document.getElementById('reset')
}


function render {
  const screen=document.getElementById('screen');
  screen.innerText=state.current;

}
document.getElementById('counter').addEventListener(
  'click'
  function(){
   counter();
   render();
}
)

document.getElementById('reset').addEventListener(
  'click'
  function(){
   counter();
   render();
}
)


--------------------


var count= 0;
var countButton = document.getElementById("countButton");
var displayCount = document.getElementById("displayCount");
   countButton.onclick = function(){
   count++;
       displayCount.innerHTML = count;
   }
   resetButton.onclick = function(){
        count = 0;
       displayCount.innerHTML = count;
    }



------------



const state = {
  current:0,
}


function counter(){
  state.current++;
}

function reset(){
  state.current=0;
}

function render() {
  const counter=document.getElementById('counter');
  counter.innerText=state.current;

}
document.getElementById('counter').addEventListener(
  'click' ,
  function(){
   counter();
   render();
}
)

document.getElementById('reset').addEventListener(
  'click' ,
  function(){
   counter();
   render();
}
)

*/
////////// !!!!!!!! ÇALISIYORRRRR   :))))))
 var count=0;

document.getElementById("counter"). addEventListener("click", increment);
function increment(){
    count++;
    document.getElementById('counter').innerText=count;
  };

document.getElementById("reset").addEventListener("click",reset);
function reset(){
    count=0;
    document.getElementById("counter").innerText=count;
}
