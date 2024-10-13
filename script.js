// let h1=document.getElementById("heading");
// const para=document.getElementById("para");
// const para2=document.getElementsByClassName("paragraph");
// const btn=document.getElementsByTagName("button");
// const div=document.getElementById("div");

// const h2=document.createElement("h2");
// h2.innerText="Hello jani"
// // document.body.prepend(h2);   
// document.body.div.append(h2);   


// // console.log(h1);
// h1.innerText="My first webPage"
// para.innerHTML="<h5>Hey i am h5 inside para </h5>"
// // h1.outerHTML="<p> Changed </p>"
// para2[0].style.fontSize="20px";
// // btn[0].remove();

// // setInterval(() => {
// //     h1.textContent="Change by heading"
// // }, 2000);
// setTimeout(() => {
//     h1.textContent="Change by setTimeout"
// }, 2000);


// const h1=document.querySelector("#heading");
// h1.innerText="changed" 

// const para=document.querySelectorAll("paragraph:nth-child(5)")
// console.log(para)

// const fifthPara = document.querySelector('.paragraph:nth-child(1)');
// console.log(fifthPara);
// let btn=document.querySelector("#btn")

// function changeColor(){
//    btn.addEventListener("click",(e)=>{
//     document.body.backgroundColor="red";
//     console.log("Button Clicked");
//    })
// }
// btn.addEventListener("Click", handleClick);

// function handleDbClick()

// const btn=document.querySelector("button");
//     btn.addEventListener("click", function(){
//         // document.body.style.backgroundColor="red";
//         if(document.body.style.backgroundColor==="black"){
//             document.body.style.color="black";
//             document.body.style.backgroundColor="White"
//         }
//         else{
//             document.body.style.color="White";
//             document.body.style.backgroundColor="black"
//         }

//         // console.log("Hello World Programming is very Interesting");
//     })

//     btn.addEventListener("mouseenter", ()=>{
//         console.log("Mouse Enetered.");
//     })

//     btn.addEventListener("mouseleave", ()=>{
//         console.log("Mouse left.");
//     })


// const form=document.querySelector("form");
// // console.log(form)

// const userName="Tahir Gulzar";
// const userEmail="tahir@gmail.com"
// const userPass="123Tahir";

// function handleSubmit(event){
//     // console.log(event)
//     event.preventDefault();
//     const name=event.target[0].value;
//     const email=event.target[1].value;
//     const pass=event.target[2].value;

//     const showResult=(name===userName && pass===userPass && email===userEmail)? "Successfully Login!":"Something went wrong!";
//     alert(showResult)

//     event.target[0].value=""
//     event.target[1].value=""
//     event.target[2].value=""

//     // console.log(`username= ${name} email= ${email} password= ${pass}`)

// }

// form.addEventListener("submit",handleSubmit)


// const nameInput=document.querySelector("#username")
// nameInput.addEventListener("focus",()=>(nameInput.style.width="400px"))


// nameInput.addEventListener("focusout",()=>console.log("focus"))
// nameInput.addEventListener("keyup",(e)=>{
//     console.log(e.target.value);
// })

// nameInput.addEventListener("blur",()=>{
//     nameInput.style.width="400px"
// })


// nameInput.addEventListener("change",(e)=>{
//     console.log(e)
// })

// const nameInput = document.querySelector("#username")
// const emailInput=document.querySelector("#email")
// const passInput=document.querySelector("#password")

// let name="";
// function handleName(e){
//     let name=e.target.value;
//     console.log(name)
// }
// nameInput.addEventListener("change",handleName);


// nameInput.addEventListener("change",(e)=>{
//     name=e.target.value;
//     console.log(name)
// })

// const mobileTabs = document.querySelector(".mobile-tabs");
// const btn = document.querySelector(".toggle")
// console.log(mobileTabs)
// btn.addEventListener("click", () => {
//     // console.log("clicked")
//     // if (mobileTabs.classList.contains("toggle")) {
//     //     mobileTabs.classList.remove("toggle")
//     // } else {
//     //     mobileTabs.classList.add("toggle")
//     // }
//     mobileTabs.classList.toggle("toggle");
// })


// fetch("https://icanhazdadjoke.com/").then((res) => {
//     fetch("https://jsonplaceholder.typicode.com/todos/1").then( (res)=>{
//     // console.log("Fetched")
//     // console.log(res.json());
//    return  res.json();
// }).then((json) => {
//     console.log(json)
// }).catch((err) => {
//     console.log(err)
// })
