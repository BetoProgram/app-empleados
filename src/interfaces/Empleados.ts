export interface Empleado {
    empleadoId: number;
    departamentoId: number | null;
    puestoId: number | null;
    nombre: string;
    apellido: string;
    nombreCompleto: string;
    telefono: string;
    direccion: string;
    email: string;
    fechaContratacion: Date;
    salario: number;
}

export class EmpleadoRequest {
    empleadoId: number = 0;
    nombre: string = '';
    apellido: string = '';
    telefono: string = '';
    email: string = '';
    fechaContratacion: Date = new Date;
    direccion: string = '';
}