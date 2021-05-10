/*Race Game JavaScript
File name: raceGame.js

Bridget Hudson
4/28/21
*/

//create variables
//----------------------------------------------------------------------------------------
var p1slot = document.getElementById("player1slot");
var p2slot = document.getElementById("player2slot");
p1slot.style.left = "15px";
p2slot.style.left = "15px";

//let stoplightBTN = document.getElementById("stoplightBtn");
let stoplightIMG = document.getElementById("stoplight");
stoplightIMG.width = 125;
stoplightIMG.height = 50;

let winner = 0;
let pageTitle = document.getElementById("pageTitle");
let winnerBox = document.getElementById("winnerBox");
winnerBox.src = "site_files/car0.png";
winnerBox.width = 130;
winnerBox.height = 50;

//select racer 1
//----------------------------------------------------------------------------------------
function setP1()
{
    let r1selected = document.getElementById("r1select"); 
    let r1 = r1selected.options[r1selected.selectedIndex].text;

    var car1IMG = document.createElement("img");

    if(r1 == "Magenta Motorcar")
    {
        car1IMG.src = "site_files/car7.png";
        car1IMG.height = 50;
        car1IMG.width = 130;
    } 
    else if(r1 == "Racin' Red Roadster")
    {
        car1IMG.src = "site_files/car1.png";
        car1IMG.height = 50;
        car1IMG.width = 130;
    }
    else if(r1 == "Orange On-the-Double Oldsmobile")
    {
        car1IMG.src = "site_files/car2.png";
        car1IMG.height = 50;
        car1IMG.width = 130;
    }
    else if(r1 == "Canary Convertible")
    {
        car1IMG.src = "site_files/car3.png";
        car1IMG.height = 50;
        car1IMG.width = 130;
    }
    else
    {
        car1IMG.src = "site_files/car0.png";
        car1IMG.height = 50;
        car1IMG.width = 130;
    }

    p1slot.appendChild(car1IMG);
}
//select racer 2
//----------------------------------------------------------------------------------------
function setP2()
{
    let r2selected = document.getElementById("r2select");
    let r2 = r2selected.options[r2selected.selectedIndex].text;

    var car2IMG = document.createElement("img");

    if(r2 == "Green Gas-Guzzler")
    {
        car2IMG.src = "site_files/car4.png";
        car2IMG.height = 50;
        car2IMG.width = 130;
    }
    else if(r2 == "Souped-Up Sapphire Sedan")
    {
        car2IMG.src = "site_files/car5.png";
        car2IMG.height = 50;
        car2IMG.width = 130;
    }
    else if(r2 == "Amethyst Automobile")
    {
        car2IMG.src = "site_files/car6.png";
        car2IMG.height = 50;
        car2IMG.width = 130;
    }
    else if(r2 == "Silver Speedwagon")
    {
        car2IMG.src = "site_files/car8.png";
        car2IMG.height = 50;
        car2IMG.width = 130;
    }
    else
    {
        car2IMG.src = "site_files/car0.png";
        car2IMG.height = 50;
        car2IMG.width = 130;
    }

    p2slot.appendChild(car2IMG);
}

//start the race, move the cars
//----------------------------------------------------------------------------------------
function race()
{
    pageTitle.innerText = "AND THEY'RE OFF!";

    stoplightIMG.src = "site_files/greenLit.png";
    stoplightIMG.width = 125;
    stoplightIMG.height = 50;

    function tick()
    {
        let player1Speed = Math.floor(Math.random() * 25) * 0.001;
        let player2Speed = Math.floor(Math.random() * 25) * 0.001;

        p1slot.style.left = (parseFloat(p1slot.style.left)/100 + player1Speed).toLocaleString("en", {style: "percent"});
        p2slot.style.left = (parseFloat(p2slot.style.left)/100 + player2Speed).toLocaleString("en", {style: "percent"});

        if(parseFloat(p1slot.style.left) > 90)
        {
            winner = 1;
        }
        if(parseFloat(p2slot.style.left) > 90)
        {
           winner = 2;
        }

        if(winner != 0)
        {
            clearInterval(timer);
            callWinner();
        }
    }

    let timer = setInterval(tick, 15);
}

//announce the winner, end the race
//----------------------------------------------------------------------------------------
function callWinner()
{
    stoplightIMG.src = "site_files/redLit.png";
    stoplightIMG.width = 125;
    stoplightIMG.height = 50;

    pageTitle.innerText = "AND THE WINNER IS... RACER NUMBER " + winner + "!";

    var winnerIMG = document.createElement("img");

    if(winner == 1)
    {
        let r1selected = document.getElementById("r1select"); 
        let r1 = r1selected.options[r1selected.selectedIndex].text; 

        if(r1 == "Magenta Motorcar")
        {
            winnerIMG.src = "site_files/car7.png";
            winnerIMG.height = 50;
            winnerIMG.width = 130;
        } 
        else if(r1 == "Racin' Red Roadster")
        {
            winnerIMG.src = "site_files/car1.png";
            winnerIMG.height = 50;
            winnerIMG.width = 130;
        }
        else if(r1 == "Orange On-the-Double Oldsmobile")
        {
            winnerIMG.src = "site_files/car2.png";
            winnerIMG.height = 50;
            winnerIMG.width = 130;
        }
        else if(r1 == "Canary Convertible")
        {
            winnerIMG.src = "site_files/car3.png";
            winnerIMG.height = 50;
            winnerIMG.width = 130;
        }
        else
        {
            winnerIMG.src = "site_files/car0.png";
            winnerIMG.height = 50;
            winnerIMG.width = 130;
        }
    
        winnerBox.appendChild(winnerIMG);
    }

    if (winner == 2)
    {
        let r2selected = document.getElementById("r2select"); 
        let r2 = r2selected.options[r2selected.selectedIndex].text; 

        if(r2 == "Green Gas-Guzzler")
        {
            winnerIMG.src = "site_files/car4.png";
            winnerIMG.height = 50;
            winnerIMG.width = 130;
        } 
        else if(r2 == "Souped-Up Sapphire Sedan")
        {
            winnerIMG.src = "site_files/car5.png";
            winnerIMG.height = 50;
            winnerIMG.width = 130;
        }
        else if(r2 == "Amethyst Automobile")
        {
            winnerIMG.src = "site_files/car6.png";
            winnerIMG.height = 50;
            winnerIMG.width = 130;
        }
        else if(r2 == "Silver Speedwagon")
        {
            winnerIMG.src = "site_files/car8.png";
            winnerIMG.height = 50;
            winnerIMG.width = 130;
        }
        else
        {
            winnerIMG.src = "site_files/car0.png";
            winnerIMG.height = 50;
            winnerIMG.width = 130;
        }
    
        winnerBox.appendChild(winnerIMG);
    }
}