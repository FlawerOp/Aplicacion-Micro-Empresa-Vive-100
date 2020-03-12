<?php
header('Access-Control-Allow-Origin: *');
$CAK = file_get_contents('php://input');
$CATCH = json_decode($CAK, true);
include 'conceccion.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    if ($CATCH['accion'] == 'conexion') {
        $CEDULA = $CATCH['CEDULA'];
        $sql = "SELECT * FROM USUARIOS WHERE CEDULA='$CEDULA'";
        $result = $conexion->query($sql);
        $row = $result->FETCH_ASSOC();
        if (empty($row)) {
            echo json_encode("Conexion fallida");
        }else{
            echo json_encode($row);
        }
    }

    if ($CATCH['accion'] == 'login') {
        $CEDULA = $CATCH['cedula'];
        $PASS = $CATCH['pass'];
        $sql = "SELECT * FROM USUARIOS where CEDULA='$CEDULA'";
        $result = $conexion->query($sql);
        $row = $result->FETCH_ASSOC();
        if (empty($row) == false) {
            if ($PASS == $row['CONTRA']) {
                echo json_encode($row);
            } else {
                echo json_encode('contraseña pailas');
            }
        } else {
            echo json_encode('no existe esa monda');
        }
    }

    if ($CATCH["accion"] == "registrar") {
        $CEDULA = $CATCH["cedula"];
        $NOMBRE = $CATCH["nombre"];
        $APELLIDOS = $CATCH["apellido"];
        $TELEFONO = $CATCH["telefono"];
        $FECHA_REGISTO = $CATCH["FECHA"];
        $CIUDAD = $CATCH["ciudad"];
        $REFERENCIA_PERSONAL = $CATCH["referencia"];
        $DIRECCION = $CATCH["direccion"];
        $sql = "INSERT INTO EMPLEADO (CEDULA, NOMBRE, APELLIDOS, TELEFONO, FECHA_REGISTO, CIUDAD, REFERENCIA_PERSONAL, DIRECCION) 
        VALUES ('$CEDULA', '$NOMBRE', '$APELLIDOS', '$TELEFONO', '$FECHA_REGISTO', '$CIUDAD', '$REFERENCIA_PERSONAL', '$DIRECCION')";



        if ($result = $conexion->query($sql)) {
            echo json_encode("usuario registrador exitosamente");
        } else {
            echo json_encode("error al registrar");
        }
    }

    if ($CATCH["accion"] == "mostrar") {
        $sql = "SELECT * FROM EMPLEADO";
        $result = $conexion->query($sql);
        $rows = array();
        while ($r = mysqli_fetch_assoc($result)) {
            $rows[] = $r;
        };
        echo json_encode($rows);
    }

    if ($CATCH["accion"] == "eliminar") {
        $CEDULA = $CATCH["CEDULA"];
        $sql = "DELETE FROM EMPLEADO WHERE CEDULA='$CEDULA'";
        $result = $conexion->query($sql);
        echo json_encode($CATCH);
    }

    if ($CATCH["accion"] == "fecha") {
        $FECHA = $CATCH['fecha'];
        $sql = "INSERT INTO FECHAS (FECHAS) VALUES ('$FECHA')";
        if ($result = $conexion->query($sql)) {
            echo json_encode("Si");
        } else {
            echo json_encode("No");
        }
    }

    if ($CATCH["accion"] == "traerfecha") {
        $FECHA = $CATCH['FECHA'];
        $sql = "SELECT FECHAS FROM FECHAS where FECHAS='$FECHA'";
        $result = $conexion->query($sql);
        $row = $result->FETCH_ASSOC();
        echo json_encode($row);
    }

    if ($CATCH["accion"] == "traer") {
        $CEDULA = $CATCH['cedula'];
        $sql = "SELECT * FROM EMPLEADO where CEDULA='$CEDULA'";
        $result = $conexion->query($sql);
        $row = $result->FETCH_ASSOC();
        echo json_encode($row);
    }

    if ($CATCH["accion"] == "destraer") {
        $CEDULA = $CATCH['CEDULA'];
        $FECHA = $CATCH['FECHA'];
        $sql = "SELECT * FROM CARGUE_TOTAL WHERE FECHA_CARGUE='$FECHA' AND ID_EMPLEADO='$CEDULA' ";
        $result = $conexion->query($sql);

        $VIVE100TOTAL2 = 0;
      $VIVE400TOTAl2 = 0;
      $SPEEDTOTAL2 = 0;
      $JUGO2 = 0;
      $AGUITA2 = 0;
      $COCA2 = 0;
      $PRUEBA2 = 0;
   
         while ($R2 = mysqli_fetch_assoc($result)) {
            $VIVE100TOTAL2 += $R2["VIVE_100"];
            $VIVE400TOTAl2 += $R2["VIVE_100_400"];
            $SPEEDTOTAL2 += $R2["SPEED"];
            $JUGO2 += $R2["JUGO"];
            $AGUITA2 += $R2["AGUA"];
            $COCA2 += $R2["COCA"];
            $PRUEBA2 += $R2["PRUEBA"];
         }
      
   
      $suma = ($VIVE100TOTAL2) ;
      $SUMATOTAL = $suma;
   
      $suma2 = ($VIVE400TOTAl2) ;
      $SUMATOTAL2 = $suma2;
   
      $suma3 = ($SPEEDTOTAL2) ;
      $SUMATOTAL3 = $suma3;
   
      $suma4 = ($JUGO2) ;
      $SUMATOTAL4 = $suma4;
   
      $suma5 = ($AGUITA2) ;
      $SUMATOTAL5 = $suma5;
   
      $suma6 = ($COCA2) ;
      $SUMATOTAL6 = $suma6;
   
      $suma7 = ($PRUEBA2) ;
      $SUMATOTAL7 = $suma7;
   
      $TOTAL2 = [
         "SUMAUNO" => $SUMATOTAL,
         "SUMADOS" => $SUMATOTAL2,
         "SUMATRES" => $SUMATOTAL3,
         "SUMAUCUATRO" => $SUMATOTAL4,
         "SUMACINCO" => $SUMATOTAL5,
         "SUMASEIS" => $SUMATOTAL6,
         "SUMASIETE" => $SUMATOTAL7,
     ];
   
     echo json_encode($TOTAL2);
   }


    if ($CATCH["accion"] == "bloquearcargue") {
        $CEDULA = $CATCH['CEDULA'];
        $FECHA = $CATCH['FECHA'];
        $sql = "SELECT ID_EMPLEADO FROM CARGUE_TOTAL WHERE FECHA_CARGUE='$FECHA' AND ID_EMPLEADO='$CEDULA' ";
        $result = $conexion->query($sql);
        $row = $result->FETCH_ASSOC();
        echo json_encode($row);
    }

    if ($CATCH["accion"] == "bloqueardescargue") {
        $CEDULA = $CATCH['CEDULA'];
        $FECHA = $CATCH['FECHA'];
        $sql = "SELECT ID_EMPLEADO FROM DESCARGUE_TOTAL WHERE FECHA_DESCARGUE='$FECHA' AND ID_EMPLEADO='$CEDULA' ";
        $result = $conexion->query($sql);
        $row = $result->FETCH_ASSOC();
        echo json_encode($row);
    }


    if ($CATCH["accion"] == "cargar") {
        $FECHA = $CATCH['FECHA'];
        $CEDULA = $CATCH['CEDULA'];
        $VIVE_100 = $CATCH['VIVE100'];
        $VIVE_100_400 = $CATCH['VIVE400'];
        $SPEED = $CATCH['SPEED'];
        $AGUA = $CATCH['AGUA'];
        $JUGO = $CATCH['JUGO'];
        $COCA = $CATCH['COCA'];
        $PRUEBA = $CATCH['PRUEBA'];
        $sql = "INSERT INTO CARGUE_TOTAL (ID_CARGUE,FECHA_CARGUE, iD_EMPLEADO, VIVE_100, VIVE_100_400, SPEED, AGUA, JUGO, COCA, PRUEBA)
         VALUES (NULL, '$FECHA', '$CEDULA', '$VIVE_100', '$VIVE_100_400', '$SPEED', '$AGUA', '$JUGO', '$COCA', '$PRUEBA')";
        $result = $conexion->query($sql);
        echo json_encode($CATCH);
    }

    if ($CATCH["accion"] == "descargar") {
        $FECHA = $CATCH['FECHA'];
        $CEDULA = $CATCH['CEDULA'];
        $VIVE_100 = $CATCH['VIVE100'];
        $VIVE_100_400 = $CATCH['VIVE400'];
        $SPEED = $CATCH['SPEED'];
        $AGUA = $CATCH['AGUA'];
        $JUGO = $CATCH['JUGO'];
        $COCA = $CATCH['COCA'];
        $PRUEBA = $CATCH['PRUEBA'];
        $sql = "INSERT INTO DESCARGUE_TOTAL (ID_DESCARGUE,FECHA_DESCARGUE, iD_EMPLEADO, VIVE_100, VIVE_100_400, SPEED, AGUA, JUGO, COCA, PRUEBA) VALUES (NULL, '$FECHA', '$CEDULA', '$VIVE_100', '$VIVE_100_400', '$SPEED', '$AGUA', '$JUGO', '$COCA', '$PRUEBA')";
        $result = $conexion->query($sql);
        echo json_encode($CATCH);
    }


    if ($CATCH["accion"] == "mayor") {
        $ID_CLIENTE = $CATCH['ID_CLIENTE'];
        $FECHA = $CATCH['FECHA'];
        $VIVE_100 = $CATCH['VIVE100'];
        $VIVE_100_400 = $CATCH['VIVE400'];
        $SPEED = $CATCH['SPEED'];
        $AGUA = $CATCH['AGUA'];
        $JUGO = $CATCH['JUGO'];
        $COCA = $CATCH['COCA'];
        $sql = "INSERT INTO FACTURA_MAYOR (ID, FECHA_DESCARGUE, ID_CLIENTE, VIVE_100, VIVE_100_400, SPEED, AGUA, JUGO, COCA)
         VALUES (NULL,'$FECHA', '$ID_CLIENTE', '$VIVE_100', '$VIVE_100_400', '$SPEED', '$AGUA', '$JUGO', '$COCA')";
        $result = $conexion->query($sql);
        echo json_encode($result);
    }

    if ($CATCH["accion"] == "suma") {

        $FECHA = $CATCH['FECHA'];
        $sql = "SELECT * FROM VIVE100_KALEX WHERE DIA_MES='$FECHA'";
        $result = $conexion->query($sql);
        $UNO = $result->FETCH_ASSOC();
        if (empty($UNO)) {

            $sql = "SELECT * FROM CARGUE_TOTAL WHERE FECHA_CARGUE='$FECHA'";
            $sql2 = "SELECT * FROM DESCARGUE_TOTAL WHERE FECHA_DESCARGUE='$FECHA'";
            $resulta = $conexion->query($sql);
            $resulta2 = $conexion->query($sql2);
            $VIVE100TOTAL = 0;
            $VIVE100TOTAL2 = 0;
            while ($R = mysqli_fetch_assoc($resulta)) {
                $VIVE100TOTAL += $R["VIVE_100"];
                while ($R2 = mysqli_fetch_assoc($resulta2)) {
                    $VIVE100TOTAL2 += $R2["VIVE_100"];
                }
            }

            $suma = ($VIVE100TOTAL - $VIVE100TOTAL2);

            $SUMATOTAL = $suma;

            $sql3 = "INSERT INTO VIVE100_KALEX (ID, DIA_MES, INVENTARIO_INICIAL, FACTURACION_EN_UNIDADES, ROTACION_TOTAL_UNIDADES, INVENTARIO_FINAL)
        VALUES (NULL,'$FECHA', NULL, '0', '$SUMATOTAL', '0')";
            $resulta3 = $conexion->query($sql3);
            echo json_encode($SUMATOTAL);
        } else {
            $sql = "SELECT * FROM CARGUE_TOTAL WHERE FECHA_CARGUE='$FECHA'";
            $sql2 = "SELECT * FROM DESCARGUE_TOTAL WHERE FECHA_DESCARGUE='$FECHA'";
            $resulta = $conexion->query($sql);
            $resulta2 = $conexion->query($sql2);
            $VIVE100TOTAL = 0;
            $VIVE100TOTAL2 = 0;
            while ($R = mysqli_fetch_assoc($resulta)) {
                $VIVE100TOTAL += $R["VIVE_100"];
                while ($R2 = mysqli_fetch_assoc($resulta2)) {
                    $VIVE100TOTAL2 += $R2["VIVE_100"];
                }
            }

            $suma = ($VIVE100TOTAL - $VIVE100TOTAL2);

            $SUMATOTAL = $suma;

            $sql3 = "UPDATE VIVE100_KALEX SET ROTACION_TOTAL_UNIDADES= '$SUMATOTAL' WHERE DIA_MES='$FECHA'";
            $resulta3 = $conexion->query($sql3);
            echo json_encode($SUMATOTAL);
        }
    }

    if ($CATCH["accion"] == "suma2") {
        $FECHA = $CATCH['FECHA'];
        $sql = "SELECT * FROM VIVE400_KALEX WHERE DIA_MES='$FECHA'";
        $result = $conexion->query($sql);
        $DOS = $result->FETCH_ASSOC();
        if (empty($DOS)) {
            $sql = "SELECT * FROM CARGUE_TOTAL WHERE FECHA_CARGUE='$FECHA'";
            $sql2 = "SELECT * FROM DESCARGUE_TOTAL WHERE FECHA_DESCARGUE='$FECHA'";
            $resulta = $conexion->query($sql);
            $resulta2 = $conexion->query($sql2);

            $VIVE400TOTAl = 0;
            $VIVE400TOTAl2 = 0;

            while ($R = mysqli_fetch_assoc($resulta)) {
                $VIVE400TOTAl += $R["VIVE_100_400"];
                while ($R2 = mysqli_fetch_assoc($resulta2)) {

                    $VIVE400TOTAl2 += $R2["VIVE_100_400"];
                }
            }

            $suma2 = ($VIVE400TOTAl - $VIVE400TOTAl2);

            $SUMATOTAL2 = $suma2;

            $sql3 = "INSERT INTO VIVE400_KALEX (ID, DIA_MES, INVENTARIO_INICIAL, FACTURACION_EN_UNIDADES, ROTACION_TOTAL_UNIDADES, INVENTARIO_FINAL)
                        VALUES (NULL,'$FECHA', NULL, '0', '$SUMATOTAL2', '0')";
            $resulta3 = $conexion->query($sql3);
            echo json_encode($SUMATOTAL2);
        } else {
            $sql = "SELECT * FROM CARGUE_TOTAL WHERE FECHA_CARGUE='$FECHA'";
            $sql2 = "SELECT * FROM DESCARGUE_TOTAL WHERE FECHA_DESCARGUE='$FECHA'";
            $resulta = $conexion->query($sql);
            $resulta2 = $conexion->query($sql2);

            $VIVE400TOTAl = 0;
            $VIVE400TOTAl2 = 0;

            while ($R = mysqli_fetch_assoc($resulta)) {
                $VIVE400TOTAl += $R["VIVE_100_400"];
                while ($R2 = mysqli_fetch_assoc($resulta2)) {

                    $VIVE400TOTAl2 += $R2["VIVE_100_400"];
                }
            }

            $suma2 = ($VIVE400TOTAl - $VIVE400TOTAl2);

            $SUMATOTAL2 = $suma2;
            $sql3 = "UPDATE VIVE400_KALEX SET ROTACION_TOTAL_UNIDADES= '$SUMATOTAL2' WHERE DIA_MES='$FECHA'";
            $resulta3 = $conexion->query($sql3);
            echo json_encode($SUMATOTAL2);
        }
    }

    if ($CATCH["accion"] == "suma3") {
        $FECHA = $CATCH['FECHA'];
        $sql = "SELECT * FROM SPEED_KALEX WHERE DIA_MES='$FECHA'";
        $result = $conexion->query($sql);
        $TRES = $result->FETCH_ASSOC();
        if (empty($TRES)) {
            $sql = "SELECT * FROM CARGUE_TOTAL WHERE FECHA_CARGUE='$FECHA'";
            $sql2 = "SELECT * FROM DESCARGUE_TOTAL WHERE FECHA_DESCARGUE='$FECHA'";
            $resulta = $conexion->query($sql);
            $resulta2 = $conexion->query($sql2);

            $SPEEDTOTAL = 0;
            $SPEEDTOTAL2 = 0;

            while ($R = mysqli_fetch_assoc($resulta)) {
                $SPEEDTOTAL += $R["SPEED"];
                while ($R2 = mysqli_fetch_assoc($resulta2)) {

                    $SPEEDTOTAL2 += $R2["SPEED"];
                }
            }

            $suma3 = ($SPEEDTOTAL - $SPEEDTOTAL2);

            $SUMATOTAL3 = $suma3;

            $sql3 = "INSERT INTO SPEED_KALEX (ID, DIA_MES, INVENTARIO_INICIAL, FACTURACION_EN_UNIDADES, ROTACION_TOTAL_UNIDADES, INVENTARIO_FINAL)
                            VALUES (NULL,'$FECHA', NULL, '0', '$SUMATOTAL3', '0')";
            $resulta3 = $conexion->query($sql3);
            echo json_encode($SUMATOTAL3);
        } else {
            $sql = "SELECT * FROM CARGUE_TOTAL WHERE FECHA_CARGUE='$FECHA'";
            $sql2 = "SELECT * FROM DESCARGUE_TOTAL WHERE FECHA_DESCARGUE='$FECHA'";
            $resulta = $conexion->query($sql);
            $resulta2 = $conexion->query($sql2);

            $SPEEDTOTAL = 0;
            $SPEEDTOTAL2 = 0;

            while ($R = mysqli_fetch_assoc($resulta)) {
                $SPEEDTOTAL += $R["SPEED"];
                while ($R2 = mysqli_fetch_assoc($resulta2)) {

                    $SPEEDTOTAL2 += $R2["SPEED"];
                }
            }

            $suma3 = ($SPEEDTOTAL - $SPEEDTOTAL2);

            $SUMATOTAL3 = $suma3;

            $sql3 = "UPDATE SPEED_KALEX SET ROTACION_TOTAL_UNIDADES= '$SUMATOTAL3' WHERE DIA_MES='$FECHA'";
            $resulta3 = $conexion->query($sql3);
            echo json_encode($SUMATOTAL3);
        }
    }

    if ($CATCH["accion"] == "suma4") {
        $FECHA = $CATCH['FECHA'];
        $sql = "SELECT * FROM JUGO_KALEX WHERE DIA_MES='$FECHA'";
        $result = $conexion->query($sql);
        $CUATRO = $result->FETCH_ASSOC();
        if (empty($CUATRO)) {
            $sql = "SELECT * FROM CARGUE_TOTAL WHERE FECHA_CARGUE='$FECHA'";
            $sql2 = "SELECT * FROM DESCARGUE_TOTAL WHERE FECHA_DESCARGUE='$FECHA'";
            $resulta = $conexion->query($sql);
            $resulta2 = $conexion->query($sql2);

            $JUGO = 0;
            $JUGO2 = 0;

            while ($R = mysqli_fetch_assoc($resulta)) {
                $JUGO += $R["JUGO"];
                while ($R2 = mysqli_fetch_assoc($resulta2)) {

                    $JUGO2 += $R2["JUGO"];
                }
            }

            $suma4 = ($JUGO - $JUGO2);

            $SUMATOTAL4 = $suma4;

            $sql3 = "INSERT INTO JUGO_KALEX (ID, DIA_MES, INVENTARIO_INICIAL, FACTURACION_EN_UNIDADES, ROTACION_TOTAL_UNIDADES, INVENTARIO_FINAL)
                VALUES (NULL,'$FECHA', NULL, '0', '$SUMATOTAL4', '0')";
            $resulta3 = $conexion->query($sql3);
            echo json_encode($SUMATOTAL4);
        } else {
            $sql = "SELECT * FROM CARGUE_TOTAL WHERE FECHA_CARGUE='$FECHA'";
            $sql2 = "SELECT * FROM DESCARGUE_TOTAL WHERE FECHA_DESCARGUE='$FECHA'";
            $resulta = $conexion->query($sql);
            $resulta2 = $conexion->query($sql2);

            $JUGO = 0;
            $JUGO2 = 0;

            while ($R = mysqli_fetch_assoc($resulta)) {
                $JUGO += $R["JUGO"];
                while ($R2 = mysqli_fetch_assoc($resulta2)) {

                    $JUGO2 += $R2["JUGO"];
                }
            }

            $suma4 = ($JUGO - $JUGO2);

            $SUMATOTAL4 = $suma4;

            $sql3 = "UPDATE JUGO_KALEX SET ROTACION_TOTAL_UNIDADES= '$SUMATOTAL4' WHERE DIA_MES='$FECHA'";
            $resulta3 = $conexion->query($sql3);
            echo json_encode($SUMATOTAL4);
        }
    }



    if ($CATCH["accion"] == "suma5") {
        $FECHA = $CATCH['FECHA'];
        $sql = "SELECT * FROM AGUA_KALEX WHERE DIA_MES='$FECHA'";
        $result = $conexion->query($sql);
        $CINCO = $result->FETCH_ASSOC();
        if (empty($CINCO)) {
            $sql = "SELECT * FROM CARGUE_TOTAL WHERE FECHA_CARGUE='$FECHA'";
            $sql2 = "SELECT * FROM DESCARGUE_TOTAL WHERE FECHA_DESCARGUE='$FECHA'";
            $resulta = $conexion->query($sql);
            $resulta2 = $conexion->query($sql2);

            $AGUITA = 0;
            $AGUITA2 = 0;

            while ($R = mysqli_fetch_assoc($resulta)) {
                $AGUITA += $R["AGUA"];
                while ($R2 = mysqli_fetch_assoc($resulta2)) {

                    $AGUITA2 += $R2["AGUA"];
                }
            }

            $suma5 = ($AGUITA - $AGUITA2);

            $SUMATOTAL5 = $suma5;

            $sql3 = "INSERT INTO AGUA_KALEX (ID, DIA_MES, INVENTARIO_INICIAL, FACTURACION_EN_UNIDADES, ROTACION_TOTAL_UNIDADES, INVENTARIO_FINAL)
                        VALUES (NULL,'$FECHA', NULL, '0', '$SUMATOTAL5', '0')";
            $resulta3 = $conexion->query($sql3);
            echo json_encode($SUMATOTAL5);
        } else {
            $sql = "SELECT * FROM CARGUE_TOTAL WHERE FECHA_CARGUE='$FECHA'";
            $sql2 = "SELECT * FROM DESCARGUE_TOTAL WHERE FECHA_DESCARGUE='$FECHA'";
            $resulta = $conexion->query($sql);
            $resulta2 = $conexion->query($sql2);

            $AGUITA = 0;
            $AGUITA2 = 0;

            while ($R = mysqli_fetch_assoc($resulta)) {
                $AGUITA += $R["AGUA"];
                while ($R2 = mysqli_fetch_assoc($resulta2)) {
                    $AGUITA2 += $R2["AGUA"];
                }
            }

            $suma5 = ($AGUITA - $AGUITA2);

            $SUMATOTAL5 = $suma5;

            $sql3 = "UPDATE AGUA_KALEX SET ROTACION_TOTAL_UNIDADES= '$SUMATOTAL5' WHERE DIA_MES='$FECHA'";
            $resulta3 = $conexion->query($sql3);
            echo json_encode($SUMATOTAL5);
        }
    }

    if ($CATCH["accion"] == "suma6") {
        $FECHA = $CATCH['FECHA'];
        $sql = "SELECT * FROM COCACOLA_KALEX WHERE DIA_MES='$FECHA'";
        $result = $conexion->query($sql);
        $SEIS = $result->FETCH_ASSOC();
        if (empty($SEIS)) {
            $sql = "SELECT * FROM CARGUE_TOTAL WHERE FECHA_CARGUE='$FECHA'";
            $sql2 = "SELECT * FROM DESCARGUE_TOTAL WHERE FECHA_DESCARGUE='$FECHA'";
            $resulta = $conexion->query($sql);
            $resulta2 = $conexion->query($sql2);

            $COCA = 0;
            $COCA2 = 0;

            while ($R = mysqli_fetch_assoc($resulta)) {
                $COCA += $R["COCA"];
                while ($R2 = mysqli_fetch_assoc($resulta2)) {

                    $COCA2 += $R2["COCA"];
                }
            }

            $suma6 = ($COCA - $COCA2);

            $SUMATOTAL6 = $suma6;

            $sql3 = "INSERT INTO COCACOLA_KALEX (ID, DIA_MES, INVENTARIO_INICIAL, FACTURACION_EN_UNIDADES, ROTACION_TOTAL_UNIDADES, INVENTARIO_FINAL)
                        VALUES (NULL,'$FECHA', NULL, '0', '$SUMATOTAL6', '0')";
            $resulta3 = $conexion->query($sql3);
            echo json_encode($SUMATOTAL6);
        } else {
            $sql = "SELECT * FROM CARGUE_TOTAL WHERE FECHA_CARGUE='$FECHA'";
            $sql2 = "SELECT * FROM DESCARGUE_TOTAL WHERE FECHA_DESCARGUE='$FECHA'";
            $resulta = $conexion->query($sql);
            $resulta2 = $conexion->query($sql2);

            $COCA = 0;
            $COCA2 = 0;

            while ($R = mysqli_fetch_assoc($resulta)) {
                $COCA += $R["COCA"];
                while ($R2 = mysqli_fetch_assoc($resulta2)) {

                    $COCA2 += $R2["COCA"];
                }
            }

            $suma6 = ($COCA - $COCA2);

            $SUMATOTAL6 = $suma6;

            $sql3 = "UPDATE COCACOLA_KALEX SET ROTACION_TOTAL_UNIDADES= '$SUMATOTAL6' WHERE DIA_MES='$FECHA'";
            $resulta3 = $conexion->query($sql3);
            echo json_encode($SUMATOTAL6);
        }
    }

    if ($CATCH["accion"] == "suma7") {
        $FECHA = $CATCH['FECHA'];
        $sql = "SELECT * FROM PRUEBA_KALEX WHERE DIA_MES='$FECHA'";
        $result = $conexion->query($sql);
        $SIETE = $result->FETCH_ASSOC();
        if (empty($SIETE)) {
            $sql = "SELECT * FROM CARGUE_TOTAL WHERE FECHA_CARGUE='$FECHA'";
            $sql2 = "SELECT * FROM DESCARGUE_TOTAL WHERE FECHA_DESCARGUE='$FECHA'";
            $resulta = $conexion->query($sql);
            $resulta2 = $conexion->query($sql2);

            $PRUEBA = 0;
            $PRUEBA2 = 0;

            while ($R = mysqli_fetch_assoc($resulta)) {
                $PRUEBA += $R["PRUEBA"];
                while ($R2 = mysqli_fetch_assoc($resulta2)) {

                    $PRUEBA2 += $R2["PRUEBA"];
                }
            }

            $suma7 = ($PRUEBA - $COCA2);

            $SUMATOTAL7 = $suma7;

            $sql3 = "INSERT INTO PRUEBA_KALEX (ID, DIA_MES, INVENTARIO_INICIAL, FACTURACION_EN_UNIDADES, ROTACION_TOTAL_UNIDADES, INVENTARIO_FINAL)
                        VALUES (NULL,'$FECHA', NULL, '0', '$SUMATOTAL7', '0')";
            $resulta3 = $conexion->query($sql3);
            echo json_encode($SUMATOTAL7);
        } else {
            $sql = "SELECT * FROM CARGUE_TOTAL WHERE FECHA_CARGUE='$FECHA'";
            $sql2 = "SELECT * FROM DESCARGUE_TOTAL WHERE FECHA_DESCARGUE='$FECHA'";
            $resulta = $conexion->query($sql);
            $resulta2 = $conexion->query($sql2);

            $PRUEBA = 0;
            $PRUEBA2 = 0;

            while ($R = mysqli_fetch_assoc($resulta)) {
                $PRUEBA += $R["PRUEBA"];
                while ($R2 = mysqli_fetch_assoc($resulta2)) {

                    $PRUEBA2 += $R2["PRUEBA"];
                }
            }

            $suma7 = ($PRUEBA - $PRUEBA2);

            $SUMATOTAL7 = $suma7;

            $sql3 = "UPDATE PRUEBA_KALEX SET ROTACION_TOTAL_UNIDADES= '$SUMATOTAL7' WHERE DIA_MES='$FECHA'";
            $resulta3 = $conexion->query($sql3);
            echo json_encode($SUMATOTAL7);
        }
    }

    if ($CATCH["accion"] == "modificar") {
        $CEDULA = $CATCH["CEDULA"];
        $NOMBRE = $CATCH["NOMBRE"];
        $APELLIDOS = $CATCH["APELLIDOS"];
        $TELEFONO = $CATCH["TELEFONO"];
        $CIUDAD = $CATCH["CIUDAD"];
        $REFERENCIA_PERSONAL = $CATCH["REFERENCIA_PERSONAL"];
        $DIRECCION = $CATCH["DIRECCION"];
        $sql = "UPDATE EMPLEADO SET    NOMBRE= '$NOMBRE', APELLIDOS= '$APELLIDOS', TELEFONO= '$TELEFONO', CIUDAD= '$CIUDAD', REFERENCIA_PERSONAL= '$REFERENCIA_PERSONAL', DIRECCION= '$DIRECCION' 
        WHERE EMPLEADO.CEDULA='$CEDULA'";
        $resulta = $conexion->query($sql);
        echo json_encode("sirve");
    }
}
