import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recargue',
  templateUrl: './recargue.page.html',
  styleUrls: ['./recargue.page.scss'],
})
export class RecarguePage implements OnInit {
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

  async bloquear(CEDULA) {
    const loading = await this.loadingController.create({
      message: 'Recuperando Datos',
      duration: 1000
    });
    this.redireccionar(CEDULA, this.FECHA);
  }

  redireccionar(CEDULA, FECHA) {
    this.router.navigate(["/recargueproducto", CEDULA, FECHA])
  }

}
