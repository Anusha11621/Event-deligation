let box1 = document.querySelector('.one')
let box2 = document.querySelector('.two')
let box3 = document.querySelector('.three')
let box4 = document.querySelector('.four')
let box5 = document.querySelector('.five')
let box6 = document.querySelector('.six')
let box7 = document.querySelector('.seven')
let box8 = document.querySelector('.eight')
let box9 = document.querySelector('.nine')
let box10 = document.querySelector('.ten')
let box11 = document.querySelector('.eleven')
let box12 = document.querySelector('.twelve')

function myFun(){
    box1.textContent = 1
    setTimeout(()=>{
        box1.textContent = "" 
    },5000)
}
box1.addEventListener('click',myFun)

function myFun1(){
    box2.textContent = 2
    setTimeout(()=>{
        box2.textContent = "" 
    },5000)
}
box2.addEventListener('click',myFun1)

function myFun2(){
    box3.textContent = 3
    setTimeout(()=>{
        box3.textContent = "" 
    },5000)
}
box3.addEventListener('click',myFun2)

function myFun3(){
    box4.textContent = 4
    setTimeout(()=>{
        box4.textContent = "" 
    },5000)
}
box4.addEventListener('click',myFun3)

function myFun4(){
    box5.textContent = 5
    setTimeout(()=>{
        box5.textContent = "" 
    },5000)
}
box5.addEventListener('click',myFun4)

function myFun5(){
    box6.textContent = 6
    setTimeout(()=>{
        box6.textContent = "" 
    },5000)
}
box6.addEventListener('click',myFun5)

function myFun6(){
    box7.textContent = 7
    setTimeout(()=>{
        box7.textContent = "" 
    },5000)
}
box7.addEventListener('click',myFun6)

function myFun7(){
    box8.textContent = 8
    setTimeout(()=>{
        box8.textContent = "" 
    },5000)
}
box8.addEventListener('click',myFun7)

function myFun8(){
    box9.textContent = 9
    setTimeout(()=>{
        box9.textContent = "" 
    },5000)
}
box9.addEventListener('click',myFun8)

function myFun9(){
    box10.textContent = 10
    setTimeout(()=>{
        box10.textContent = "" 
    },5000)
}
box10.addEventListener('click',myFun9)

function myFun10(){
    box11.textContent = 11
    setTimeout(()=>{
        box11.textContent = "" 
    },5000)
}
box11.addEventListener('click',myFun10)

function myFun11(){
    box12.textContent = 12
    setTimeout(()=>{
        box12.textContent = "" 
    },5000)
}
box12.addEventListener('click',myFun11)



let container = document.querySelector('.container1')

container.addEventListener('click',(e)=>{
    if(e.target.matches('.box')){
        let number = e.target.getAttribute('id')
        e.target.textContent = number
        setTimeout(()=>{
            e.target.textContent = ""
        },5000)
        }
})