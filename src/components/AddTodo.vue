<template>
  <div>
    <h3>Add todo</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Add too..." />
        <input type="submit" value="submit" />
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.title);
    },
  },
};
</script>
<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid slategrey;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: slategray;
  border: 1px solid slategray;
  cursor: pointer;
}
</style>