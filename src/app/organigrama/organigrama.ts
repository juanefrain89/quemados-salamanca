import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'angular13-organization-chart';
import { Datos } from '../datos';
import { HostListener } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
interface CustomTreeNode extends TreeNode {
  hierarchyId?: number;
  puesto?: string;
  departamento?: string;
  rotateDegree?: number;
  imagen?: any;
  display?: boolean;
  mostrar?: boolean;
  h?: number;
  nombre?: string;
  empleado?: any;
  image?: string;
  css?: string;
  label?: string;
  description?: string;
  name?: string;
  hideChildren?: boolean;
  hijosVacios?: boolean; 
}

@Component({
  selector: 'app-organigrama',
  standalone: false,
  templateUrl: './organigrama.html',
  styleUrls: ['./organigrama.css']
})
export class Organigrama implements OnInit {
zoom: number = 1;
faLogout = faRightFromBracket;
faCamera = faCamera;
 isVisible = false;
cerrarsesion = false
faUser = faUser
activo =1

handle(n : any){
this.activo = n

}


handlecerrar(){
  localStorage.clear()
  this.cerrarsesion = !this.cerrarsesion
}


  setDefaultImage(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = "user.jpg" ;
  }



zoomIn() {
  this.zoom += 0.1;
}

zoomOut() {
  this.zoom = Math.max(0.1, this.zoom - 0.1); 
}



scrollY = 0;
scrollX =0 

@HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollY = window.scrollY || window.pageYOffset;
    
    this.scrollX= window.scrollX || window.pageXOffset;
   
  }




getImageUrl(imagen: string): string {
  return imagen ? `http://localhost:3100/${imagen}` : 'http://localhost:3100/user.jpg';
}

  arbol: CustomTreeNode = {
    children: [],
    hideChildren: false,
  };

  nodos: CustomTreeNode[] = [];
  empleados: any[] = [];
  sal = false;

  jj(opcion: any) {
    console.log(opcion);
    console.log("entro");
    this.sal = opcion;
  }

  nombremodal: any = "";
  imagenmodal: any = "";
  puestomodal: any = "";
  numero_empleado: any = "";
  telefono: any = "";
  nss: any = "";
  edad: any = 0;

  cambiar(datos: any) {
    console.log(datos);
    this.nombremodal = datos.nombre;
    this.telefono = datos?.empleado?.telefono;
    this.nss = datos?.empleado?.nss;
    this.edad = datos?.empleado?.edad;
    this.imagenmodal = datos.imagen;
    this.puestomodal = datos.empleado.puestoData.nombre;
    this.numero_empleado = datos.empleado.id_hijo;
    console.log(this.telefono, this.edad, this.nss);
  }

  constructor(private servicio: Datos) {}

  ngOnInit(): void {
    this.servicio.empleadosort().subscribe((empleadosData) => {
      this.servicio.departamentosorg().subscribe((departamentosData) => {
        this.empleados = [...empleadosData, ...departamentosData];
        this.crearNodos();
        this.cargarNodosRaiz();
        console.log('Árbol inicial armado:', this.arbol);
      });
    });
  }

  crearNodos(): void {
    this.nodos = [];
    for (const empleado of this.empleados) {
      console.log(empleado);
      this.nodos.push({
        nombre: empleado.nombre,
        imagen: empleado.imagen,
        name: empleado.nombre,
        label: empleado.nombre,
        empleado,
        children: [],
        hideChildren: false,
        hijosVacios: false
      });
    }
  }

  
  cargarNodosRaiz(): void {
    this.arbol.children = [];
    
 
    const nodosRaiz = this.nodos.filter(n => !n.empleado.id_padre || n.empleado.id_padre === 1);

    if (nodosRaiz.length === 0) {
      const nodoRaiz: CustomTreeNode = {
        nombre: 'Raíz',
        name: 'Raíz',
        label: 'Raíz',
        children: [],
        hideChildren: false,
        hijosVacios: true
      };
      this.arbol.children.push(nodoRaiz);
    } else {
     
      nodosRaiz.forEach(nodo => {
        nodo.hijosVacios = false;
      
        const tieneHijos = this.nodos.some(n => n.empleado.id_padre === nodo.empleado.id_hijo);
        if (tieneHijos) {
       
          nodo.children = [];
        }
      });
      this.arbol.children.push(...nodosRaiz);
    }
  }

 
cargarHijos(nodo: CustomTreeNode): void {
  console.log('Clic en botón de hijos para:', nodo);

  // Si ya fueron cargados, entonces "Regresar" → ocultar hijos
  if (nodo.hijosVacios) {
    nodo.children = [];
    nodo.hijosVacios = false;
    return;
  }

  
  const hijosEncontrados = this.nodos.filter(n => 
    n.empleado.id_padre === nodo.empleado.id_hijo
  );

  console.log('Hijos encontrados:', hijosEncontrados);

  if (hijosEncontrados.length > 0) {

    nodo.children = [];

  
    hijosEncontrados.forEach(hijo => {
      const tieneNietos = this.nodos.some(n => n.empleado.id_padre === hijo.empleado.id_hijo);
      
      const hijoCopia: CustomTreeNode = {
        nombre: hijo.nombre,
        imagen: hijo.imagen,
        name: hijo.nombre,
        label: hijo.nombre,
        empleado: hijo.empleado,
        children: [],
        hideChildren: false,
        hijosVacios: false
      };

      if (tieneNietos) {
        hijoCopia.children = [];
      }

      nodo.children!.push(hijoCopia);
    });


    nodo.hijosVacios = true;
  } else {
    nodo.children = [];
    nodo.hijosVacios = true;
  }

  console.log('Nodo después de cargar hijos:', nodo);
}



  alHacerClic(nodo: any): void {
    console.log('Click en nodo:', nodo);
    
    
    if (!nodo.hijosVacios) {
      this.cargarHijos(nodo);
    }

    nodo.hideChildren = !nodo.hideChildren;
  }

  v(nodo: any) {
    console.log('Función v ejecutada:', nodo);
    this.alHacerClic(nodo);
  }

 
  tieneHijos(nodo: any): boolean {
    if (!nodo.empleado) return false;
    
    
    if (nodo.children && nodo.children.length > 0) {
      return true;
    }
    
  
    if (!nodo.hijosVacios) {
      return this.nodos.some(n => n.empleado.id_padre === nodo.empleado.id_hijo);
    }
    
    return false;
  }
}