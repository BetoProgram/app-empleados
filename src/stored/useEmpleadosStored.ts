import { ref } from 'vue';
import { defineStore } from 'pinia'
import httpConfig from '../config/axios';
import { Empleado }  from '../interfaces/Empleados'

export const useEmpleadosStored = defineStore('storedEmpleado', {
  state: () => {
    return {
        empleados:[] as Empleado[],
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
    async guardarEmpleado(empleado:Empleado){
        try{
            await httpConfig.post('/empleados', empleado);

            this.btnClose.click();
        }catch(ex:any){
            this.error = ex;
        }
    }
  }
})