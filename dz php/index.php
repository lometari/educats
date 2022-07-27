<?php
//Проба пера
//$stringCats = file_get_contents('list.txt');
//var_dump($stringCats);
//$dividedArray = explode(', ', $stringCats);
//array_filter($dividedArray, strlen);
//
//echo '<pre>';
//var_dump($dividedArray);
//echo '</pre>';
//file_put_contents('devided_list.txt', $dividedArray);
//echo 'Writed $dividedArray';
//
//$finalArray = array_reverse($dividedArray);
//echo '<pre>';
//print_r($finalArray);
//echo '</pre>';
//file_put_contents('final_list.txt', implode("\r", $finalArray));
//echo 'Writed $finalArray';

//Меньше слов
$stringCats = file_get_contents('list.txt');
var_dump($stringCats);
$dividedArray = explode(', ', $stringCats);


echo '<pre>';
var_dump($dividedArray);
echo '</pre>';


echo '<pre>';
var_dump(array_reverse($dividedArray));
echo '</pre>';

file_put_contents('final_list.txt', implode("\n", array_reverse($dividedArray)));

    ?>

<!DOCTYPE html>
<html>
<head>
<title>PHP array print</title>
</head>
<body>
<style>
    box{
        width: 50%;
        border: 1px solid black;
        padding: 5px;
        display: flex;
        justify-content: space-evenly;
    }
    table{
        width: max-content;
        border: 3px solid red;
    }
    td{
        border: 1px dotted red;
    }
</style>
<box>
<table>
    <?php
    foreach($dividedArray as $value){
        echo " <tr><td>$value</td></tr>";
    }
    ?>
</table>
<table>
    <?php
    foreach(array_reverse($dividedArray) as $value){
        echo " <tr><td>$value</td></tr>";
    }
    ?>
</table>
</box>
    <?php
    $dividedArray[]="Domestic Cat";
    echo '<pre>';
    var_dump($dividedArray);
    echo '</pre>';
    ?>

<box>
    <table>
        <?php
        foreach($dividedArray as $value){
            echo " <tr><td>$value</td></tr>";
        }
        ?>
    </table>
    <table>
        <?php
        foreach(array_reverse($dividedArray) as $value){
            echo " <tr><td>$value</td></tr>";
        }
        ?>
    </table>
</box>
</body>
</html>
