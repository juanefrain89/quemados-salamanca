import { Component } from '@angular/core';
import { Datos } from '../datos';
import { Router } from '@angular/router';

import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

constructor(private servicio : Datos, private router : Router,  private permissionsService: NgxPermissionsService,
  private rolesService: NgxRolesService){}

correo : any
contrasena : any

alerta(){
  alert("Solicitar soporte con It")
}

mandar(){
let credenciales = {
  correo: this.correo,
  contraseña : this.contrasena
}
  this.servicio.iniciarsesion(credenciales).subscribe(
    (datos)=>{
      console.log("Login exitoso:", datos);

        // Guardar datos en localStorage
        localStorage.setItem("token", datos.token);
        localStorage.setItem("usuario", datos.usuario.correo);
        localStorage.setItem("rol", datos.all.descripcion);
        localStorage.setItem("permisos", JSON.stringify(datos.all.todospermisos));
if(datos.usuario.departamento){
localStorage.setItem("departamento", datos.usuario.departamento)
}
        this.permissionsService.loadPermissions(datos.all.todospermisos);

     
        this.rolesService.addRole(datos.all.descripcion, datos.all.todospermisos);

     
        console.log("Permisos cargados:", this.permissionsService.getPermissions());
        console.log("Roles cargados:", this.rolesService.getRoles());

    
        this.router.navigate(['/ejemplo']);
      
    },
    (err)=>{
      console.log(err);
     
      alert("contraseña o usuario incorrecto")

      
    }
  )

}
}
