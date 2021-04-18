<template>
  <div>
    Filter Todos:
    <select @change="filterTodos">
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
      <option value="1">1</option>
    </select>
  </div>
</template>
<script>

import { mapActions } from "vuex";
export default {
  name: "FilterTodo",
  methods: mapActions(["filterTodos"]),
};
</script>

<style scoped>
select {
  margin-top: 20px;
  margin-left: 5px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>
