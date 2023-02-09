<template>
  <!-- <nav class="navbar bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" routerLink="/">Inicio</a>
            <a routerLink="/empleados">Empleados</a>
            <a routerLink="/departamentos">Departamentos</a>
            <a routerLink="/puestos">Puestos</a>
        </div>
    </nav> -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Empleados Nomi</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" :to="{name : 'home'}">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name : 'empleados'}">Empleados</router-link>
          </li>
          
          <li class="nav-item">
            <router-link class="nav-link" :to="{name : 'departamentos'}">Departamentos</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" :to="{name : 'puestos'}">Puestos</router-link>
          </li>
        </ul>
       
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">

</script>
