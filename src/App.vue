<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Task Manager App</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
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
  },
  data: () => ({
    //
  })
};
</script>
