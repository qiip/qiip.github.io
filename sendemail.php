<?php
 
header('Content-type: application/json'); 
$status = array( 
'type'=>'success', 
'message'=>'Спасибо за заявку! Наши менеджеры свяжутся с вами в ближайшее время' 
);
  
    $name = @trim(stripslashes($_POST['name']));
    $subject = @trim(stripslashes($_POST['subject']));  
    $email = @trim(stripslashes($_POST['email']));  
    $phone = @trim(stripslashes($_POST['phone']));  
    $message = @trim(stripslashes($_POST['message']));  
 
    $email_from = $email; 
    $email_to = 'milen-06@mail.ru';//replace with your email
 
 
    $body = 'Имя: ' . $name . "\n\n" . 'Тип услуги: ' . $subject . "\n\n" . 'Email: ' . $email . "\n\n" . 'Телефон: ' . $phone . "\n\n" . 'Сообщение: ' . $message; 
 
    $success = @mail($email_to, $phone, $body, 'From: <'.$email_from.'>'); 
 
    echo json_encode($status);
 
die;