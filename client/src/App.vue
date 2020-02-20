<template >
  <v-app  :style="{background: $vuetify.theme.themes[theme].background}">
    <Navbar />
    
    <v-content class="mx-5 mb-4">

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
  components: { Navbar},
    computed:{
    theme(){
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  }
};
</script>
