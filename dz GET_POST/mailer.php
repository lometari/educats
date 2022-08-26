<?php
echo '<pre>';
print_r($_POST);
echo '</pre>';

//print_r ($_POST['userName']);   //Обращаемся к конкретному значению формы

//file_put_contents('result.txt', implode("\n", $_POST));   //запись через file_put_contents

$str = '';
foreach($_POST as $key => $val)
{
    $str .= $key.'='.$val.', ';
}
file_put_contents('result_bot.txt', $str."\r\n", FILE_APPEND);
$str = '';

?>