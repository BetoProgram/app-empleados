<template>
  <h1>Empleados</h1>
  
  <div v-if="empleados.length > 0">
    <button type="button" class="btn btn-success" 
    data-bs-toggle="modal" data-bs-target="#modalForm" @click="empleadoEdit = {}">Nuevo</button>
    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Telefono</th>
        <th scope="col">Fecha de Contracion</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="empleado in empleados" :key="empleado.empleadoId">
        <th scope="row">{{ empleado.empleadoId }}</th>
        <td>{{ empleado.nombreCompleto }}</td>
        <td>{{ empleado.telefono }}</td>
        <td>{{ empleado.fechaContratacion }}</td>
        <th>
          <button class="btn btn-info" data-bs-toggle="modal" 
          data-bs-target="#modalForm" @click="sendEmpleado(empleado)">Editar</button>
        </th>
      </tr>
    </tbody>
  </table>
  </div>
  <div class="alert alert-warning mt-3" v-else>
    <h5>No ya datos</h5>
  </div>
  <ModalForm :modalTitulo="'Nuevo'">
    <FormEmpleado :empleado="empleadoEdit" @cerrar-modal="obtenerEmpleados" />
  </ModalForm>
</template>
<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue';
import ModalForm from '../../components/shared/ModalForm.vue';
import FormEmpleado from './components/FormEmpleado.vue';
import { useEmpleados } from '../../composables';
import { Empleado } from '../../interfaces/Empleados';

const { empleados, obtenerEmpleados } = useEmpleados();
const empleadoEdit = ref({});

onBeforeMount(async () => {
  await obtenerEmpleados();
})

const sendEmpleado = (empleado:Empleado) => {
  empleadoEdit.value = empleado;
}
</script>
