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
        @change="$v.nombre.$touch" 
      />
      <span v-if="$v.nombre.$error" class="text-danger">
          {{ $v.nombre.$errors[0].$message }}
      </span>
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
        @change="$v.apellido.$touch" 
      />
      <span v-if="$v.apellido.$error" class="text-danger">
          {{ $v.apellido.$errors[0].$message }}
      </span>
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
        @change="$v.telefono.$touch" 
      />
      <span v-if="$v.telefono.$error" class="text-danger">
          {{ $v.telefono.$errors[0].$message }}
      </span>
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
        @change="$v.email.$touch" 
      />
      <span v-if="$v.email.$error" class="text-danger">
          {{ $v.email.$errors[0].$message }}
      </span>
    </div>

    <div class="mb-3">
      <label for="fecha" class="form-label"
        >Fecha de Contratacion</label
      >
    
      <flat-pickr class="form-control" 
      v-model="empleado.fechaContratacion" :config="dateConfig" @change="$v.fechaContratacion.$touch" ></flat-pickr>

      <span v-if="$v.fechaContratacion.$error" class="text-danger">
          {{ $v.fechaContratacion.$errors[0].$message }}
      </span>
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
        @change="$v.direccion.$touch"
      ></textarea>
      <span v-if="$v.direccion.$error" class="text-danger">
          {{ $v.direccion.$errors[0].$message }}
      </span>
    </div>
    <div class="mb-3">
      <button type="submit" class="btn btn-primary btn-block">Guardar</button>
    </div>

  </form>
</template>
<script lang="ts" setup>
import { ref, toRef, computed, reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { required, helpers, email } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import flatPickr from 'vue-flatpickr-component';
import { Empleado, EmpleadoRequest } from '../../../interfaces/Empleados';
import { useEmpleadosStored } from '../../../stored/useEmpleadosStored';
import "flatpickr/dist/flatpickr.css";

//const { guardarEmpleado } = useEmpleados();
const stored = useEmpleadosStored();
const { empleado } = storeToRefs(stored);

const dateConfig = ref({
  dateFormat: "Y-m-d",
  enableTime: false,
  placeholder: "Fecha de contratacion"
})
/* const props = defineProps(['empleado'])
const empleadoProp = toRef(props, 'empleado'); */
const emit = defineEmits(['cerrarModal'])

const form = reactive({
  nombre:'',
  apellido:'',
  telefono:'',
  email: '',
  fechaContratacion: null,
  direccion: ''
});

const rules = computed(() => {
    return {
        nombre: {
            required: helpers.withMessage('Nombre es requerido', required)
        },
        apellido: {
            required: helpers.withMessage('Apellido es requerido', required)
        },
        telefono: {
            required: helpers.withMessage('Telefono es requerido', required)
        },
        email: {
            required: helpers.withMessage('Email es requerido', required),
            email: helpers.withMessage('Email no es valido', email)
        },
        fechaContratacion: {
            required: helpers.withMessage('Fecha de Contratacion es requerido', required)
        },
        direccion: {
            required: helpers.withMessage('Direccion es requerido', required)
        },
    }
})

const $v = useVuelidate(rules, empleado);

const enviarForm = async() => {
  $v.value.$validate();

  if ($v.value.$error) {
    return;
  }
  if(empleado.value.empleadoId){
    await stored.actualizaEmpleado(empleado.value.empleadoId, empleado.value);
  }else{
    await stored.guardarEmpleado(empleado.value);
  }

  emit("cerrarModal");
}

</script>