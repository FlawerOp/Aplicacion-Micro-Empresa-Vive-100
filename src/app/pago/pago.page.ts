import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit {

  CEDULA;
  FECHA;
  datos = {}
  datos3 = {};
  datos4 = {};
  array: any = [];
  api = 'https://vivesien.000webhostapp.com/tablas.php'
  array2: any = [];
  one: number;
  tu: number;
  datos2 = {}
  vive100 = 1600;
  vive400 = 1200;
  agua = 900;
  speed = 800;
  jugo = 1550;
  coca = 1550;
  pvive100 = 400;
  pvive400 = 300;
  pagua = 600;
  pspeed = 200;
  pjugo = 450;
  pcoca = 450;
  prueba;
  caso1;
  caso2;
  caso3;
  caso4;
  caso5;
  caso6;
  caso7;
  total: any;
  totalempleado: any;
  total2: any;
  totalempleado2: void;
  caso11: number;
  caso22: number;
  caso33: number;
  caso44: number;
  caso55: number;
  caso66: number;
  caso77: number;
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
  totalcargue: any;
  totalcargue2: any;
  pruebabase;

  constructor(private http: HttpClient, public alertController: AlertController,
    private acti: ActivatedRoute, private router: Router, private loadingController: LoadingController) { }

  ngOnInit() {

    this.sumac();
    this.sumad();
    this.prueba = this.acti.snapshot.paramMap.get("PRECIO");
    this.pruebabase = this.acti.snapshot.paramMap.get("PRECIOBASE");
    
    this.datos2['FECHA'] = this.FECHA;
    this.datos2['CEDULA'] = this.CEDULA;
    this.datos2['accion'] = 'suma';
    this.http.post(this.api, JSON.stringify(this.datos2)).subscribe(
      datos2 => {
        console.log(datos2);

        this.caso1 = parseInt(datos2['SUMAUNO'])*this.vive100;
        console.log(this.caso1);

        this.caso2 = parseInt(datos2['SUMADOS'])*this.vive400;
        console.log(this.caso2);

        this.caso3 = parseInt(datos2['SUMATRES'])*this.speed;
        console.log(this.caso3);

        this.caso4 = parseInt(datos2['SUMAUCUATRO'])*this.jugo;
        console.log(this.caso4);

        this.caso5 = parseInt(datos2['SUMACINCO'])*this.agua;
        console.log(this.caso5);

        this.caso6 = parseInt(datos2['SUMASEIS'])*this.coca;
        console.log(this.caso6);

        this.caso7 = parseInt(datos2['SUMASIETE'])*this.prueba;
        console.log(this.prueba);
        console.log(this.caso7);
/////////////////////////////////////////////////////////////////////////////////////
        this.caso11 = parseInt(datos2['SUMAUNO'])*this.pvive100;
        console.log(this.caso11);

        this.caso22 = parseInt(datos2['SUMADOS'])*this.pvive400;
        console.log(this.caso22);

        this.caso33 = parseInt(datos2['SUMATRES'])*this.pspeed;
        console.log(this.caso33);

        this.caso44 = parseInt(datos2['SUMAUCUATRO'])*this.pjugo;
        console.log(this.caso44);

        this.caso55 = parseInt(datos2['SUMACINCO'])*this.pagua;
        console.log(this.caso55);

        this.caso66 = parseInt(datos2['SUMASEIS'])*this.pcoca;
        console.log(this.caso66);

        this.caso77 = parseInt(datos2['SUMASIETE'])*this.pruebabase;
        console.log(this.caso77);


        this.total = this.caso1+this.caso2+this.caso3+this.caso4+this.caso5+this.caso6+this.caso7;
        this.total2 = this.total.toFixed(2);
        console.log(this.total);

        this.totalempleado = ((this.caso11)+(this.caso22)+(this.caso33)+(this.caso44)+(this.caso55)+(this.caso66)+this.caso77);
        this.totalempleado2 = this.totalempleado.toFixed(2);
        console.log(this.totalempleado);
       }

      );
  }

  sumac() {
    this.FECHA = this.acti.snapshot.paramMap.get("FECHA");
    this.CEDULA = this.acti.snapshot.paramMap.get("CEDULA");
    this.datos3['FECHA'] = this.FECHA;
    this.datos3['CEDULA'] = this.CEDULA;
    this.datos3['accion'] = 'diaempleadocargue';
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
        console.log(this.totalcargue2);
      });
  }

  sumad() {
    this.FECHA = this.acti.snapshot.paramMap.get("FECHA");
    this.CEDULA = this.acti.snapshot.paramMap.get("CEDULA");
    this.datos4['FECHA'] = this.FECHA;
    this.datos4['CEDULA'] = this.CEDULA;
    this.datos4['accion'] = 'diaempleadodescargue';
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
        console.log(this.totaldescargue2);
      });
  }

  async pagar(){
    const loading = await this.loadingController.create({
      message: 'Realizando Cambios',
      duration: 800
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    const alert = await this.alertController.create({
      header: 'Confirmacion',
      subHeader: '¿Finalizar el Pago?',
      message: 'Una vez finalizado no se podrá volver a mirar la facturacion del empleado.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancelar',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.irnos();
          }
        }
      ]
    });
    await alert.present();
  }

  irnos(){
    this.router.navigate(["/members/dashboard"])
  }

}
