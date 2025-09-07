import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  protected title = 'rh';

  rol: string | null = localStorage.getItem("rol");
  permisos: string | null = localStorage.getItem("permisos"); // string JSON

  constructor(
    private permissionsService: NgxPermissionsService,
    private rolesService: NgxRolesService
  ) {}

  ngOnInit(): void {
    if (this.rol) {
      // Convertir permisos de JSON string a array
      let permisosArray: string[] = [];
      if (this.permisos) {
        try {
          permisosArray = JSON.parse(this.permisos);
        } catch (e) {
          console.error("Error parseando permisos:", e);
        }
      }

      // 1️⃣ Cargar permisos
      this.permissionsService.loadPermissions(permisosArray);
      console.log("Permisos cargados:", permisosArray);

      // 2️⃣ Crear rol con sus permisos
      this.rolesService.addRole(this.rol, permisosArray);
      console.log("Roles cargados:", this.rolesService.getRoles());
    }
  }
}
