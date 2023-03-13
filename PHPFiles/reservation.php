<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: X-API-KEY,Origin,X-Requested-With,Content-Type,Accept,Access-Control-Request-Method');
    header('Access-Control-Allow-Methods: POST');
    header('Content-Type: text/html; charset=utf-8');
    $mysqli = mysqli_connect('localhost','root','','delicias_lr');
	$method = $_SERVER['REQUEST_METHOD'];
    if($method == 'POST'){
        $JSONData = file_get_contents("php://input");
        $dataObject = json_decode($JSONData);  
        $Name = $dataObject-> name;
        $Phone = $dataObject-> phone;
        $Partysize = $dataObject-> partysize;
        $Date = $dataObject-> date;
        $Time = $dataObject-> time;
        $Occasion = $dataObject-> occasion;
        $sqlQuery = "INSERT INTO reservation(RES_NAME,RES_PHONE,RES_PARTYSIZE,RES_DATE,RES_TIME,RES_OCCASION) 
                    VALUES ('$Name','$Phone','$Partysize','$Date','$Time','$Occasion')";
        if($mysqli->query($sqlQuery)===TRUE){
            echo json_encode(array('isOk'=>'true', 'msj'=>'Stored register was satisfactory'));
        }
        else{
            echo json_encode(array('isOk'=>'false', 'msj'=>$mysqli->error));
        }
        mysqli_close($mysql);
    }
?>
