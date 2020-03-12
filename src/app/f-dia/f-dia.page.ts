import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-f-dia',
  templateUrl: './f-dia.page.html',
  styleUrls: ['./f-dia.page.scss'],
})
export class FDiaPage implements OnInit {

  api = 'https://vivesien.000webhostapp.com/tablas.php'
  api2 = 'https://vivesien.000webhostapp.com/kardex.php'
  FECHA;
  datos = {};
  datos2 = {};
  datos3 = {};
  datos4 = {};
  vive100: any = [];
  vive400: any = [];
  speed: any = [];
  agua: any = [];
  jugo: any = [];
  coca: any = [];
  prueba: any = [];
  array: any = [];
  g: any;
  one;
  for;
  tu;
  tri;
  caso1;
  caso2;
  caso3;
  caso4;
  caso5;
  caso6;
  caso7;
  total: any;
  total2: any;
  pvive100 = 1600;
  pvive400 = 1200;
  pagua = 900;
  pspeed = 800;
  pjugo = 1550;
  pcoca = 1550;
  caso11: number;
  caso22: number;
  caso33: number;
  caso44: number;
  caso55: number;
  caso66: number;
  caso77: number;
  totalcargue: any;
  totalcargue2: any;
  casoC1: number;
  casoC2: number;
  casoC3: number;
  casoC4: number;
  casoC5: number;
  casoC6: number;
  casoC7: number;
  casoD1: number;
  casoD2: number;
  casoD3: number;
  casoD4: number;
  casoD5: number;
  casoD6: number;
  casoD7: number;
  totaldescargue: any;
  totaldescargue2: any;
  sumacargos: number;
  precio: any;
  preciobase: any;
  preciofinal=0;


  constructor(private http: HttpClient, private acti: ActivatedRoute, private router: Router, private toastController: ToastController, private alertController: AlertController) { }

