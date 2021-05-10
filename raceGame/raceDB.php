<html>
    <!-- 
    Racing Game: Main Page
    File name: race.html

    Bridget Hudson
    4/28/21
--> 

<head>
    <title>Rainbow Racers Stats</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<style>
    body{background-color: #4f6634;}
    header{background-color: white; width: 100%;}
    nav{font-family: Arial, Helvetica, sans-serif; height: 6%;}
    ul{display: flex; list-style: none; padding: 15px;}
    #title{color: #a61919; text-decoration: none; font-weight: bold; 
        font-size: 120%; margin-top: -0.8%;}
    a{color: #a61919; text-decoration: none; font-weight: bold; font-size: 120%;
        position: relative; top: 0; transition: top 0.5s, color 0.5s;}
    a:hover{color: black; text-decoration: none; top: -3px;}
    
    h1{font-family: Arial, Helvetica, sans-serif; color: white; padding: 1.5%; font-size: 160%;}
    .statsDisplay{background-color: white; color: black; padding: 1.5%;
        font-family: Arial, Helvetica, sans-serif; font-weight: normal;
        font-size: 95%; border: black; border-width: thick; 
        border-style: double; position: relative;}
    table{width: 100%;}
    th, td{padding-top: 0.5%; padding-bottom: 0.5%; padding-left: 0.5%;}

    form{margin-top: 5%;}
    label{font-family: Arial, Helvetica, sans-serif; color: white; font-size:140%;
        padding: 1%; margin-right: 2%; font-weight: bold;}
    .search{height: 35px; width: 40%; margin-right: 2%;}
    #submit{height: 35px; background-color: white; color:#a61919; padding: 0.5%;}
</style>

<body>
<header>
        <nav style="margin:auto">
            <ul style="display:table; margin: auto;"> 
                <a href="race.html">RAINBOW RACERS</a>
            </ul>        
        </nav>
    </header>

    <h1>Record Saved</h1>

<!-- --------------------------------------------create and populate database----- -->
<?php
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "demoDB";

        //create connection
        $conn = new mysqli($servername, $username, $password, $dbname);

        //test connection
        // if($conn->connect_error)
        // {
        //     die("Connection failed: " . $conn->connect_error);
        // }

        // $sql = "CREATE DATABASE IF NOT EXISTS demoDB";
        // if ($conn->query($sql) === TRUE) 
        // {
        //     echo "Database created successfully";
        // }
    ?></p>

    <p class="smalltxt"><?php
        //create table
        $sql = "CREATE TABLE IF NOT EXISTS demoRaces2 (
            id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,  
            racer1 VARCHAR(30) NOT NULL, 
            racer2 VARCHAR(30) NOT NULL,
            winner VARCHAR(30) NOT NULL 
            );";

        //Is table working? 
        // if($conn->query($sql) === TRUE)
        // {
        //     echo "Table created successfully";
        // }
        // else
        // {
        //     echo "Error creating table: " . $conn->error;
        // }

        //populate the table
        $sql = "INSERT INTO demoRaces2 ( 
        racer1, 
        racer2, 
        winner
        ) VALUES (?, ?, ?)";

        $stmt = $conn->prepare($sql);
        $winner = "winner";
        $stmt->bind_param ("sss", 
        $_POST["racer1select"],
        $_POST["racer2select"],
        $winner
        );

        $stmt->execute();
    ?>
    <br><br>
    <a href="race.html" style="color:white; font-family: Arial, Helvetica, sans-serif; 
    margin-left:1%; font-size:110%;">Back to the Race!</a>

    </body>
</html>