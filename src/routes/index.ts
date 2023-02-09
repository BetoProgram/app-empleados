import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes:Array<RouteRecordRaw> = [
    { 
        path: '/', 
        name: 'home', 
        component:() => import('../pages/home/HomePage.vue')
    },
    { 
        path: '/empleados', 
        name: 'empleados', 
        component:() => import('../pages/empleados/ListarEmpleadosPage.vue') 
    },
    { 
        path: '/departamentos', 
        name: 'departamentos', 
        component:() => import('../pages/departamentos/ListarDepartamentosPage.vue') 
    },
    { 
        path: '/puestos', 
        name: 'puestos', 
        component:() => import('../pages/puestos/ListarPuestosPage.vue') 
    }
]

const router = createRouter({
    history : createWebHashHistory(),
    routes
})

export default router;