<?php
include("/class/PHPMailer-master/src/PHPMailer.php");
include("/class/PHPMailer-master/src/SMTP.php");
include("/class/PHPMailer-master/src/Exception.php");

$nomeUser=filter_input(type: INPUT_POST, variable_name:"name", filter:FILTER_SANITIZE_SPECIAL_CHARS);
$emailUser=filter_input(type: INPUT_POST, variable_name:"email", filter:FILTER_SANITIZE_SPECIAL_CHARS);
$telefoneUser=filter_input(type: INPUT_POST, variable_name:"phone", filter:FILTER_SANITIZE_SPECIAL_CHARS);
$mensagemUser=filter_input(type: INPUT_POST, variable_name:"message", filter:FILTER_SANITIZE_SPECIAL_CHARS);

$mail=new \PHPMailer\PHPMailer\PHPMailer();
$mail->SMTPDebug = 2;
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';                         // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'fabimendes.dev@gmail.com';                 // SMTP username
$mail->Password = 'Kbp772534';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;

//Recipients
$mail->setFrom($emailUser);
$mail->addAddress(address: 'fabimendes.dev@gmail.com');     // Add a recipient

//Content
$mail->isHTML(isHTML:true);                                  // Set email format to HTML
$mail->Subject = 'Contato do Site';
$mail->Body = " 
Nome: {$nomeUser} <br>
Email: {$emailUser} <br>
Telefone: {$telefoneUser} <br> 
Mensagem: {$mensagemUser} ";

$mail->send();
echo 'Mensagem enviada com sucesso!';