import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage implements OnInit {

  constructor(private authService: AuthenticationService, private http: HttpClient, public alertController: AlertController,
    private loadingController: LoadingController, private router: Router, private acti: ActivatedRoute) { }

  FECHA;
  datos = {}
  array: any;
  api = 'https://vivesien.000webhostapp.com/tablas.php'

  ngOnInit() {
    this.FECHA = this.acti.snapshot.paramMap.get("FECHA");
    this.datos['accion'] = 'prueba';
    this.datos['FECHA'] = this.FECHA;
    this.http.post(this.api, JSON.stringify(this.datos)).subscribe(
      datos => {
        console.log(datos);
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
}