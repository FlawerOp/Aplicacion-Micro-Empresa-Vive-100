import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.page.html',
  styleUrls: ['./eliminar.page.scss'],
})
export class EliminarPage implements OnInit {

  constructor(private authService: AuthenticationService, private http: HttpClient, public alertController: AlertController) { }
  datos={}
  array:any;
  api = 'https://vivesien.000webhostapp.com/app.php'
  ngOnInit() {
    this.datos['accion']='mostrar'
    this.http.post(this.api, JSON.stringify(this.datos)).subscribe(
    datos => {
       console.log(datos);
        this.array = datos;
      }
    )
  }

}
