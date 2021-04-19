<html>

<head>
    <title>Confirm</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <style>
        h1 {font-family:Arial, Helvetica, sans-serif; font-size:150%; padding-left:3%;}
        h2 {font-family:Arial, Helvetica, sans-serif; font-size:110%; padding-left:3%;}
        h3{font-family:Arial, Helvetica, sans-serif; font-size: 100%; font-weight:normal; 
            padding-left: 3%; padding-top: 1%; padding-bottom: 1%; color: #ffffff;}
        p {font-family:Arial, Helvetica, sans-serif; font-size: 100%; 
            padding-left:3%; padding-top:1%;}
        p.smalltxt{font-family:Arial, Helvetica, sans-serif; font-size: 70%; 
            padding-left:3%;}

        header{background-color: #add8e6;}
        div{width:100%; height:25px; margin-bottom:0px; background-color:#d3d3d3;}
        nav{background-color: #ffffff; color:#000000; height:30px; padding:15px;}
        ul{margin:auto; display: table; list-style: none; align-items: center; justify-content: center;}
        a{font-family:Arial, Helvetica, sans-serif; font-size:100%; color: #000000; 
            text-decoration: none; padding: 10px; font-weight: bold;
            position: relative; top: 0; transition: top 0.5s, color 0.5s;}
        a:hover {color: orange; transition: 0.5s ease-in; padding-bottom: 2%; top: -10px;}
        #submit {font-size:70%; margin-top: 1%; margin-left: 3%; width: 15%; height: 30px; background-color: lightblue;}
        footer{background-color: #000000; color: #ffffff;}

        /* MOBILE STYLES */
        @media only screen and (max-width: 768px)
        {
        nav {background-color: black; color: white; font-family: Arial, Helvetica, sans-serif;
        font-weight: bold; padding: 10px; height: 25px;}
        nav ul {display: flex; list-style: none; align-items: center; 
            justify-content: center;}
        a {color: white; text-decoration: none; padding: 10px; padding-top: 4px;}
        a:hover {color: orange; transition: 0.5s ease-in; padding-bottom: 2%;}
        }
    </style>
</head>

<body>
    <header>
    <img style="width:25%; height:auto; display:block; margin-top:auto; margin-bottom:auto;"
    src="site_files\mega_travel_logo.png" alt="Mega Travel Logo"/>  
    
    <div></div>

    <nav>
            <ul> 
                <a href="mt_home.html">Home</a>
                <a href="mt_about.html">About</a>
                <a href="mt_agent.html">Contact Agent</a>
            </ul>        
        </nav>

    </header>     

    <br>
    <h2>Thank you for submitting your travel agent contact request!</h2> 
    <br>
    <h1>Here is the information you submitted:</h1>
    <br>
    <p>Cient Name: <?php echo $_POST["fname"] . " " . $_POST["lname"]; ?> </p> 
    <p>Client Email: <?php echo $_POST["email"]; ?> </p>
    <p>Client Phone Number: <?php echo $_POST["phone"]; ?> </p> 
    <p>Number of Adults: <?php echo $_POST["adults"]; ?> </p> 
    <p>Number of Children: <?php echo $_POST["children"]; ?> </p> 
    <p>Travel Date: <?php echo $_POST["startdate"]; ?> </p> 
    <p>Destination: <?php echo $_POST["destinationselect"]; ?> </p> 
    <p>Interested Activities: 
    
    <?php 
        $act1 = " ";
        $act2 = " ";
        $act3 = " ";
        $act4 = " ";
        $act5 = " ";

        if(array_key_exists("cbMalMuse", $_POST) && $_POST["cbMalMuse"])
        {
            echo "Museums, ";
            $act1 = "Museums, ";
        }

        if(array_key_exists("cbMalSail", $_POST) && $_POST["cbMalSail"])
        {
            echo "Sailing, ";
            $act2 = "Sailing, ";
        }

        if(array_key_exists("cbMalBeach", $_POST) && $_POST["cbMalBeach"])
        {
            echo "Beaches, ";
            $act3 = "Beaches, ";
        }

        if(array_key_exists("cbMalHike", $_POST) && $_POST["cbMalHike"])
        {
            echo "Hiking, ";
            $act4 = "Hiking, ";
        }

        if(array_key_exists("cbMalBoat", $_POST) && $_POST["cbMalBoat"])
        {
            echo "Boating, ";
            $act5 = "Boating, ";
        }

        if(array_key_exists("cbCanParks", $_POST) && $_POST["cbCanParks"])
        {
            echo "Parks & Recreation, ";
            $act1 = "Parks & Recreation, ";
        }

        if(array_key_exists("cbCanBeach", $_POST) && $_POST["cbCanBeach"])
        {
            echo "Beaches, ";
            $act2 = "Beaches, ";
        }

        if(array_key_exists("cbCanBoat", $_POST) && $_POST["cbCanBoat"])
        {
            echo "Boating, ";
            $act3 = "Boating, ";
        }

        if(array_key_exists("cbCanSnorkel", $_POST) && $_POST["cbCanSnorkel"])
        {
            echo "Snorkeling, ";
            $act4 = "Snorkeling, ";
        }

        if(array_key_exists("cbNZTours", $_POST) && $_POST["cbNZTours"])
        {
            echo "City Tours, ";
            $act1 = "City Tours, ";
        }

        if(array_key_exists("cbNZSports", $_POST) && $_POST["cbNZSports"])
        {
            echo "Sports, ";
            $act2 = "Sports, ";
        }

        if(array_key_exists("cbNZCycle", $_POST) && $_POST["cbNZCycle"])
        {
            echo "Cycling, ";
            $act3 = "Cycling, ";
        }

        if(array_key_exists("cbNZMuse", $_POST) && $_POST["cbNZMuse"])
        {
            echo "Museums, ";
            $act4 = "Museums, ";
        }

        if(array_key_exists("cbNZBoat", $_POST) && $_POST["cbNZBoat"])
        {
            echo "Boating, ";
            $act5 = "Boating, ";
        }

        if(array_key_exists("cbVenMuse", $_POST) && $_POST["cbVenMuse"])
        {
            echo "Museums, ";
            $act1 = "Museums, ";
        }

        if(array_key_exists("cbVenTheatre", $_POST) && $_POST["cbVenTheatre"])
        {
            echo "Theatre, ";
            $act2 = "Theatre, ";
        }

        if(array_key_exists("cbVenParks", $_POST) && $_POST["cbVenParks"])
        {
            echo "Parks & Recreation, ";
            $act3 = "Parks & Recreation, ";
        }

        if(array_key_exists("cbVenTours", $_POST) && $_POST["cbVenTours"])
        {
            echo "City Tours, ";
            $act4 = "City Tours, ";
        }
        ?></p>

    <br><br>
    <h2>A Mega Travel Agent will contact you soon!</h2>
    <!-- <p>____________________________________________________________________</p>    -->
    <p class="smalltxt"><?php
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "FormData";

        //create connection
        $conn = new mysqli($servername, $username, $password, $dbname);

        //test connection
        if($conn->connect_error)
        {
            die("Connection failed: " . $conn->connect_error);
        }

        // $sql = "CREATE DATABASE IF NOT EXISTS FormData";
        // if ($conn->query($sql) === TRUE) 
        // {
        //     echo "Database created successfully";
        // }
    ?></p>

    <p class="smalltxt"><?php
        //create table
        $sql = "CREATE TABLE IF NOT EXISTS Clients (
            id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
            firstname VARCHAR(30) NOT NULL, 
            lastname VARCHAR(30) NOT NULL, 
            email VARCHAR(50), 
            phone VARCHAR(10), 
            adults INT(2), 
            children INT(2), 
            startdate DATE, 
            destination VARCHAR(30), 
            activities VARCHAR(512)
            );";

        // if($conn->query($sql) === TRUE)
        // {
        //     echo "Table created successfully";
        // }
        // else
        // {
        //     echo "Error creating Clients table: " . $conn->error;
        // }

        //populate the table
        $sql = "INSERT INTO Clients (
        firstname, 
        lastname, 
        email, 
        phone, 
        adults, 
        children, 
        startdate, 
        destination, 
        activities
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

        $stmt = $conn->prepare($sql);
        $activities = $act1 . $act2 . $act3 . $act4 . $act5;
        $stmt->bind_param ("ssssiisss", 
        $_POST["fname"],
        $_POST["lname"],
        $_POST["email"],
        $_POST["phone"],
        $_POST["adults"],
        $_POST["children"],
        $_POST["startdate"],
        $_POST["destinationselect"], 
        $activities
        );

        $stmt->execute();

        // if($conn->query($sql) === TRUE)
        // {
        //     echo "New record created successfully";
        // }

        $conn->close();
    ?></p>

    <footer>
        <h3>Copyright protected. All rights reserved.</h3>
        <h3>MEGA TRAVELS<br>mega@travels.com</h3>
    </footer>
</body>
</html>