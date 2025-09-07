import { Component } from '@angular/core';
import * as XLSX from "xlsx"
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFingerprint,  } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { startOfDay, endOfDay, differenceInCalendarDays, startOfMonth, endOfMonth, startOfWeek, subDays, setWeek, endOfWeek, parseISO, addWeeks, startOfISOWeek, endOfISOWeek, getISOWeek, getYear } from 'date-fns';
import { Datos } from '../datos';
import { OnInit } from '@angular/core';
import { parse, format, differenceInMinutes, differenceInBusinessDays , interval, addDays } from 'date-fns';
import { NgxPermissionsService } from 'ngx-permissions';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Docx } from '../docx';
import { FormsModule } from '@angular/forms';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
interface Empleado {
  nombre: string;
  imagen : string;
  telefono: number | null;
  nss: string;
  turno: number | null;
  numero_empleado: string;
  curp: string;
  ingreso: Date;
  tarjeta: string;
  departamento: string;
  puesto: string;
  area: string;
  cup: string;
  escolaridad : string,
  sueldo : number,
  sexo : string,
calle : string,
colonia : string,
ciudad : string,
rfc : string,
estado_civil : string,
nacimiento : Date,
dom_beneficiario: string,
tel_beneficiario : string,
correo : string,
parada : string,
ruta : string,
contacto : string,
tel_emergencia : string,
parentesco : string,
contratacion : string,
tel_reclutado : string,
cp_fiscal : string,
beneficiario : string;
foto : any,
apellido_materno :string
  apellido_paterno :string
}

@Component({
  selector: 'app-ejemplo',
  standalone: false,
  templateUrl: './ejemplo.html',
  styleUrl: './ejemplo.css'
})







// lista de turno y en puesto a la hora de agg empleado, 

//  fotos empleados
//  agregar campos ala bd y front de empleados

export class Ejemplo implements OnInit  {
 faArrowLeft = faArrowLeft;
 basura = faTrash
 faPenToSquare = faPenToSquare
url = "http://10.10.227.224:3100/uploads/evidencia2"
  tabactivo = 1
situacion : any=""
imagen : any =""


arreditar : any[]=[]
editarempleado = false
handleEditarempleado(n : any){

this.editarempleado = !this.editarempleado
console.log(n);

}



confirmareditar(n : any){
   this.arreditar = n
  this.servicio.editarempleado(this.arreditar).subscribe(
    (e)=>{
console.log(e);
this.handleCancel()
this.editarempleado = false
this.toast(1)

    },
    (error)=>{
      alert("Hubo un error")
    }
  )
  
}

handletab(n : any){

  this.tabactivo = n
}
usuario = localStorage.getItem("usuario")
faMagnifyingGlass = faMagnifyingGlass
faDownload = faDownload;
bb(){
  console.log(this.empleados2);
  
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
      

      
     
    this.empleados2.imagen = base64Image

     
      
      };

     
      leer.readAsDataURL(file);
    }
    console.log(this.imagen);
    
  }



cantidadvacacion : any
dia : any
    activo = 1
    modal = false
  semanaSeleccionada : any
    numero_empleado : any
  binding =  { startDate: Date, endDate: Date };
  diaextra : any
  disable2 = true
  opciones : any
modalinsidencias = false  
modalbaja = false
  cantidad_horasExtras : any
  
  obk =[
    {precio : 2, id :1 },
     {precio : 4, id :2},
      {precio : 6 , id : 3}
  ]

nameexcel = "juan.xlsx"





handlefoto(){}
 hola= ()=>{

 }




exportarexcel() {
  let elemento = document.querySelector(".table1") as HTMLElement;

  // Crea la hoja desde la tabla HTML
  const trabajo: XLSX.WorkSheet = XLSX.utils.table_to_sheet(elemento);

  XLSX.utils.sheet_add_aoa(trabajo, [["Hola Mundo"]], { origin: "A1" });

  // Crea el libro y añade la hoja
  const book: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(book, trabajo, "Sheet1");

  // Exporta el archivo
  XLSX.writeFile(book, this.nameexcel);
}




  formulario: FormGroup; 
faClock = faClock
faUser = faUser
faFingerprint =faFingerprint
 isVisible = false;
cerrarsesion = false
longitud = 20
 active = 1

faRightFromBracket = faRightFromBracket
desabilitado = true
campofaltante1 :any[]= []
campofaltante2 :any[]= []

faLogout = faRightFromBracket;


 empleados2: Empleado = {
  nombre: '',
  imagen :"",
  telefono: null,
  nss: '',
  turno: null,
  numero_empleado: '',
  curp: '',
  ingreso: new Date(),           
  tarjeta: '',
  departamento: '',
  puesto: '',
  area: '',
  cup: '',
  escolaridad: '',
  sueldo: 0,
  sexo: '',
  calle: '',
  colonia: '',
  ciudad: '',
  rfc: '',
  estado_civil: '',
  nacimiento: new Date(),        // Igual, puedes poner `null` si la propiedad lo permite
  dom_beneficiario: '',
  tel_beneficiario: '',
  correo: '',
  parada: '',
  ruta: '',
  contacto: '',
  tel_emergencia: '',
  parentesco: '',
  contratacion: '',
  tel_reclutado: '',
  cp_fiscal: '',
  beneficiario: '',
  foto : "",
  apellido_materno :"",
  apellido_paterno :""
};





handlecerrar(){
  localStorage.clear()
  this.cerrarsesion = !this.cerrarsesion
}





exportar(){
  this.servicio.exportartodasasistencias().subscribe(
    (datos)=>{
      console.log("bien");
      this.toast(1)
      
    },
    (er)=>{
      console.log(er);
       
    }
  )
}




name : any
numero_empleado2 : any

//#region filtros
filtros(){
console.log(this.name);
console.log(this.active);
 

  if (this.active == 1) {
    if (this.name.length > 0) {
      this.paginacionpares = this.pares.filter(p => p.userName?.toLowerCase().includes(this.name.toLowerCase()) ||p.empleado.nombre?.toLowerCase().includes(this.name.toLowerCase()) )
 
    
    }else{
      this.paginacionpares = this.pares.slice(this.fin2- this.longitud2, this.fin2)
    }
  }
if (this.active ==2 ) {
   if (this.name.length > 0) {
  this.paginacionsemana = this.porsemana.filter(p => p.nombre?.toLowerCase().includes(this.name.toLowerCase()))
 }else{
  console.log("fin",this.fin , "long", this.longitud);
  
   this.paginacionsemana = this.porsemana.slice((this.fin-this.longitud), this.fin);
 }
}


}

filtrohorasextras2 = "3"

