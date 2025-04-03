const container=document.querySelector(".container");
let career=["Web Developer","Programmer","Tech Explorer","Enthusiastic Learner"]
let careerInd=0;
let characterInd=0;
updateText();
function updateText(){
    characterInd++;
    container.innerHTML=`<h1>I am ${career[careerInd].slice(0,1)==="E"?"an":"a"} ${career[careerInd].slice(0,characterInd)}</h1>`
    if(characterInd===career[careerInd].length){
        characterInd=0;
        careerInd++;
    }
    if(careerInd===career.length){
        careerInd=0;
    }
    setTimeout(()=>{
     updateText()
    },300)
    
}