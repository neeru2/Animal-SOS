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