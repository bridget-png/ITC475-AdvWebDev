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
    //document.getElementById("demo").innerHTML = destSelected.options
    //[destSelected.selectedIndex].text;

    let ds = destSelected.options[destSelected.selectedIndex].text;

    if (ds == "Maldives")
    {
        clear();

        let cbContainer = document.getElementById("actList");

        let cbMuse = document.createElement('input');
            cbMuse.type = 'checkbox';
        let cbSail = document.createElement('input');
            cbSail.type = 'checkbox';
        let cbBeach = document.createElement('input');
            cbBeach.type = 'checkbox';
        let cbHike = document.createElement('input');
            cbHike.type = 'checkbox';
        let cbBoat = document.createElement('input');
            cbBoat.type = 'checkbox';

        cbContainer.appendChild(cbMuse);
        cbContainer.appendChild(document.createTextNode("Museums     "));

        cbContainer.appendChild(cbSail);
        cbContainer.appendChild(document.createTextNode("Sailing     "));

        cbContainer.appendChild(cbBeach);
        cbContainer.appendChild(document.createTextNode("Beaches     "));

        cbContainer.appendChild(cbHike);
        cbContainer.appendChild(document.createTextNode("Hiking     "));

        cbContainer.appendChild(cbBoat);
        cbContainer.appendChild(document.createTextNode("Boating "));
    }

    else if (ds == "Cancun, Mexico")
    {
        clear();
        
        let cbContainer = document.getElementById("actList");

        let cbParks = document.createElement('input');
            cbParks.type = 'checkbox';
        let cbBeach = document.createElement('input');
            cbBeach.type = 'checkbox';
        let cbBoat = document.createElement('input');
            cbBoat.type = 'checkbox';
        let cbSnorkel = document.createElement('input');
            cbSnorkel.type = 'checkbox';

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
        let cbSports = document.createElement('input');
            cbSports.type = 'checkbox';
        let cbCycle = document.createElement('input');
            cbCycle.type = 'checkbox';
        let cbMuse = document.createElement('input');
            cbMuse.type = 'checkbox';
        let cbBoat = document.createElement('input');
            cbBoat.type = 'checkbox';

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
        let cbTheatre = document.createElement('input');
            cbTheatre.type = 'checkbox';
        let cbParks = document.createElement('input');
            cbParks.type = 'checkbox';
        let cbTours = document.createElement('input');
            cbTours.type = 'checkbox';

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

