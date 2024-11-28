

function demo(){
    console.log('Hey you clicked me...');   
}

const techSkill = document.querySelector("#techSkill");
techSkill.addEventListener('click', ()=>{
    console.log("Hello..  My buddy ");
    alert("Thi is alert");
});

// This is alert Model
const alertPara = document.querySelector("#alert");
alertPara.addEventListener('click', ()=>{
    alert("This is alert");
});

// This is Prompt Model
const promptPara = document.querySelector("#prompt");
promptPara.addEventListener('click', ()=>{
    const input = prompt("Please enter a number", 1);
    const square = input * input;
    console.log(square);
    alert(square);
});

// This is Confirm Model
const confirmPara = document.querySelector("#confirm");
confirmPara.addEventListener('click', ()=>{
    const confirmResult = confirm("Are you sure, you want to submit information ?");
    alert(confirmResult);
    console.log(confirmResult);
    
});
