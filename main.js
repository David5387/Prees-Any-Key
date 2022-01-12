window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed >=97 && keyPressed<=122|| (keyPressed >=65 && keyPressed <=90)){
       document.getElementById("l4").innerHTML = "You pressed Alphabet Key";
       console.log("alphabet key");
    }
    if(keyPressed >=48 && keyPressed<=57){
        document.getElementById("l4").innerHTML = "You pressed Number Key";
        console.log("number key");
     }
     if(keyPressed >= 37 && keyPressed<=40){
        document.getElementById("l4").innerHTML = "You pressed Arrow Key";
        console.log("arrow key");
     }
}


