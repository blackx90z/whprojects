<?php
$a = 'ian';
$a2 = 25;
$b = 25;
$c = $a + $b;
$d = 'black';
?>

<?php
$x = 5;
function test($myVar){
    echo "The value of x is:" . $myVar;
}

test($x);

function test2(){
   global $y;
   $y = 75;
    // $y = 6;
}
test2();

echo $y;
?>






<!-- <p>hello <?php
$txt = $first . ' ' . $last;
print $txt;
 ?>, Welcome to my site</p>
<p>
My car is <?php echo $d; ?> 
</p>
<p> The answer is: <?php echo $c; ?></p> -->