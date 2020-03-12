import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { AlertController, LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-descargueproducto',
  templateUrl: './descargueproducto.page.html',
  styleUrls: ['./descargueproducto.page.scss'],
})
export class DescargueproductoPage implements OnInit {
  

  constructor(private authService: AuthenticationService, private http: HttpClient, public alertController: AlertController,
    private loadingController: LoadingController, private acti: ActivatedRoute, private router: Router) { }
    FECHA;
    CEDULA;
    datos2={}
    datos3={}
    A={}
    B={}
    C={}
    D={}
    E={}
    F={}
    G={}
    datos={}
    array:any={}
    array2:any={}
    api = 'http://vivesien.000webhostapp.com/app.php' 
    precio: any;
    preciobase: any;

ngOnInit() {
  this.CEDULA = this.acti.snapshot.paramMap.get("CEDULA");
  this.FECHA = this.acti.snapshot.paramMap.get("FECHA");
  this.datos['accion']='destraer'
  this.datos['CEDULA']=this.CEDULA 
  this.datos['FECHA']=this.FECHA 
  this.http.post(this.api, JSON.stringify(this.datos)).subscribe(
  datos => {
     console.log(datos);
      this.array = datos;
    }
  );

  this.datos3['accion']='traer'
  this.datos3['cedula']=this.CEDULA 
  this.http.post(this.api, JSON.stringify(this.datos3)).subscribe(
  dato3 => {
     console.log(dato3);
      this.array2 = dato3;
    }
  );
}

patras(FECHA){
  this.router.navigate(["/descargue",FECHA])
}

doRefresh(event) {
  this.ngOnInit();
  setTimeout(() => {
    console.log('Async operation has ended');
    event.target.complete();
  }, 1500);
}

  async descargar(){
    this.CEDULA = this.acti.snapshot.paramMap.get("CEDULA");
    this.FECHA = this.acti.snapshot.paramMap.get("FECHA");
    
    this.datos2['accion']='descargar'
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
            subHeader: 'Usuario Descargado',
            message: 'El Empleado ha realizado el Descargue con Exito.',
            buttons: ['Aceptar']
          });
          await alert.present(); 
          this.sumatotal();
          this.redireccionar(this.CEDULA, this.FECHA, this.precio, this.preciobase);
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

sumatotal(){
  this.suma();
  this.suma2();
  this.suma3();
  this.suma4();
  this.suma5();
  this.suma6();
  this.suma7();
}

suma(){
  this.A['accion']='suma';
  this.A['FECHA']=this.FECHA; 
  this.http.post(this.api, JSON.stringify(this.A)).subscribe(
    async A => {
      console.log(A);
    });
}

suma2(){
  this.B['accion']='suma2';
  this.B['FECHA']=this.FECHA; 
  this.http.post(this.api, JSON.stringify(this.B)).subscribe(
    async B => {
      console.log(B);
    });
}

suma3(){
  this.C['accion']='suma3';
  this.C['FECHA']=this.FECHA ;
  this.http.post(this.api, JSON.stringify(this.C)).subscribe(
    async C => {
      console.log(C);
    });
}

suma4(){
  this.D['accion']='suma4';
  this.D['FECHA']=this.FECHA ;
  this.http.post(this.api, JSON.stringify(this.D)).subscribe(
    async D => {
      console.log(D);
    });
}

suma5(){
  this.E['accion']='suma5';
  this.E['FECHA']=this.FECHA ;
  this.http.post(this.api, JSON.stringify(this.E)).subscribe(
    async E => {
      console.log(E);
    });
}

suma6(){
  this.F['accion']='suma6';
  this.F['FECHA']=this.FECHA ;
  this.http.post(this.api, JSON.stringify(this.F)).subscribe(
    async F => {
      console.log(F);
    });
}

suma7(){
  this.F['accion']='suma7';
  this.F['FECHA']=this.FECHA ;
  this.http.post(this.api, JSON.stringify(this.F)).subscribe(
    async G => {
      console.log(G);
    });
}



redireccionar(CEDULA, FECHA, PRECIO, PRECIOBASE){
    this.router.navigate(["/pago",CEDULA, FECHA, PRECIO, PRECIOBASE])
}

  

}
