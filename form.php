<?php

 header("Content-Type: text/html; charset=utf-8");
/* Осуществляем проверку вводимых данных и их защиту от враждебных 
скриптов */
$your_name = htmlspecialchars($_POST["name"]);
$email = htmlspecialchars($_POST["email"]);
$tema = htmlspecialchars($_POST["event"]);
$hall = htmlspecialchars($_POST["hall"]);
$tel = htmlspecialchars($_POST["telephone"]);


$date1 = htmlspecialchars($_POST["datefrom"]);
$date2 = htmlspecialchars($_POST["dateto"]);
$time1 = htmlspecialchars($_POST["timefrom"]);
$time2 = htmlspecialchars($_POST["timeto"]);

$countPeople = htmlspecialchars($_POST["count"]);

$message = htmlspecialchars($_POST["comments"]);
/* Устанавливаем e-mail адресата */
$myemail = "reservation@admiralsky.od.ua";
//$myemail = "m.erem@vertamedia.com";
/* Проверяем заполнены ли обязательные поля ввода, используя check_input 
функцию */
$your_name = check_input($your_name, "Введите ваше имя!");
$tel = check_input($tel, "Укажите ваш телефон!");

$date1 = check_input($date1, "Укажите дату!");
$date2 = check_input($date2, "Укажите дату!");
$time1 = check_input($time1, "Укажите время!");
$time2 = check_input($time2, "Укажите время!");


$tema = check_input($tema, "Укажите название!");
$email = check_input($email, "Введите ваш e-mail!");
$message = check_input($message, "Вы забыли написать сообщение!");
/* Проверяем правильно ли записан e-mail */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
show_error("<br /> Е-mail адрес не существует");
}
/* Создаем новую переменную, присвоив ей значение */
$message_to_myemail = "Здравствуйте! 
Вашей контактной формой было отправлено сообщение! (БЦ Адмиральский)</br>
Имя отправителя: $your_name </br>
E-mail: $email </br>
Название: $tema </br>
Дата: с  $date1  по $date2 </br>
Время: с $time1 по $time2 </br>
Зал: $hall </br>
Свяжитесь по телефону: $tel </br>
Текст сообщения: $message </br>
Конец сообщения.";
/* Отправляем сообщение, используя mail() функцию */
$headers  = "From: $yourname <$email> \r\n Reply-To: $email \r\n"; 
$headers .= "Content-type: text/html; charset=\"utf-8\"";
mail($myemail, $tema, $message_to_myemail,$headers );
?>



<div class="spasibo" id="spasibo">
<script type="text/javascript">
$(document).ready(function() { // вся магия после загрузки страницы
	/* Закрытие модального окна, тут делаем то же самое но в обратном порядке */
	$('#modal_cl').click( function(){ // ловим клик по крестику или подложке
		$('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
				function(){ // после анимации
					$(this).css('display', 'none'); // делаем ему display: none;
					$('#overlay').fadeOut(400); // скрываем подложку
				}
			);
	});
});
</script>
	<p id="title_s">СПАСИБО!</p>
	<p id="text_s1">Ваша заявка успешно отправлена.</br>
В ближайшее время наши менеджеры свяжутся с вами</br> 
для подтверждения заказа</p>

				<div class="decor_image">
					<img src="images/decor.png">
				</div>
				<div class="decor_image2" >
					
						<img src="images/closer.png" style="cursor: pointer;" id="modal_cl">
					
				</div>
</div>

<script>
$(".form_bron").hide();
</script>

<?php
/* Если при заполнении формы были допущены ошибки сработает 
следующий код: */
function check_input($data, $problem = "")
{
$data = trim($data);
$data = stripslashes($data);
$data = htmlspecialchars($data);
if ($problem && strlen($data) == 0)
{
show_error($problem);
}
return $data;
}
function show_error($myError)
{
?>
<html>
<body>
<?php echo $myError; ?>
</body>
</html>
<?php
exit();
}
?>
