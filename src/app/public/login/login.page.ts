
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, LoadingController } from '@ionic/angular';

 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 
  constructor(private authService: AuthenticationService, private http: HttpClient, public alertController: AlertController,private loadingController: LoadingController ) { }

  datos={}
  api = 'https://vivesien.000webhostapp.com/app.php'
  
  ngOnInit() {
  }
 
  login() {
    this.datos['accion']='login'
    this.http.post(this.api, JSON.stringify(this.datos)).subscribe(
      async datos => {
        if (datos["CEDULA"]!=null) {
          const loading = await this.loadingController.create({
            message: 'Iniciando Sesion',
            duration: 2000
          });
          await loading.present();
          const { role, data } = await loading.onDidDismiss();
          this.authService.login(datos["CEDULA"]);
        } else {
          const alert = await this.alertController.create({
            header: 'Error',
            subHeader: 'Falló inicio de sesion.',
            message: 'Por favor verifica los datos ingresados',
            buttons: ['Aceptar']
          });
      
          await alert.present();
        }

      }
    )
  }
}

