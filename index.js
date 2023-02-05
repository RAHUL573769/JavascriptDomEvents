const makeBlue=document.getElementById("makeBlue");

makeBlue.onclick=function makeBlue(){
    document.body.style.backgroundColor="blue";
}


const makePurple=document.getElementById("makepurple");

makePurple.addEventListener("click",()=>{
    document.body.style.backgroundColor="purple";
})

const makeOrange=document.getElementById("makeorange");
makeOrange.addEventListener("click",function(){
    document.body.style.backgroundColor="orange";
})