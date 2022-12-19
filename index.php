<?php
$mysqli = mysqli_connect('localhost','root', '' ,'mysql');

if(isset($_POST['submit'])) {	
    $name = mysqli_real_escape_string($mysqli, $_POST['Name']);
    $surname = mysqli_real_escape_string($mysqli, $_POST['Surname']);
    $username = mysqli_real_escape_string($mysqli, $_POST['Login']);
    $password = mysqli_real_escape_string($mysqli, $_POST['Password']);
    
    $result = mysqli_query($mysqli, "INSERT INTO final_users (Name, Surname, Username, Password) VALUES('$name', '$surname', '$username', '$password')");
    header("Location: Home.html");
}else{
    echo 'some error';
}