<template>
    <navComponent></navComponent>
    <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="producto.nombre" :rules="[rules.required]" label="Nombre del producto" required></v-text-field>
            <v-text-field v-model="producto.precio" :rules="[rules.required, rules.number]" label="Precio" type="number" required></v-text-field>
            <v-text-field v-model="producto.stock" :rules="[rules.required, rules.number]" label="Stock" type="number" required></v-text-field>
            <v-select
                v-model="producto.categoria"
                :items="categorias"
                :rules="[rules.required]"
                label="Categoría"
                required
            ></v-select>
            <v-select
                v-model="producto.proveedor"
                :items="proveedores"
                :rules="[rules.required]"
                label="Proveedor"
                required
            ></v-select>
            <v-btn @click="guardarProducto" :disabled="!valid">Guardar</v-btn>
        </v-form>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import navComponent from '@/components/navComponent.vue';

export default {
    name: 'ProductosView',
    components: {
        navComponent
    },
    data() {
        return {
            valid: false,
            producto: {
                nombre: '',
                precio: null,
                stock: null,
                categoria: '',
                proveedor: ''
            },
            rules: {
                required: value => !!value || 'Campo requerido',
                number: value => (!isNaN(value) && value > 0) || 'Debe ser un número válido'
            }
        };
    },
    computed: {
        ...mapGetters(['productos', 'categorias', 'proveedores'])
    },
    mounted() {
        // Cargar categorías y proveedores al montar el componente
        this.cargarCategorias();
        this.cargarProveedores();
    },
    methods: {
        ...mapActions(['agregarProducto', 'cargarCategorias', 'cargarProveedores']),
        guardarProducto() {
            if (this.$refs.form.validate()) {
                this.agregarProducto(this.producto);
                this.resetForm();
            }
        },
        resetForm() {
            this.producto = {
                nombre: '',
                precio: null,
                stock: null,
                categoria: '',
                proveedor: ''
            };
            this.$refs.form.reset();
        }
    }
};
</script>

<style>
/* Opcional: Estilos personalizados para las filas de la tabla */
.v-data-table .v-data-table__wrapper {
    border: 1px solid #ddd; /* Línea alrededor de la tabla */
}
.v-data-table tr {
    border-bottom: 1px solid #ddd; /* Línea entre filas */
}
</style>
