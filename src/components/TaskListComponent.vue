<template>
  <v-container grid-list-xs>
    <v-tabs grow>
      <v-tab>
        <v-badge color="primary">
          <template v-slot:badge>
            <span>{{getAll}}</span>
          </template>
          <span>All</span>
        </v-badge>
      </v-tab>
      <v-tab>
        <v-badge color="success">
          <template v-slot:badge>
            <span>{{completedResult}}</span>
          </template>
          <span>Completed</span>
        </v-badge>
      </v-tab>
      <v-tab>
        <v-badge color="warning">
          <template v-slot:badge>
            <span>{{progressResult}}</span>
          </template>
          <span>progress</span>
        </v-badge>
      </v-tab>
      <v-tab-item>
        <v-alert type="warning" v-show="!tasks.length">There is any Task</v-alert>
        <task-component
          v-for="(item,index) in tasks"
          :key="index"
          :task="item"
          @delete-task="deleteTask"
          @complete-task="completeTask"
        />
      </v-tab-item>
      <v-tab-item>
        <v-alert type="error" v-show="!completedAll.length">There is no complete task</v-alert>
        <task-component
          v-for="(item,index) in completedAll"
          :key="index"
          :task="item"
          @delete-task="deleteTask"
          @complete-task="completeTask"
        />
      </v-tab-item>
      <v-tab-item>
        <v-alert type="success" v-show="!progressAll.length">There is no pending task</v-alert>
        <task-component
          v-for="(item,index) in progressAll"
          :key="index"
          :task="item"
          @delete-task="deleteTask"
          @complete-task="completeTask"
        />
      </v-tab-item>
    </v-tabs>

    <task-create-component @save-submitted="save" />
    <v-snackbar v-model="snack_completed" color="success" top>
      Task is completed
      <v-btn text color="default" @click.native="snack_completed = false"></v-btn>
    </v-snackbar>

    <v-snackbar v-model="snack_created" color="info" top right>
      Task is created
      <v-btn text color="info" @click.native="snack_created = false"></v-btn>
    </v-snackbar>
    <v-snackbar v-model="delete_Dialog" color="black" bottom right>
      Task move to trash
      <v-btn text color="primary" @click="undo">Undo</v-btn>
      <v-btn text @click.native="delete_Dialog=false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import TaskComponent from "./TaskComponent.vue";
import TaskCreateComponent from "./TaskCreateComponent.vue";
export default {
  name: "TaskListComponent",
  components: {
    TaskComponent,
    TaskCreateComponent
  },
  data() {
    return {
      tasks: [
        {
          title: "Task1",
          details: "Getting start js",
          done: false
        },
        {
          title: "Task2",
          details: "Learning  Vue js",
          done: true
        }
      ],
      snack_completed: false,
      snack_created: false,
      delete_Dialog: false,
      undoarr: null,
      trashIndex: Number
    };
  },
  methods: {
    deleteTask(task) {
      this.undoarr = task;
      const index = this.tasks.indexOf(task);
      this.trashIndex = index;
      this.tasks.splice(index, 1);
      this.delete_Dialog = true;
    },
    completeTask(task) {
      const index = this.tasks.indexOf(task);
      this.tasks[index].done = true;
      this.snack_completed = true;
    },
    save(saveTask) {
      this.tasks.unshift(saveTask);
      this.snack_created = true;
    },
    undo() {
      this.tasks.splice(this.trashIndex, 0, this.undoarr);
      this.delete_Dialog = false;
    }
  },
  computed: {
    getAll() {
      return this.tasks.length;
    },
    completedResult() {
      return this.tasks.filter(item => item.done).length;
    },
    progressResult() {
      return this.tasks.filter(item => !item.done).length;
    },
    completedAll() {
      return this.tasks.filter(item => item.done);
    },
    progressAll() {
      return this.tasks.filter(item => !item.done);
    }
  }
};
</script>
<style scoped>
</style>