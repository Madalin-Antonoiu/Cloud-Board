<template>
  <div class="notes">
 
    <v-subheader class="px-0 grey--text">
      Notes
    </v-subheader>
      
    <v-container class="my-5">
      <v-card flat class="pa-3">
        <v-layout row class="mx-0">

          <v-flex xs12 md6>
            <div class="caption grey--text">Title</div>
            <div>Vuetify Course 1</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Owner</div>
            <div>Madalin</div>
          </v-flex>
          
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Viewed</div>
            <div>5 minutes ago</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Group</div>
            <div>Vuetify</div>
          </v-flex>

        </v-layout>
      </v-card>
    </v-container>

  </div>
</template>

<script>


export default {
  name: 'About',

}
</script>
