import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { finalize } from 'rxjs/operators'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.page.html',
  styleUrls: ['./empleados.page.scss'],
})
export class EmpleadosPage implements OnInit {

  constructor(private authService: AuthenticationService, private http: HttpClient, public alertController: AlertController,
    private loadingController: LoadingController, private router: Router, private acti: ActivatedRoute, private toastController: ToastController) { }

FECHA;   
datos={}
array:any;
api = 'https://vivesien.000webhostapp.com/app.php'

  ngOnInit() {
    this.FECHA = this.acti.snapshot.paramMap.get("FECHA");
    this.datos['accion']='mostrar'
    this.datos['FECHA']=this.FECHA
    this.http.post(this.api, JSON.stringify(this.datos)).subscribe(
    datos => {
       console.log(datos);
        this.array = datos;
      }
    )
  }

  doRefresh(event) {
    this.ngOnInit();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1500);
  }

  async pagar(CEDULA){
    const loading = await this.loadingController.create({
      message: 'Realizando Cambios',
      duration: 200
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    const alert = await this.alertController.create({
      header: 'Confirmacion',
      subHeader: '¿Eliminar Empleado?',
      message: 'Se eliminaá el empleado de la lista de Empleados.',
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
            this.eliminar(CEDULA);
          }
        }
      ]
    });
    await alert.present();
  }

  async eliminar(CEDULA){
    const loading = await this.loadingController.create({
      message: 'Realizando cambios',
      duration: 1500
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    const toast = await this.toastController.create({
      message: 'Usuario eliminado exitosamente.',
      duration: 2000
    });
    toast.present();
    
    let info={
      CEDULA:CEDULA,
      accion:"eliminar"
    }
      this.http.post(this.api, JSON.stringify(info)).pipe(finalize(() => { loading.dismiss() })).subscribe(
        me => {
          console.log(me);
        }
      )
  }

  redirecregistrar(FECHA){
    this.router.navigate(["/register",FECHA])
  }

  redireccionar(CEDULA, FECHA){
    this.router.navigate(["/modificar",CEDULA,FECHA])
  }

  redireccionardia(CEDULA, FECHA){
    this.router.navigate(["/diaempleado",CEDULA,FECHA])
  }
}
