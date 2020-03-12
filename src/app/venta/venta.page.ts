import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { AlertController, LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-venta',
  templateUrl: './venta.page.html',
  styleUrls: ['./venta.page.scss'],
})
export class VentaPage implements OnInit {

  constructor(private authService: AuthenticationService, private http: HttpClient, public alertController: AlertController,
    private loadingController: LoadingController, private acti: ActivatedRoute, private router: Router) {
      
     }
    
    FECHA;
    CEDULA;
    datos2={}
    datos={}
    array:any={}
    api = 'http://vivesien.000webhostapp.com/app.php' 
    suma1;
    suma2;
    suma3;
    suma4;
    suma5;
    suma6;

ngOnInit() {
  this.CEDULA = this.acti.snapshot.paramMap.get("CEDULA");
  this.FECHA = this.acti.snapshot.paramMap.get("FECHA");
}

async descargar(){

  this.datos2['FECHA']=this.FECHA ;
  
  if ((this.datos2['COCA']!=null)&&(this.datos2['JUGO']!=null)&&(this.datos2['SPEED']!=null)&&
  (this.datos2['AGUA']!=null)&&(this.datos2['VIVE400']!=null)&&(this.datos2['VIVE100']!=null)&&(this.datos2['ID_CLIENTE']!=null)) {
    
    this.datos2['accion']='mayor';

    this.http.post(this.api, JSON.stringify(this.datos2)).subscribe(
      async datos2 => {
        console.log(datos2);
        const loading = await this.loadingController.create({
          message: 'Aplicando Cambios',
          duration: 800
        });
        await loading.present();
        const { role, data } = await loading.onDidDismiss();
        const alert = await this.alertController.create({
          header: 'Alerta',
          subHeader: 'Productos Descargados',
          message: 'Los productos han sido descargados con Exito.',
          buttons: ['Aceptar']
        });
        await alert.present(); 
        this.redireccionar(this.FECHA, this.datos2['ID_CLIENTE']);
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

redireccionar(FECHA, CEDULA){
  this.router.navigate(["/pagomayor", FECHA, CEDULA]);
}

aplicar(){
  this.suma1=(this.datos2['VIVE100']/12).toFixed(1);
  this.suma2=(this.datos2['VIVE400']/12).toFixed(1);
  this.suma3=(this.datos2['AGUA']/12).toFixed(1);
  this.suma4=(this.datos2['SPEED']/12).toFixed(1);
  this.suma5=(this.datos2['JUGO']/12).toFixed(1);
  this.suma6=(this.datos2['COCA']/12).toFixed(1);
}

doRefresh(event) {
  this.ngOnInit();
  setTimeout(() => {
    console.log('Async operation has ended');
    event.target.complete();
  }, 1500);
}

}