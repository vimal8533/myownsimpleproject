var time=document.getElementsByClassName("time");
var date=document.getElementsByClassName("date");
var running=false;
function updateclock(){
    var day=new Date().toLocaleDateString();
    date[0].innerHTML=day;
        var clock= new Date().toLocaleTimeString();
        time[0].innerHTML=clock;
}
function startclock(){
    if(!running){
         myclock=setInterval(updateclock, 1000);
        running=true
    }
}
function stopclock(){
    if(running){
clearInterval(myclock)
running=false;
    }
}





