import {ref} from 'vue';
import httpConfig from '../config/axios';
import { Empleado } from '../interfaces/Empleados';

export function useEmpleados(){
    const empleados = ref<Empleado[]>([]);
    const error = ref(null);
    const btnClose = ref()

    const obtenerEmpleados = async() => {
        try{
            const response = await httpConfig.get('/empleados');
            empleados.value = response.data;
        }catch(ex:any){
            error.value = ex;
        }
    }

    const guardarEmpleado =async(empleado:Empleado)=> {
        try{
            await httpConfig.post('/empleados', empleado);
            btnClose.value.click();
        }catch(ex:any){
            error.value = ex;
        }
    }

    return { empleados, error, btnClose ,obtenerEmpleados, guardarEmpleado }
}