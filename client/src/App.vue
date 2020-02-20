<template>
  <v-app >
    <Navbar />
    
    <v-content class="grey lighten-4">
      
      <!-- Vuetify transition-->
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>

    </v-content>
    
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: { Navbar}
};
</script>
