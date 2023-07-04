var output=document.getElementById("output");
var form=document.getElementById("formid");
var names=document.getElementById("name")
var Collages=document.getElementById("collage")
var locat=document.getElementById("loc");
var picShow=document.getElementsByTagName("img");
var pIc=document.getElementById("pIc")



pIc.addEventListener("change", function(event) {
    var reader = new FileReader();
    reader.onload = function() {
    picShow[0].src = reader.result;
    console.log(picShow.src.innerHTML);
    // picShow.style.height = "30px"; // Set the desired height
    // picShow.style.width = "30px"; // Set the desired width
    
    }
    reader.readAsDataURL(event.target.files[0]);
    });;
    
form.addEventListener(`submit`,genratecard);


function genratecard(event){
    event.preventDefault();
var outpuTPara=document.createElement("p");
var outpUTdiv=document.createElement("div");
var forPic=document.createElement("div")
var conTEnt=document.createElement("div")
output.innerHTML="";
output.appendChild(outpuTPara);
output.appendChild(outpUTdiv);
outpUTdiv.appendChild(forPic);
outpUTdiv.appendChild(conTEnt);
outpuTPara.innerHTML="Generated ID Card";
outpuTPara.classList.add("outpuTPara");
outpUTdiv.classList.add("outpUTdiv")
forPic.classList.add("forPic")

var conTEnt1=document.createElement("div")
var conTEnt2=document.createElement("div")
var conTEnt3=document.createElement("div")
conTEnt.classList.add("conTEnt");
conTEnt.appendChild(conTEnt1)
conTEnt.appendChild(conTEnt2)
conTEnt.appendChild(conTEnt3)
conTEnt1.classList.add("conTEnt1");
conTEnt2.classList.add("conTEnt2");
conTEnt3.classList.add("conTEnt3");
conTEnt1.innerHTML=`Name: ${names.value}`
conTEnt2.innerHTML=`Collage Name: ${Collages.value}`
conTEnt3.innerHTML=`Location:${locat.value}`
var img = document.createElement("img");
    img.src = picShow[0].src;
    forPic.appendChild(img);



}