filtroHorasextras(){
  console.log("entro al filtro 3");
    console.log(this.filtrohorasextras2);
    
  if (this.active ==1) {
if(this.filtrohorasextras2 != "3"){
  if (this.filtrohorasextras2 == "1") {
   
    this.paginacionpares = this.pares.filter(p => p.juan != "N/A")
  }if(this.filtrohorasextras2 == "2"){
this.paginacionpares = this.pares.filter(p => p.juan == "N/A")
  }

}else{
     this.paginacionpares = this.pares.slice(this.fin2- this.longitud2, this.fin2)
}
    
  }
}


filtroNempleado(){
  this.name = ""
console.log("pares",this.pares);

if (this.active == 1) {
  console.log("entro", this.active);
  
  if (this.numero_empleado2 > 0) {
    this.paginacionpares = this.pares.filter(p => p.userId?.toString().toLowerCase().includes(this.numero_empleado2.toString().toLowerCase()))
  
  }else{
      this.paginacionpares = this.pares.slice(this.fin2- this.longitud2, this.fin2)
  }
  
}


if (this.active == 2) {
  if(this.numero_empleado2 > 0){
  console.log(this.numero_empleado2);
  console.log(this.porsemana);
  
 this.paginacionsemana = this.porsemana.filter(p => p.id?.toString().toLowerCase().includes(this.numero_empleado2.toString().toLowerCase()))
}else{
   this.paginacionsemana = this.porsemana.slice((this.fin-this.longitud), this.fin);
 
}
}
  

}






insidenciasarr :any=[]

handlemodalinsidencias(datos : any){
  console.log(datos);
this.insidenciasarr = datos  
  this.showModal(2 ,1)
}

accion : any

numeroDelempleadoEliminar : any
showmodaleliminar( numero_empleado : any){
  this.numeroDelempleadoEliminar = numero_empleado
this.showModal(3,1)
}

//#region modales
  showModal(n : any , accion : any): void {
    this.accion = accion
    if (n == 1) {
     this.isVisible = true;     
    }else if(n == 2){
this.modalinsidencias = true
    }else if (n == 3){
      this.modalbaja = true
      console.log("modal",this.modalbaja);
      
    }
 
      window.scrollTo({ top: 0, behavior: 'smooth' });
       document.body.style.overflow = 'hidden'; 
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    this.editarempleado = false
    console.log('Button cancel clicked!');
    this.isVisible = false;
    this.modalbaja = false
    this.modalinsidencias = false
    this.numeroDelempleadoEliminar = null
      document.body.style.overflow = ''; 
  }
  
  
borradobien = false
confirmarbaja(){
  this.servicio.eliminarempleado(this.numeroDelempleadoEliminar).subscribe(
    (bien)=>{
      this.borradobien = true
this.toast(3)

    },
    (mal)=>{
      alert("no se elimino")
      this.borradobien = false
    }
  )
 
  if (this.borradobien == true) {

console.log(this.paginacionsemana);

  }
  
}

cancelarbaja(){
  this.handleCancel()
}

handlextrasemana(){
  
  const inicio = startOfWeek(this.diaextra + "T02:00:00",  { weekStartsOn: 1 })
  const fin = endOfWeek(this.diaextra+  "T02:00:00",  { weekStartsOn: 1 })

  this.obtenerTiempoextra(inicio, fin)

  
  
}

horasextrassemanal =0



traerturnos = true
  turnos : any[]=[]
  obtenerturnos(){
    console.log("trago turnos");
    
this.servicio.obtenerturnos().subscribe(
  (e)=>{
    this.turnos = e
  },
  (error)=>{
    console.log(error);
    
  }
)
  }
  
  handle(n : any){
   // console.log("entro");
    
this.active = n
console.log(this.active);
if (this.active == 3 && this.traerturnos == true) {
  this.obtenerturnos()
  this.traerturnos = false
}

  }











//#region paginacion

index1 = 1
index2 = 1
longitud2 = 20
verificar2atras = true
fin = this.index1 * this.longitud;
fin2 = this.index2 * this.longitud2



siguienteSemana1(){
  this.index2 = this.index2 +1
  this.verificar2atras = false
  this.fin2 = this.index2 * this.longitud2
  this.paginacionpares = this.pares.slice(this.fin2-this.longitud2, this.fin2)
  if (this.pares.length <= this.fin2) {
    this.verificar2sig = true
  }
  if (this.index2 == 1) {
    this.verificar2atras = true
  } else {
this.verificar2atras = false    
  }
}

anteriorSemana1(){
  this.verificar2sig = false
  this.index2 = this.index2 - 1
  this.fin2 = this.longitud2 * this.index2
  this.paginacionpares = this.pares.slice(this.fin2 - this.longitud2, this.fin2)
  if (this.index2 == 1) {
    this.verificar2atras = true
  }else{
    this.verificar2atras = false
  }
}


siguienteSemana() {

   this.index1= this.index1+ 1
  this.verificar1atras = false


   this.fin = this.index1 * this.longitud;

  this.paginacionsemana = this.porsemana.slice(this.fin -this.longitud, this.fin);
  console.log(this.paginacionsemana.length);
  
  if (this.porsemana.length <= this.fin) {
    this.verificar1sig = true
  }
   if (this.index1 === 1) {
  this.verificar1atras = true
  }else{
    this.verificar1atras = false
  }
  
  
 
}


verificar1atras = true
verificar1sig = false
verificar2sig = false
anteriorSemana() {
 
this.verificar1sig = false
  this.index1--; // Retrocede una página

  
  const fin = this.index1 * this.longitud;

  this.paginacionsemana = this.porsemana.slice(fin -this.longitud, fin);
   if (this.index1 === 1) {
  this.verificar1atras = true
  }else{
    this.verificar1atras = false
  }
}

//#endregion

  
  
  










//#region añadir empleado+

  /**   
  anadir(){

this.campofaltante2 =[]

if (this.opciones == 0 || this.opciones == undefined) {
  this.campofaltante2.push("Numero empledo")
}

if (this.dia == undefined || this.dia <= 0) {
  this.campofaltante2.push("dia")
}

if (this.campofaltante2.length > 0) {
  alert("falta los campos "+  this.campofaltante2)
  return
}


    let obj = this.empleado.find(e => e.id == this.opciones)

    
    let enviar = {dia : this.dia, id : this.opciones, nombre : obj.nombre, semana : this.semanaSeleccionada}
    this.servicio.add(enviar).subscribe(
      (datos)=>{
        
          this.isVisible = false
       this.handlefecha()
       
        this.toast(1)
          document.body.style.overflow = ''; 
      },
      ((e)=>{
        console.log(e);
        
      })
    )
  }
  */
  

