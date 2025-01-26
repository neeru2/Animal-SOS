<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
$connection = pg_connect("host=localhost dbname=animal user=postgres password=Back-sq01");
if (!connection){
    echo "Not connected";
    exit;
}
$result = pgquery($connection, "SELECT * FROM animals");


while($row = pg_fetch_assoc($result)){
    echo "
    <tr>
    <td>$row[id]</td>
    <td>$row[type]</td>
    </tr>
    ";
}
?>

    
</body>
</html>