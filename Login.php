<?php
$mysqli = mysqli_connect('localhost','root', '' ,'mysql');

    $username = $_POST['name'];  
    $password = $_POST['password'];  
    $username = mysqli_real_escape_string($mysqli, $username);  
    $password = mysqli_real_escape_string($mysqli, $password);  
    
    $sql = "select * from final_users where username = '$username' and password = '$password'";  
    $result = mysqli_query($mysqli, $sql); 
    $count = mysqli_num_rows($result);  
    
    if($count == 1){  
        echo "<h1><center> Login successful </center></h1>";  
    }  
    else{  
        echo "<h1> Login failed. Invalid username or password.</h1>";  
    }     
?>  