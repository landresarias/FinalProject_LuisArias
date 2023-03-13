<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With,Content-Type,Accept, Access-Control-Request-Method");
	header("Content-Type: text/html; charset=utf-8");
	$mysqli = mysqli_connect('localhost','root','','delicias_lr');
	/*$method = $_SERVER['REQUEST_METHOD'];*/
	$JSONData = file_get_contents("php://input");
	$dataObject = json_decode($JSONData);    
	session_start();    
	$mysqli->set_charset('utf8');
	$User = $dataObject-> user;
	$Password = $dataObject-> password;
  	if ($new_query = $mysqli->prepare("SELECT CLIENT_USER, CLIENT_PASSW
  	FROM client 
  	WHERE client_USER = ?")) {
        $new_query->bind_param('s', $User);
        $new_query->execute();
        $result = $new_query->get_result();
        if ($result->num_rows == 1) {
            $data = $result->fetch_assoc();
            
                $_SESSION['User'] = $data['CLIENT_USER'];
                echo json_encode(array('connected'=>true,'user'=>$data['CLIENT_USER'], 'password'=>$data['CLIENT_PASSW']));
		}
        else { echo json_encode(array('connected'=>false, 'error' => 'User does not exist.')); }
        $new_query->close();
    }
    else{ echo json_encode(array('connected'=>false, 'error' => 'Could not connect to DB.')); }
	$mysqli->close();
?>

