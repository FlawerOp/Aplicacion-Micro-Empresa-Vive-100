<?php
header('Access-Control-Allow-Origin: *');
$CAK = file_get_contents('php://input');
$CATCH = json_decode($CAK, true);
include 'conceccion.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

   if ($CATCH["accion"] == "vive100") {
      $FECHA = $CATCH['FECHA'];
      $sql_vive100 = "SELECT * FROM VIVE100_KALEX WHERE YEAR(DIA_MES) = YEAR('$FECHA') AND MONTH(DIA_MES)=MONTH('$FECHA')";
      $result = $conexion->query($sql_vive100);
      $rows = array();
      while ($r = mysqli_fetch_assoc($result)) {
         $rows[] = $r;
      };
      echo json_encode($rows);
   }

   if ($CATCH["accion"] == "vive400") {
      $FECHA = $CATCH['FECHA'];
      $sql_vive100 = "SELECT * FROM VIVE400_KALEX WHERE YEAR(DIA_MES) = YEAR('$FECHA') AND MONTH(DIA_MES)=MONTH('$FECHA')";
      $result = $conexion->query($sql_vive100);
      $rows = array();
      while ($r = mysqli_fetch_assoc($result)) {
         $rows[] = $r;
      };
      echo json_encode($rows);
   }

   if ($CATCH["accion"] == "speed") {
      $FECHA = $CATCH['FECHA'];
      $sql_vive100 = "SELECT * FROM SPEED_KALEX WHERE YEAR(DIA_MES) = YEAR('$FECHA') AND MONTH(DIA_MES)=MONTH('$FECHA')";
      $result = $conexion->query($sql_vive100);
      $rows = array();
      while ($r = mysqli_fetch_assoc($result)) {
         $rows[] = $r;
      };
      echo json_encode($rows);
   }

   if ($CATCH["accion"] == "agua") {
      $FECHA = $CATCH['FECHA'];
      $sql_vive100 = "SELECT * FROM AGUA_KALEX WHERE YEAR(DIA_MES) = YEAR('$FECHA') AND MONTH(DIA_MES)=MONTH('$FECHA')";
      $result = $conexion->query($sql_vive100);
      $rows = array();
      while ($r = mysqli_fetch_assoc($result)) {
         $rows[] = $r;
      };
      echo json_encode($rows);
   }

   if ($CATCH["accion"] == "jugo") {
      $FECHA = $CATCH['FECHA'];
      $sql_vive100 = "SELECT * FROM JUGO_KALEX WHERE YEAR(DIA_MES) = YEAR('$FECHA') AND MONTH(DIA_MES)=MONTH('$FECHA')";
      $result = $conexion->query($sql_vive100);
      $rows = array();
      while ($r = mysqli_fetch_assoc($result)) {
         $rows[] = $r;
      };
      echo json_encode($rows);
   }

   if ($CATCH["accion"] == "coca") {
      $FECHA = $CATCH['FECHA'];
      $sql_vive100 = "SELECT * FROM COCACOLA_KALEX WHERE YEAR(DIA_MES) = YEAR('$FECHA') AND MONTH(DIA_MES)=MONTH('$FECHA')";
      $result = $conexion->query($sql_vive100);
      $rows = array();
      while ($r = mysqli_fetch_assoc($result)) {
         $rows[] = $r;
      };
      echo json_encode($rows);
   }

   if ($CATCH["accion"] == "prueba") {
      $FECHA = $CATCH['FECHA'];
      $sql_vive100 = "SELECT * FROM PRUEBA_KALEX WHERE YEAR(DIA_MES) = YEAR('$FECHA') AND MONTH(DIA_MES)=MONTH('$FECHA')";
      $result = $conexion->query($sql_vive100);
      $rows = array();
      while ($r = mysqli_fetch_assoc($result)) {
         $rows[] = $r;
      };
      echo json_encode($rows);
   }

   if ($CATCH["accion"] == "traerkardex") {

      $CEDULA = $CATCH['CEDULA'];
      $FECHA = $CATCH['FECHA'];

      $sql = "SELECT * FROM CARGUE_TOTAL WHERE FECHA_CARGUE='$FECHA' AND ID_EMPLEADO='$CEDULA'";
      $sql2 = "SELECT * FROM DESCARGUE_TOTAL WHERE FECHA_DESCARGUE='$FECHA' AND ID_EMPLEADO='$CEDULA'";
      $resulta = $conexion->query($sql);
      $resulta2 = $conexion->query($sql2);

      $CARGUE = $resulta->FETCH_ASSOC();

      $DESCARGUE = $resulta2->FETCH_ASSOC();

      $TOTAL = [
         "CARGUE" => $CARGUE,
         "DESCARGUE" => $DESCARGUE
     ];
     

     echo json_encode($TOTAL);

   }

   if ($CATCH["accion"] == "mayor") {

      $CEDULA = $CATCH['CEDULA'];
      $FECHA = $CATCH['FECHA'];

      $sql = "SELECT * FROM FACTURA_MAYOR WHERE FECHA_DESCARGUE='$FECHA' AND ID_CLIENTE='$CEDULA'";
      $result = $conexion->query($sql);
        $rows = array();
        while ($r = mysqli_fetch_assoc($result)) {
            $rows[] = $r;
        };
        echo json_encode($rows);

   }

   if ($CATCH["accion"] == "sumamayor") {

      $CEDULA = $CATCH['CEDULA'];
      $FECHA = $CATCH['FECHA'];

      $sql = "SELECT * FROM FACTURA_MAYOR WHERE FECHA_DESCARGUE='$FECHA' AND ID_CLIENTE='$CEDULA'";
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

      $suma = $VIVE100TOTAL ;
      $SUMATOTAL = $suma;

      $suma2 = $VIVE400TOTAl;
      $SUMATOTAL2 = $suma2;

      $suma3 = $SPEEDTOTAL ;
      $SUMATOTAL3 = $suma3;

      $suma4 = $JUGO ;
      $SUMATOTAL4 = $suma4;

      $suma5 = $AGUITA  ;
      $SUMATOTAL5 = $suma5;

      $suma6 = $COCA ;
      $SUMATOTAL6 = $suma6;


      $TOTAL2 = [
         "SUMAUNO" => $SUMATOTAL,
         "SUMADOS" => $SUMATOTAL2,
         "SUMATRES" => $SUMATOTAL3,
         "SUMAUCUATRO" => $SUMATOTAL4,
         "SUMACINCO" => $SUMATOTAL5,
         "SUMASEIS" => $SUMATOTAL6
     ];

     echo json_encode($TOTAL2);
   }

   if ($CATCH["accion"] == "suma") {
   
      $CEDULA = $CATCH['CEDULA'];
      $FECHA = $CATCH['FECHA'];
   
      $sql = "SELECT * FROM CARGUE_TOTAL WHERE FECHA_CARGUE='$FECHA' AND ID_EMPLEADO='$CEDULA'";
      $sql2 = "SELECT * FROM DESCARGUE_TOTAL WHERE FECHA_DESCARGUE='$FECHA' AND ID_EMPLEADO='$CEDULA'";
      $resulta = $conexion->query($sql);
      $resulta2 = $conexion->query($sql2);
   
      $VIVE100TOTAL = 0;
      $VIVE100TOTAL2 = 0;
      $VIVE400TOTAl = 0;
      $VIVE400TOTAl2 = 0;
      $SPEEDTOTAL = 0;
      $SPEEDTOTAL2 = 0;
      $JUGO = 0;
      $JUGO2 = 0;
      $AGUITA = 0;
      $AGUITA2 = 0;
      $COCA = 0;
      $COCA2 = 0;
      $PRUEBA = 0;
      $PRUEBA2 = 0;
   
      while ($R = mysqli_fetch_assoc($resulta)) {
         $VIVE100TOTAL += $R["VIVE_100"];
         $VIVE400TOTAl += $R["VIVE_100_400"];
         $SPEEDTOTAL += $R["SPEED"];
         $JUGO += $R["JUGO"];
         $AGUITA += $R["AGUA"];
         $COCA += $R["COCA"];
         $PRUEBA += $R["PRUEBA"];
         while ($R2 = mysqli_fetch_assoc($resulta2)) {
            $VIVE100TOTAL2 += $R2["VIVE_100"];
            $VIVE400TOTAl2 += $R2["VIVE_100_400"];
            $SPEEDTOTAL2 += $R2["SPEED"];
            $JUGO2 += $R2["JUGO"];
            $AGUITA2 += $R2["AGUA"];
            $COCA2 += $R2["COCA"];
            $PRUEBA2 += $R2["PRUEBA"];
         }
      }
   
      $suma = ($VIVE100TOTAL - $VIVE100TOTAL2) ;
      $SUMATOTAL = $suma;
   
      $suma2 = ($VIVE400TOTAl - $VIVE400TOTAl2) ;
      $SUMATOTAL2 = $suma2;
   
      $suma3 = ($SPEEDTOTAL - $SPEEDTOTAL2) ;
      $SUMATOTAL3 = $suma3;
   
      $suma4 = ($JUGO - $JUGO2) ;
      $SUMATOTAL4 = $suma4;
   
      $suma5 = ($AGUITA - $AGUITA2) ;
      $SUMATOTAL5 = $suma5;
   
      $suma6 = ($COCA - $COCA2) ;
      $SUMATOTAL6 = $suma6;
   
      $suma7 = ($PRUEBA - $PRUEBA2) ;
      $SUMATOTAL7 = $suma7;
   
      $TOTAL2 = [
         "SUMAUNO" => $SUMATOTAL,
         "SUMADOS" => $SUMATOTAL2,
         "SUMATRES" => $SUMATOTAL3,
         "SUMAUCUATRO" => $SUMATOTAL4,
         "SUMACINCO" => $SUMATOTAL5,
         "SUMASEIS" => $SUMATOTAL6,
         "SUMASIETE" => $SUMATOTAL7
     ];
   
     echo json_encode($TOTAL2);
   }

   if ($CATCH["accion"] == "sumadia") {
   
      $FECHA = $CATCH['FECHA'];
   
      $sql = "SELECT * FROM CARGUE_TOTAL WHERE FECHA_CARGUE='$FECHA'";
      $sql2 = "SELECT * FROM DESCARGUE_TOTAL WHERE FECHA_DESCARGUE='$FECHA'";
      $resulta = $conexion->query($sql);
      $resulta2 = $conexion->query($sql2);
   
      $VIVE100TOTAL = 0;
      $VIVE100TOTAL2 = 0;
      $VIVE400TOTAl = 0;
      $VIVE400TOTAl2 = 0;
      $SPEEDTOTAL = 0;
      $SPEEDTOTAL2 = 0;
      $JUGO = 0;
      $JUGO2 = 0;
      $AGUITA = 0;
      $AGUITA2 = 0;
      $COCA = 0;
      $COCA2 = 0;
      $PRUEBA = 0;
      $PRUEBA2 = 0;
   
      while ($R = mysqli_fetch_assoc($resulta)) {
         $VIVE100TOTAL += $R["VIVE_100"];
         $VIVE400TOTAl += $R["VIVE_100_400"];
         $SPEEDTOTAL += $R["SPEED"];
         $JUGO += $R["JUGO"];
         $AGUITA += $R["AGUA"];
         $COCA += $R["COCA"];
         $PRUEBA += $R["PRUEBA"];
         while ($R2 = mysqli_fetch_assoc($resulta2)) {
            $VIVE100TOTAL2 += $R2["VIVE_100"];
            $VIVE400TOTAl2 += $R2["VIVE_100_400"];
            $SPEEDTOTAL2 += $R2["SPEED"];
            $JUGO2 += $R2["JUGO"];
            $AGUITA2 += $R2["AGUA"];
            $COCA2 += $R2["COCA"];
            $PRUEBA2 += $R2["PRUEBA"];
         }
      }
   
      $suma = ($VIVE100TOTAL - $VIVE100TOTAL2) ;
      $SUMATOTAL = $suma;
   
      $suma2 = ($VIVE400TOTAl - $VIVE400TOTAl2) ;
      $SUMATOTAL2 = $suma2;
   
      $suma3 = ($SPEEDTOTAL - $SPEEDTOTAL2) ;
      $SUMATOTAL3 = $suma3;
   
      $suma4 = ($JUGO - $JUGO2) ;
      $SUMATOTAL4 = $suma4;
   
      $suma5 = ($AGUITA - $AGUITA2) ;
      $SUMATOTAL5 = $suma5;
   
      $suma6 = ($COCA - $COCA2) ;
      $SUMATOTAL6 = $suma6;
   
      $suma7 = ($PRUEBA - $PRUEBA2) ;
      $SUMATOTAL7 = $suma7;
   
      $TOTAL2 = [
         "SUMAUNO" => $SUMATOTAL,
         "SUMADOS" => $SUMATOTAL2,
         "SUMATRES" => $SUMATOTAL3,
         "SUMAUCUATRO" => $SUMATOTAL4,
         "SUMACINCO" => $SUMATOTAL5,
         "SUMASEIS" => $SUMATOTAL6,
         "SUMASIETE" => $SUMATOTAL7
     ];
   
     echo json_encode($TOTAL2);
   }

   if ($CATCH["accion"] == "sumadiacargue") {
   
      $FECHA = $CATCH['FECHA'];
   
      $sql = "SELECT * FROM CARGUE_TOTAL WHERE FECHA_CARGUE='$FECHA'";
      $resulta = $conexion->query($sql);
   
      $VIVE100TOTAL = 0;
      $VIVE400TOTAl = 0;
      $SPEEDTOTAL = 0;
      $JUGO = 0;
      $AGUITA = 0;
      $COCA = 0;
      $PRUEBA = 0;
   
      while ($R = mysqli_fetch_assoc($resulta)) {
         $VIVE100TOTAL += $R["VIVE_100"];
         $VIVE400TOTAl += $R["VIVE_100_400"];
         $SPEEDTOTAL += $R["SPEED"];
         $JUGO += $R["JUGO"];
         $AGUITA += $R["AGUA"];
         $COCA += $R["COCA"];
         $PRUEBA += $R["PRUEBA"];
      }
   
      $suma = ($VIVE100TOTAL) ;
      $SUMATOTAL = $suma;
   
      $suma2 = ($VIVE400TOTAl) ;
      $SUMATOTAL2 = $suma2;
   
      $suma3 = ($SPEEDTOTAL) ;
      $SUMATOTAL3 = $suma3;
   
      $suma4 = ($JUGO) ;
      $SUMATOTAL4 = $suma4;
   
      $suma5 = ($AGUITA) ;
      $SUMATOTAL5 = $suma5;
   
      $suma6 = ($COCA) ;
      $SUMATOTAL6 = $suma6;
   
      $suma7 = ($PRUEBA) ;
      $SUMATOTAL7 = $suma7;
   
      $TOTAL2 = [
         "SUMAUNO" => $SUMATOTAL,
         "SUMADOS" => $SUMATOTAL2,
         "SUMATRES" => $SUMATOTAL3,
         "SUMAUCUATRO" => $SUMATOTAL4,
         "SUMACINCO" => $SUMATOTAL5,
         "SUMASEIS" => $SUMATOTAL6,
         "SUMASIETE" => $SUMATOTAL7
     ];
   
     echo json_encode($TOTAL2);
   }

   if ($CATCH["accion"] == "sumadiadescargue") {
   
      $FECHA = $CATCH['FECHA'];
   
      $sql2 = "SELECT * FROM DESCARGUE_TOTAL WHERE FECHA_DESCARGUE='$FECHA'";
      $resulta2 = $conexion->query($sql2);
   
      $VIVE100TOTAL2 = 0;
      $VIVE400TOTAl2 = 0;
      $SPEEDTOTAL2 = 0;
      $JUGO2 = 0;
      $AGUITA2 = 0;
      $COCA2 = 0;
      $PRUEBA2 = 0;
   
         while ($R2 = mysqli_fetch_assoc($resulta2)) {
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
         "SUMASIETE" => $SUMATOTAL7
     ];
   
     echo json_encode($TOTAL2);
   }

   if ($CATCH["accion"] == "diaempleado") {
   
      $CEDULA = $CATCH['CEDULA'];
      $FECHA = $CATCH['FECHA'];
   
      $sql = "SELECT * FROM CARGUE_TOTAL WHERE FECHA_CARGUE='$FECHA' AND ID_EMPLEADO='$CEDULA'";
      $sql2 = "SELECT * FROM DESCARGUE_TOTAL WHERE FECHA_DESCARGUE='$FECHA' AND ID_EMPLEADO='$CEDULA'";
      $resulta = $conexion->query($sql);
      $resulta2 = $conexion->query($sql2);
   
      $VIVE100TOTAL = 0;
      $VIVE100TOTAL2 = 0;
      $VIVE400TOTAl = 0;
      $VIVE400TOTAl2 = 0;
      $SPEEDTOTAL = 0;
      $SPEEDTOTAL2 = 0;
      $JUGO = 0;
      $JUGO2 = 0;
      $AGUITA = 0;
      $AGUITA2 = 0;
      $COCA = 0;
      $COCA2 = 0;
      $PRUEBA = 0;
      $PRUEBA2 = 0;
   
      while ($R = mysqli_fetch_assoc($resulta)) {
         $VIVE100TOTAL += $R["VIVE_100"];
         $VIVE400TOTAl += $R["VIVE_100_400"];
         $SPEEDTOTAL += $R["SPEED"];
         $JUGO += $R["JUGO"];
         $AGUITA += $R["AGUA"];
         $COCA += $R["COCA"];
         $PRUEBA += $R["PRUEBA"];
         while ($R2 = mysqli_fetch_assoc($resulta2)) {
            $VIVE100TOTAL2 += $R2["VIVE_100"];
            $VIVE400TOTAl2 += $R2["VIVE_100_400"];
            $SPEEDTOTAL2 += $R2["SPEED"];
            $JUGO2 += $R2["JUGO"];
            $AGUITA2 += $R2["AGUA"];
            $COCA2 += $R2["COCA"];
            $PRUEBA2 += $R2["PRUEBA"];
         }
      }
   
      $suma = ($VIVE100TOTAL - $VIVE100TOTAL2) ;
      $SUMATOTAL = $suma;
   
      $suma2 = ($VIVE400TOTAl - $VIVE400TOTAl2) ;
      $SUMATOTAL2 = $suma2;
   
      $suma3 = ($SPEEDTOTAL - $SPEEDTOTAL2) ;
      $SUMATOTAL3 = $suma3;
   
      $suma4 = ($JUGO - $JUGO2) ;
      $SUMATOTAL4 = $suma4;
   
      $suma5 = ($AGUITA - $AGUITA2) ;
      $SUMATOTAL5 = $suma5;
   
      $suma6 = ($COCA - $COCA2) ;
      $SUMATOTAL6 = $suma6;
   
      $suma7 = ($PRUEBA - $PRUEBA2) ;
      $SUMATOTAL7 = $suma7;
   
      $TOTAL2 = [
         "SUMAUNO" => $SUMATOTAL,
         "SUMADOS" => $SUMATOTAL2,
         "SUMATRES" => $SUMATOTAL3,
         "SUMAUCUATRO" => $SUMATOTAL4,
         "SUMACINCO" => $SUMATOTAL5,
         "SUMASEIS" => $SUMATOTAL6,
         "SUMASIETE" => $SUMATOTAL7
     ];
   
     echo json_encode($TOTAL2);
   }

   if ($CATCH["accion"] == "diaempleadocargue") {
   
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
         "SUMASIETE" => $SUMATOTAL7
     ];
   
     echo json_encode($TOTAL2);
   }

   if ($CATCH["accion"] == "diaempleadodescargue") {
   
      $FECHA = $CATCH['FECHA'];
      $CEDULA = $CATCH['CEDULA'];

   
      $sql2 = "SELECT * FROM DESCARGUE_TOTAL WHERE FECHA_DESCARGUE='$FECHA' AND ID_EMPLEADO='$CEDULA'";
      $resulta2 = $conexion->query($sql2);
   
      $VIVE100TOTAL2 = 0;
      $VIVE400TOTAl2 = 0;
      $SPEEDTOTAL2 = 0;
      $JUGO2 = 0;
      $AGUITA2 = 0;
      $COCA2 = 0;
      $PRUEBA2 = 0;
   
         while ($R2 = mysqli_fetch_assoc($resulta2)) {
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
         "SUMASIETE" => $SUMATOTAL7
     ];
   
     echo json_encode($TOTAL2);
   }
}


