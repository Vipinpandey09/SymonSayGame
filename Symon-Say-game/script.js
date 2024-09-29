let game = [];
let user = [];
let btns = ["yellow","blue","red","green"]
let stating = false;
let lavel = 0;
let h3 = document.querySelector("h3")

document.addEventListener("keypress", function(){
    if(stating == false){
        stating = true;
    }
    lavelUp();
})

function btnpress(){
   let btn = this;
   userFlash(btn);
   usercolor = btn.getAttribute("id")
   user.push(usercolor);
   checkAns(user.length-1);

}

let allBtn = document.querySelectorAll(".btn");
    for(btn of allBtn){
     btn.addEventListener("click",btnpress);
    }

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 250)
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash")
    }, 250)
}

function lavelUp(){
    user = [];
    lavel++;
    h3.innerText = `Lavel ${lavel}`;
    let randomIdx = Math.floor(Math.random()*3);
    let randomcolor = btns[randomIdx]
    let randombtn = document.querySelector(`.${randomcolor}`)
    game.push(randomcolor);
    btnFlash(randombtn);
}

function checkAns(idx){
    if(user[idx]=== game[idx]){
        if(user.length === game.length){
         setTimeout(lavelUp,1000)
        }
    }else{
        h3.innerHTML = `Game over ! Your score is <b>${lavel}</b>  <br> Press any key to start`;
        document.querySelector('body').style.backgroundColor = "red"
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = "white"
        },150 )
        reaset();
    }
}
 function reaset (){
    stating = false
    user = [];
    game = [];
    lavel = 0;
 }