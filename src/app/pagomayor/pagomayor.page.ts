import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-pagomayor',
  templateUrl: './pagomayor.page.html',
  styleUrls: ['./pagomayor.page.scss'],
})
export class PagomayorPage implements OnInit {
  CEDULA;
  FECHA;
  datos = {}
  array: any = [];
  api = 'https://vivesien.000webhostapp.com/tablas.php'
  array2: any = [];
  one;
  tu: number;
  datos2 = {}
  vive100 = 1600;
  vive400 = 1200;
  agua = 900;
  speed = 800;
  jugo = 1550;
  coca = 1550;
  prueba;
  caso1;
  caso2;
  caso3;
  caso4;
  caso5;
  caso6;
  caso7;
  suma1;
  suma2;
  suma3;
  suma4;
  suma5;
  suma6;
  total: any;
  totalempleado: any;
  total2: any;
  totalempleado2: void;
  one1: any;

  constructor(private http: HttpClient, public alertController: AlertController,
    private acti: ActivatedRoute, private router: Router, private loadingController: LoadingController) { }

  ngOnInit() {

    this.FECHA = this.acti.snapshot.paramMap.get("FECHA");
    this.CEDULA = this.acti.snapshot.paramMap.get("CEDULA");
    this.datos['accion'] = 'mayor';
    this.datos['FECHA'] = this.FECHA;
    this.datos['CEDULA'] = this.CEDULA;
    this.http.post(this.api, JSON.stringify(this.datos)).subscribe(
      datos => {
        this.array2 = datos['0'];
        console.log(datos);
        console.log(this.array);
        console.log(this.array2);

        this.tu = parseInt(this.array2["VIVE_100"]) + parseInt(this.array2["VIVE_100_400"])
          + parseInt(this.array2["AGUA"]) + parseInt(this.array2["SPEED"])
          + parseInt(this.array2["JUGO"]) + parseInt(this.array2["COCA"]);

        this.suma1 = (parseInt(this.array2["VIVE_100"]) / 12).toFixed(1);
        this.suma2 = (parseInt(this.array2["VIVE_100_400"]) / 12).toFixed(1);
        this.suma3 = (parseInt(this.array2["AGUA"]) / 12).toFixed(1);
        this.suma4 = (parseInt(this.array2["SPEED"]) / 12).toFixed(1);
        this.suma5 = (parseInt(this.array2["JUGO"]) / 12).toFixed(1);
        this.suma6 = (parseInt(this.array2["COCA"]) / 12).toFixed(1);

        this.one = (parseInt(this.array2["VIVE_100"]) / 12) + (parseInt(this.array2["VIVE_100_400"]) / 12)
        + (parseInt(this.array2["AGUA"]) / 12) + (parseInt(this.array2["SPEED"]) / 12)
        + (parseInt(this.array2["JUGO"]) / 12) + (parseInt(this.array2["COCA"]) / 12);
        this.totalempleado2 = this.one.toFixed(1);
        console.log(this.one);
  
      }
    );

    this.datos2['FECHA'] = this.FECHA;
    this.datos2['CEDULA'] = this.CEDULA;
    this.datos2['accion'] = 'sumamayor';
    this.http.post(this.api, JSON.stringify(this.datos2)).subscribe(
      datos2 => {
        console.log(datos2);

        this.caso1 = parseInt(datos2['SUMAUNO']) * this.vive100;
        console.log(this.caso1);

        this.caso2 = parseInt(datos2['SUMADOS']) * this.vive400;
        console.log(this.caso2);

        this.caso3 = parseInt(datos2['SUMATRES']) * this.speed;
        console.log(this.caso3);

        this.caso4 = parseInt(datos2['SUMAUCUATRO']) * this.jugo;
        console.log(this.caso4);

        this.caso5 = parseInt(datos2['SUMACINCO']) * this.agua;
        console.log(this.caso5);

        this.caso6 = parseInt(datos2['SUMASEIS']) * this.coca;
        console.log(this.caso6);

        this.total = this.caso1 + this.caso2 + this.caso3 + this.caso4 + this.caso5 + this.caso6;
        this.total2 = this.total.toFixed(2);
        console.log(this.total);

       
      }

    );
  }

  async pagar() {
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

  irnos() {
    this.router.navigate(["/members/dashboard"])
  }

}
