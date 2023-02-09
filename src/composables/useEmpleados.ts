import {ref} from 'vue';
import httpConfig from '../config/axios';
import { Empleado } from '../interfaces/Empleados';

export function useEmpleados(){
    const empleados = ref<Empleado[]>([]);
    const error = ref(null);

    const obtenerEmpleados = async() => {
        try{
            const response = await httpConfig.get('/empleados');
            empleados.value = response.data;
        }catch(ex:any){
            error.value = ex;
        }
    }

    return { empleados, error, obtenerEmpleados }
}