campofaltantes3 :any[]=[]
actualizarcantidadvacaciones(){
  this.campofaltantes3 =[]
  if (this.opciones == 0 || this.opciones == undefined) {
  this.campofaltantes3.push("Numero empledo")
}

  if (this.cantidadvacacion == 0 || !this.cantidadvacacion) {
    this.campofaltantes3.push("cantidad de dias")
  }

  if (this.campofaltantes3.length > 0) {
    alert("falta agregar " +  this.campofaltantes3)
    return
  }

  this.servicio.actualizarcantidadvacaciones({numero_empleado : this.opciones,  cantidad_dias : this.cantidadvacacion}).subscribe(
    (bien)=>{
      console.log(bien);
       this.isVisible = false
        this.toast(1)
          let on = this.empleado.find(e => e.id == this.opciones)
          on.vacacionesdisponibles = this.cantidadvacacion
           this.kk = this.empleado.filter((e : any) => e.vacacionesdisponibles > 0)    
          document.body.style.overflow = ''; 
          this.opciones =null
        
          this.cantidadvacacion = null

    },
    (er)=>{
      console.log(er);
      
    }
  )
}


anadir(){
  
let departamentoseleccionado = this.empleado.find(e => e.id == this.opciones)?.departamento

let departamentos_deeseempleado = this.empleado.filter(e => e.departamento == departamentoseleccionado)


console.log(departamentos_deeseempleado.length, "cantidad");
let vacacionesenesedia =0 



  this.campofaltante2 =[]

if (this.opciones == 0 || this.opciones == undefined) {
  this.campofaltante2.push("Numero empledo")
}

if (this.dia == undefined || this.dia <= 0) {
  this.campofaltante2.push("dia")
}

if (this.situacion.length < 5) {
    this.campofaltante2.push("situacion")
}

if (this.campofaltante2.length > 0) {
  alert("falta los campos "+  this.campofaltante2)
  return
}




let obj ={
  deviceUserId : this.opciones,
  recordTime :new Date(this.dia + "T02:00:00"),
  descripcion : this.situacion
}


for (let index = 0; index < departamentos_deeseempleado.length; index++) {
  const element =departamentos_deeseempleado[index];
  for (let index = 0; index < element.vacacionesEmpleados.length; index++) {
    const element2 = element.vacacionesEmpleados[index]
console.log("e", element2);

    if (this.dia == element2.recordTime) {
      vacacionesenesedia +=1
    }
    
  }
}

if (vacacionesenesedia >=5) {
  alert("Fecha no disponible por limite maximo de personas este dia")
  return
}


this.servicio.vacacionescrear(obj).subscribe(
  (datos)=>{
console.log(datos);
   this.isVisible = false
   let quitar = this.kk.find(e =>String(e.id) == this.opciones)
let b = this.empleado.find(e =>String(e.id) == this.opciones)
             console.log(quitar, "quitar", this.opciones, this.kk);
          if(quitar){
            
            b.vacacionesdisponibles -=1
               this.kk = this.empleado.filter((e : any) => e.vacacionesdisponibles > 0) 
           this.kk =  this.kk.filter(e => e.vacacionesdisponibles > 0)
          }
       this.handlefecha()
       
        this.toast(1)
          document.body.style.overflow = ''; 
          this.opciones =null


  },
  (error)=>{
    console.log(error);
    
  }
)


}
   personas = [
    { id: 1, nombre: "Juan", edad: 25 },
    { id: 2, nombre: "María", edad: 30 },
    { id: 3, nombre: "Pedro", edad: 22 },
    { id: 4, nombre: "Ana", edad: 28 },
    { id: 5, nombre: "Luis", edad: 35 },
    { id: 6, nombre: "Sofía", edad: 26 },
    { id: 7, nombre: "Carlos", edad: 31 },
    { id: 8, nombre: "Lucía", edad: 24 },
    { id: 9, nombre: "Diego", edad: 27 },
    { id: 10, nombre: "Valeria", edad: 29 },
    { id: 11, nombre: "Miguel", edad: 32 },
    { id: 12, nombre: "Camila", edad: 23 },
    { id: 13, nombre: "Jorge", edad: 34 },
    { id: 14, nombre: "Fernanda", edad: 28 },
    { id: 15, nombre: "Ricardo", edad: 36 },
    { id: 16, nombre: "Daniela", edad: 21 },
    { id: 17, nombre: "Héctor", edad: 33 },
    { id: 18, nombre: "Paola", edad: 27 },
    { id: 19, nombre: "Ángel", edad: 26 },
    { id: 20, nombre: "Gabriela", edad: 30 },
    { id: 21, nombre: "Tomás", edad: 29 },
    { id: 22, nombre: "Alejandra", edad: 22 },
    { id: 23, nombre: "Iván", edad: 31 },
    { id: 24, nombre: "Karla", edad: 25 },
    { id: 25, nombre: "Emilio", edad: 28 },
    { id: 26, nombre: "Natalia", edad: 24 },
    { id: 27, nombre: "Rodrigo", edad: 33 },
    { id: 28, nombre: "Renata", edad: 23 },
    { id: 29, nombre: "Mauricio", edad: 35 },
    { id: 30, nombre: "Patricia", edad: 26 },
     { id: 31, nombre: "Patricia", edad: 26 }
  ];
  
  
  
  personas2 = this.personas.slice(0, 10)
  
  index = 1
  leng = 10
  disable = false
  

  
verificacionempleados : any[]=[]


