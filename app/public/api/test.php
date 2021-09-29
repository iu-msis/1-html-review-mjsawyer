<?php


$num = 2;
$foo = $num . "be";
$bar = "or not" .$num. "be";


echo $foo .' '. $bar "\n";


echo $num * $num * $num;


$arr = [
  "first" => "Tom";
  "second" => "Bipin";
  "best" => "DS";
];

$arr2 = [1,1,2,3,5,8];

if (true) {
  echo "\nTRUE\n";
}


while (true) {
  break;
}
#this is a DOMComment
//this is also a comment(main way)

echo "ul>";
foreach($arr as $key=>$val) {
  echo $key . " is".$val."</li>";
}
echo "</ul";


function printANDEncode( $val ) {
  echo json_encode(
      $val,
      JSON_PRETTY_PRINT|JSON_THROW_ON_ERROR
    );
}


// ==========================
//Naming Conventions
// JS & php: camelCase (we use)
// PascalCase
//snake_case
//kehab-case
 ?>
