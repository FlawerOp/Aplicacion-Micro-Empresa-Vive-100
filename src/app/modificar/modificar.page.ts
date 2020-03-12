import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { AlertController, LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {

  constructor(private router: Router, private authService: AuthenticationService, private http: HttpClient, public alertController: AlertController,
    private loadingController: LoadingController, private acti: ActivatedRoute) { }
FECHA;
CEDULA;
datos={}
array:any={}
api = 'https://vivesien.000webhostapp.com/app.php' 

ngOnInit() {
  this.CEDULA = this.acti.snapshot.paramMap.get("CEDULA");
  this.FECHA = this.acti.snapshot.paramMap.get("FECHA");
  this.datos['accion']='traer'
  this.datos['cedula']=this.CEDULA 
  this.datos['FECHA']=this.FECHA 
  this.http.post(this.api, JSON.stringify(this.datos)).subscribe(
  datos => {
     console.log(datos);
      this.array = datos;
    }
  )
}
async modificar(){
  if (this.array['DIRECCION']==null || this.array['REFERENCIA_PERSONAL']==null || this.array['CIUDAD']==null || 
  this.array['TELEFONO']==null || this.array['APELLIDOS']==null || this.array['NOMBRE']==null) {
    
        const loading = await this.loadingController.create({
          message: 'Realizando cambios',
          duration: 2000
        });
        await loading.present();
        const { role, data } = await loading.onDidDismiss();
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Datos faltantes, es necesario llenar todos los campos',
          buttons: ['Aceptar']
        });
        await alert.present(); 
      
    }else{
      this.array['accion']='modificar'
      this.http.post(this.api, JSON.stringify(this.array)).subscribe(
        async datos => {
      const loading = await this.loadingController.create({
        message: 'Realizando cambios',
        duration: 1500
      });
      await loading.present();
      const { role, data } = await loading.onDidDismiss();
      const alert = await this.alertController.create({
        header: 'Alerta',
        message: 'Datos actualizados correctamente.',
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

