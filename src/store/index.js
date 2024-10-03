import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    nombreCompleto: "Josué Ernesto Zelaya Carballo",
    fechaNacimiento: "10/12/2003",
    pasatiempos: ["Programar", "Jugar Videojuegos", "Salir con Amigos"],
    peliculasFavoritas: ["El Padrino", "Hachiko", "Avenger: End Game"],
    lenguajesProgramacion: ["JavaScript", "Python", "C#"],
    categorias: ["Electrónica", "Ropa", "Alimentos"],
    proveedores: ["Proveedor A", "Proveedor B", "Proveedor C"],
    productos: [],
  },
  getters: {
    nombreCompleto: (state) => state.nombreCompleto,
    fechaNacimiento: (state) => state.fechaNacimiento,
    pasatiempos: (state) => state.pasatiempos,
    peliculasFavoritas: (state) => state.peliculasFavoritas,
    lenguajesProgramacion: (state) => state.lenguajesProgramacion,
    categorias: (state) => state.categorias,
    proveedores: (state) => state.proveedores,
    productos: (state) => state.productos,
  },
  mutations: {
    AGREGAR_PRODUCTO(state, producto) {
      state.productos.push(producto);
    },
    REMOVER_PRODUCTO(state, producto) {
      state.productos = state.productos.filter(
        (p) => p.nombre !== producto.nombre
      );
    },
    SET_CATEGORIAS(state, categorias) {
      state.categorias = categorias;
    },
    SET_PROVEEDORES(state, proveedores) {
      state.proveedores = proveedores;
    }
  },
  actions: {
    agregarProducto({ commit }, producto) {
      if (producto.nombre && producto.precio > 0 && producto.stock >= 0) {
        commit("AGREGAR_PRODUCTO", producto);
      } else {
        alert("Por favor, ingrese todos los datos correctamente.");
      }
    },
    removerProducto({ commit }, producto) {
      commit("REMOVER_PRODUCTO", producto);
    },
    cargarCategorias({ commit }) {
      // Simulación de carga de datos
      const categorias = ["Electrónica", "Ropa", "Alimentos"]; // Este podría ser un API call
      commit("SET_CATEGORIAS", categorias);
    },
    cargarProveedores({ commit }) {
      // Simulación de carga de datos
      const proveedores = ["Proveedor A", "Proveedor B", "Proveedor C"]; // Este podría ser un API call
      commit("SET_PROVEEDORES", proveedores);
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});
