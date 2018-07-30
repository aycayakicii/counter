
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
