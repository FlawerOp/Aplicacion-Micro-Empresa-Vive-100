import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.page.html',
  styleUrls: ['./kardex.page.scss'],
})
export class KardexPage implements OnInit {
  FECHA;
  datos = {};
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
  public uno;
  public dos;
  public tres;
  public cuatro;
  public cinco;
  public seis;
  api = 'https://vivesien.000webhostapp.com/app.php'
  api2 = 'https://vivesien.000webhostapp.com/kardex.php'
  v100: number;
  v400: number;
  spd: any;
  ag: number;
  jg: number;
  cc: number;
  admin: any;
  inputabajo: boolean = false;
  siete: number;
  cd: any;
  datos2={};
  total: any;
  totalempleado: any;
  total2: any;


  constructor(private http: HttpClient, private acti: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.datos2['FECHA'] = this.FECHA
    this.datos2['accion'] = 'envio'
    this.http.post(this.api2, JSON.stringify(this.datos2)).subscribe(
      datos2 => {
        console.log(datos2);

        this.caso1 = parseInt(datos2['SUMAUNO']);
        console.log(this.caso1);

        this.caso2 = parseInt(datos2['SUMADOS']);
        console.log(this.caso2);

        this.caso3 = parseInt(datos2['SUMATRES']);
        console.log(this.caso3);

        this.caso4 = parseInt(datos2['SUMAUCUATRO']);
        console.log(this.caso4);

        this.caso5 = parseInt(datos2['SUMACINCO']);
        console.log(this.caso5);

        this.caso6 = parseInt(datos2['SUMASEIS']);
        console.log(this.caso6);

        this.total = this.caso1+this.caso2+this.caso3+this.caso4+this.caso5+this.caso6;
        console.log(this.total);
      });

    this.FECHA = this.acti.snapshot.paramMap.get("FECHA");
    this.admin = this.acti.snapshot.paramMap.get("ADMIN");
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
        console.log(this.admin);

        if (this.admin == "administrador") {
          this.inputabajo = false;
        }else{
          this.inputabajo = true;
        }

        this.one = parseInt(this.vive100["INVENTARIO_INICIAL"]) + parseInt(this.vive400["INVENTARIO_INICIAL"])
          + parseInt(this.speed["INVENTARIO_INICIAL"]) + parseInt(this.agua["INVENTARIO_INICIAL"]) + parseInt(this.jugo["INVENTARIO_INICIAL"])
          + parseInt(this.coca["INVENTARIO_INICIAL"]) + parseInt(this.prueba["INVENTARIO_INICIAL"]);

        this.tu = parseInt(this.vive100["FACTURACION_EN_UNIDADES"]) + parseInt(this.vive400["FACTURACION_EN_UNIDADES"])
          + parseInt(this.speed["FACTURACION_EN_UNIDADES"]) + parseInt(this.agua["FACTURACION_EN_UNIDADES"]) + parseInt(this.jugo["FACTURACION_EN_UNIDADES"])
          + parseInt(this.coca["FACTURACION_EN_UNIDADES"]) + parseInt(this.prueba["FACTURACION_EN_UNIDADES"]);

        this.tri = parseInt(this.vive100["ROTACION_TOTAL_UNIDADES"]) + parseInt(this.vive400["ROTACION_TOTAL_UNIDADES"])
          + parseInt(this.speed["ROTACION_TOTAL_UNIDADES"]) + parseInt(this.agua["ROTACION_TOTAL_UNIDADES"]) + parseInt(this.jugo["ROTACION_TOTAL_UNIDADES"])
          + parseInt(this.coca["ROTACION_TOTAL_UNIDADES"]) + parseInt(this.prueba["ROTACION_TOTAL_UNIDADES"]);

        this.for = parseInt(this.vive100["INVENTARIO_FINAL"]) + parseInt(this.vive400["INVENTARIO_FINAL"])
          + parseInt(this.speed["INVENTARIO_FINAL"]) + parseInt(this.agua["INVENTARIO_FINAL"]) + parseInt(this.jugo["INVENTARIO_FINAL"])
          + parseInt(this.coca["INVENTARIO_FINAL"]) + parseInt(this.prueba["INVENTARIO_FINAL"]);
        console.log(this.one);

        this.uno = parseInt(this.vive100["INVENTARIO_INICIAL"]) + parseInt(this.vive100["FACTURACION_EN_UNIDADES"]) - this.caso1 -  parseInt(this.vive100["ROTACION_TOTAL_UNIDADES"]);
        this.vive100['INVENTARIO_FINAL'] = this.uno
        this.vive100['FECHA'] = this.FECHA;
        this.vive100['accion'] = 'v100';
        console.log(this.uno);
        this.http.post(this.api2, JSON.stringify(this.vive100)).subscribe();

        this.dos = parseInt(this.vive400["INVENTARIO_INICIAL"]) + parseInt(this.vive400["FACTURACION_EN_UNIDADES"]) - this.caso2 -  parseInt(this.vive400["ROTACION_TOTAL_UNIDADES"]);
        this.vive400['INVENTARIO_FINAL'] = this.dos
        this.vive400['FECHA'] = this.FECHA;
        this.vive400['accion'] = 'v400';
        console.log(this.dos);
        this.http.post(this.api2, JSON.stringify(this.vive400)).subscribe();

        this.tres = parseInt(this.speed["INVENTARIO_INICIAL"]) + parseInt(this.speed["FACTURACION_EN_UNIDADES"]) - this.caso3 -  parseInt(this.speed["ROTACION_TOTAL_UNIDADES"]);
        this.speed['INVENTARIO_FINAL'] = this.tres
        this.speed['FECHA'] = this.FECHA;
        this.speed['accion'] = 'speed';
        console.log(this.tres);
        this.http.post(this.api2, JSON.stringify(this.speed)).subscribe();

        this.cuatro = parseInt(this.agua["INVENTARIO_INICIAL"]) + parseInt(this.agua["FACTURACION_EN_UNIDADES"]) - this.caso5 -  parseInt(this.agua["ROTACION_TOTAL_UNIDADES"]);
        this.agua['INVENTARIO_FINAL'] = this.cuatro
        this.agua['FECHA'] = this.FECHA;
        this.agua['accion'] = 'agua';
        console.log(this.cuatro);
        this.http.post(this.api2, JSON.stringify(this.agua)).subscribe();

        this.cinco = parseInt(this.jugo["INVENTARIO_INICIAL"]) + parseInt(this.jugo["FACTURACION_EN_UNIDADES"]) - this.caso4 -  parseInt(this.jugo["ROTACION_TOTAL_UNIDADES"]);
        this.jugo['INVENTARIO_FINAL'] = this.cinco
        this.jugo['FECHA'] = this.FECHA;
        this.jugo['accion'] = 'jugo';
        console.log(this.cinco);
        this.http.post(this.api2, JSON.stringify(this.jugo)).subscribe();

        this.seis = parseInt(this.coca["INVENTARIO_INICIAL"]) + parseInt(this.coca["FACTURACION_EN_UNIDADES"]) - this.caso6 -  parseInt(this.coca["ROTACION_TOTAL_UNIDADES"]);
        this.coca['INVENTARIO_FINAL'] = this.seis
        this.coca['FECHA'] = this.FECHA;
        this.coca['accion'] = 'coca';
        console.log(this.seis);
        this.http.post(this.api2, JSON.stringify(this.coca)).subscribe();

        this.siete = parseInt(this.prueba["INVENTARIO_INICIAL"]) + parseInt(this.prueba["FACTURACION_EN_UNIDADES"]) - parseInt(this.prueba["ROTACION_TOTAL_UNIDADES"]);
        this.prueba['INVENTARIO_FINAL'] = this.siete
        this.prueba['FECHA'] = this.FECHA;
        this.prueba['accion'] = 'prueba';
        console.log(this.siete);
        this.http.post(this.api2, JSON.stringify(this.prueba)).subscribe();
      }
    );

    

  }

  insertarv100() {
    this.FECHA = this.acti.snapshot.paramMap.get("FECHA");
    this.datos['FECHA'] = this.FECHA
    this.datos['accion'] = 'mostrarkardex'
    this.http.post(this.api2, JSON.stringify(this.datos)).subscribe(
      datos => {
        this.uno = datos["VIVE100_KALEX"];
        this.v100 = parseInt(this.vive100["INVENTARIO_INICIAL"]) + parseInt(this.vive100["FACTURACION_EN_UNIDADES"]) - this.caso1 - parseInt(this.vive100["ROTACION_TOTAL_UNIDADES"]);
        this.FECHA = this.acti.snapshot.paramMap.get("FECHA");
        this.vive100['INVENTARIO_FINAL'] = this.v100
        this.vive100['FECHA'] = this.FECHA;
        this.vive100['accion'] = 'v100';
        this.http.post(this.api2, JSON.stringify(this.vive100)).subscribe(
          vive100 => {
          }
        );
      }
    );
  }

  insertarv400() {
    this.FECHA = this.acti.snapshot.paramMap.get("FECHA");
    this.datos['FECHA'] = this.FECHA
    this.datos['accion'] = 'mostrarkardex'
    this.http.post(this.api2, JSON.stringify(this.datos)).subscribe(
      datos => {
        this.dos = datos["VIVE400_KALEX"];
        this.v400 = parseInt(this.vive400["INVENTARIO_INICIAL"]) + parseInt(this.vive400["FACTURACION_EN_UNIDADES"]) - this.caso2 - parseInt(this.vive400["ROTACION_TOTAL_UNIDADES"]);
        this.FECHA = this.acti.snapshot.paramMap.get("FECHA");
        this.vive400['INVENTARIO_FINAL'] = this.v400
        this.vive400['FECHA'] = this.FECHA;
        this.vive400['accion'] = 'v400';
        this.http.post(this.api2, JSON.stringify(this.vive400)).subscribe(
          vive400 => {
          }
        );
      }
    );
  }

  insertarspeed() {
    this.FECHA = this.acti.snapshot.paramMap.get("FECHA");
    this.datos['FECHA'] = this.FECHA
    this.datos['accion'] = 'mostrarkardex'
    this.http.post(this.api2, JSON.stringify(this.datos)).subscribe(
      datos => {
        this.tres = datos["SPEED_KALEX"];
        this.spd = parseInt(this.speed["INVENTARIO_INICIAL"]) + parseInt(this.speed["FACTURACION_EN_UNIDADES"]) - this.caso3 -  parseInt(this.speed["ROTACION_TOTAL_UNIDADES"]);
        this.speed['INVENTARIO_FINAL'] = this.spd
        this.FECHA = this.acti.snapshot.paramMap.get("FECHA");
        this.speed['FECHA'] = this.FECHA;
        this.speed['accion'] = 'speed';
        this.http.post(this.api2, JSON.stringify(this.speed)).subscribe(
          speed => {
          }
        );
      }
    );
  }

  insertaragua() {
    this.FECHA = this.acti.snapshot.paramMap.get("FECHA");
    this.datos['FECHA'] = this.FECHA
    this.datos['accion'] = 'mostrarkardex'
    this.http.post(this.api2, JSON.stringify(this.datos)).subscribe(
      datos => {
        this.cuatro = datos["AGUA_KALEX"];
        this.ag = parseInt(this.agua["INVENTARIO_INICIAL"]) + parseInt(this.agua["FACTURACION_EN_UNIDADES"]) - this.caso5 -  parseInt(this.agua["ROTACION_TOTAL_UNIDADES"]);
        this.agua['INVENTARIO_FINAL'] = this.ag
        this.FECHA = this.acti.snapshot.paramMap.get("FECHA");
        this.agua['FECHA'] = this.FECHA;
        this.agua['accion'] = 'agua';
        console.log(this.agua);
        this.http.post(this.api2, JSON.stringify(this.agua)).subscribe(
          agua => {
          }
        );
      }
    );
  }

  insertarjugo() {
    this.FECHA = this.acti.snapshot.paramMap.get("FECHA");
    this.datos['FECHA'] = this.FECHA
    this.datos['accion'] = 'mostrarkardex'
    this.http.post(this.api2, JSON.stringify(this.datos)).subscribe(
      datos => {
        this.cinco = datos["JUGO_KALEX"];
        this.jg = parseInt(this.jugo["INVENTARIO_INICIAL"]) + parseInt(this.jugo["FACTURACION_EN_UNIDADES"]) - this.caso4 -  parseInt(this.jugo["ROTACION_TOTAL_UNIDADES"]);
        this.jugo['INVENTARIO_FINAL'] = this.jg
        this.FECHA = this.acti.snapshot.paramMap.get("FECHA");
        this.jugo['FECHA'] = this.FECHA;
        this.jugo['accion'] = 'jugo';
        console.log(this.jugo);
        this.http.post(this.api2, JSON.stringify(this.jugo)).subscribe(
          jugo => {
          }
        );
      }
    );
  }

  insertarcoca() {
    this.FECHA = this.acti.snapshot.paramMap.get("FECHA");
    this.datos['FECHA'] = this.FECHA
    this.datos['accion'] = 'mostrarkardex'
    this.http.post(this.api2, JSON.stringify(this.datos)).subscribe(
      datos => {
        this.seis = datos["COCACOLA_KALEX"];
        this.cc = parseInt(this.coca["INVENTARIO_INICIAL"]) + parseInt(this.coca["FACTURACION_EN_UNIDADES"]) - this.caso6 -  parseInt(this.coca["ROTACION_TOTAL_UNIDADES"]);
        this.coca['INVENTARIO_FINAL'] = this.cc
        this.FECHA = this.acti.snapshot.paramMap.get("FECHA");
        this.coca['FECHA'] = this.FECHA;
        this.coca['accion'] = 'coca';
        console.log(this.coca);
        this.http.post(this.api2, JSON.stringify(this.coca)).subscribe(
          coca => {
          }
        );
      }
    );
  }

  insertarprueba() {
    this.FECHA = this.acti.snapshot.paramMap.get("FECHA");
    this.datos['FECHA'] = this.FECHA
    this.datos['accion'] = 'mostrarkardex'
    this.http.post(this.api2, JSON.stringify(this.datos)).subscribe(
      datos => {
        this.siete = datos["PRUEBA_KALEX"];
        this.cd = parseInt(this.prueba["INVENTARIO_INICIAL"]) + parseInt(this.prueba["FACTURACION_EN_UNIDADES"]) - parseInt(this.prueba["ROTACION_TOTAL_UNIDADES"]);
        this.prueba['INVENTARIO_FINAL'] = this.cd
        this.FECHA = this.acti.snapshot.paramMap.get("FECHA");
        this.prueba['FECHA'] = this.FECHA;
        this.prueba['accion'] = 'prueba';
        console.log(this.prueba);
        this.http.post(this.api2, JSON.stringify(this.prueba)).subscribe(
          prueba => {
          }
        );
      }
    );
  }

  doRefresh(event) {
    this.ngOnInit();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1500);
  }

  vive100redirec(FECHA){
    this.router.navigate(["/viv100",FECHA])
  }

  vive400redirec(FECHA){
    this.router.navigate(["/vive400",FECHA])
  }

  speedredirec(FECHA){
    this.router.navigate(["/speedmax",FECHA])
  }

  aguaredirec(FECHA){
    this.router.navigate(["/agua",FECHA])
  }

  jugoredirec(FECHA){
    this.router.navigate(["/jugo",FECHA])
  }

  cocaredirec(FECHA){
    this.router.navigate(["/coca",FECHA])
  }

  pruebaredirec(FECHA){
    this.router.navigate(["/prueba",FECHA])
  }
  

}
