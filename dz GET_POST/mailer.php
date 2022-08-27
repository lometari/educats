<?php
//echo '<pre>';
//print_r($_POST);
//echo '</pre>';

//file_put_contents('result.txt', $_POST, FILE_APPEND);  //попроще, для проверки

//print_r ($_POST['userName']);   //Обращаемся к конкретному значению формы


// Запись в файл ключ=значение
$str = '';
foreach($_POST as $key => $val)
{
    $str .= $key.'='.$val.', ';
}
file_put_contents('result_bot.txt', $str."\r\n", FILE_APPEND);
$str = '';

//Не работает :/
//echo '<script>alert("Done! Thank you for cooperation!")</script>';

?>