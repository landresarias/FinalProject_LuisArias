<?php
	header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: X-API-KEY,Origin,X-Requested-With,Content-Type,Accept,Access-Control-Request-Method');
    header('Content-Type: text/html; charset=utf-8');
	$id='';
	$mysqli = mysqli_connect('localhost','root','','delicias_lr');
	$method = $_SERVER['REQUEST_METHOD'];
	if(!$mysqli){
		die('Connection failed: '.mysqli_connect_errno());
	}
	switch($method){
		case 'GET':
			$sql = "SELECT * FROM product";
		break;
	}
	$result=mysqli_query($mysqli,$sql);				//run SQL statement			
	if(!$result){											//Die if SQL statement failed
		http_response_code(404);
		die(mysqli_error($mysqli));
	}
	if($method=='GET'){
		if(!$id) echo '[';
		for($i=0; $i<mysqli_num_rows($result); $i++){
			echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
		}
		if(!$id) echo ']';
	}
	else {
		echo mysqli_affected_rows($mysqli);
	}
	$mysqli->close();
?>

