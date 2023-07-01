var head=document.getElementsByTagName("h3")
var conTent=document.getElementsByClassName("conTent");
var bod=document.getElementsByTagName("body")
var btn=document.getElementsByTagName("button")
var greet="";

var time=new Date();
var hrs=time.getHours();
var AMPM="AM";
if(hrs>=12){
    AMPM="PM"
    hrs-=12;
}
if((hrs>=4 && AMPM=="AM")&&(hrs<12 &&AMPM=="AM")){
    greet="morning"
}else if(hrs==12 && AMPM=="PM"){
    greet="afternoon"
}else if((hrs<12 &&AMPM=="PM") && (hrs<4 && AMPM=="PM")){
    greet="afternoon"
}else{
    greet="night"
}
head[0].innerHTML=`Let's start our ${greet} with a new quote`

var arr=["The way to get started is to quit talking and begin doing. -Walt Disney","Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs","If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt","If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey","If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron","Life is what happens when you're busy making other plans. -John Lennon","Tell me and I forget. Teach me and I remember. Involve me and I learn. -Benjamin Franklin","The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart. -Helen Keller","Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson","When you reach the end of your rope, tie a knot in it and hang on. -Franklin D. Roosevelt"]
var count=0
function changequotes(){

    const randomcolor=Math.floor(Math.random()*16777215).toString(16);
    var newcolor="#"+randomcolor;
    bod[0].style.backgroundColor=newcolor;
    btn[0].style.backgroundColor=newcolor;
    conTent[0].innerHTML=arr[count];
    if(count>=9){
        count=1;
    }
    count++;
    
}