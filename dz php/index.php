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
<h2> Новые опыты над массивами!</h2>
<?php
//Новые опыты! Слияние простых массивов
echo '<h2>* Simple</h2>';
echo '<h4>Initial simple arrays</h4>';
$first =['value_1', 'value_2', 'value_3'];
$second =['value_4', 'value_5', 'value_6'];
echo '<pre>';
var_dump($first, $second);
echo '</pre>';

$third = $first + $second;
$thirdBackwards = $second + $first;
$fourth = array_merge($first, $second);

//Вывод простых результатов
echo '<h4> Result: array "+"  simple, 1 + 2</h4>';
echo '<pre>';
print_r($third);
echo '</pre>';

echo '<h4> Result: array "+"  simple, 2 + 1 </h4>';
echo '<pre>';
print_r($thirdBackwards);
echo '</pre>';

echo '<h4> Result: array "merge" simple</h4>';
echo '<pre>';
print_r($fourth);
echo '</pre>';


//Новые опыты! Слияние массивов посложнее
echo '<h2>* Mixed</h2>';
echo '<h4>Initial not_so_simple arrays</h4>';
$fruitArray = ['on Stock' => 'orange', 'New!' => 'peach', 'apple'];
$vegArray = ['tomato', 'cucumber', 'New!' => 'potato'];
echo '<pre>';
print_r($fruitArray);
print_r($vegArray);
echo '</pre>';

$plusArray = $fruitArray + $vegArray;
$plusArrayBackwards = $vegArray + $fruitArray;
$mergeArray = array_merge($fruitArray, $vegArray);

//Вывод непростых результатов
echo '<h4> Result: array "+"</h4>';
echo '<pre>';
print_r($plusArray);
echo '</pre>';

echo '<h4> Result: array "+" backwards</h4>';
echo '<pre>';
print_r($plusArrayBackwards);
echo '</pre>';

echo '<h4>Result: array "merge"</h4>';
echo '<pre>';
print_r($mergeArray);
echo '</pre>';

//Опыты с двумерными массивами
echo '<h2>* Two-dimensional</h2>';
//Разный синтаксис
$phoneBook1 = [
                ['name' => 'Marry',
                'phone' => '000',
                'group' => 'School',
                ],
        'Ivan'  => [
                'name' => 'Ivan',
                'phone' => '111',
                'group' => 'School',
        ],
        'Ms. Bennet'  => [
                'name' => 'Helen',
                'phone' => '222',
                'group' => 'Teacher',
        ],
];

$phoneBook2 = [
        'Helen' => array(
                'name' => 'Lena',
                'phone' => '333',
                'group' => 'Friends',
        ),
                 array('name' => 'CafeGuy',
                'phone' => '444',
                'group' => 'NoGroup',
                ),
];

echo '<h4>Initial two-dimentional arrays</h4>';
echo '<pre>';
print_r($phoneBook1);
print_r($phoneBook2);
echo '</pre>';

$plus2D = $phoneBook1 + $phoneBook2;
$plus2DBackwards = $phoneBook2 + $phoneBook1;
$merge2D = array_merge($phoneBook1,$phoneBook2);

echo '<h4>Result: 2D "+"</h4>';
echo '<pre>';
print_r($plus2D);
echo '</pre>';

echo '<h4>Result: 2D "+" backwards</h4>';
echo '<pre>';
print_r($plus2DBackwards);
echo '</pre>';

echo '<h4>Result: 2D "merge"</h4>';
echo '<pre>';
print_r($merge2D);
echo '</pre>';

//Обращение к элементам массива
echo '<h2>* Обращение к элементам массива</h2>';

echo '<pre>';
print_r($merge2D[1][name]);
echo '</pre>';
echo $mergeArray[0];

//Преобразование переменной в массив
echo '<h2>* Преобразование переменной в массив.</h2>';
echo 'А еще под нашу музыку можно делать вот-так... (с)';

$beforeNewMoon = 'Moo-o-o-o-on';
$arrayWerewolf = (array) $beforeNewMoon;

echo '<pre>';
var_dump($beforeNewMoon);
echo '</pre>';

echo '<pre>';
var_dump($arrayWerewolf);
echo '</pre>';

?>
</body>
</html>
