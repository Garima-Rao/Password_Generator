
// let btn1=document.getElementsByClassName("output")[0];
let btn2=document.getElementsByClassName("gen")[0];
let para=document.getElementsByClassName("para")[0];
let icon=document.getElementsByClassName("fa-copy")[0];
let del=document.getElementsByClassName('del')[0];
let circle=document.getElementsByClassName("circle")[0];
let toggle=document.getElementsByClassName("toggle")[0];
let body=document.getElementsByTagName("body")[0];
let h3=document.getElementsByTagName("h3")[0];

let isFixed = false;

// let num=(Math.random()*10).floor;
let str="abcdefghijklmnopqrstuvwxyz";
let str2="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let char="!@#$%^&*";

function genPass(){
let password="";
while(password.length<8){
password=password+char[Math.floor(Math.random()*8)];
password=password+str[Math.floor(Math.random()*26)];
password=password+str2[Math.floor(Math.random()*26)];
password=password+Math.ceil(Math.random()*9);
}
return password;
}
btn2.addEventListener("click",()=>{
     password=genPass();//generate new password for each time
    para.innerText=password;
})

icon.addEventListener("click",()=>{
    let copy=password;
    navigator.clipboard.writeText(copy).then(()=>{
        alert("password is copied");
    }
)}

)
del.addEventListener("click",()=>{
    para.innerText="";
})
    
circle.addEventListener("click",()=>{
    if (!isFixed) {
circle.classList.add("animated");
circle.classList.add("fixed");
// toggle.style.backgroundImage=url("https://cdn.pixabay.com/animation/2023/03/19/02/34/02-34-11-741_512.gif");
toggle.style.backgroundImage = "url('https://cdn.pixabay.com/animation/2023/03/19/02/34/02-34-11-741_512.gif')";
body.style.backgroundColor="#222222";
h3.style.color="white";



isFixed = true;
    }else {
        
        circle.classList.remove("fixed");
        // toggle.classList.add("bgImg");
        toggle.style.backgroundImage="url('https://i.pinimg.com/originals/93/0f/22/930f22d2e9a376232cc5d42bc5b4cc90.gif')";
        toggle.style.backgroundRepeat="no-repeat";
        toggle.style.backgroundPosition="right";
        toggle.style.backgroundSize="cover";
        body.style.backgroundColor="white";
        h3.style.color="black";

        

        // circle.classList.add("reverseAnimated");
        // circle.style.transform = "translateX(0)"; // Reset to original position
        isFixed = false;
    }
})



