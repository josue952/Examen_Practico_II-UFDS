<template>
    <navComponent></navComponent>
    <v-container>
        <v-row>
            <v-col v-for="producto in productos" :key="producto.nombre" cols="12" md="4">
                <v-card>
                    <v-card-title>{{ producto.nombre }}</v-card-title>
                    <v-card-subtitle><b>Precio:</b> ${{ producto.precio }}</v-card-subtitle>
                    <v-card-subtitle><b>Stock:</b> {{ producto.stock }}</v-card-subtitle>
                    <v-card-subtitle><b>Categoría:</b> {{ producto.categoria }}</v-card-subtitle>
                    <v-card-subtitle><b>Proveedor:</b> {{ producto.proveedor }}</v-card-subtitle>
                    <v-card-actions>
                        <v-btn @click="removerProducto(producto)" icon>
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import navComponent from '@/components/navComponent.vue';

export default {
    name: 'ListaProductos',
    components: {
        navComponent
    },
    computed: {
        ...mapGetters(['productos'])  // Acceder a los productos desde Vuex
    },
    methods: {
        ...mapActions(['removerProducto'])  // Mapear la acción para remover productos
    }
};

</script>

<style>
/* Opcional: Estilos personalizados para las tarjetas */
.v-card {
    margin: 10px;
}

.v-card-title {
    font-size: 24px;
    font-weight: bold;
}

.v-card-subtitle {
    font-size: 16px;
}
</style>
