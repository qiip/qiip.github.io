<?php
 
header('Content-type: application/json'); 
$status = array( 
'type'=>'success', 
'message'=>'Спасибо за заявку! Наши менеджеры свяжутся с вами в ближайшее время' 
);
  
    $name = @trim(stripslashes($_POST['name']));
    $phone = @trim(stripslashes($_POST['phone']));  
    $message = @trim(stripslashes($_POST['message']));  
 
    $email_from = $name; 
    $email_to = 'support@caronfly.com';//replace with your email
 
 
    $body = 'Имя: ' . $name . "\n\n" .  'Телефон: ' . $phone . "\n\n" . 'Сообщение: ' . $message . "\n\n" . 'Заявка с лендинга Одесса'; 
 
    $success = @mail($email_to, $phone, $body, 'From: <'.$email_from.'>'); 
 
    echo json_encode($status);
 
die;