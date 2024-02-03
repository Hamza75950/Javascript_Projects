var randomNum1 = Math.random();
randomNum1 = Math.floor((randomNum1 * 6)+1)


var randomNum2 = Math.random();
randomNum2 = Math.floor((randomNum2 * 6)+1)




document.getElementsByTagName("img")[0].setAttribute("src","./images/dice"+randomNum1+".png");
document.getElementsByTagName("img")[1].setAttribute("src","./images/dice"+randomNum2+".png");


if(randomNum1 > randomNum2){
    document.querySelector("h1").innerText = "Player 1 WIN!"
}
else if(randomNum1 < randomNum2){
    document.querySelector("h1").innerText = "Player 2 WIN!"
}
else if(randomNum1 === randomNum2){
    document.querySelector("h1").innerText = "DRAW"
}