<template>
  <v-app>
    <v-app-bar app color="deep-purple accent-4" dense dark>
      <v-toolbar-title class="headline text-uppercase">
        <span>Task Manager App</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-app-bar>
    <v-content>
      <task-list-component />
    </v-content>
  </v-app>
</template>

<script>
import TaskListComponent from "./components/TaskListComponent.vue";

export default {
  name: "App",
  components: {
    TaskListComponent
  }
};
</script>
