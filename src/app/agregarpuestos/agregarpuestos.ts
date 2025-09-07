import { Component } from '@angular/core';
import { Datos } from '../datos';

@Component({
  selector: 'app-agregarpuestos',
  standalone: false,
  templateUrl: './agregarpuestos.html',
  styleUrl: './agregarpuestos.css'
})
export class Agregarpuestos {


  constructor(private servicio : Datos){}
areas : any[]=[]
puesto : any[] =[]
sele : any =""
idpuesto : any



ver(){
console.log(this.sele, this.idpuesto);
let enviar = {
  id_puesto : this.idpuesto,
  relacion2 : this.sele
}
this.servicio.crearpuesto(enviar).subscribe(
  (datos)=>{
    console.log("bien")
    
  },
  (err)=>{
    console.log(err);
    
  }
)

}

   ngOnInit(): void {
    this.servicio.obtenereas().subscribe(
      (datos)=>{
        this.areas = datos.area
        this.puesto = datos.puestos2
        console.log(datos);
        console.log(this.puesto.length);
        
        
      }
    )
    
   }
}
