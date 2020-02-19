<template>
	<nav>
		<v-navigation-drawer app v-model="drawer" class="indigo">
			<p>test</p>
		</v-navigation-drawer>


		<v-app-bar flat app >
			
			<v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>

			<v-toolbar-title class="text-uppercase grey--text">
				<span class="font-weight-light">Cloud</span>
				<span>.admin</span>
			</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-btn text color="grey" small >
				<span class="grey--text">Sign Out</span>
				<v-icon right color="grey">mdi-exit-to-app</v-icon>
			</v-btn>
			
		</v-app-bar>



	</nav>
</template>

<script>
export default {
      data: () => ({
				drawer: false,
  }),
}
</script>