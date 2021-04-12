<html>

<head>
    <title>Admin</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <style>
        h1 {font-family:Arial, Helvetica, sans-serif; font-size:150%; padding-left:3%;}
        h2 {font-family:Arial, Helvetica, sans-serif; font-size:110%; padding-left:3%;}
        h3{font-family:Arial, Helvetica, sans-serif; font-size: 100%; font-weight:normal; 
            padding-left: 3%; padding-top: 1%; padding-bottom: 1%; color: #ffffff;}
        p {font-family:Arial, Helvetica, sans-serif; font-size: 100%; 
            padding-left:3%; padding-top:1%;}

        header{background-color: #add8e6;}
        div{width:100%; height:25px; margin-bottom:0px; background-color:#d3d3d3;}
        nav{background-color: #ffffff; color:#000000; height:30px; padding:15px;}
        ul{margin:auto; display: table; list-style: none; align-items: center; justify-content: center;}
        a{font-family:Arial, Helvetica, sans-serif; font-size:100%; color: #000000; 
            text-decoration: none; padding: 10px; font-weight: bold;
            position: relative; top: 0; transition: top 0.5s, color 0.5s;}
        a:hover {color: orange; transition: 0.5s ease-in; padding-bottom: 2%; top: -10px;}
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

    <p><?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "FormData";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if($conn->connect_error)
    {
        die("Connection failed: " . $conn->connect_error());
    }

    $sql = "SELECT id, firstname, lastname, email, phone, adults, 
        children, startdate, destination, activities FROM Clients";

    $result = $conn->query($sql);

    if($result->num_rows > 0)
    {
        while($row = $result->fetch_assoc())
        {
            echo "Client ID: " . $row["id"]. "<br><br>";
            echo "Client Name: " . $row["firstname"]." ".$row["lastname"]."<br><br>";
            echo "Client Email: ". $row["email"]."<br><br>";
            echo "Client Phone Number: ". $row["phone"]. "<br><br>";
            echo "Number of Adults: ". $row["adults"]. "<br><br>";
            echo "Number of Children: ". $row["children"]. "<br><br>";
            echo "Travel Date: ". $row["startdate"]. "<br><br>";
            echo "Destination: ". $row["destination"]. "<br><br>";
            echo "Activities: ". $row["activities"]. "<br>";
            echo "______________________________________________________________________ <br><br><br>";
        }    
    }
    else
    {
        echo "No results";
    }

    $conn->close();
    ?></p>

    <footer>
        <h3>Copyright protected. All rights reserved.</h3>
        <h3>MEGA TRAVELS<br>mega@travels.com</h3>
    </footer>
</body>
</html>