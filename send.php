<?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $to = "yurgens87@gmail.com";    // Куда идет письмо
        $from = "admin@nuestrotango.com";    // От кого идет письмо
        $name = $_POST['name-at'];
        $email = $_POST['email-at'];
        $phone = $_POST['phone-at'];
        $message = $_POST['message-at'];
        $subject =    $_POST['subject-at'];
        $return_arr = array();
        // Еще раз проверим заполненные поля формы. 
        // Эту проверку можно удалить или удалить проверку на JS
        if($name=="" || $email=="" || $message=="" || $phone=="" || $subject=="") {
            $return_arr["frm_check"] = 'error';
            $return_arr["msg"] = "Будь ласка, заповніть всі поля!";            
        }     
        /* Проверка на плохие слова. Если не мучают хулиганы, можно ее удалить.
        $badwords = array('предложение', 'купить', 'раскрутка'); 
        $banstring = ($message != str_ireplace($badwords,"XX",$message))? true: false; if ($banstring) { 
            $return_arr["frm_check"] = 'error';
            $return_arr["msg"] = "Есть запрещенные слова";    
        }
        */
        if ($return_arr["frm_check"] != 'error') {            
            $subject = "Повідомлення з сайту  nuestrotango.com: $subject";
$message = "Сообщение от " .$name. "\n
Контакт: " .$email. "\n
Телефон: " .$phone. "\n          
Повідомлення: \n" .$message;
            
$headers = "Content-Type: text/plain; charset=utf-8\r\n";
$headers .= "From: $from\r\n";
$headers .= "Reply-To: $from\r\n";    
            if (!mail($to, $subject, $message, $headers)) {
                $return_arr["frm_check"] = 'error';
                $return_arr["msg"] = "Повідомлення не відправлено, помилка поштового сервера!";    
            }        
        }        
        echo json_encode($return_arr);
    }
?>