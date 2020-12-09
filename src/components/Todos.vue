<template>
  <div>
    <h3>Todos</h3>
    <div class="todos">
      <div v-for="todo in allTodos" :key="todo.id" class="todo">
        {{ todo.title }}
        <i class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchTodos"]),
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
</style>