import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import productosView from '../views/ProductosView.vue'
import lista_productos from '../views/ListaProductos.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/productos',
    name: 'productos',
    component: productosView
  },
  {
    path: '/lista_productos',
    name: 'lista_productos',
    component: lista_productos
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