async nuevoempleado() {
  this.verificacionempleados = [];
  console.log(this.empleados2);

  if (this.empleados2.nombre.length < 2) this.verificacionempleados.push("Nombre");
  if (this.empleados2.telefono == null || this.empleados2.telefono < 7) this.verificacionempleados.push("Teléfono");
  if (this.empleados2.nss.length < 5) this.verificacionempleados.push("NSS");
  if (this.empleados2.turno == null) this.verificacionempleados.push("Turno");
  if (this.empleados2.numero_empleado.length < 2) this.verificacionempleados.push("Número empleado");
  if (this.empleados2.curp.length < 18) this.verificacionempleados.push("CURP");
  if (!this.empleados2.ingreso) this.verificacionempleados.push("Fecha ingreso");
  if (this.empleados2.tarjeta.length < 10) this.verificacionempleados.push("Tarjeta");
  if (this.empleados2.departamento.length < 1) this.verificacionempleados.push("Departamento");
  if (this.empleados2.puesto.length < 1) this.verificacionempleados.push("Puesto");
  if (this.empleados2.area.length < 1) this.verificacionempleados.push("Área");
  if (this.empleados2.cup.length < 3) this.verificacionempleados.push("CUP");

  // Validaciones para los campos nuevos
  if (this.empleados2.escolaridad.length < 3) this.verificacionempleados.push("Escolaridad");
  if (this.empleados2.sueldo <= 0) this.verificacionempleados.push("Sueldo");
  if (this.empleados2.sexo.length === 0) this.verificacionempleados.push("Sexo");
  if (this.empleados2.calle.length < 3) this.verificacionempleados.push("Calle");
  if (this.empleados2.colonia.length < 3) this.verificacionempleados.push("Colonia");
  if (this.empleados2.ciudad.length < 3) this.verificacionempleados.push("Ciudad");
  if (this.empleados2.rfc.length < 10) this.verificacionempleados.push("RFC");
  if (this.empleados2.estado_civil.length < 3) this.verificacionempleados.push("Estado Civil");
  if (!this.empleados2.nacimiento) this.verificacionempleados.push("Fecha nacimiento");
  if (this.empleados2.dom_beneficiario.length < 3) this.verificacionempleados.push("Domicilio beneficiario");
  if (this.empleados2.tel_beneficiario.length < 7) this.verificacionempleados.push("Tel. beneficiario");
  if (this.empleados2.correo.length < 5 || !this.empleados2.correo.includes('@')) this.verificacionempleados.push("Correo electrónico");
  if (this.empleados2.parada.length < 1) this.verificacionempleados.push("Parada");
  if (this.empleados2.ruta.length < 1) this.verificacionempleados.push("Ruta");
  if (this.empleados2.contacto.length < 3) this.verificacionempleados.push("Nombre contacto emergencia");
  if (this.empleados2.tel_emergencia.length < 7) this.verificacionempleados.push("Tel. emergencia");
  if (this.empleados2.parentesco.length < 3) this.verificacionempleados.push("Parentesco");
  if (this.empleados2.contratacion.length < 3) this.verificacionempleados.push("Tipo contratación");
  if (this.empleados2.tel_reclutado.length < 7) this.verificacionempleados.push("Tel. reclutado");
  if (this.empleados2.cp_fiscal.length < 4) this.verificacionempleados.push("CP fiscal");
  if (this.empleados2.beneficiario.length < 3) this.verificacionempleados.push("Beneficiario");
if (this.empleados2.apellido_materno.length < 3) this.verificacionempleados.push("apellido materno")
  if (this.empleados2.apellido_paterno.length < 3) this.verificacionempleados.push("apellido paterno")
 if (this.verificacionempleados.length > 0) {
    alert("Campos faltantes o incorrectos:\n" + this.verificacionempleados.join('\n'));
  } else {
    this.servicio.crearempleado(this.empleados2).subscribe(
      (datos) => {
        console.log(datos);
        this.toast(1);
        this.empleados2 = {
          nombre: '',
          imagen:"",
          telefono: null,
          nss: '',
          turno: null,
          numero_empleado: '',
          curp: '',
          ingreso: new Date(),
          tarjeta: '',
          departamento: '',
          puesto: '',
          area: '',
          cup: '',
          escolaridad: '',
          sueldo: 0,
          sexo: '',
          calle: '',
          colonia: '',
          ciudad: '',
          rfc: '',
          estado_civil: '',
          nacimiento: new Date(),
          dom_beneficiario: '',
          tel_beneficiario: '',
          correo: '',
          parada: '',
          ruta: '',
          contacto: '',
          tel_emergencia: '',
          parentesco: '',
          contratacion: '',
          tel_reclutado: '',
          cp_fiscal: '',
          beneficiario: '',
          foto :"",
          apellido_materno :"",
          apellido_paterno:""
          
        };
         this.todoslosempleados()
        this.obtenerEmpleados()
        this.handlefecha()
      },
      (e) => {
       console.log("❌ Error en frontend:", e);

  const mensaje = e.error?.mensaje || 'Error desconocido';
  const tipo = e.error?.error || ''; 
  const detalle = e.error?.detalle || '';

  alert(`Hubo un error:\n${mensaje}\nTipo: ${tipo}\nDetalle: ${detalle}`);
      }
    );
  }
}

  
















//#endregion
funcionforporsemana(){
    for (let index = 0; index < this.porsemana.length; index++) {
    const element = this.porsemana[index];
   let diasTurno = Object.values(element.infototal.datosTurno).filter(e => typeof e === 'boolean');
    let diasasistidos2 =  Object.values(element.dias)
let descansolaborado =0   

   for (let index = 0; index < diasasistidos2.length; index++) {
    const element = diasasistidos2[index];
const element2 = diasTurno[index]


    if (!element2  && element == true) {
      descansolaborado++
console.log("entro al if");
     
    }
  
   }
    element.descansolaborado = descansolaborado  
       const diaasistidos = Object.values(element.dias).filter(e => e == true).length
    let por =   ( diaasistidos/element.infototal.datosTurno.dias ) * 100
    if(por > 100){
      por = 100
     
    }
     element.porcentajeasistencias = por
   element.diasAsistidos = diaasistidos
  element.diasJornada = element.infototal.datosTurno.dias
if (element.infototal.datosTurno.dias  < diaasistidos) {
  element.diasextras = diaasistidos - element.infototal.datosTurno.dias
}
else if(element.infototal.datosTurno.dias  == diaasistidos){
  console.log("nada");
  
}else{
element.faltas = element.infototal.datosTurno.dias - diaasistidos 
}
    
  }
}

  sig(){
  
    
  this.index = this.index +1
  this.fin = this.index * this.leng
    this.personas2= this.personas.slice((this.fin - this.leng), this.fin)
  
  if (this.personas.length <= this.fin) {
  this.disable = true  
  }
  if (this.index == 1) {
  this.disable2 = true  
  }else{
    this.disable2 = false
  }
  }
  


  
  ante(){
    this.index = this.index -1
  let fin = this.index * this.leng
    this.personas2= this.personas.slice((fin - this.leng), fin)
    
  
  if (this.index == 1) {
  this.disable2 = true  
  }else{
    this.disable2 = false
  }
  
  
  if (this.personas.length > fin) {
  this.disable = false  
  }
  
  }
  
  
  tiempoextra :any[] =[]
  
  obtenerTiempoextra(fechaInicio : any, fechaFin : any){
    this.servicio.obtenerTiempoExtra({fechaInicio, fechaFin}).subscribe(
     (datos)=>{
  this.tiempoextra = datos

  console.log("tiempo extra", datos);
  
      
     } 
    )
  }
  
  
  
  async fun2(){
 //   await this.todoslosempleados()
      this.obtenerTiempoextra(this.binding.startDate, this.binding.endDate)
    this.cargarDesdePares(this.binding.startDate, this.binding.endDate)
  }
  async fun() {
   //  await this.todoslosempleados()
     this.obtenerTiempoextra(this.binding.startDate, this.binding.endDate)
   this.cargar(this.binding.startDate, this.binding.endDate)
  
  }
  
  
  
  errorback = ""
  
  agregarTiempoextra(){
  
    


  this.campofaltante1 =[]
  


  if (this.diaextra == undefined ) {
    console.log(this.diaextra);
    
   this.campofaltante1.push("dia")
  }
  if (this.opciones <= 0 || this.opciones == undefined ) {
    this.campofaltante1.push(" numero empleado ")
  }
if (this.cantidad_horasExtras <= 0 || this.cantidad_horasExtras == undefined ) {
this.campofaltante1.push("horas extras")
}
  if (this.campofaltante1.length > 0) {
     alert("faltan los campos "+this.campofaltante1)
    return
   
  }
    
    this.servicio.mandarTiempoExtra({fecha : this.diaextra, horas : this.cantidad_horasExtras, id_empleado : this.opciones }).subscribe(
      (datos)=>{
        console.log(datos);
        
       this.isVisible = false
       console.log("entros");
       
        this.toast(1)
        this.fun2()
         document.body.style.overflow = ''; 
      },
      (error)=>{
        console.log("errore", error);
     this.errorback = error.error?.message || "Error desconocido"
       this.toast(2)
    
      }
    )
    
  }
  
  
  handlemodal(usuarios : any){
    this.modal = !this.modal
    this.numero_empleado = usuarios.id
  }
  
  
  
  
  cv(){
  
   const c = new Date("2025-07-08"); // ya es un Date válido
  
    // Asegúrate que this.diaextra sea string como "08-07-2025"
    const fechaExtra = new Date(this.diaextra);
  
  
    
  }
  
  diasSemana = [
    { nombre: 'Lunes', seleccionado: false },
    { nombre: 'Martes', seleccionado: false },
    { nombre: 'Miércoles', seleccionado: false },
    { nombre: 'Jueves', seleccionado: false },
    { nombre: 'Viernes', seleccionado: false },
    { nombre: 'Sábado', seleccionado: false },
    { nombre: 'Domingo', seleccionado: false }
  ];
  
  


  //#region sincronizar datos
  sincronizar(){
    this.servicio.sincronizar1().subscribe((da)=>{
      console.log(da);
      
    })
  
    this.servicio.sincronizar2().subscribe((datos)=>{console.log(datos);
    })
  }
  
  
 anio: any;
 semana: any;

  handlefecha(){
   
const year = new Date().getFullYear()
let fecha = new Date(year, 0, 1)


if (this.semanaSeleccionada) {
  // Si el input week tiene valor
  [this.anio, this.semana] = this.semanaSeleccionada.split("-W");
} else {
  // Semana actual
  const hoy = new Date();
  this.anio = String(getYear(hoy));
  this.semana = String(getISOWeek(hoy)).padStart(2, "0"); // siempre 2 dígitos
}

const semananum = parseInt(this.semana, 10);
const primeraSemana = parseISO(`${this.anio}-01-04`);

const fechaSemana = addWeeks(primeraSemana, semananum - 1);

const inicio = startOfISOWeek(fechaSemana);
const fin = endOfISOWeek(fechaSemana);
const inicio2 = format(inicio, "yyyy-MM-dd")
let fin2 = format(fin, "yyyy-MM-dd")
console.log("fin", fin2);

 


      this.servicio.semana(this.semanaSeleccionada).subscribe(
        (datos)=>{
  console.log(datos);
  
    let diasasistidos =0

         
          
  this.porsemana = datos.empleadosConAsistencias
  let jefearea : any =0
  if(localStorage.getItem("departamento")){
jefearea = localStorage.getItem("departamento") 
this.porsemana = this.porsemana.filter(e => parseInt(e.infototal.departamento) == jefearea)
 console.log("datos", this.porsemana);
}
 this.funcionforporsemana()
  
   this.paginacionsemana  = this.porsemana.slice(0, this.longitud)


  
  
        }
      )
  
  }
  //#endregion
   hora = "8:00";
  horadate =parse(this.hora, "H:mm", new Date())
  porsemana : any[]=[]
  paginacionsemana  = this.porsemana.slice(0, this.longitud)
    handleactivo(numero : any){
    

      this.name = ""
      this.numero_empleado2 = ""
     this.filtros()
     this.filtroNempleado()
      this.activo = numero
   
      if (numero== 2) {
      this.obtenerEmpleados()
    }
  
    if(numero == 3){
       this.servicio.semana(null).subscribe(
        (datos)=>{
   
     console.log("semana",datos);
     
  this.porsemana = datos.empleadosConAsistencias
  if (this.porsemana.length <= this.longitud) {
    this.verificar1sig = true
  }

  let jefearea : any =0
  if(localStorage.getItem("departamento")){
jefearea = localStorage.getItem("departamento") 
this.porsemana = this.porsemana.filter(e => parseInt(e.infototal.departamento) == jefearea)
 console.log("datos", this.porsemana);
}



this.funcionforporsemana()
  
   this.paginacionsemana  = this.porsemana.slice(0, this.longitud)
  
  console.log(this.porsemana);
  
  
  
  
  
        }
      )
    }
    }
  
ngmodeldiafestivo :any =""

diafestivo(){
  this.servicio.diasfestivoscrear({descripcion : this.ngmodeldiafestivo, fecha : this.dia}).subscribe((e)=>{
this.toast(1)
  document.body.style.overflow = ''; 

  },
  ((e)=>{
    alert("algo salio mal")
  })
)
}

    // ✅ CAMBIO MÍNIMO: Inicializar arrays vacíos para evitar error de hidratación
    arr : any[] = []
    juan : any
   asistencias: any[] = [];
  asistencias2: any[] = [];
  empleados: any[] = [];
  horas_extras : any[]=[]
  
  
  
  
  empleado : any[]=[]
  
  async obtenerEmpleados (){


 const diasfestivos: any[] = await firstValueFrom(this.servicio.diasfestivos());


  let dates = this.empleados_general
  let m : any[]=[]        


let jefearea : any =0

if(localStorage.getItem("departamento")){
jefearea = localStorage.getItem("departamento") 
dates = dates.filter(e => parseInt(e.departamento) == jefearea)

}

    this.kk = dates.filter((e : any) => e.vacacionesdisponibles > 0)   

for (let index = 0; index < dates.length; index++) {
  const element = dates[index];
 


const hooy = new Date()

// Restar 30 días
let hace30dias = subDays(hooy, 30)
const verificaciondia =  differenceInBusinessDays(new Date(), new Date(element.ingreso))


if (verificaciondia <= 30 ) {
  
  hace30dias = new Date(element.ingreso)
}


let diastranscurridos30 =differenceInCalendarDays(new Date(), hace30dias)

let m = Array.from({ length: diastranscurridos30 + 1 }).map((_, i) => {
  return format(addDays(hace30dias, i), 'yyyy-MM-dd');
});


if (element.id == "2568") {
console.log("mm",m);  
}



let filtrado = this.todasasistencias.filter(e => e.deviceUserId == element.id)
let asistencias30dias = 0
let faltas30 =0 
let diasfaltaarr :any[]=[]





let ingreso = new Date(element.ingreso)


let dife = differenceInCalendarDays( new Date(), ingreso)


let l = Array.from({ length: dife + 1 }).map((_, i) => {
  return format(addDays(ingreso, i), 'yyyy-MM-dd');
});

let dias_transcurridos = l.slice(1, l.length +1)


  let diastrabajo = dias_transcurridos.filter((e)=> new Date(e).getDay() > 0 &&  new Date(e).getDay() <  6)
  let asistenciasempleado = 0
  let faltasempleado = 0
  let vv = Object.values(element.datosTurno).filter((e) => typeof e === "boolean");



for (let index = 0; index < dias_transcurridos.length; index++) {

  const element2 = dias_transcurridos[index]

//filtrado todas asistencias por empleado
let trabajo = filtrado.find(e =>  format(e.recordTime, "yyyy-MM-dd")  ==  element2);



//console.log(format(element2.recordTime, "yyyy-MM-dd"), dias_transcurridos[2], "days");



if (trabajo) {
 
  
  asistenciasempleado = asistenciasempleado +1
  }else{

    

    faltasempleado = faltasempleado +1
  }  
}
let hoy = new Date();
let inicio_mes: Date = startOfMonth(hoy);
let ingresoo = new Date(element.ingreso);

// Usar la fecha de ingreso si es posterior al inicio del mes
if (ingresoo >= inicio_mes) {
  inicio_mes = ingresoo;
}

// Calcular diferencia desde la fecha de inicio válida hasta hoy
let verificardia = differenceInCalendarDays(hoy, inicio_mes);

let diasmes = Array.from({ length: verificardia + 1 }).map((_, i) => {
  return format(addDays(inicio_mes, i), 'yyyy-MM-dd');
});


let asistenciasmes = 0;
let faltames = 0;
let diasmestrabajo: any[] = [];


for (let index = 0; index < diasmes.length; index++) {
  const element2 = diasmes[index];
  let dia = new Date(element2 + 'T12:00:00').getDay()

let n = element.datosTurno

  if (dia == 0 && n.domingo == true) {
    diasmestrabajo.push(element2)
  }
  if (dia == 1 && n.lunes == true) {
    diasmestrabajo.push(element2)
    if (element.id == 1096) {
 
    }
    
    
  }
  if (dia == 2 && n.martes == true) {
    diasmestrabajo.push(element2)
  }
   if (dia == 3 && n.miercoles == true) {
    diasmestrabajo.push(element2)
  }
  if (dia == 4 && n.jueves == true) {
    diasmestrabajo.push(element2)
  }
   if (dia == 5 && n.viernes == true) {
    diasmestrabajo.push(element2)
  }
  if (dia == 6 && n.sabado == true) {
    diasmestrabajo.push(element2)
  
  }
  
  
}



let dias30trabajo : any[]=[] 

let dias_transcurridos2 = m.slice(0, l.length +1)
 if (element.id == "2568") {
    console.log("dias que trabaja", dias_transcurridos2);
    
  }
for (let index = 0; index < dias_transcurridos2.length; index++) {
  const element2 = m[index];
  let dia = new Date(element2 + 'T12:00:00').getDay()



let n = element.datosTurno




  if (dia == 0 && n.domingo == true) {
    dias30trabajo.push(element2)
  }
  if (dia == 1 && n.lunes == true) {
    dias30trabajo.push(element2)
 
    
    
  }
  if (dia == 2 && n.martes == true) {
    dias30trabajo.push(element2)
  }
   if (dia == 3 && n.miercoles == true) {
    dias30trabajo.push(element2)
  }
  if (dia == 4 && n.jueves == true) {
    dias30trabajo.push(element2)
  }
   if (dia == 5 && n.viernes == true) {
    dias30trabajo.push(element2)
  }
  if (dia == 6 && n.sabado == true) {
    dias30trabajo.push(element2)
  
  }
  
  
}




for (let index = 0; index < dias30trabajo.length; index++) {
  
  
 
  
  const element4 = dias30trabajo[index]
let trabajo = filtrado.find(e =>  format(e.recordTime, "yyyy-MM-dd")  ==  element4);  



if (trabajo) {
 if (element.id == "1111410") {
  
//console.log(dias30trabajo);
// console.log("tra", trabajo);  
 }

  
 
  asistencias30dias = asistencias30dias +1
  }else{

diasfaltaarr.push(element4)    
    faltas30 = faltas30 +1
  }  
}
element.faltas30 = faltas30
faltas30 =0
element.diasfaltaarr = diasfaltaarr
diasfaltaarr =[]
element.asistencias30 = asistencias30dias
asistencias30dias =0
for (let index = 0; index < diasmestrabajo.length; index++) {
 
  
  const element2 = diasmestrabajo[index];
  let trabajomes = filtrado.find(e => format(e.recordTime, "yyyy-MM-dd")  ==  element2)


if(!trabajomes){
  if (element.id == 1111410) {
 // console.log("eleme", element2);
      
  }

  
trabajomes= diasfestivos.find(e => format(e.fecha + "T12:00:00", "yyyy-MM-dd") == element2)

if(element.id == 1111410 && trabajomes){
 console.log("encontro un dia festivo", trabajomes);
}


}

  if (trabajomes) {
    asistenciasmes +=1
  }else{
    faltames +=1

  
  }

  
}

element.asistenciames = asistenciasmes
element.faltames = faltames
element.asistencias2 = asistenciasempleado
element.faltas = faltasempleado
asistenciasempleado = 0
  
 
}


        
            





if (localStorage.getItem("rol")== "area") {
  this.empleado = dates.filter((e) => e.area == 1)
}else{

            this.empleado = dates
            console.log("empleados",this.empleado);}
            
            this.horas_extras = dates
            
            
         
  }
  
  
  
  
  cargar(inicio : any, fin : any) {
    this.servicio.obtenerusuarios(inicio, fin).subscribe(
      (data) => {
        this.arr = data;
        this.asistencias = data.re?.data || [];
        this.asistencias2 = data.asistencias?.data || [];
  
       let dates = this.empleados_general
          
            
            for (let i = 0; i < this.asistencias.length; i++) {
              const asistencia = this.asistencias[i];
              const empleado = dates.find((e: any) => e.id == asistencia.userId);
  
              if (empleado) {
                let encontrartiempoextra = this.tiempoextra.find(e => e.id_empleado == asistencia.userId) 
       asistencia.horas = empleado.datosTurno.horas
                asistencia.turno = empleado.turno;
                const entrada = new Date(asistencia.timestamp);
                const referencia = new Date(entrada); 
  
              let horasturno = 0
                switch (asistencia.turno) {
                  case 1:
                    //turno admin
                    referencia.setHours(8, 0, 0, 0);
                    horasturno = 9
                    break;
                  case 2:
                    //t1 
                    referencia.setHours(7, 0, 0, 0);
                    horasturno = 9.35
                    break;
                  case 3 :
                    //t2
                    referencia.setHours(14, 30, 0, 0);
                    horasturno = 9
                    break;
                  case 4 :
                    referencia.setHours(22, 30, 0, 0);
                    horasturno = 9.30
                    break
                  case 5 :
                    referencia.setHours(22,30,0,0)
                      horasturno = 9.30
                    break
  
                  default:
                    referencia.setHours(8, 0, 0, 0);
                }
         
                if (encontrartiempoextra) {
                  asistencia.juan = encontrartiempoextra.horas
                    let horasextras =(horasturno  +asistencia.juan) //- // horasturno 
                    asistencia.horasextras = horasextras
                   
                    
  
                } else{
                  
                  
                   asistencia.juan = "N/A"
                }
                
  
  
  
  
  
  
  
                const diferencia = differenceInMinutes(entrada, referencia);
                asistencia.retardo = diferencia;
  
             
                asistencia.temprano = diferencia < 0;
  
                // ✅ Convertir a horas y minutos absolutas
                const absMin = Math.abs(diferencia);
                const horas = Math.floor(absMin / 60);
                const minutos = absMin % 60;
  
                asistencia.retraso = {
                  horas: horas,
                  minutos: minutos
                };
              }
            }
  
         
          
      },
      (error) => {
     


      }
    );
  }
  
  add(pre : any){
  this.element = 0
    this.obk.push(pre)
    for (let index = 0; index < this.obk.length; index++) {
         this.element += this.obk[index].precio
        
      }
    
  }
  
