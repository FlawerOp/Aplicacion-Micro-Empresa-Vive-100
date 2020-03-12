import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router, private acti: ActivatedRoute, private authService: AuthenticationService, private http: HttpClient, public alertController: AlertController,
    private loadingController: LoadingController) { }
  FECHA;
  datos={}
  api = 'https://vivesien.000webhostapp.com/app.php'

  ngOnInit() {
  }

  doRefresh(event) {
    this.ngOnInit();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1500);
  } 

  async register(){
    if (this.datos["cedula"] == null || this.datos["nombre"] == null || this.datos["apellido"] == null || this.datos["telefono"] == null || 
     this.datos["ciudad"] == null || this.datos["referencia"] == null || this.datos["direccion"] == null) {
      const loading = await this.loadingController.create({
        message: 'Realizando cambios',
        duration: 800
      });
      await loading.present();
      const { role, data } = await loading.onDidDismiss();
      const alert = await this.alertController.create({
        header: 'Error',
        subHeader: 'Falló el registro.',
        message: 'Por favor ingresa todos los datos y verifica la información.',
        buttons: ['Aceptar']
      });
      await alert.present();
    } else {

      this.FECHA = this.acti.snapshot.paramMap.get("FECHA");
      this.datos['accion']='registrar'
      this.datos['FECHA']=this.FECHA
      this.http.post(this.api, JSON.stringify(this.datos)).subscribe(
        async datos => {
          const loading = await this.loadingController.create({
            message: 'Realizando cambios',
            duration: 800
          });
          await loading.present();
          const { role, data } = await loading.onDidDismiss();
          const alert = await this.alertController.create({
            header: 'Alerta',
            message: 'Datos ingresados correctamente.',
            buttons: ['Aceptar']
          });
          await alert.present();  
          this.redireccionar( this.FECHA);
        }
      );
    }
  }

  redireccionar(FECHA){
    this.router.navigate(["/empleados",  FECHA])
  }

 }
