<template>
  <h1>Empleados</h1>
  
  <div v-if="empleados.length > 0">
    <button type="button" class="btn btn-success" 
    data-bs-toggle="modal" data-bs-target="#modalForm" @click="stored.setInicialEmpleado">Nuevo</button>
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
        <td>{{ formatoFechas(empleado.fechaContratacion) }}</td>
        <th>
          <button class="btn btn-info" data-bs-toggle="modal" 
          data-bs-target="#modalForm" @click="stored.setEmpleado(empleado)">Editar</button>
        </th>
      </tr>
    </tbody>
  </table>
  </div>
  <div class="alert alert-warning mt-3" v-else>
    <h5>No ya datos</h5>
  </div>
 <ModalForm :modalTitulo="'Nuevo'">
    <FormEmpleado @cerrar-modal="stored.obtenerEmpleados" />
  </ModalForm>
</template>
<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue';
import { storeToRefs } from 'pinia';
import ModalForm from '../../components/shared/ModalForm.vue';
import FormEmpleado from './components/FormEmpleado.vue';
import { useEmpleadosStored } from '../../stored/useEmpleadosStored';
import { useHelpers } from '../../composables/useHelpers'

const { formatoFechas } = useHelpers();
const stored = useEmpleadosStored();
const { empleados } = storeToRefs(stored);

onBeforeMount(async () => {
  await stored.obtenerEmpleados();
})
</script>
