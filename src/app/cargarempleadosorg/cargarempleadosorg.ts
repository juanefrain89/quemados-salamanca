import { Component, OnInit } from '@angular/core';
import { Datos } from '../datos';

@Component({
  selector: 'app-cargarempleadosorg',
  standalone: false,
  templateUrl: './cargarempleadosorg.html',
  styleUrl: './cargarempleadosorg.css'
})
export class Cargarempleadosorg implements OnInit
{
constructor(private servicio : Datos){}



ngmodeldepartamento : any =""
actividades : any=""
telefono : any =""
nombre  : any=""
edad : any
nss : any =""
puesto  : any
padre : any 
x :any[]=[]
yaAgregados: Set<number> = new Set();
imagen : any =""
toastr = false
buscarempleadospordepa() {
  this.x = [];
  let departamento = this.departamentos.find(e => e.id_hijo == this.ngmodeldepartamento)
  this.x.push(departamento)
   this.yaAgregados = new Set();
  this.agregarSubordinados(this.ngmodeldepartamento);


  for (let index = 0; index < this.empleados.length; index++) {
      const element = this.empleados[index];
      if (element.id_padre == this.ngmodeldepartamento) {
        this.x.push(element)
      }
   
      
    
  }
   for (let index = 0; index < this.x.length; index++) {
    const element = this.x[index];
    this.agregarSubordinados(element.id_hijo)
   }
}


agregarSubordinados(idPadre: number) {
  for (let empleado of this.empleados) {
    if (empleado.id_padre === idPadre && !this.yaAgregados.has(empleado.id_hijo)) {
      this.x.push(empleado);
      this.yaAgregados.add(empleado.id_hijo); // marcar como agregado
      this.agregarSubordinados(empleado.id_hijo);
    }
  }
}





    toast(number : 1){
      this.toastr = true

      setTimeout(()=>{
this.toastr = false
      },3000)
     
    }






  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;

   
    if (input.files && input.files.length > 0) {
      const file = input.files[0]; 

     
      const MAX_FILE_SIZE = 5 * 1024 * 1024;
      if (file.size > MAX_FILE_SIZE) {
        alert(
          'El archivo es demasiado grande. El tamaño máximo permitido es 5MB.'
        );
        return;
      }

     
      const permitidoTipo = /image\/(jpeg|jpg|png)/;
      if (!permitidoTipo.test(file.type)) {
        alert('Solo se permiten imágenes en formato JPG, JPEG o PNG.');
        return; 
      }

      const leer = new FileReader(); 
    
      leer.onload = () => {
        const base64Image = leer.result as string;
      

      
     
        this.imagen = base64Image

     
      
      };

     
      leer.readAsDataURL(file);
    }
  }












camposfaltantes : any[]=[]

enviar(){
  this.camposfaltantes =[]

if (this.actividades.length < 2) {
this.camposfaltantes.push(" actividades")

}
if (!this.padre) {
  this.camposfaltantes.push(" jefe")
  
}
if (this.nombre.length < 5) {
    this.camposfaltantes.push(" nombre")
}

if (!this.puesto) {
    this.camposfaltantes.push(" Puesto")
}
if (this.imagen.length <5) {
  this.camposfaltantes.push(" Imagen")
}



if (this.camposfaltantes.length >= 1) {
  alert(this.camposfaltantes)
  return
}
  this.servicio.empleadosortcrear({actividades : this.actividades , id_padre : this.padre, nombre : this.nombre, puesto:this.puesto, imagen : this.imagen, nss : this.nss, telefono : this.telefono , edad : this.edad}).subscribe(
    (e)=>{
      console.log(e);
      this.toast(1)
      this.actividades =""
      this.padre = null
      this.nombre =""
      this.puesto =""
      this.imagen = null
      this.telefono = ""
    }
  )
}

departamentos : any[] =[]
empleados : any[]=[]
  ngOnInit(): void {
    this.servicio.departamentosorg().subscribe(
      (e)=>{
        this.departamentos = e
        this.servicio.empleadosort().subscribe(
          (e1)=>{
            this.empleados = e1
          }
        )
      }
    )
  }
}
