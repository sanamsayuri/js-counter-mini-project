var value =document.querySelector('h3');
var minus =document.getElementsByClassName("deincrement")[0];
var set =document.getElementsByClassName("reset")[0];
var plus =document.getElementsByClassName('increment')[0];
var num =0;
minus.addEventListener("click",()=>{
    num--;
    value.innerHTML=num;
    
});
set.addEventListener("click",()=>{
    num=0;
    value.innerHTML=num;
    
});
plus.addEventListener("click",()=>{
    num++;
    value.innerHTML=num;
    
});