/*Mega Travel JavaScript
File name: welcome.js

Bridget Hudson
2/5/21
*/

//show greeting 
function Greeting()
{
    let d = new Date();
    let hrs = d.getHours();
    let message;

    if (hrs <= 11) 
    {
        message = "Morning";
    }
    else if (hrs > 11 && hrs < 17)
    {
        message = "Afternoon";
    }
    else
    {
        message = "Evening";
    }

    document.getElementById("WelcomeBar").innerText = "Good " + message + "!";
}


//show date and time
function Time()
{
    let d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    document.getElementById("Date").innerText = d.toDateString() + " " + hour + ":" + min + ":" + sec;
      let t = setTimeout(function(){ Time() }, 1000);
}

function updateTime(k) 
{
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
}

//show sun or moon symbol
function Icon()
{
    let d = new Date();
    let hrs = d.getHours();
    let mins = d.getMinutes();

    var img = document.createElement("img");

    if ((hrs >= 6 && hrs < 18) || (hrs = 18 && mins == 0))
        {
           //sun
           img.src= "site_files/sun.png";
           img.height = 30;
           img.width = 30;
        }
    else
        {
            //moon
            img.src= "site_files/moon.png";
            img.height = 30;
            img.width = 30;
        }

    var src = document.getElementById("Icon");
    src.appendChild(img);
}

Greeting();
Time();
Icon();