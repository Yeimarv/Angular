import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from '../app/paginas/inicio/inicio.component';
import { ServdemantoComponent } from '../app/paginas/servdemanto/servdemanto.component';
import { ContactenosComponent } from '../app/paginas/contactenos/contactenos.component';
import { CotizacionComponent } from './paginas/cotizacion/cotizacion.component';
import { HomeComponent } from './paginas/home/home.component';

//const routes:Routes=[];
const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'inicio',
        component: HomeComponent,
      },
      {
        path: 'cotizacion',
        component: CotizacionComponent,
      },
      {
        path: 'servdemanto',
        component: ServdemantoComponent,
      },
      {
        path: 'contactenos',
        component: ContactenosComponent,
      },
    ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
