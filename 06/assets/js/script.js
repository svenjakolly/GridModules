let n = 0;


function buttonPressed() {
    n++;
    document.getElementById("element").style.left = n + "30px";
}

function buttonPressed2() {
    n++;
    document.getElementById("element2").style.left = n + "10px";
}

function buttonPressed3() {
    n++;
    document.getElementById("element2").style.left = n - "10px";
}

function neuesElement() {
    let div = document.createElement("div");
    div.classList.add('random');
    div.style.left = Math.random() * window.innerWidth - 200 + "px";
    document.body.appendChild(div);
}

function neuesElement2() {
    let div = document.createElement("div");
    div.classList.add('random2');
    div.style.left = Math.random() * window.innerWidth - 200 + "px";
    document.body.appendChild(div);
}

function neuesElement3() {
    let div = document.createElement("div");
    div.classList.add('random3');
    div.style.left = Math.random() * window.innerWidth - 200 + "px";
    document.body.appendChild(div);
}

function neuesElement4() {
    let div = document.createElement("div");
    div.classList.add('random4');
    div.style.left = Math.random() * window.innerWidth - 200 + "px";
    document.body.appendChild(div);
}

function neuesBild() {
    n++;
    let versatz = 100; /* um wieviel das bild jedesmal nach rechts rückt*/
    let myImage = new Image(100, 100);

    myImage.src = 'assets/images/hund.jpeg';
    myImage.classList.add('bild');
    myImage.style.left = n * versatz + "px";
    document.body.appendChild(myImage);

    function myFunction() {
        var x = document.getElementById("myText").value;
        document.getElementById("demo").innerHTML = x;


    }


}