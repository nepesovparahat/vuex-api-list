<template>
  <div>
    <h3>Todos</h3>
    <span>Double click to mark as complete </span>
    <span><span class="incomplete-box"></span> =Incomplete </span>
    <span><span class="complete-box"></span> =Complete </span>
    <div class="todos">
      <div
        @click="onClick(todo)"
        v-for="todo in allTodos"
        :key="todo.id"
        class="todo"
        v-bind:class="{ 'is-complete': todo.completed }"
      >
        {{ todo.title }}
        <i @click="deletTodo(todo.id)" class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>
<script>

import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchTodos", "deletTodo", "updateTodo"]),
    onClick(todo) {
      const update = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };
      this.updateTodo(update);
    },
  },

  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  },
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: lightgreen;
  padding: 1 rem;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  position: relative;
}
i {
  position: absolute;
  bottom: 2px;
  right: 10px;
  color: deeppink;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #0c4c91;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #16b453;
}
.is-complete {
  background: #0c4c91;
  color: #fff;
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
