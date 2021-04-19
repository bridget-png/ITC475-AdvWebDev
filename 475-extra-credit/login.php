<html>
<head>
    <title>Log In</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <style>
        h1 {font-family:Arial, Helvetica, sans-serif; font-size:150%; padding-left:3%;}
        h2 {font-family:Arial, Helvetica, sans-serif; font-size:110%; padding-left:3%;}
        h3{font-family:Arial, Helvetica, sans-serif; font-size: 100%; font-weight:normal; 
            padding-left: 3%; padding-top: 1%; padding-bottom: 1%; color: #ffffff;}
        p {font-family:Arial, Helvetica, sans-serif; font-size: 100%; 
            padding-top:1%;}

        header{background-color: #add8e6;}
        div{width:100%; height:25px; margin-bottom:0px; background-color:#d3d3d3;}
        #confirmation{font-family:Arial, Helvetica, sans-serif; background-color: white; padding-left:3%;}
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

    <div id="confirmation">
    <?php
        $username = 'siteadmin';
        $password = 'itc475';

        if (isset($_SERVER['PHP_AUTH_USER']) && isset($_SERVER['PHP_AUTH_PW']))
        {
            if ($_SERVER['PHP_AUTH_USER'] == $username && $_SERVER['PHP_AUTH_PW'] == $password)
                echo "You are now logged in.";
            else die("Invalid username / password combination");
            }
        else
            {header('WWW-Authenticate: Basic realm="Restricted Section"');
            header('HTTP/1.0 401 Unauthorized');
            die ("Please enter a valid username and password");
        }
    ?>

    <br>

    <form action="http://localhost/475-extra-credit/admin.php" 
        method="post" id="contact">
        <p>Click here to continue to the admin page:</p>
        <input type="submit" id="submit" value="View Admin Page"/>
    </form>
    </div>
    
    <br><br><br><br><br><br>
    <footer>
        <h3>Copyright protected. All rights reserved.</h3>
        <h3>MEGA TRAVELS<br>mega@travels.com</h3>
    </footer>
</body>
</html>