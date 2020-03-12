<?php
header('Access-Control-Allow-Origin: *');
$CAK = file_get_contents('php://input');
$CATCH = json_decode($CAK, true);
include 'conceccion.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    if ($CATCH["accion"] == "añadir") {

        $FECHA = $CATCH['FECHA'];
        $sql = "SELECT * FROM VIVE100_KALEX WHERE DIA_MES='$FECHA'";
        $result = $conexion->query($sql);
        $UNO = $result->FETCH_ASSOC();
        if (empty($UNO)) {
            $sql1 = "INSERT INTO VIVE100_KALEX (ID, DIA_MES, INVENTARIO_INICIAL, FACTURACION_EN_UNIDADES, ROTACION_TOTAL_UNIDADES, INVENTARIO_FINAL)
            VALUES (NULL,'$FECHA', '0', '0', '0', '0')";
            $resulta1 = $conexion->query($sql1);
        }


        $sql = "SELECT * FROM VIVE400_KALEX WHERE DIA_MES='$FECHA'";
        $result = $conexion->query($sql);
        $DOS = $result->FETCH_ASSOC();
        if (empty($DOS)) {
            $sql2 = "INSERT INTO VIVE400_KALEX (ID, DIA_MES, INVENTARIO_INICIAL, FACTURACION_EN_UNIDADES, ROTACION_TOTAL_UNIDADES, INVENTARIO_FINAL)
        VALUES (NULL,'$FECHA', '0', '0', '0', '0')";
            $resulta2 = $conexion->query($sql2);
        }

        $sql = "SELECT * FROM SPEED_KALEX WHERE DIA_MES='$FECHA'";
        $result = $conexion->query($sql);
        $TRES = $result->FETCH_ASSOC();
        if (empty($TRES)) {
            $sql3 = "INSERT INTO SPEED_KALEX (ID, DIA_MES, INVENTARIO_INICIAL, FACTURACION_EN_UNIDADES, ROTACION_TOTAL_UNIDADES, INVENTARIO_FINAL)
        VALUES (NULL,'$FECHA', '0', '0', '0', '0')";
            $resulta3 = $conexion->query($sql3);
        }

        $sql = "SELECT * FROM JUGO_KALEX WHERE DIA_MES='$FECHA'";
        $result = $conexion->query($sql);
        $CUATRO = $result->FETCH_ASSOC();
        if (empty($CUATRO)) {
            $sql4 = "INSERT INTO JUGO_KALEX (ID, DIA_MES, INVENTARIO_INICIAL, FACTURACION_EN_UNIDADES, ROTACION_TOTAL_UNIDADES, INVENTARIO_FINAL)
        VALUES (NULL,'$FECHA', '0', '0', '0', '0')";
            $resulta4 = $conexion->query($sql4);
        }


        $sql = "SELECT * FROM AGUA_KALEX WHERE DIA_MES='$FECHA'";
        $result = $conexion->query($sql);
        $CINCO = $result->FETCH_ASSOC();
        if (empty($CINCO)) {
            $sql5 = "INSERT INTO AGUA_KALEX (ID, DIA_MES, INVENTARIO_INICIAL, FACTURACION_EN_UNIDADES, ROTACION_TOTAL_UNIDADES, INVENTARIO_FINAL)
        VALUES (NULL,'$FECHA', '0', '0', '0', '0')";
            $resulta5 = $conexion->query($sql5);
        }


        $sql = "SELECT * FROM COCACOLA_KALEX WHERE DIA_MES='$FECHA'";
        $result = $conexion->query($sql);
        $SEIS = $result->FETCH_ASSOC();
        if (empty($SEIS)) {
            $sql6 = "INSERT INTO COCACOLA_KALEX (ID, DIA_MES, INVENTARIO_INICIAL, FACTURACION_EN_UNIDADES, ROTACION_TOTAL_UNIDADES, INVENTARIO_FINAL)
        VALUES (NULL,'$FECHA', '0', '0', '0', '0')";
            $resulta6 = $conexion->query($sql6);
        }

        $sql = "SELECT * FROM PRUEBA_KALEX WHERE DIA_MES='$FECHA'";
        $result = $conexion->query($sql);
        $SIETE = $result->FETCH_ASSOC();
        if (empty($SIETE)) {
            $sql6 = "INSERT INTO PRUEBA_KALEX (ID, DIA_MES, INVENTARIO_INICIAL, FACTURACION_EN_UNIDADES, ROTACION_TOTAL_UNIDADES, INVENTARIO_FINAL)
        VALUES (NULL,'$FECHA', '0', '0', '0', '0')";
            $resulta6 = $conexion->query($sql6);
        }
    }

    if ($CATCH["accion"] == "envio") {

        $FECHA = $CATCH["FECHA"];
        $sql = "SELECT * FROM FACTURA_MAYOR WHERE FECHA_DESCARGUE='$FECHA' ";
        $resulta = $conexion->query($sql);

        $VIVE100TOTAL = 0;
        $VIVE400TOTAl = 0;
        $SPEEDTOTAL = 0;
        $JUGO = 0;
        $AGUITA = 0;
        $COCA = 0;

        while ($R = mysqli_fetch_assoc($resulta)) {
            $VIVE100TOTAL += $R["VIVE_100"];
            $VIVE400TOTAl += $R["VIVE_100_400"];
            $SPEEDTOTAL += $R["SPEED"];
            $JUGO += $R["JUGO"];
            $AGUITA += $R["AGUA"];
            $COCA += $R["COCA"];
        }

        $suma = $VIVE100TOTAL;
        $SUMATOTAL = $suma;

        $suma2 = $VIVE400TOTAl;
        $SUMATOTAL2 = $suma2;

        $suma3 = $SPEEDTOTAL;
        $SUMATOTAL3 = $suma3;

        $suma4 = $JUGO;
        $SUMATOTAL4 = $suma4;

        $suma5 = $AGUITA;
        $SUMATOTAL5 = $suma5;

        $suma6 = $COCA;
        $SUMATOTAL6 = $suma6;

        $TOTAL = [
            "SUMAUNO" => $SUMATOTAL,
            "SUMADOS" => $SUMATOTAL2,
            "SUMATRES" => $SUMATOTAL3,
            "SUMAUCUATRO" => $SUMATOTAL4,
            "SUMACINCO" => $SUMATOTAL5,
            "SUMASEIS" => $SUMATOTAL6
        ];

        echo json_encode($TOTAL);
    }

    if ($CATCH["accion"] == "mostrarkardex") {

        $FECHA = $CATCH["FECHA"];
        $sql = "SELECT INVENTARIO_FINAL FROM VIVE100_KALEX WHERE DIA_MES=date_add('$FECHA', INTERVAL -1 DAY)";
        $resulta = $conexion->query($sql);
        $G_DE_GATO = $resulta->FETCH_ASSOC();
        $VARIABLE = $G_DE_GATO["INVENTARIO_FINAL"];
        $sql2 = "UPDATE VIVE100_KALEX SET INVENTARIO_INICIAL= '$VARIABLE' WHERE DIA_MES='$FECHA'";
        $result2 = $conexion->query($sql2);
        $sql = "SELECT * FROM VIVE100_KALEX WHERE DIA_MES='$FECHA' ";
        $result = $conexion->query($sql);
        $VIVE100_KALEX = $result->FETCH_ASSOC();

        $sql = "SELECT INVENTARIO_FINAL FROM AGUA_KALEX WHERE DIA_MES=date_add('$FECHA', INTERVAL -1 DAY)";
        $resulta = $conexion->query($sql);
        $G_DE_GATO = $resulta->FETCH_ASSOC();
        $VARIABLE = $G_DE_GATO["INVENTARIO_FINAL"];
        $sql2 = "UPDATE AGUA_KALEX SET INVENTARIO_INICIAL= '$VARIABLE' WHERE DIA_MES='$FECHA'";
        $result2 = $conexion->query($sql2);
        $sql = "SELECT * FROM AGUA_KALEX WHERE DIA_MES='$FECHA' ";
        $result = $conexion->query($sql);
        $AGUA_KALEX = $result->FETCH_ASSOC();

        $sql = "SELECT INVENTARIO_FINAL FROM COCACOLA_KALEX WHERE DIA_MES=date_add('$FECHA', INTERVAL -1 DAY)";
        $resulta = $conexion->query($sql);
        $G_DE_GATO = $resulta->FETCH_ASSOC();
        $VARIABLE = $G_DE_GATO["INVENTARIO_FINAL"];
        $sql2 = "UPDATE COCACOLA_KALEX SET INVENTARIO_INICIAL= '$VARIABLE' WHERE DIA_MES='$FECHA'";
        $result2 = $conexion->query($sql2);
        $sql = "SELECT * FROM COCACOLA_KALEX WHERE DIA_MES='$FECHA' ";
        $result = $conexion->query($sql);
        $COCACOLA_KALEX = $result->FETCH_ASSOC();

        $sql = "SELECT INVENTARIO_FINAL FROM JUGO_KALEX WHERE DIA_MES=date_add('$FECHA', INTERVAL -1 DAY)";
        $resulta = $conexion->query($sql);
        $G_DE_GATO = $resulta->FETCH_ASSOC();
        $VARIABLE = $G_DE_GATO["INVENTARIO_FINAL"];
        $sql2 = "UPDATE JUGO_KALEX SET INVENTARIO_INICIAL= '$VARIABLE' WHERE DIA_MES='$FECHA'";
        $result2 = $conexion->query($sql2);
        $sql = "SELECT * FROM JUGO_KALEX WHERE DIA_MES='$FECHA' ";
        $result = $conexion->query($sql);
        $JUGO_KALEX = $result->FETCH_ASSOC();

        $sql = "SELECT INVENTARIO_FINAL FROM SPEED_KALEX WHERE DIA_MES=date_add('$FECHA', INTERVAL -1 DAY)";
        $resulta = $conexion->query($sql);
        $G_DE_GATO = $resulta->FETCH_ASSOC();
        $VARIABLE = $G_DE_GATO["INVENTARIO_FINAL"];
        $sql2 = "UPDATE SPEED_KALEX SET INVENTARIO_INICIAL= '$VARIABLE' WHERE DIA_MES='$FECHA'";
        $result2 = $conexion->query($sql2);
        $sql = "SELECT * FROM SPEED_KALEX WHERE DIA_MES='$FECHA' ";
        $result = $conexion->query($sql);
        $SPEED_KALEX = $result->FETCH_ASSOC();

        $sql = "SELECT INVENTARIO_FINAL FROM VIVE400_KALEX WHERE DIA_MES=date_add('$FECHA', INTERVAL -1 DAY)";
        $resulta = $conexion->query($sql);
        $G_DE_GATO = $resulta->FETCH_ASSOC();
        $VARIABLE = $G_DE_GATO["INVENTARIO_FINAL"];
        $sql2 = "UPDATE VIVE400_KALEX SET INVENTARIO_INICIAL= '$VARIABLE' WHERE DIA_MES='$FECHA'";
        $result2 = $conexion->query($sql2);
        $sql = "SELECT * FROM VIVE400_KALEX WHERE DIA_MES='$FECHA' ";
        $result = $conexion->query($sql);
        $VIVE400_KALEX = $result->FETCH_ASSOC();

        $sql = "SELECT INVENTARIO_FINAL FROM PRUEBA_KALEX WHERE DIA_MES=date_add('$FECHA', INTERVAL -1 DAY)";
        $resulta = $conexion->query($sql);
        $G_DE_GATO = $resulta->FETCH_ASSOC();
        $VARIABLE = $G_DE_GATO["INVENTARIO_FINAL"];
        $sql2 = "UPDATE PRUEBA_KALEX SET INVENTARIO_INICIAL= '$VARIABLE' WHERE DIA_MES='$FECHA'";
        $result2 = $conexion->query($sql2);
        $sql = "SELECT * FROM PRUEBA_KALEX WHERE DIA_MES='$FECHA' ";
        $result = $conexion->query($sql);
        $PRUEBA_KALEX = $result->FETCH_ASSOC();


        $KARDEX = [
            "VIVE100_KALEX" => $VIVE100_KALEX,
            "AGUA_KALEX" => $AGUA_KALEX,
            "COCACOLA_KALEX" => $COCACOLA_KALEX,
            "JUGO_KALEX" => $JUGO_KALEX,
            "SPEED_KALEX" => $SPEED_KALEX,
            "VIVE400_KALEX" => $VIVE400_KALEX,
            "PRUEBA_KALEX" => $PRUEBA_KALEX
        ];
        echo json_encode($KARDEX);
    }

    if ($CATCH["accion"] == "v100") {
        $INVENTARIO_INICIAL = $CATCH["INVENTARIO_INICIAL"];
        $FACTURACION_EN_UNIDADES = $CATCH["FACTURACION_EN_UNIDADES"];
        $ROTACION_TOTAL_UNIDADES = $CATCH["ROTACION_TOTAL_UNIDADES"];
        $INVENTARIO_FINAL = $CATCH["INVENTARIO_FINAL"];
        $FECHA = $CATCH["FECHA"];
        $sql = "UPDATE VIVE100_KALEX SET INVENTARIO_INICIAL= '$INVENTARIO_INICIAL',
            FACTURACION_EN_UNIDADES= '$FACTURACION_EN_UNIDADES',
            INVENTARIO_FINAL= '$INVENTARIO_FINAL' 
            WHERE DIA_MES='$FECHA'";
        $resulta = $conexion->query($sql);
        echo json_encode($resulta);
    } else {
        if ($CATCH["accion"] == "v400") {
            $INVENTARIO_INICIAL = $CATCH["INVENTARIO_INICIAL"];
            $FACTURACION_EN_UNIDADES = $CATCH["FACTURACION_EN_UNIDADES"];
            $ROTACION_TOTAL_UNIDADES = $CATCH["ROTACION_TOTAL_UNIDADES"];
            $INVENTARIO_FINAL = $CATCH["INVENTARIO_FINAL"];
            $FECHA = $CATCH["FECHA"];
            $sql = "UPDATE VIVE400_KALEX SET INVENTARIO_INICIAL= '$INVENTARIO_INICIAL',
                FACTURACION_EN_UNIDADES= '$FACTURACION_EN_UNIDADES', ROTACION_TOTAL_UNIDADES= '$ROTACION_TOTAL_UNIDADES',
                INVENTARIO_FINAL= '$INVENTARIO_FINAL' 
                WHERE DIA_MES='$FECHA'";
            $resulta = $conexion->query($sql);
            echo json_encode($resulta);
        } else {
            if ($CATCH["accion"] == "speed") {
                $INVENTARIO_INICIAL = $CATCH["INVENTARIO_INICIAL"];
                $FACTURACION_EN_UNIDADES = $CATCH["FACTURACION_EN_UNIDADES"];
                $ROTACION_TOTAL_UNIDADES = $CATCH["ROTACION_TOTAL_UNIDADES"];
                $INVENTARIO_FINAL = $CATCH["INVENTARIO_FINAL"];
                $FECHA = $CATCH["FECHA"];
                $sql = "UPDATE SPEED_KALEX SET INVENTARIO_INICIAL= '$INVENTARIO_INICIAL',
                    FACTURACION_EN_UNIDADES= '$FACTURACION_EN_UNIDADES', ROTACION_TOTAL_UNIDADES= '$ROTACION_TOTAL_UNIDADES',
                    INVENTARIO_FINAL= '$INVENTARIO_FINAL' 
                    WHERE DIA_MES='$FECHA'";
                $resulta = $conexion->query($sql);
                echo json_encode($resulta);
            } else {
                if ($CATCH["accion"] == "agua") {
                    $INVENTARIO_INICIAL = $CATCH["INVENTARIO_INICIAL"];
                    $FACTURACION_EN_UNIDADES = $CATCH["FACTURACION_EN_UNIDADES"];
                    $ROTACION_TOTAL_UNIDADES = $CATCH["ROTACION_TOTAL_UNIDADES"];
                    $INVENTARIO_FINAL = $CATCH["INVENTARIO_FINAL"];
                    $FECHA = $CATCH["FECHA"];
                    $sql = "UPDATE AGUA_KALEX SET INVENTARIO_INICIAL= '$INVENTARIO_INICIAL',
                        FACTURACION_EN_UNIDADES= '$FACTURACION_EN_UNIDADES', ROTACION_TOTAL_UNIDADES= '$ROTACION_TOTAL_UNIDADES',
                        INVENTARIO_FINAL= '$INVENTARIO_FINAL' 
                        WHERE DIA_MES='$FECHA'";
                    $resulta = $conexion->query($sql);
                    echo json_encode($resulta);
                } else {
                    if ($CATCH["accion"] == "jugo") {
                        $INVENTARIO_INICIAL = $CATCH["INVENTARIO_INICIAL"];
                        $FACTURACION_EN_UNIDADES = $CATCH["FACTURACION_EN_UNIDADES"];
                        $ROTACION_TOTAL_UNIDADES = $CATCH["ROTACION_TOTAL_UNIDADES"];
                        $INVENTARIO_FINAL = $CATCH["INVENTARIO_FINAL"];
                        $FECHA = $CATCH["FECHA"];
                        $sql = "UPDATE JUGO_KALEX SET INVENTARIO_INICIAL= '$INVENTARIO_INICIAL',
                            FACTURACION_EN_UNIDADES= '$FACTURACION_EN_UNIDADES', ROTACION_TOTAL_UNIDADES= '$ROTACION_TOTAL_UNIDADES',
                            INVENTARIO_FINAL= '$INVENTARIO_FINAL' 
                            WHERE DIA_MES='$FECHA'";
                        $resulta = $conexion->query($sql);
                        echo json_encode($resulta);
                    } else {
                        if ($CATCH["accion"] == "coca") {
                            $INVENTARIO_INICIAL = $CATCH["INVENTARIO_INICIAL"];
                            $FACTURACION_EN_UNIDADES = $CATCH["FACTURACION_EN_UNIDADES"];
                            $ROTACION_TOTAL_UNIDADES = $CATCH["ROTACION_TOTAL_UNIDADES"];
                            $INVENTARIO_FINAL = $CATCH["INVENTARIO_FINAL"];
                            $FECHA = $CATCH["FECHA"];
                            $sql = "UPDATE COCACOLA_KALEX SET INVENTARIO_INICIAL= '$INVENTARIO_INICIAL',
                                FACTURACION_EN_UNIDADES= '$FACTURACION_EN_UNIDADES', ROTACION_TOTAL_UNIDADES= '$ROTACION_TOTAL_UNIDADES',
                                INVENTARIO_FINAL= '$INVENTARIO_FINAL' 
                                WHERE DIA_MES='$FECHA'";
                            $resulta = $conexion->query($sql);
                            echo json_encode($resulta);
                        } else {
                            if ($CATCH["accion"] == "prueba") {
                                $INVENTARIO_INICIAL = $CATCH["INVENTARIO_INICIAL"];
                                $FACTURACION_EN_UNIDADES = $CATCH["FACTURACION_EN_UNIDADES"];
                                $ROTACION_TOTAL_UNIDADES = $CATCH["ROTACION_TOTAL_UNIDADES"];
                                $INVENTARIO_FINAL = $CATCH["INVENTARIO_FINAL"];
                                $FECHA = $CATCH["FECHA"];
                                $sql = "UPDATE PRUEBA_KALEX SET INVENTARIO_INICIAL= '$INVENTARIO_INICIAL',
                                    FACTURACION_EN_UNIDADES= '$FACTURACION_EN_UNIDADES', ROTACION_TOTAL_UNIDADES= '$ROTACION_TOTAL_UNIDADES',
                                    INVENTARIO_FINAL= '$INVENTARIO_FINAL' 
                                    WHERE DIA_MES='$FECHA'";
                                $resulta = $conexion->query($sql);
                                echo json_encode($resulta);
                            }
                        }
                    }
                }
            }
        }
    }
}
