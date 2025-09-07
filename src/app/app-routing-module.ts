import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Empleados } from './empleados/empleados';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { Ejemplo } from './ejemplo/ejemplo';
import { Login } from './login/login';
import { Agregarpuestos } from './agregarpuestos/agregarpuestos';
import { Organigrama } from './organigrama/organigrama';
import { Cargarempleadosorg } from './cargarempleadosorg/cargarempleadosorg';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',  // Redirigir a login por defecto
    pathMatch: 'full'
  },
  {
    path: 'empleados',
   component : Empleados
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'empleados',
    component: Empleados,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'admin'
      }
    }
  },
  {
    path: 'puestos',
    component: Agregarpuestos,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'admin'
      }
    }
  },
  {
    path: 'ejemplo',
    component: Ejemplo,   
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: [1, 'asistencias', 'nominas', 'area', 'admin', 'consulta', 'jefearea'],
          redirectTo: '/login'
      }
    }
    
   
  },

  {
    path : "org",
    component : Organigrama
  },
   {
    path : "c",
    component : Cargarempleadosorg
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }