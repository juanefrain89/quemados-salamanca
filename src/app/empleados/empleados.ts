import { Component } from '@angular/core';
import { Datos } from '../datos';
import { OnInit } from '@angular/core';
import { parse, format, differenceInMinutes, differenceInBusinessDays  } from 'date-fns';
import { NgxPermissionsService } from 'ngx-permissions';


interface EmpleadoData {
  id: number;
  nombre: string;
  edad: number;
}

@Component({
  selector: 'app-empleados',
  standalone: false,
  templateUrl: './empleados.html',
  styleUrls: ['./empleados.css']
})
export class Empleados implements OnInit {
  dia : any
  activo = 1
  modal = false
semanaSeleccionada : any
  numero_empleado : any
binding =  { startDate: Date, endDate: Date };
diaextra : any
disable2 = true
opciones : any

cantidad_horasExtras : any

obk =[
  {precio : 2, id :1 },
   {precio : 4, id :2},
    {precio : 6 , id : 3}
]



anadir(){
  let obj = this.empleado.find(e => e.id == this.opciones)

  
  let enviar = {dia : this.dia, id : this.opciones, nombre : obj.nombre}
  this.servicio.add(enviar).subscribe(
    (datos)=>{
      
      
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


 fin = this.index * this.leng
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
    
   } 
  )
}



fun2(){
  this.cargarDesdePares(this.binding.startDate, this.binding.endDate)
}
async fun () {
   this.obtenerTiempoextra(this.binding.startDate, this.binding.endDate)
 this.cargar(this.binding.startDate, this.binding.endDate)

}





agregarTiempoextra(){
  this.servicio.mandarTiempoExtra({fecha : this.diaextra, horas : this.cantidad_horasExtras, id_empleado : this.numero_empleado }).subscribe(
    (datos)=>{
     
      
    },
    (error)=>{
     
      
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


sincronizar(){
  this.servicio.sincronizar1().subscribe((da)=>{
    console.log(da);
    
  })

  this.servicio.sincronizar2().subscribe((datos)=>{console.log(datos);
  })
}



handlefecha(){

    this.servicio.semana(this.semanaSeleccionada).subscribe(
      (datos)=>{
 
   console.log(datos);
   
        
this.porsemana = datos.empleadosConAsistencias






      }
    )

}

 hora = "8:00";
horadate =parse(this.hora, "H:mm", new Date())
porsemana : any[]=[]
  handleactivo(numero : any){
  
    this.activo = numero
 
    if (numero== 2) {
    this.obtenerEmpleados()
  }

  if(numero == 3){
     this.servicio.semana(null).subscribe(
      (datos)=>{
 
   console.log(datos);
   
        
this.porsemana = datos.empleadosConAsistencias






      }
    )
  }
  }

  // ✅ CAMBIO MÍNIMO: Inicializar arrays vacíos para evitar error de hidratación
  arr : any[] = []
  juan : any
 asistencias: any[] = [];
asistencias2: any[] = [];
empleados: any[] = [];
horas_extras : any[]=[]




empleado : any[]=[]

obtenerEmpleados(){
   this.servicio.obtenerempleados().subscribe(
        (dates) => {
          this.empleado = dates
          this.horas_extras = dates
          
          
        })
}




cargar(inicio : any, fin : any) {
  this.servicio.obtenerusuarios(inicio, fin).subscribe(
    (data) => {
      this.arr = data;
      this.asistencias = data.re?.data || [];
      this.asistencias2 = data.asistencias?.data || [];

      this.servicio.obtenerempleados().subscribe(
        (dates) => {
        
          
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
          console.error('Error al obtener empleados:', error);
        }
      );
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

cargarDesdePares(inicio : any, fin : any) {
  this.obtenerTiempoextra(this.binding.startDate, this.binding.endDate)
  console.log("entro aqui");
  

  this.servicio.pares(inicio, fin).subscribe(
    (datos) => {
      this.pares = datos.data.asistencias;

      this.servicio.obtenerempleados().subscribe(
        (empleados) => {
        console.log("entro");
        

          for (let i = 0; i < this.pares.length; i++) {
            const asistencia = this.pares[i];
            const empleado = empleados.find((e: any) => e.id == asistencia.userId);

            if (empleado) {
              console.log("tiempo extra", this.tiempoextra

              );
              

let fecha1 = new Date()


  //            let encontrartiempoextra = this.tiempoextra.find(e => e.id_empleado == asistencia.userId && differenceInBusinessDays(new Date(e.fecha), new Date(asistencia.timestampStr) ) == 0 );
      let encontrartiempoextra = this.tiempoextra.find(e => e.id_empleado == asistencia.userId );
   console.log(encontrartiempoextra.fecha, "encontrado");
   
      
console.log(asistencia);

              asistencia.horas = empleado.datosTurno?.horas;
              asistencia.turno = empleado.turno;

              const entrada = new Date(asistencia.timestamp);
              const referencia = new Date(entrada);

              let horasturno = 0;

              switch (asistencia.turno) {
                case 1:
                  referencia.setHours(8, 0, 0, 0);
                  horasturno = 9;
                  break;
                case 2:
                  referencia.setHours(7, 0, 0, 0);
                  horasturno = 9.35;
                  break;
                case 3:
                  referencia.setHours(14, 30, 0, 0);
                  horasturno = 9;
                  break;
                case 4:
                  referencia.setHours(22, 30, 0, 0);
                  horasturno = 9.30;
                  break;
                case 5:
                  referencia.setHours(22, 30, 0, 0);
                  horasturno = 9.30;
                  break;
                default:
                  referencia.setHours(8, 0, 0, 0);
              }

              if (encontrartiempoextra) {

              
                
                asistencia.juan = encontrartiempoextra.horas;
                let horasextras = horasturno + asistencia.juan;
                asistencia.horasextras = horasextras;
              } else {
                asistencia.juan = "N/A";
              }

              const diferencia = differenceInMinutes(entrada, referencia);
              asistencia.retardo = diferencia;
              asistencia.temprano = diferencia < 0;

              const absMin = Math.abs(diferencia);
              const horas = Math.floor(absMin / 60);
              const minutos = absMin % 60;

              asistencia.retraso = {
                horas,
                minutos
              };
            }

            // Calcula diferencia entre entrada y salida (horas trabajadas)
            if (asistencia.timestamp && asistencia.salida) {
              const entrada = new Date(asistencia.timestamp);
              const salida = new Date(asistencia.salida);
              const totalMin = differenceInMinutes(salida, entrada);

              asistencia.horasTrabajadas = {
                horas: Math.floor(totalMin / 60),
                minutos: totalMin % 60
              };
            }
          }

        
        },
        (error) => {
          console.error("Error al obtener empleados:", error);
        }
      );
    },
    (error) => {
      console.error("Error al obtener pares:", error);
    }
  );
}

element  = 0
 pares :any[] =[]
  ngOnInit(): void {
    this.cargarDesdePares(null, null)






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


  constructor(private servicio : Datos, private permisos : NgxPermissionsService, ) { }

  nombre : any


}