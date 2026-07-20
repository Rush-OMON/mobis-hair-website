/*=========================================
CUSTOM SCROLL PROGRESS
=========================================*/

const progress=document.createElement("div");

progress.id="scroll-progress";

document.body.appendChild(progress);



window.addEventListener("scroll",()=>{

const totalHeight=

document.documentElement.scrollHeight-

window.innerHeight;

const progressHeight=

(window.pageYOffset/totalHeight)*100;

progress.style.width=progressHeight+"%";

});