<template>
  <div id="app">
    <div class="container">
      <AddTodo />
      <FilterTodo />
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";
import AddTodo from "./components/AddTodo.vue";
import FilterTodo from "./components/FilterTodo.vue";

export default {
  name: "app",
  components: {
    Todos,
    AddTodo,
    FilterTodo,
  },
};
</script>
