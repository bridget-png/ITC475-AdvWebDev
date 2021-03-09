/*  Midterm Assignment JavaScript
    File name: midterm.js

    Bridget Hudson
    3/3/21
*/

function Time()
{
    let d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    document.getElementById("clock").innerText = hour + ":" + min + ":" + sec;
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

function Confirm()
{
    let d = new Date();
    let hrs = d.getHours();
    let mins = d.getMinutes();
    let time = hrs + ':' + mins;

    let fDoorStart = document.getElementById("frontDoorStart");
    let fDoorEnd = document.getElementById("frontDoorEnd");
    let FDstart = fDoorStart.value;
    let FDend = fDoorEnd.value;

    let bDoorStart = document.getElementById("backDoorStart");
    let bDoorEnd = document.getElementById("backDoorEnd");
    let BDstart = bDoorStart.value;
    let BDend = bDoorEnd.value;

    let gDoorStart = document.getElementById("garageDoorStart");
    let gDoorEnd = document.getElementById("garageDoorEnd");
    let GDstart = gDoorStart.value;
    let GDend = gDoorEnd.value;

    let diningLStart = document.getElementById("drLightStart");
    let diningLEnd = document.getElementById("drLightEnd");
    let DRLstart = diningLStart.value;
    let DRLend = diningLEnd.value;

    let livingLStart = document.getElementById("lrLampStart");
    let livingLEnd = document.getElementById("lrLampEnd");
    let LRLstart = livingLStart.value;
    let LRLend = livingLEnd.value;

    let bed1LStart = document.getElementById("b1LampStart");
    let bed1LEnd = document.getElementById("b1LampEnd");
    let B1Lstart = bed1LStart.value;
    let B1Lend = bed1LEnd.value;

    let bed2LStart = document.getElementById("b2LampStart");
    let bed2LEnd = document.getElementById("b2LampEnd");
    let B2Lstart = bed2LStart.value;
    let B2Lend = bed2LEnd.value;

    let kitchFanStart = document.getElementById("kitchFanStart");
    let kitchFanEnd = document.getElementById("kitchFanEnd");
    let KFstart = kitchFanStart.value;
    let KFend = kitchFanEnd.value;

    let bathFanStart = document.getElementById("bathFanStart");
    let bathFanEnd = document.getElementById("bathFanEnd");
    let BFstart = bathFanStart.value;
    let BFend = bathFanEnd.value;

    let washerStart = document.getElementById("washerStart");
    let washerEnd = document.getElementById("washerEnd");
    let WASHstart = washerStart.value;
    let WASHend = washerEnd.value;

    let dryerStart = document.getElementById("dryerStart");
    let dryerEnd = document.getElementById("dryerEnd");
    let DRYstart = dryerStart.value;
    let DRYend = dryerEnd.value;
}

function statusIcon(FDstart, FDend, BDstart, BDend, GDstart, GDend, 
    DRLstart, DRLend, LRLstart, LRLend, B1Lstart, B1Lend, B2Lstart, B2Lend,
    KFstart, KFend, BFstart, BFend, WASHstart, WASHend, DRYstart, DRYend)
{
    let d = new Date();
    let hrs = d.getHours();
    let mins = d.getMinutes();
    let time = hrs + ':' + mins;

    var imgFD = document.createElement("img");
        
    if(time > FDstart && time < FDend)
    {
        imgFD.src= "site_files/unlocked.png";
        var src = document.getElementById("front");
        src.appendChild(imgFD);
    }
    else
    {
        imgFD.src= "site_files/locked.png";
        var src = document.getElementById("front");
        src.appendChild(imgFD); 
    }

    var imgBD = document.createElement("img");
        imgBD.src= "site_files/locked.png";
        var src = document.getElementById("back");
        src.appendChild(imgBD);
    var imgGD = document.createElement("img");
        imgGD.src= "site_files/gdoor_closed.png";
        var src = document.getElementById("garage");
        src.appendChild(imgGD);

    var imgDineL = document.createElement("img");
        imgDineL.src= "site_files/light_off.png";
        var src = document.getElementById("dining");
        src.appendChild(imgDineL);
    var imgLiveL = document.createElement("img");
        imgLiveL.src= "site_files/lamp_off.png";
        var src = document.getElementById("living");
        src.appendChild(imgLiveL);
    var imgBed1L = document.createElement("img");
        imgBed1L.src= "site_files/lamp_off.png";
        var src = document.getElementById("bed1");
        src.appendChild(imgBed1L);
    var imgBed2L = document.createElement("img");
        imgBed2L.src= "site_files/lamp_off.png";
        var src = document.getElementById("bed2");
        src.appendChild(imgBed2L);

    var imgKitchF = document.createElement("img");
        imgKitchF.src= "site_files/fan_off.png";
        var src = document.getElementById("kitchen");
        src.appendChild(imgKitchF);
    var imgBathF = document.createElement("img");
        imgBathF.src= "site_files/fan_off.png";
        var src = document.getElementById("bath");
        src.appendChild(imgBathF);
        
    var washer = document.createElement("img");
        washer.src= "site_files/laundry_off.png";
        var src = document.getElementById("washer");
        src.appendChild(washer);
    var dryer = document.createElement("img");
        dryer.src= "site_files/laundry_off.png";
        var src = document.getElementById("dryer");
        src.appendChild(dryer); 
}

function Run()
{
    Time();
    statusIcon();
}