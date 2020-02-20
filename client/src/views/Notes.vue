<template>
  <div class="notes">
 
    <v-subheader class="px-0 grey--text">
      Notes
    </v-subheader>
      
    <v-container class="my-5">
      <v-card flat class="pa-3" v-for="note in notes" :key="note.title">
        <v-layout row class="mx-0">

          <v-flex xs12 md6>
            <div class="caption grey--text">Title</div>
            <div>{{note.title}}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Owner</div>
            <div>{{note.owner}}</div>
          </v-flex>
          
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Seen</div>
            <div>{{note.seen}}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Tag</div>
            <div>{{note.tag}}</div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>


export default {
  name: 'About',
  // Written like this, data doesn't need return {}
  data: () => ({
    notes: [
      { title: 'Introduction to Vuetify', owner: 'Madochan', seen: "1 week ago", tag: 'Vuetify', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id amet itaque minima quae. Sapiente ipsam ab eligendi fugiat debitis nesciunt corrupti repellat asperiores vero qui doloremque maiores cum, consequatur ea?' },
      { title: 'Classes and colors in JS', owner: 'Ana', seen: "4 days ago", tag: 'JavaScript', content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi quis accusantium sit numquam nobis quasi incidunt aut dolores, similique obcaecati id animi cupiditate deleniti voluptas nisi ipsam minima qui assumenda.' },
      { title: 'All about Directives in Vue', owner: 'Christian', seen: "1 month ago", tag: 'Vue', content:'  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores optio corrupti, ipsa nisi voluptatum rem beatae eaque est consequatur labore, ipsam iure at accusamus quisquam incidunt ipsum! Deserunt, ullam? Sed.' },
    ],
  }),
}
</script>
