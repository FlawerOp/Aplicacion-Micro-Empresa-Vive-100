import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './../../services/authentication.service';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
const TOKEN_KEY = 'auth-token';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  datos2: any;

  constructor(private authService: AuthenticationService, private http: HttpClient, public alertController: AlertController,
    private loadingController: LoadingController, private router: Router, private storage: Storage, private toastController: ToastController) {
      this.ngOnInit();
     }
  datos = {}
  array: any;
  api = 'https://vivesien.000webhostapp.com/app.php'
  api2 = 'https://vivesien.000webhostapp.com/kardex.php'
  cedula: any;
  admin: any;

  ngOnInit() {
    this.storage.get(TOKEN_KEY).then(res => {
      this.cedula = res
    });
    console.log(this.cedula);
    this.datos['CEDULA'] = this.cedula;
    this.datos['accion'] = 'conexion';
    this.http.post(this.api, JSON.stringify(this.datos)).subscribe(
      async datos => {
        this.admin = datos['CARGO'];
        console.log(datos);
        if (datos == "Conexion fallida") {
          const alert = await this.alertController.create({
            header: 'Alerta',
            subHeader: 'Conexion Inestable',
            message: 'La la conexion está inestable en estos momentos, comunicate con el desarrollador.',
            buttons: ['Aceptar']
          });
          await alert.present();
        } else {
          const toast = await this.toastController.create({
            message: 'Conexion Estable!',
            duration: 2700
          });
          toast.present();
        }
      });
  }

  doRefresh(event) {
    this.ngOnInit();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1500);
  }

  async fecha() {
    this.datos['accion'] = 'fecha';
    this.http.post(this.api, JSON.stringify(this.datos)).subscribe(
      async datos => {
        console.log(datos);
        if (datos == "Si") {
          const loading = await this.loadingController.create({
            message: 'Añadiendo Fecha',
            duration: 1200
          });
          await loading.present();
          const { role, data } = await loading.onDidDismiss();
          const alert = await this.alertController.create({
            header: 'Alerta',
            subHeader: 'Fecha Registrada',
            message: 'La fecha del dia de hoy ha sido registrada correctamente.',
            buttons: ['Aceptar']
          });
          await alert.present();
        } else {
          const loading = await this.loadingController.create({
            message: 'Añadiendo Fecha',
            duration: 1200
          });
          await loading.present();
          const { role, data } = await loading.onDidDismiss();
          const alert = await this.alertController.create({
            header: 'Error',
            subHeader: 'Fecha Ya Registrada',
            message: 'La fecha del dia de hoy ha sido registrada anteriormente.',
            buttons: ['Aceptar']
          });
          await alert.present();
        }
      }
    );
  }

  cargue() {
    this.datos['FECHA'] = this.datos['fecha'];
    this.datos['accion'] = 'traerfecha';
    this.http.post(this.api, JSON.stringify(this.datos)).subscribe(
      async datos => {
        this.array = datos;
        if (datos == null) {
          const loading = await this.loadingController.create({
            message: 'Recuperando Datos',
            duration: 800
          });
          await loading.present();
          const { role, data } = await loading.onDidDismiss();
          const alert = await this.alertController.create({
            header: 'Error',
            subHeader: 'Fecha No Registrada',
            message: 'Añade la fecha para ingresar al apartado de Cargue.',
            buttons: ['Aceptar']
          });
          await alert.present();
        } else {
          this.redireccargue(this.array['FECHAS']);
        }
      });
  }

  descargue() {
    this.datos['FECHA'] = this.datos['fecha'];
    this.datos['accion'] = 'traerfecha';
    this.http.post(this.api, JSON.stringify(this.datos)).subscribe(
      async datos => {
        this.array = datos;
        if (datos == null) {
          const loading = await this.loadingController.create({
            message: 'Recuperando Datos',
            duration: 800
          });
          await loading.present();
          const { role, data } = await loading.onDidDismiss();
          const alert = await this.alertController.create({
            header: 'Error',
            subHeader: 'Fecha No Registrada',
            message: 'Añade la fecha para ingresar al apartado de Descargue.',
            buttons: ['Aceptar']
          });
          await alert.present();
        } else {
          this.redirecdescargue(this.array['FECHAS']);
        }
      });
  }

  recargar(){
    this.datos['FECHA'] = this.datos['fecha'];
    this.datos['accion'] = 'traerfecha';
    this.http.post(this.api, JSON.stringify(this.datos)).subscribe(
      async datos => {
        this.array = datos;
        if (datos == null) {
          const loading = await this.loadingController.create({
            message: 'Recuperando Datos',
            duration: 800
          });
          await loading.present();
          const { role, data } = await loading.onDidDismiss();
          const alert = await this.alertController.create({
            header: 'Error',
            subHeader: 'Fecha No Registrada',
            message: 'Añade la fecha para ingresar al apartado de Descargue.',
            buttons: ['Aceptar']
          });
          await alert.present();
        } else {
          this.redirecrecargue(this.array['FECHAS']);
        }
      });
  }

  kardex() {
    this.ngOnInit();
    this.datos['FECHA'] = this.datos['fecha'];
    this.datos['accion'] = 'traerfecha';
    this.http.post(this.api, JSON.stringify(this.datos)).subscribe(
      async datos => {
        this.array = datos;
        if (datos == null) {
          const loading = await this.loadingController.create({
            message: 'Recuperando Datos',
            duration: 800
          });
          await loading.present();
          const { role, data } = await loading.onDidDismiss();
          const alert = await this.alertController.create({
            header: 'Error',
            subHeader: 'Fecha No Registrada',
            message: 'Añade la fecha para ingresar al apartado de Inventario.',
            buttons: ['Aceptar']
          });
          await alert.present();
        } else {
          this.datos['FECHA'] = this.datos['fecha'];
          this.datos['accion'] = 'añadir';
          this.http.post(this.api2, JSON.stringify(this.datos)).subscribe(
            async datos => {
              console.log(datos);
              this.redireckardex(this.datos['fecha'], this.admin);
            });
        }
      });
  }

  empleados() {
    this.datos['FECHA'] = this.datos['fecha'];
    this.datos['accion'] = 'traerfecha';
    this.http.post(this.api, JSON.stringify(this.datos)).subscribe(
      async datos => {
        this.array = datos;
        if (datos == null) {
          const loading = await this.loadingController.create({
            message: 'Recuperando Datos',
            duration: 800
          });
          await loading.present();
          const { role, data } = await loading.onDidDismiss();
          const alert = await this.alertController.create({
            header: 'Error',
            subHeader: 'Fecha No Registrada',
            message: 'Añade la fecha para ingresar al apartado de Empleados.',
            buttons: ['Aceptar']
          });
          await alert.present();
        } else {
          this.redirecepleado(this.array['FECHAS']);
        }
      });
  }

  venta() {
    this.datos['FECHA'] = this.datos['fecha'];
    this.datos['accion'] = 'traerfecha';
    this.http.post(this.api, JSON.stringify(this.datos)).subscribe(
      async datos => {
        this.array = datos;
        if (datos == null) {
          const loading = await this.loadingController.create({
            message: 'Recuperando Datos',
            duration: 800
          });
          await loading.present();
          const { role, data } = await loading.onDidDismiss();
          const alert = await this.alertController.create({
            header: 'Error',
            subHeader: 'Fecha No Registrada',
            message: 'Añade la fecha para ingresar al apartado de Cargue.',
            buttons: ['Aceptar']
          });
          await alert.present();
        } else {
          this.redirecventa(this.array['FECHAS'], this.cedula);
        }
      });
  }

  dia() {
    this.datos['FECHA'] = this.datos['fecha'];
    this.datos['accion'] = 'traerfecha';
    this.http.post(this.api, JSON.stringify(this.datos)).subscribe(
      async datos => {
        this.array = datos;
        if (datos == null) {
          const loading = await this.loadingController.create({
            message: 'Recuperando Datos',
            duration: 800
          });
          await loading.present();
          const { role, data } = await loading.onDidDismiss();
          const alert = await this.alertController.create({
            header: 'Error',
            subHeader: 'Fecha No Registrada',
            message: 'Añade la fecha para ingresar al apartado de Cargue.',
            buttons: ['Aceptar']
          });
          await alert.present();
        } else {
          this.redirecdia(this.array['FECHAS']);
        }
      });
  }

  redireckardex(FECHA, ADMIN) {
    this.router.navigate(["/kardex", FECHA, ADMIN])
  }

  redirecdescargue(FECHA) {
    this.router.navigate(["/descargue", FECHA])
  }
  redirecrecargue(FECHA){
    this.router.navigate(["/recargue", FECHA])
  }
  redireccargue(FECHA) {
    this.router.navigate(["/cargue", FECHA])
  }
  redirecepleado(FECHA) {
    this.router.navigate(["/empleados", FECHA])
  }
  redirecventa(CEDULA,FECHA) {
    this.router.navigate(["/venta",CEDULA, FECHA])
  }
  redirecdia(FECHA) {
    this.router.navigate(["/f-dia",FECHA])
  }

  async logout() {
    const loading = await this.loadingController.create({
      message: 'Cerrando Sesion',
      duration: 2000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    this.authService.logout();
  }
}