paginacionpares :any[]=[]


modificarlogintud1(event? : any){
console.log(event);

 this.longitud2 = event.target.value
 this.fin2 = this.index2 * this.longitud2
  this.paginacionpares = this.pares.slice(this.fin2 - this.longitud2, this.fin2);
   if (this.pares.length <= this.longitud2) {
    this.verificar2sig = true
  }else{
    this.verificar2sig = false
  }
}

empleados_general :any[]=[]


async todoslosempleados(): Promise<void> {
  try {
    const datos = await firstValueFrom(this.servicio.obtenerempleados());
    this.empleados_general = datos;
  } catch (error) {
    console.log("error", error);
  }
}

kk : any[]=[]





cargarDesdePares(inicio: any, fin: any) {
  this.index2 = 1;
  this.fin2 = this.index2 * this.longitud2;

  this.verificar2atras = this.index2 === 1;

  this.servicio.pares(inicio, fin).subscribe(
    (datos) => {
      this.pares = datos.data.asistencias;

      // Guardar jefe de área si existe
      let jefearea: any = localStorage.getItem("departamento");
let horasextrasempleadosemanal : any =[] 
    
          for (let i = 0; i < this.pares.length; i++) {
            const asistencia = this.pares[i];
            const empleado = this.empleados_general.find((e: any) => e.id == asistencia.userId);

            if (empleado) {
              // Asignamos empleado y datos del turno
              asistencia.empleado = empleado;
              asistencia.horas = empleado.datosTurno?.horas || "";
              asistencia.turno = empleado.turno;

              // Calcular referencia de turno
              const entrada = new Date(asistencia.timestamp);
              const referencia = new Date(entrada);
              let horasTurno = 0;

              switch (asistencia.turno) {
                case 1: referencia.setHours(8, 0, 0, 0); horasTurno = 1; break;
                case 2: referencia.setHours(7, 0, 0, 0); horasTurno = 9.35; break;
                case 3: referencia.setHours(14, 30, 0, 0); horasTurno = 9; break;
                case 4:
                case 5: referencia.setHours(22, 30, 0, 0); horasTurno = 9.30; break;
                default: referencia.setHours(8, 0, 0, 0); break;
              }



              const encontrartiempoextra = this.tiempoextra.find(e => {
                const fechaExtraStr = e.fecha.slice(0, 10);
                const fechaAsistenciaStr = entrada.toISOString().split('T')[0];
                return e.id_empleado == asistencia.userId && fechaExtraStr === fechaAsistenciaStr;
              });

              if (encontrartiempoextra) {
                asistencia.juan = encontrartiempoextra.horas;
                const horasExtras = horasTurno + asistencia.juan;
                asistencia.horasextras = horasExtras;

                if (asistencia.horas_trabajadas) {
                  const minutosTrabajados = (asistencia.horas_trabajadas.horas * 60) + asistencia.horas_trabajadas.minutos;
                  asistencia.minutostrabajados = minutosTrabajados;
                  asistencia.cumplidoextras = (horasExtras * 60 <= minutosTrabajados) ? "si" : "no";
                  if (asistencia.cumplidoextras == "si") {
                    console.log("aqui");
                    let obj = {
                      numero_empleado : asistencia.userId,
                      minutos : asistencia.juan
                    }
                    horasextrasempleadosemanal.push(obj)
                  }
                }
              } else {
                asistencia.juan = "N/A";
              }

              // Calcular retardo
              const diferencia = differenceInMinutes(entrada, referencia);
              asistencia.retardo = diferencia;
              asistencia.temprano = diferencia < 0;
              asistencia.lol = diferencia;

              const absMin = Math.abs(diferencia);
              const horas = Math.floor(absMin / 60);
              const minutos = absMin % 60;

              if (diferencia > 0) {
                asistencia.retraso = { horas, minutos };
              }

              // Calcular horas trabajadas si hay salida
              if (asistencia.timestamp && asistencia.salida) {
                const salida = new Date(asistencia.salida);
                const totalMin = differenceInMinutes(salida, entrada);
                asistencia.horasTrabajadas = {
                  horas: Math.floor(totalMin / 60),
                  minutos: totalMin % 60
                };
              }
            }
          }


for (let index = 0; index < horasextrasempleadosemanal.length; index++) {
  const element = horasextrasempleadosemanal[index];
  console.log(this.empleado[0].id);
  
  let obj = this.pares.find(e => e.userId == element.numero_empleado)
  if (obj) {
  
    if (obj.todo) {
       obj.todo = obj.todo + element.minutos;
    }else{
        obj.todo =  element.minutos
    }
   console.log(obj.todo);
   
   let h = this.pares.filter(e => e.userId == element.numero_empleado)
   for (let index = 0; index < h.length; index++) {
    const element2 = h[index];
    element2.todo = obj.todo
    
   }
    
  }
  
  
}

          // Filtrar por jefe de área
          if (jefearea) {
            this.pares = this.pares.filter(e => parseInt(e.empleado.departamento) === parseInt(jefearea));
          }

          
          this.paginacionpares = this.pares.slice(this.fin2 - this.longitud2, this.fin2);

          
       if (this.pares.length <= this.longitud2) {
    this.verificar2sig = true
  }else{
    this.verificar2sig = false
  }

  if (this.pares.length == 0) {
    this.verificar2atras = true
  }

       
       
    },
    (error) => {
      console.error("Error al obtener pares:", error);
    }
  );
}


  element  = 0
   pares :any[] =[]
    areas : any[]=[]
    departamento : any []=[]
    puesto : any[]=[]
