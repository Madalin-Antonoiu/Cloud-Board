<template>
  <div class="notes">
 
    <v-subheader class="px-0 grey--text">
      Notes
    </v-subheader>
      
    <v-container class="my-5">

      <!--Card Background -->
      <v-card flat class="pa-3" >

        <v-tabs  :vertical="$vuetify.breakpoint.mdAndUp" >
             
          <!-- Procedurally generated tabs during v-for based on JSON-->
          <v-tab style="text-transform: capitalize;" v-for="group in groups" :key="group.name">
            <v-icon left class="iconify" :data-icon="group.icon"></v-icon>
            <span>{{group.name}}</span>
            <v-spacer></v-spacer>
          </v-tab>

          <!-- Same for its content, JSON based -->
     
          <v-tab-item  v-for="group in groups" :key="group.id">
           
            <v-card flat> <!-- The card component that holds next card, so i only create one table-->

                <v-card flat class="pa-3" v-for="note in group.notes" :key="note.title" >
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

                <hr>

                <!-- The table (delete hr)-->
                <v-card-title>
                  Nutrition
                  <v-spacer></v-spacer>
                  <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="Search"
                    single-line
                    hide-details
                  ></v-text-field>
                </v-card-title>

                <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :search="search"
                ></v-data-table>

            </v-card>

          </v-tab-item>

        </v-tabs>
      </v-card>
     

    </v-container>
  </div>
</template>

<script>


export default {
  name: 'About',
  // Written like this, data doesn't need return {}
  data: () => ({
    yes: true,
    groups:{
      Vuetify :{
          name: 'Vuetify', 
          icon: 'logos:vuetifyjs',
          notes: [
            { 
              title: 'Introduction to Vuetify',
              owner: 'Madochan', 
              seen: "1 week ago", 
              tag: 'Course1', 
              content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id amet itaque minima quae. Sapiente ipsam ab eligendi fugiat debitis nesciunt corrupti repellat asperiores vero qui doloremque maiores cum, consequatur ea?' 
            },
            { //4
              title: 'Testing Vuetify - simple job!', 
              owner: 'Madut', 
              seen: "3 min ago", 
              tag: 'Precious', 
              content:'  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores optio corrupti, ipsa nisi voluptatum rem beatae eaque est consequatur labore, ipsam iure at accusamus quisquam incidunt ipsum! Deserunt, ullam? Sed.' 
            },
          ],
      },      
      JavaScript :{
          name: 'JavaScript', 
          icon: 'logos:javascript',
          notes: [
            { 
              title: 'Classes and colors in JS', 
              owner: 'Ana', 
              seen: "4 days ago", 
              tag: 'ToLearn', 
              content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi quis accusantium sit numquam nobis quasi incidunt aut dolores, similique obcaecati id animi cupiditate deleniti voluptas nisi ipsam minima qui assumenda.' 
            },
          ],
      }, 
      VueJs :{
          name: 'VueJs', 
          icon: 'logos:vue',
          notes: [
            { //3
              title: 'All about Directives in Vue', 
              owner: 'Christian', 
              seen: "1 month ago", 
              tag: 'MustDo', 
              content:'  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores optio corrupti, ipsa nisi voluptatum rem beatae eaque est consequatur labore, ipsam iure at accusamus quisquam incidunt ipsum! Deserunt, ullam? Sed.' 
            },
          ],
      }, 
      // Sass :{
        //     name: 'Sass', 
        //     icon: 'logos:sass',
        //     notes: [
        //       { //3
        //         title: 'Sass-licious!', 
        //         owner: 'Cory', 
        //         seen: "1 month ago", 
        //         tag: 'MustDo', 
        //         content:'  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores optio corrupti, ipsa nisi voluptatum rem beatae eaque est consequatur labore, ipsam iure at accusamus quisquam incidunt ipsum! Deserunt, ullam? Sed.' 
        //       },
        //     ],
      // }, 
    },
    search: '',
    headers: [
      {
        text: 'Dessert (100g serving)',
        align: 'left',
        sortable: false,
        value: 'name',
      },
      { text: 'Calories', value: 'calories' },
      { text: 'Fat (g)', value: 'fat' },
      { text: 'Carbs (g)', value: 'carbs' },
      { text: 'Protein (g)', value: 'protein' },
      { text: 'Iron (%)', value: 'iron' },
    ],
    desserts: [
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: '1%',
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: '1%',
      },
      {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: '7%',
      },
      {
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: '8%',
      },
      {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: '16%',
      },
      {
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: '0%',
      },
      {
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: '2%',
      },
      {
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: '45%',
      },
      {
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: '22%',
      },
      {
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: '6%',
      },
    ],
     

  }),

}
</script>

<style lang="css" >
/* .iconify { color: #7BC6FF !important} */
</style>