  async ngOnInit() {
    if (this.preciofinal==0) {
      const alert = await this.alertController.create({
        header: 'Alerta',
        subHeader: 'Utilidad incompleta.',
        message: 'Para obtener la utilidad real insertar el valor del producto "Prueba"',
        buttons: ['Aceptar']
      });
      await alert.present();
    }
    
    this.FECHA = this.acti.snapshot.paramMap.get("FECHA");

    this.datos['FECHA'] = this.FECHA
    this.datos['accion'] = 'mostrarkardex'
    this.http.post(this.api2, JSON.stringify(this.datos)).subscribe(
      datos => {
        this.vive100 = datos["VIVE100_KALEX"];
        this.vive400 = datos["VIVE400_KALEX"];
        this.speed = datos["SPEED_KALEX"];
        this.agua = datos["AGUA_KALEX"];
        this.jugo = datos["JUGO_KALEX"];
        this.coca = datos["COCACOLA_KALEX"];
        this.prueba = datos["PRUEBA_KALEX"];
        this.g = datos["G"];
        console.log(datos);

        this.one = parseInt(this.vive100["INVENTARIO_INICIAL"]) + parseInt(this.vive400["INVENTARIO_INICIAL"])
          + parseInt(this.speed["INVENTARIO_INICIAL"]) + parseInt(this.agua["INVENTARIO_INICIAL"]) + parseInt(this.jugo["INVENTARIO_INICIAL"])
          + parseInt(this.coca["INVENTARIO_INICIAL"]) + parseInt(this.prueba["INVENTARIO_INICIAL"]);

        this.tri = parseInt(this.vive100["ROTACION_TOTAL_UNIDADES"]) + parseInt(this.vive400["ROTACION_TOTAL_UNIDADES"])
          + parseInt(this.speed["ROTACION_TOTAL_UNIDADES"]) + parseInt(this.agua["ROTACION_TOTAL_UNIDADES"]) + parseInt(this.jugo["ROTACION_TOTAL_UNIDADES"])
          + parseInt(this.coca["ROTACION_TOTAL_UNIDADES"]) + parseInt(this.prueba["ROTACION_TOTAL_UNIDADES"]);

        this.for = parseInt(this.vive100["INVENTARIO_FINAL"]) + parseInt(this.vive400["INVENTARIO_FINAL"])
          + parseInt(this.speed["INVENTARIO_FINAL"]) + parseInt(this.agua["INVENTARIO_FINAL"]) + parseInt(this.jugo["INVENTARIO_FINAL"])
          + parseInt(this.coca["INVENTARIO_FINAL"]) + parseInt(this.prueba["INVENTARIO_FINAL"]);
        console.log(this.one);
      });

    this.suma();
    this.sumac();
    this.sumad();

  }
  suma() {
    this.FECHA = this.acti.snapshot.paramMap.get("FECHA");
    this.datos2['FECHA'] = this.FECHA;
    this.datos2['accion'] = 'sumadia';
    this.http.post(this.api, JSON.stringify(this.datos2)).subscribe(
      datos2 => {
        console.log(datos2);


        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.caso11 = parseInt(datos2['SUMAUNO']) * this.pvive100;
        console.log(this.caso1);

        this.caso22 = parseInt(datos2['SUMADOS']) * this.pvive400;
        console.log(this.caso2);

        this.caso33 = parseInt(datos2['SUMATRES']) * this.pspeed;
        console.log(this.caso3);

        this.caso44 = parseInt(datos2['SUMAUCUATRO']) * this.pjugo;
        console.log(this.caso4);

        this.caso55 = parseInt(datos2['SUMACINCO']) * this.pagua;
        console.log(this.caso5);

        this.caso66 = parseInt(datos2['SUMASEIS']) * this.pcoca;
        console.log(this.caso6);

        this.total = this.caso11 + this.caso22 + this.caso33 + this.caso44 + this.caso55 + this.caso66 + this.preciofinal;
        this.total2 = this.total.toFixed(2);
        console.log(this.total);

      });
  }
  sumac() {
    this.FECHA = this.acti.snapshot.paramMap.get("FECHA");
    this.datos3['FECHA'] = this.FECHA;
    this.datos3['accion'] = 'sumadiacargue';
    this.http.post(this.api, JSON.stringify(this.datos3)).subscribe(
      datos3 => {
        console.log(datos3);

        this.casoC1 = parseInt(datos3['SUMAUNO']);
        console.log(this.casoC1);

        this.casoC2 = parseInt(datos3['SUMADOS']);
        console.log(this.casoC2);

        this.casoC3 = parseInt(datos3['SUMATRES']);
        console.log(this.casoC3);

        this.casoC4 = parseInt(datos3['SUMAUCUATRO']);
        console.log(this.casoC4);

        this.casoC5 = parseInt(datos3['SUMACINCO']);
        console.log(this.casoC5);

        this.casoC6 = parseInt(datos3['SUMASEIS']);
        console.log(this.casoC6);

        this.casoC7 = parseInt(datos3['SUMASIETE']);
        console.log(this.casoC7);

        this.totalcargue = this.casoC1 + this.casoC2 + this.casoC3 + this.casoC4 + this.casoC5 + this.casoC6 + this.casoC7;
        this.totalcargue2 = this.totalcargue;
        console.log(this.total);
      });
  }

  

  sumad() {
    this.FECHA = this.acti.snapshot.paramMap.get("FECHA");
    this.datos4['FECHA'] = this.FECHA;
    this.datos4['accion'] = 'sumadiadescargue';
    this.http.post(this.api, JSON.stringify(this.datos4)).subscribe(
      datos4 => {
        console.log(datos4);

        this.casoD1 = parseInt(datos4['SUMAUNO']);
        console.log(this.casoD1);

        this.casoD2 = parseInt(datos4['SUMADOS']);
        console.log(this.casoD2);

        this.casoD3 = parseInt(datos4['SUMATRES']);
        console.log(this.casoD3);

        this.casoD4 = parseInt(datos4['SUMAUCUATRO']);
        console.log(this.casoD4);

        this.casoD5 = parseInt(datos4['SUMACINCO']);
        console.log(this.casoD5);

        this.casoD6 = parseInt(datos4['SUMASEIS']);
        console.log(this.casoD6);

        this.casoD7 = parseInt(datos4['SUMASIETE']);
        console.log(this.casoD7);

        this.totaldescargue = this.casoD1 + this.casoD2 + this.casoD3 + this.casoD4 + this.casoD5 + this.casoD6 + this.casoD7;
        this.totaldescargue2 = this.totaldescargue;
        console.log(this.total);
      });
  }

  agregar(){
    this.sumacargos = (this.casoC7 - this.casoD7);
    this.preciofinal = this.sumacargos * this.precio ;
    this.ngOnInit();
  }

  doRefresh(event) {
    this.ngOnInit();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1500);
  }
}