departamento_model : any
areamodel : any
parArea_departamento : any[]=[]

puesto_filtrado : any[]=[]
area_filtrada : any[]=[]
id_area_departamento : any


findPuesto(){
this.puesto_filtrado = this.puesto.filter(e => e.id_area_departamento ==this.id_area_departamento)
let obj = this.area_filtrada.find(e => e.id_area_departamento == this.id_area_departamento)
this.empleados2.area = obj.area_id
this.puestocup(2)


}

funcionencontrararea(){
  console.log(this.departamento_model);

  this.area_filtrada = this.areas.filter(e => e.departamento_id == this.departamento_model)

this.empleados2.departamento = this.departamento_model  
this.puestocup(1)
  
}

// 1 departamento 2 area 3 puesto 4 turno
puestocup(opcion : any){
let turno : any =""
  if ( opcion == 3){
  let obj = this.todoslospuestos.find(e => e.id == this.empleados2.puesto)
  this.clavepuesto = obj.clavepuesto
  console.log("clave puesto");
  
 console.log(obj);
  }else if(opcion == 2){
    let obj = this.todasareas.find(e => e.id == this.empleados2.area)
   this.clave_departamento = obj.clave_departamento
   this.numero_departamento = obj.numero_departamento
    
  }else if(opcion == 4){
    let obj = this.turnos.find(e => e.id == this.empleados2.turno)
    turno = obj.turno
  }else if (opcion ==1){
    console.log(this.empleados2.departamento);
    
    let obj = this.todosdepartamentos.find(e => e.id == this.empleados2.departamento)
    console.log(obj);
    this.clavearea = obj.area
   
    
  }



// this.empleados2.cup = "A"+ this.numero_departamento +this.clave_departamento + this.clavepuesto + turno
 this.empleados2.cup =  this.clavearea + this.numero_departamento +this.clave_departamento + this.clavepuesto + turno
  
}
total_paradas :any[]=[]
rutaseleccionada: any =1
rutas: any[]=[]
paradas : any[]=[]



encontrarparadas(){
this.paradas = this.total_paradas.filter(e => e.id_ruta == this.empleados2.ruta)
console.log("paradas", this.paradas);

}

obtenerrutas(){
  this.servicio.obtenerrutas().subscribe(
    (bien)=>{
this.rutas = bien.rutas
console.log(bien.rutas,"bien");
this.total_paradas = bien.datos
    },
    (error)=>{
      console.log("error", error);
      
    }
  )
}



menuoculto = false
hacermenuchico(){
  let logo = document.querySelector(".logo") as HTMLElement
  let menu = document.querySelector(".menu") as HTMLElement
  let flecha =document.querySelector(".flecha") as HTMLElement
  let derecha = document.querySelector(".derecha") as HTMLElement
if (!this.menuoculto) {
  menu.style.width = "60px"
  logo.style.display ="none"
  flecha.style.transform = "rotate(180deg)"
  derecha.style.marginLeft = "60px"
  derecha.style.width ="calc(100% - 60px)"
}else{
  logo.style.display ="inline-block"
  menu.style.width = "15%"
   derecha.style.marginLeft = "15%"
  derecha.style.width ="85%"
    flecha.style.transform = "rotate(0deg)"
}

this.menuoculto = !this.menuoculto
console.log(this.menuoculto);

}


 clavepuesto: any =""
 clavearea: any=""
 
 clave_departamento : any =""
 numero_departamento :any =""
todasasistencias : any[]=[]
  todoslospuestos : any[]=[]
 
  todasareas : any[]=[]
  todosdepartamentos : any[]=[]
     async  ngOnInit():  Promise<void> {

 await this.todoslosempleados()      
this.obtenerrutas()
  
      this.servicio.todasasistencias().subscribe(
  (asistencias) => {
    this.todasasistencias = asistencias;
    this.servicio.obtenervacacion().subscribe(
      (vacaciones) => {
      this.todasasistencias = [
  ...this.todasasistencias,
  ...vacaciones
];

  

this.obtenerEmpleados();
      },
      (errorVacaciones) => {
        console.error("Error al obtener vacaciones:", errorVacaciones);
      }
    );
  },
  (errorAsistencias) => {
    console.error("Error al obtener asistencias:", errorAsistencias);
  }
);



 this.servicio.obtenerdepartamentos().subscribe(
      (datos)=>{
        this.departamento = datos.departamentos
        console.log(datos);
        
      }
    )
    

  
 this.servicio.obtenereas().subscribe(
      (datos)=>{
       
        this.areas =  datos.area
    this.todoslospuestos = datos.puestos2
this.todosdepartamentos = datos.departamentos
this.todasareas = datos.todasareas
        this.puesto = datos.puesto
       
        
      }
    )


     
    const hoy = new Date();
const fechaInicio = new Date();
const fechaFin = new Date();

  this.cargarDesdePares(fechaInicio, fechaFin);

  
  
      let cv = "10-02-2025"
      let cv2 = "11-02-2025"
        let v =  parse(cv ,"dd-MM-yyyy", new Date() )
        let v2 = parse(cv2, "dd-MM-yyyy", new Date())
    
      
      for (let index = 0; index < this.obk.length; index++) {
         this.element += this.obk[index].precio
        
      }
  
  
  setTimeout(() => {
    let table = document.querySelector(".tabla") as HTMLElement;
    table.classList.add("activa");
  }, 1000);
  
  
  
  if (this.personas.length <= this.fin) {
  this.disable = true  
  }
      const permisos = this.permisos.getPermissions();
  
      this.cargar(null, null)


     
  
    }
  
    pagedData = [
      { id: 1, nombre: 'Juan', edad: 25 },
      { id: 2, nombre: 'Ana', edad: 30 },
      { id: 3, nombre: 'Luis', edad: 22 }
    ];
  
  
    constructor(private servicio : Datos, private permisos : NgxPermissionsService, private fb: FormBuilder, private doc : Docx) { 
       this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono : ["",  Validators.required,Validators.minLength(10)]
    });
    }
  

onsubmit(){
  console.log(this.formulario.value);
  
}
    
    nombre : any
mensaje : any
    
toastr = false
toastmal = false

    toast(number : any){
      if (number == 1) {
          this.toastr = true

      setTimeout(()=>{
this.toastr = false
      },3000)
      }else if(number ==  2){
this.toastmal = true


    setTimeout(()=>{
this.toastmal = false
      },3000)
      }else if(number == 3){
        this.toastr = true
        this.handleCancel()
          setTimeout(()=>{
this.toastr = false
      },3000)

      }
     
    }

}
