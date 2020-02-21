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
               
                <!-- Toolbar above Table-->
                <v-toolbar dense flat class="mt-1"> <!--style=" opacity: 0.6 " -->

                  <v-btn class="ma-2" outlined small fab color="primary" @click="doTHis">
                    <v-icon >post_add</v-icon>
                  </v-btn>

                  <v-spacer></v-spacer>

                  <v-text-field v-model="search" prepend-inner-icon="search" 
                    style="max-width: 175px;"
                    :rules="rules"
                    maxlength="15"
                    :label=" group.name + ' ' + 'notes'" 
                    dense hide-details outlined
                    placeholder="Search"
                    color="third"
                  ></v-text-field>

                  <v-btn icon class="ml-2">
                    <v-icon>fas fa-eye-slash</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon >delete</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>more_vert</v-icon>
                  </v-btn>

                </v-toolbar>
              

                <v-card flat class="pa-3" > <!-- v-for="note in group.notes" :key="note.title"  -->
                  <!-- <v-layout row class="mx-0">

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

                  </v-layout> -->
                   <!-- :hide-default-header="$vuetify.breakpoint.mdAndDown" -->
                 <!--:dense="$vuetify.breakpoint.mdAndDown" 
                  && dog == 'heightAuto'
                 -->
                    <v-data-table id="table" ref="tableC"
                      :dense="$vuetify.breakpoint.mdAndDown"
                      :headers="headers"
                      :items="group.notes"
                      :search="search"
                      :mobile-breakpoint='NaN'
                    >

                    <template v-slot:item.completed="{ item }">
                      <v-simple-checkbox v-model="item.completed" disabled></v-simple-checkbox>
                    </template>
                      <!--this.$refs.table.hasAttribute('dense') -->
                      <!-- style="height: auto"  only when v-data-table has dense-->
                      <template v-slot:item.tag="{ item }">
                        <v-chip :color="getColor(item.tag)" dark 
                        :class="{'heightAuto' : $vuetify.breakpoint.mdAndDown}"
                        
                        >{{ item.tag }}</v-chip>
                      </template>

                  </v-data-table>
                   

                </v-card>  

          





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
  data() { 
    return { 
      // dog: 'heightAuto',
      yes: true,
      obj: '',
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
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id amet itaque minima quae. Sapiente ipsam ab eligendi fugiat debitis nesciunt corrupti repellat asperiores vero qui doloremque maiores cum, consequatur ea?' ,
                completed: true,
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
        { text: 'Title', align: 'left', value: 'title'}, // sortable: false, , 
        { text: 'Owner', value: 'owner', align: ' d-none' },
        { text: 'Seen', value: 'seen' },
        { text: 'Tag', value: 'tag' },
        { text: 'Completed', value: 'completed' },
      ],
      rules: [v => v.length <= 14 || 'Max 15 characters'],
  }},
  methods: {
 
    doTHis(){
      // let myObj = this.$refs.tableC[0]

      if(this.$refs.tableC[0].dense) {
          this.tableIsDense="true"
      }
      else {
          this.tableIsDense="false"
      }
      
    },
    getColor (tag) {
      //Beware, this generates random color always
      // let color = this.randomColor();
      // return color
      if (tag == 'Course1') return 'blue'
      else if (tag == "ToLearn") return 'yellow'
      else return 'red'
    },

    randomColor(){
        var num = Math.round(0xffffff * Math.random());
        var r = num >> 16;
        var g = num >> 8 & 255;
        var b = num & 255;
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
  },
}
</script>

<style lang="css" >
  .heightAuto {
    height: auto !important;
  }
</style>