<template>
  <form @submit.prevent="enviarForm">
    <div class="mb-3">
      <label for="nombre" class="form-label"
        >Nombre</label
      >
      <input
        type="text"
        class="form-control"
        id="nombre"
        v-model="empleado.nombre"
        placeholder="Escribe un nombre"
      />
    </div>

    <div class="mb-3">
      <label for="apellido" class="form-label"
        >Apellido</label
      >
      <input
        type="text"
        class="form-control"
        id="apellido"
        v-model="empleado.apellido"
        placeholder="Escribe un apellido"
      />
    </div>

    <div class="mb-3">
      <label for="telefono" class="form-label"
        >Telefono</label
      >
      <input
        type="text"
        class="form-control"
        id="telefono"
        v-model="empleado.telefono"
        placeholder="Escribe un Telefono"
      />
    </div>

    <div class="mb-3">
      <label for="email" class="form-label"
        >Correo electronico</label
      >
      <input
        type="email"
        class="form-control"
        id="email"
        v-model="empleado.email"
        placeholder="Escribe un Correo Electronico"
      />
    </div>

    <div class="mb-3">
      <label for="fecha" class="form-label"
        >Fecha de Contratacion</label
      >
    
      <flat-pickr class="form-control" 
      v-model="empleado.fechaContratacion" :config="dateConfig"></flat-pickr>
    </div>

    <div class="mb-3">
      <label for="dir" class="form-label"
        >Dirección</label
      >
      <textarea
        class="form-control"
        id="dir"
        rows="3"
        v-model="empleado.direccion"
      ></textarea>
    </div>
    <div class="mb-3">
      <button type="submit" class="btn btn-primary btn-block">Guardar</button>
    </div>

  </form>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits,ref, toRef } from 'vue';
import flatPickr from 'vue-flatpickr-component';
import "flatpickr/dist/flatpickr.css";
import { Empleado } from '../../../interfaces/Empleados';

const dateConfig = ref({
  dateFormat: "Y-m-d",
  enableTime: false,
  placeholder: "Fecha de contratacion"
})
const props = defineProps(['empleado'])
const empleadoProp = toRef(props, 'empleado');
const date = ref(null);


const enviarForm = () => {
  console.log(empleadoProp.value)
  
}

</script>