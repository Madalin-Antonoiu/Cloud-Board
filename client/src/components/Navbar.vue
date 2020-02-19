<template>
	<nav>
		
		<!-- Navbar -->
		<v-app-bar flat app >
			
			<!--Burger -->
			<v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
			
			<!-- Title -->
			<v-toolbar-title class="text-uppercase grey--text">
				<span class="font-weight-light">Cloud</span>
				<span>board</span>
			</v-toolbar-title>

			<!-- Title Icon Logo -->
			<v-icon large class="pl-1 grey--text text--lighten-2">mdi-developer-board</v-icon>
			
			<!-- Push next element to right side-->
			<v-spacer></v-spacer>

			<!--Sign Out Button -->
			<v-btn text color="grey" small >
				<span class="grey--text">Sign Out</span>
				<v-icon right color="grey">mdi-exit-to-app</v-icon>
			</v-btn>
			
		</v-app-bar>

		<!-- Drawer -->
		<v-navigation-drawer app v-model="drawer" class="indigo">
			<p>test</p>
		</v-navigation-drawer>

	</nav>
</template>

<script>
export default {
      data: () => ({
				drawer: false,
  }),
}
</script>