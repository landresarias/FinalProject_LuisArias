<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
	header("Content-Type: text/html; charset=utf-8");
	$mysqli = mysqli_connect('localhost','root','','delicias_lr');
	/*$method = $_SERVER['REQUEST_METHOD'];*/
	$JSONData = file_get_contents("php://input");
	$dataObject = json_decode($JSONData);    
	session_start();    
	$mysqli->set_charset('utf8');
	$ProdId = $dataObject-> id;
  	if ($new_query = $mysqli->prepare("SELECT * FROM product WHERE PROD_ID = ?")){
        $new_query->bind_param('s', $ProdId);
        $new_query->execute();
        $result = $new_query->get_result();
        if ($result->num_rows == 1) {
            $data = $result->fetch_assoc();
            
                $_SESSION['ProdId'] = $data['PROD_ID'];
                echo json_encode(array('connected'=>true,'id'=>$data['PROD_ID'],'image'=>$data['PROD_IMG'],'name'=>$data['PROD_NAME'], 'price'=>$data['PROD_PRICE']));
		}
        else { echo json_encode(array('connected'=>false, 'error' => 'User does not exist.')); }
        $new_query->close();
    }
    else{ echo json_encode(array('connected'=>false, 'error' => 'Could not connect to DB.')); }
	$mysqli->close();
?>

