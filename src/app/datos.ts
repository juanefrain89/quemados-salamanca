import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Datos {
  
  constructor(private http : HttpClient) {
   }
obtenerusuarios(fechaInicio : any , fechaFin : any) : Observable<any>{

  return this.http.post("http://192.168.1.83:3100/datos", {fechaInicio, fechaFin})
}
obtenerempleados(): Observable<any>{

  return this.http.get("http://192.168.1.83:3100/empleados")
}
mandarTiempoExtra(obj : any): Observable <any>{
console.log(obj);

  return  this.http.post("http://192.168.1.83:3100/horasExtras/2", obj)
}

obtenerTiempoExtra(obj : any): Observable <any>{
  console.log(obj);
  
  return  this.http.post("http://192.168.1.83:3100/horasExtras", obj)
}




semana(semana : any):Observable<any>{
  return this.http.post("http://192.168.1.83:3100/semanal", {semana : semana})
}




pares(fechaInicio : any , fechaFin : any):Observable<any>{
  console.log(fechaInicio);
  
  return this.http.post("http://192.168.1.83:3100/pares",{fechaInicio, fechaFin})
}

add(datos : any):Observable<any>{
  return this.http.post("http://192.168.1.83:3100/agregardia",datos)
}

sincronizar1():Observable<any>{
  return this.http.get("http://192.168.1.83:3100/asis")
}


sincronizar2():Observable<any>{
  return this.http.get("http://192.168.1.83:3100/exportar")
}

iniciarsesion(credenciales : any):Observable<any>{
  console.log(credenciales);
  
  return this.http.post("http://192.168.1.83:3100/login", credenciales)
}


crearempleado(empleado : any):Observable<any>{
  return this.http.post("http://192.168.1.83:3100/crearempleado", empleado)
}

obtenereas():Observable<any>{
  return this.http.get("http://192.168.1.83:3100/puestos")
}

crearpuesto(obj : any):Observable<any>{
  return this.http.post("http://192.168.1.83:3100/crearpuestos", obj)
}


obtenerdepartamentos():Observable<any>{
  return this.http.get("http://192.168.1.83:3100/departamentos")
}


todasasistencias():Observable<any>{
  return this.http.get("http://192.168.1.83:3100/to")
}


diasfestivos():Observable<any>{
  return this.http.get("http://192.168.1.83:3100/diasfestivos")
}

diasfestivoscrear(obj : any):Observable<any>{
  return this.http.post("http://192.168.1.83:3100/diasfestivoscrear", obj)
}


editarempleado(obj : any):Observable<any>{
  return this.http.post("http://192.168.1.83:3100/editarempleado", obj)
}

departamentosorg():Observable<any>{
  return this.http.get("http://localhost:3100/departamentosOrganigrama")
}

empleadosort():Observable<any>{
  return this.http.get("http://localhost:3100/empleadosorganigrama")
}

empleadosortcrear(obj : any):Observable<any>{
  console.log(obj);
  
  return this.http.post("http://192.168.1.83:3100/empleadosorganigrama/crear", obj)
}

evidencia2(requestData: any) {
  console.log(requestData);
  
  return this.http.put(`http://192.168.1.83:3100/crearevidencia2/${requestData.numero_empleado}`, requestData);
}


exportartodasasistencias():Observable<any>{
  return this.http.get("http://192.168.1.83:3100/asis")
}







vacacionescrear(objeto : any):Observable<any>{
  return this.http.post("http://192.168.1.83:3100/crearvacacion", objeto)
}


obtenervacacion():Observable<any>{
  return this.http.get("http://192.168.1.83:3100/vacaciones")
}


actualizarcantidadvacaciones(obj : any):Observable<any>{
  return this.http.post("http://192.168.1.83:3100/actualizarcantidadvacaciones", obj)
}


obtenerrutas():Observable<any>{
  return this.http.get("http://192.168.1.83:3100/paradas")
}

obtenerturnos():Observable<any>{
  return this.http.get("http://192.168.1.83:3100/turnos")
}


eliminarempleado(id : any):Observable<any>{
  return this.http.delete(`http://192.168.1.83:3100/empleado/${id}`)
}


}