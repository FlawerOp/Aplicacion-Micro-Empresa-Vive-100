import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-diaempleado',
  templateUrl: './diaempleado.page.html',
  styleUrls: ['./diaempleado.page.scss'],
})
export class DiaempleadoPage implements OnInit {
  api = 'https://vivesien.000webhostapp.com/tablas.php'
  FECHA;
  datos2 = {};
  datos3 = {};
  datos4 = {};
  pvive100 = 400;
  pvive400 = 300;
  pagua = 600;
  pspeed = 200;
  pjugo = 450;
  pcoca = 450;
  caso1;
  caso2;
  caso3;
  caso4;
  caso5;
  caso6;
  caso7;
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
  total: any;
  total2: any;
  CEDULA;
  sumacargos: number;
  precio: any;
  preciobase: any;
  preciofinal=0;

  constructor(private http: HttpClient, private acti: ActivatedRoute, private router: Router, private alertController: AlertController) { }

  async ngOnInit() {
    if (this.preciofinal==0) {
      const alert = await this.alertController.create({
        header: 'Alerta',
        subHeader: 'Utilidad incompleta.',
        message: 'Para obtener la utilidad real insertar la ganancia del empleado al vender el producto "Prueba"',
        buttons: ['Aceptar']
      });
      await alert.present();
    }
    this.suma();
    this.sumac();
    this.sumad();
  }

  suma() {
    this.FECHA = this.acti.snapshot.paramMap.get("FECHA");
    this.CEDULA = this.acti.snapshot.paramMap.get("CEDULA");
    this.datos2['FECHA'] = this.FECHA;
    this.datos2['CEDULA'] = this.CEDULA;
    this.datos2['accion'] = 'diaempleado';
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
        console.log(this.total);
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

