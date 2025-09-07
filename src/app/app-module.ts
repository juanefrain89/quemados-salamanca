import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDaterangepickerBootstrapModule, NgxDaterangepickerLocaleService } from 'ngx-daterangepicker-bootstrap';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Empleados } from './empleados/empleados';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { NgxPermissionsModule } from 'ngx-permissions';
import { Ejemplo } from './ejemplo/ejemplo';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Login } from './login/login';
import { RouterModule } from '@angular/router';
import { Agregarpuestos } from './agregarpuestos/agregarpuestos';
import { LimitarPorcentajePipe } from './limitar-porcentaje-pipe';
import { OrgChartModule } from 'angular13-organization-chart';

import { Organigrama } from './organigrama/organigrama';
import { Cargarempleadosorg } from './cargarempleadosorg/cargarempleadosorg';
import { QuitarHoraPipe } from './quitar-hora-pipe';
@NgModule({
  declarations: [
    App,
    Empleados,
    Ejemplo,
    Login,
    Agregarpuestos,
    LimitarPorcentajePipe,
    Organigrama,
    Cargarempleadosorg,
    QuitarHoraPipe
  ],
  imports: [
      NgxDaterangepickerMd.forRoot(),
      OrgChartModule,
    BrowserModule,
    RouterModule,
    FontAwesomeModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
      NgxDaterangepickerBootstrapModule.forRoot(),
      NgxPermissionsModule.forRoot(),
     ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
    })

  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    [NgxDaterangepickerLocaleService]
  ],
  bootstrap: [App]
})
export class AppModule { }
