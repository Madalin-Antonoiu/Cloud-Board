<template>
  <div class="notes">
 
    <v-subheader class="px-0 grey--text">
      Notes
    </v-subheader>
      
    <v-container class="my-5">

      <!--Card Background -->
      <v-card flat class="pa-3">
          <!-- Vuetify Vertical Tabs-->
         <v-tabs vertical>
          <!-- 1st Tab -->
          <v-tab>
            <v-icon left>fab fa-vuejs</v-icon>
            <span>VueJs</span>
            <v-spacer></v-spacer>
          </v-tab>

          <!-- Tab2 -->
          <v-tab>
            <v-icon left>fab fa-js-square</v-icon>
            <span>JavaScript</span>
            <v-spacer></v-spacer>
          </v-tab>

          <!-- Tab3 -->
          <v-tab>
            <v-icon left>fab fa-sass</v-icon>
            <span>Sass</span>
            <v-spacer></v-spacer>
          </v-tab>

          <!-- Tab4 -->
          <v-tab>
            <!-- To use iconify with vuetify, add these to v-icon : class="iconify" data-icon="mdi-vuetify" -->
            <v-icon left class="iconify" data-icon="mdi-vuetify"></v-icon>
            <span>Vuetify</span>
            <v-spacer></v-spacer>
          </v-tab>

          <!-- 1st Tab Content -->
          <v-tab-item>

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

          </v-tab-item>


          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <p>
                  Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
                </p>

                <p>
                  Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
                </p>

                <p>
                  Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
                </p>

                <p>
                  Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
                </p>

                <p class="mb-0">
                  Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <p>
                  Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                </p>

                <p class="mb-0">
                  Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
                </p>
              </v-card-text>
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
    notes: [
      { title: 'Introduction to Vuetify', owner: 'Madochan', seen: "1 week ago", tag: 'Vuetify', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id amet itaque minima quae. Sapiente ipsam ab eligendi fugiat debitis nesciunt corrupti repellat asperiores vero qui doloremque maiores cum, consequatur ea?' },
      { title: 'Classes and colors in JS', owner: 'Ana', seen: "4 days ago", tag: 'JavaScript', content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi quis accusantium sit numquam nobis quasi incidunt aut dolores, similique obcaecati id animi cupiditate deleniti voluptas nisi ipsam minima qui assumenda.' },
      { title: 'All about Directives in Vue', owner: 'Christian', seen: "1 month ago", tag: 'Vue', content:'  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores optio corrupti, ipsa nisi voluptatum rem beatae eaque est consequatur labore, ipsam iure at accusamus quisquam incidunt ipsum! Deserunt, ullam? Sed.' },
    ],
  }),
}
</script>

<style lang="css" >
.iconify { color: #7BC6FF !important}
</style>