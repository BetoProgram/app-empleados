import { ref } from 'vue';
import { defineStore } from 'pinia'
import httpConfig from '../config/axios';
import { Empleado, EmpleadoRequest }  from '../interfaces/Empleados'

export const useEmpleadosStored = defineStore('storedEmpleado', {
  state: () => {
    return {
        empleados:[] as Empleado[],
        empleado: {} as EmpleadoRequest,
        error:ref(null),
        btnClose: ref()
    }
  },
  actions:{
    async obtenerEmpleados(){
        try{
            const response = await httpConfig.get('/empleados');
            this.empleados = response.data;
        }catch(ex:any){
            this.error = ex;
        }
    },
    setEmpleado(value:EmpleadoRequest){
        this.empleado = value;
    },
    setInicialEmpleado(){
        this.empleado = new EmpleadoRequest();
    },
    async guardarEmpleado(empleado:EmpleadoRequest){
        try{
            await httpConfig.post('/empleados', empleado);

            this.btnClose.click();
        }catch(ex:any){
            this.error = ex;
        }
    },
    async actualizaEmpleado(id:number,empleado:EmpleadoRequest){
        try{
            await httpConfig.put(`/empleados/${id}`, empleado);

            this.btnClose.click();
        }catch(ex:any){
            this.error = ex;
        }
    }
  }
})