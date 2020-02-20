<template>
  <div class="dashboard">
   
    <v-subheader class="px-0 grey--text">
      Dashboard
    </v-subheader>

    <!-- Vuetify Container -->
    <v-container class="my-5">
      <!-- Vuetify Grid Layout -->
      <v-layout row>

        <v-flex xs12 md6>
          <v-btn outlined block color="primary">1</v-btn>
        </v-flex>

        <v-flex xs4 md2>
          <v-btn outlined block color="secondary">2</v-btn>
        </v-flex>
          <v-flex xs4 md2>
          <v-btn outlined block color="third">3</v-btn>
        </v-flex>
          <v-flex xs4 md2>
          <v-btn outlined block color="fourth">4</v-btn>
        </v-flex>

      </v-layout>

    </v-container>

  </div>
</template>

<script>


export default {
  name: 'Dashboard',

}
</script>
