<template>
	<nav>

		<!-- Navbar (add 'flat' for dropping shadow) -->
		<v-app-bar app flat> 
			
			<!--Burger -->
			<v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
			
			<!-- Title -->
			<v-toolbar-title class="text-uppercase grey--text">
				<span class="font-weight-light">Cloud</span>
				<span>board</span>
			</v-toolbar-title>

			<!-- Title Icon Logo -->
			<v-icon large class="pl-1 grey--text text--lighten-2">developer_board</v-icon>
			
			<!-- Push next element to right side-->
			<v-spacer></v-spacer>

			<!--Sign Out Button -->
			<v-btn text color="grey" small >
				<span class="grey--text">Sign Out</span>
				<v-icon right color="grey">exit_to_app</v-icon>
			</v-btn>
			
		</v-app-bar>

		<!-- Drawer -->
		<v-navigation-drawer app v-model="drawer" class="primary" > 
	
			<v-list shaped > <!-- Dense-->
	
					<v-list-item  v-model="links"  v-for="link in links" :key="link.text" router :to="link.route" exact>

						<v-list-item-icon >
							<v-icon v-text="link.icon" class="white--text"></v-icon>
						</v-list-item-icon>

						<v-list-item-content>
							<v-list-item-title v-text="link.text" class="white--text"></v-list-item-title>
						</v-list-item-content>

					</v-list-item>
			
			</v-list>

			<v-list > <!-- color="white" -->

      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
				color="white"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
          @click="`/`"
        >
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>

		</v-navigation-drawer>

	</nav>
</template>

<script>
export default {
      data: () => ({
				drawer: false,
				// clipped: true,
				// watcher: false,
				links: [
					{icon: 'dashboard', text: 'Dashboard', route: '/mantonoiu'}, //hardcoded username
					{icon: 'folder', text: 'Notes', route: '/mantonoiu/notes/',
						nested1:['VueJs', 'VavaScript'] 
					},
					{icon: 'chat', text: 'Chat', route: '/mantonoiu/chat'},
					{icon: 'fab fa-youtube', text: 'Youtube', route: '/mantonoiu/youtube'},
				],
				items: [
				{
				action: 'local_activity',
				title: 'Attractions',
				items: [
				{ title: 'List Item' },
				],
				},
				{
				action: 'restaurant',
				title: 'Dining',
				active: true,
				items: [
				{ title: 'Breakfast & brunch' },
				{ title: 'New American' },
				{ title: 'Sushi' },
				],
				},
				{
				action: 'school',
				title: 'Education',
				items: [
				{ title: 'List Item' },
				],
				},
				{
				action: 'directions_run',
				title: 'Family',
				items: [
				{ title: 'List Item' },
				],
				},
				{
				action: 'healing',
				title: 'Health',
				items: [
				{ title: 'List Item' },
				],
				},
				{
				action: 'content_cut',
				title: 'Office',
				items: [
				{ title: 'List Item' },
				],
				},
				{
				action: 'local_offer',
				title: 'Promotions',
				items: [
				{ title: 'List Item' },
				],
				},
				],



				}
				)}
</script>