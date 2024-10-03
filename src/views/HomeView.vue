<template>
   <v-container>
      <navComponent></navComponent>
      <div class="mainContainer">
         <v-row>
            <v-col cols="12" md="6">
               <v-card class="pa-4">
                  <v-card-title>Información Personal</v-card-title>
                  <v-card-text>
                     <v-card-text v-if="!nombreCompleto">Cargando información...</v-card-text>
                     <v-card-text v-else>
                        <p><strong>Nombre Completo:</strong> {{ nombreCompleto }}</p>
                        <p><strong>Fecha de Nacimiento:</strong> {{ fechaNacimiento }}</p>
                     </v-card-text>
                  </v-card-text>
               </v-card>
            </v-col>

            <v-col cols="12" md="6">
               <v-card class="pa-4">
                  <v-card-title>Pasatiempos</v-card-title>
                  <v-card-text>
                     <v-list>
                        <v-list-item v-for="(pasatiempo, index) in pasatiempos" :key="index">
                           <v-list-item-content>{{ pasatiempo }}</v-list-item-content>
                        </v-list-item>
                     </v-list>
                  </v-card-text>
               </v-card>
            </v-col>

            <v-col cols="12" md="6">
               <v-card class="pa-4">
                  <v-card-title>Películas Favoritas</v-card-title>
                  <v-card-text>
                     <v-list>
                        <v-list-item v-for="(pelicula, index) in peliculasFavoritas" :key="index">
                           <v-list-item-content>{{ pelicula }}</v-list-item-content>
                        </v-list-item>
                     </v-list>
                  </v-card-text>
               </v-card>
            </v-col>

            <v-col cols="12" md="6">
               <v-card class="pa-4">
                  <v-card-title>Lenguajes de Programación Favoritos</v-card-title>
                  <v-card-text>
                     <v-chip-group column>
                        <v-chip v-for="(lenguaje, index) in lenguajesProgramacion" :key="index">
                           {{ lenguaje }}
                        </v-chip>
                     </v-chip-group>
                  </v-card-text>
               </v-card>
            </v-col>
         </v-row>
      </div>
   </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import navComponent from '@/components/navComponent.vue';

export default {
   name: 'HomeView',
   components: {
      navComponent
   },
   computed: {
      ...mapGetters([
         'nombreCompleto',
         'fechaNacimiento',
         'pasatiempos',
         'peliculasFavoritas',
         'lenguajesProgramacion'
      ])
   }
};
</script>

<style scoped>
.mainContainer {
      margin-top: 20px;
}
</style>
