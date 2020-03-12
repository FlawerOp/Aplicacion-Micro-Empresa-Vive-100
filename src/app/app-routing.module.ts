import { AuthGuardService } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
  { path: 'register/:FECHA', loadChildren: './public/register/register.module#RegisterPageModule' },
  { 
    path: 'members', 
    canActivate: [AuthGuardService],
    loadChildren: './members/member-routing.module#MemberRoutingModule'
  },
  { path: 'empleados', loadChildren: './empleados/empleados.module#EmpleadosPageModule' },
  { path: 'modificar/:CEDULA/:FECHA', loadChildren: './modificar/modificar.module#ModificarPageModule' },
  { path: 'eliminar', loadChildren: './eliminar/eliminar.module#EliminarPageModule' },
  { path: 'empleados/:FECHA', loadChildren: './empleados/empleados.module#EmpleadosPageModule' },
  { path: 'cargue/:FECHA', loadChildren: './cargue/cargue.module#CarguePageModule' },
  { path: 'cargueproducto/:CEDULA/:FECHA', loadChildren: './cargueproducto/cargueproducto.module#CargueproductoPageModule' },
  { path: 'descargue/:FECHA', loadChildren: './descargue/descargue.module#DescarguePageModule' },
  { path: 'descargueproducto/:CEDULA/:FECHA', loadChildren: './descargueproducto/descargueproducto.module#DescargueproductoPageModule' },
  { path: 'kardex/:FECHA/:ADMIN', loadChildren: './kardex/kardex.module#KardexPageModule' },
  { path: 'viv100/:FECHA', loadChildren: './viv100/viv100.module#Viv100PageModule' },
  { path: 'vive400/:FECHA', loadChildren: './vive400/vive400.module#Vive400PageModule' },
  { path: 'speedmax/:FECHA', loadChildren: './speedmax/speedmax.module#SpeedmaxPageModule' },
  { path: 'agua/:FECHA', loadChildren: './agua/agua.module#AguaPageModule' },
  { path: 'jugo/:FECHA', loadChildren: './jugo/jugo.module#JugoPageModule' },
  { path: 'coca/:FECHA', loadChildren: './coca/coca.module#CocaPageModule' },
  { path: 'pago/:CEDULA/:FECHA/:PRECIO/:PRECIOBASE', loadChildren: './pago/pago.module#PagoPageModule' },
  { path: 'prueba/:FECHA', loadChildren: './prueba/prueba.module#PruebaPageModule' },
  { path: 'venta/:FECHA/:CEDULA', loadChildren: './venta/venta.module#VentaPageModule' },
  { path: 'pagomayor/:FECHA/:CEDULA', loadChildren: './pagomayor/pagomayor.module#PagomayorPageModule' },
  { path: 'f-dia/:FECHA', loadChildren: './f-dia/f-dia.module#FDiaPageModule' },
  { path: 'recargue/:FECHA', loadChildren: './recargue/recargue.module#RecarguePageModule' },
  { path: 'recargueproducto/:CEDULA/:FECHA', loadChildren: './recargueproducto/recargueproducto.module#RecargueproductoPageModule' },
  { path: 'diaempleado/:CEDULA/:FECHA', loadChildren: './diaempleado/diaempleado.module#DiaempleadoPageModule' },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
