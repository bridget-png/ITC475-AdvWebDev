/*Mega Travel JavaScript
File name: activities.js

Bridget Hudson
2/12/21
*/

function clear()
{
    document.getElementById("actList").innerHTML = "";
}

function getOptions()
{
    let destSelected = document.getElementById("destination-selector");

    let ds = destSelected.options[destSelected.selectedIndex].text;

    if (ds == "Maldives")
    {
        clear();

        let cbContainer = document.getElementById("actList");

        let cbMuse = document.createElement('input');
            cbMuse.type = 'checkbox';
            cbMuse.name = "cbMalMuse";
        let cbSail = document.createElement('input');
            cbSail.type = 'checkbox';
            cbSail.name = "cbMalSail";
        let cbBeach = document.createElement('input');
            cbBeach.type = 'checkbox';
            cbBeach.name = "cbMalBeach";
        let cbHike = document.createElement('input');
            cbHike.type = 'checkbox';
            cbHike.name = "cbMalHike";
        let cbBoat = document.createElement('input');
            cbBoat.type = 'checkbox';
            cbBoat.name = "cbMalBoat";

        cbContainer.appendChild(cbMuse);
        cbContainer.appendChild(document.createTextNode("Museums "));

        cbContainer.appendChild(cbSail);
        cbContainer.appendChild(document.createTextNode("Sailing "));

        cbContainer.appendChild(cbBeach);
        cbContainer.appendChild(document.createTextNode("Beaches "));

        cbContainer.appendChild(cbHike);
        cbContainer.appendChild(document.createTextNode("Hiking "));

        cbContainer.appendChild(cbBoat);
        cbContainer.appendChild(document.createTextNode("Boating "));
    }

    else if (ds == "Cancun, Mexico")
    {
        clear();
        
        let cbContainer = document.getElementById("actList");

        let cbParks = document.createElement('input');
            cbParks.type = 'checkbox';
            cbParks.name = "cbCanParks";
        let cbBeach = document.createElement('input');
            cbBeach.type = 'checkbox';
            cbBeach.name = "cbCanBeach";
        let cbBoat = document.createElement('input');
            cbBoat.type = 'checkbox';
            cbBoat.name = "cbCanBoat";
        let cbSnorkel = document.createElement('input');
            cbSnorkel.type = 'checkbox';
            cbSnorkel.name = "cbCanSnorkel";

        cbContainer.appendChild(cbParks);
        cbContainer.appendChild(document.createTextNode("Parks & Recreation "));
    
        cbContainer.appendChild(cbBeach);
        cbContainer.appendChild(document.createTextNode("Beaches "));
    
        cbContainer.appendChild(cbBoat);
        cbContainer.appendChild(document.createTextNode("Boating "));
    
        cbContainer.appendChild(cbSnorkel);
        cbContainer.appendChild(document.createTextNode("Snorkeling "));
    }

    else if (ds == "New Zealand")
    {
        clear();

        let cbContainer = document.getElementById("actList");

        let cbTours = document.createElement('input');
            cbTours.type = 'checkbox';
            cbTours.name = "cbNZTours";
        let cbSports = document.createElement('input');
            cbSports.type = 'checkbox';
            cbSports.name = "cbNZSports";
        let cbCycle = document.createElement('input');
            cbCycle.type = 'checkbox';
            cbCycle.name = "cbNZCycle";
        let cbMuse = document.createElement('input');
            cbMuse.type = 'checkbox';
            cbMuse.name = "cbNZMuse";
        let cbBoat = document.createElement('input');
            cbBoat.type = 'checkbox';
            cbBoat.name = "cbNZBoat";

        cbContainer.appendChild(cbTours);
        cbContainer.appendChild(document.createTextNode("City Tours "));

        cbContainer.appendChild(cbSports);
        cbContainer.appendChild(document.createTextNode("Sports "));

        cbContainer.appendChild(cbCycle);
        cbContainer.appendChild(document.createTextNode("Cycling "));

        cbContainer.appendChild(cbMuse);
        cbContainer.appendChild(document.createTextNode("Museums "));

        cbContainer.appendChild(cbBoat);
        cbContainer.appendChild(document.createTextNode("Boating "));
    }

    else if (ds == "Venice, Italy")
    {
        clear();
        
        let cbContainer = document.getElementById("actList");

        let cbMuse = document.createElement('input');
            cbMuse.type = 'checkbox';
            cbMuse.name = "cbVenMuse";
        let cbTheatre = document.createElement('input');
            cbTheatre.type = 'checkbox';
            cbTheatre.name = "cbVenTheatre";
        let cbParks = document.createElement('input');
            cbParks.type = 'checkbox';
            cbParks.name = "cbVenParks";
        let cbTours = document.createElement('input');
            cbTours.type = 'checkbox';
            cbTours.name = "cbVenTours";

        cbContainer.appendChild(cbMuse);
        cbContainer.appendChild(document.createTextNode("Museums "));
    
        cbContainer.appendChild(cbTheatre);
        cbContainer.appendChild(document.createTextNode("Theatre "));
    
        cbContainer.appendChild(cbParks);
        cbContainer.appendChild(document.createTextNode("Parks & Recreation "));
    
        cbContainer.appendChild(cbTours);
        cbContainer.appendChild(document.createTextNode("City Tours "));
    }

    else
    {
        clear();

        document.getElementById("actList").innerText = "You must select a destination first.";
    }
}

