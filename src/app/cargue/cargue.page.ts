import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-cargue',
  templateUrl: './cargue.page.html',
  styleUrls: ['./cargue.page.scss'],
})
export class CarguePage implements OnInit {
  CEDULA: any;


  constructor(private authService: AuthenticationService, private http: HttpClient, public alertController: AlertController,
    private loadingController: LoadingController, private router: Router, private acti: ActivatedRoute) { }

  cualquiera3: any;
  cualquiera2: any;
  cualquiera: any;
  datos2 = {}
  FECHA;
  datos = {}
  array: any;
  api = 'https://vivesien.000webhostapp.com/app.php'

  ngOnInit() {
    this.FECHA = this.acti.snapshot.paramMap.get("FECHA");
    this.datos['accion'] = 'mostrar'
    this.datos['FECHA'] = this.FECHA
    this.http.post(this.api, JSON.stringify(this.datos)).subscribe(
      datos => {
        this.array = datos;
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

  bloquear(CEDULA) {
    this.FECHA = this.acti.snapshot.paramMap.get("FECHA");
    this.datos2['accion'] = 'bloquearcargue';
    this.datos2['CEDULA'] = CEDULA;
    this.datos2['FECHA'] = this.FECHA;
    this.http.post(this.api, JSON.stringify(this.datos2)).subscribe(
      async datos2 => {
        this.cualquiera = datos2;
        console.log(this.cualquiera);
        if (this.cualquiera != null) {
          const loading = await this.loadingController.create({
            message: 'Recuperando Datos',
            duration: 1000
          });
          await loading.present();
          const { role, data } = await loading.onDidDismiss();
          const alert = await this.alertController.create({
            header: 'Error',
            subHeader: 'Usuario Cargado',
            message: 'El Empleado ya ha realizado el Cargue del dia de hoy.',
            buttons: ['Aceptar']
          });
          await alert.present();
        } else {
          this.redireccionar(CEDULA, this.FECHA)
        }
      });
  }

  redireccionar(CEDULA, FECHA) {
    this.router.navigate(["/cargueproducto", CEDULA, FECHA])
  }

}
