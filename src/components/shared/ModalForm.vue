<template>
    <div class="modal fade"  data-bs-backdrop="static" id="modalForm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">{{ props.modalTitulo }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <slot />
                </div>
                <div class="modal-footer">
                    <button type="button" ref="btnClose" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { ref } from 'vue';
import { useEmpleados } from '../../composables';
import { useEmpleadosStored } from '../../stored/useEmpleadosStored'
const props = defineProps(['modalTitulo'])
const store = useEmpleadosStored();
const { btnClose } = storeToRefs(store);


</script>