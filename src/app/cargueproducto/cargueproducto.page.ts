import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { AlertController, LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cargueproducto',
  templateUrl: './cargueproducto.page.html',
  styleUrls: ['./cargueproducto.page.scss'],
})
export class CargueproductoPage implements OnInit {
 
  constructor(private authService: AuthenticationService, private http: HttpClient, public alertController: AlertController,
    private loadingController: LoadingController, private acti: ActivatedRoute, private router: Router) { }
    
    FECHA;
    CEDULA;
    datos2={}
    datos={}
    array:any={}
    api = 'http://vivesien.000webhostapp.com/app.php' 

ngOnInit() {
  this.CEDULA = this.acti.snapshot.paramMap.get("CEDULA");
  this.datos['accion']='traer'
  this.datos['cedula']=this.CEDULA
  this.http.post(this.api, JSON.stringify(this.datos)).subscribe(
  datos => {
     console.log(datos);
      this.array = datos;
    }
  )
}

  async cargar(){
    this.CEDULA = this.acti.snapshot.paramMap.get("CEDULA");
    this.FECHA = this.acti.snapshot.paramMap.get("FECHA");
    
    this.datos2['accion']='cargar'
    this.datos2['CEDULA']=this.CEDULA 
    this.datos2['FECHA']=this.FECHA 
    if ((this.datos2['COCA']!=null)&&(this.datos2['JUGO']!=null)&&(this.datos2['SPEED']!=null)&&
    (this.datos2['AGUA']!=null)&&(this.datos2['VIVE400']!=null)&&(this.datos2['VIVE100']!=null)&&(this.datos2['PRUEBA']!=null)) {
        
      this.http.post(this.api, JSON.stringify(this.datos2)).subscribe(
        async datos2 => {
          console.log(datos2)
          const loading = await this.loadingController.create({
            message: 'Aplicando Cambios',
            duration: 800
          });
          await loading.present();
          const { role, data } = await loading.onDidDismiss();
          const alert = await this.alertController.create({
            header: 'Alerta',
            subHeader: 'Usuario Cargado',
            message: 'El Empleado ha realizado el Cargue con Exito.',
            buttons: ['Aceptar']
          });
          await alert.present(); 
          this.patras(this.FECHA);
        }
        );
      }else{
        const loading = await this.loadingController.create({
          message: 'Recuperando Datos',
          duration: 800
        });
        await loading.present();
        const { role, data } = await loading.onDidDismiss();
        const alert = await this.alertController.create({
          header: 'Error',
          subHeader: 'Datos Incompletos',
          message: 'Ingresa todos campos para realizar la operacion.',
          buttons: ['Aceptar']
        });
        await alert.present(); 
      }
}

patras(FECHA){
  this.router.navigate(["/cargue",FECHA])
}

doRefresh(event) {
  this.ngOnInit();
  setTimeout(() => {
    console.log('Async operation has ended');
    event.target.complete();
  }, 1500);
}

}
