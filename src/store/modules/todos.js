import axios from 'axios';

const state = {
    todos: []
};
const getters = {
    allTodos: (state) => state.todos
};
const actions = {
    async fetchTodos({ commit }) {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/todos'
        );
        commit('setTodos', response.data);
    },

    // object adding
    async addTodo({ commit }, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false
        });
        commit('newTodo', response.data);
    },
    //object delete
    async deletTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('removeTodo', id);
    },
    //object filter 

    async filterTodos({ commit }, e) {
        // get selected number
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit('setTodos', response.data);
    },
    async updateTodo({ commit }, update) {
        const response = await axios.put(
            `https://jsonplaceholder.typicode.com/todos/${update.id}`,
            update
        );
        console.log(response.data);
        commit('updateTodo', response.data)
    }
};
const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => (state.todos.unshift(todo)),
    removeTodo: (state, id) =>
        (state.todos = state.todos.filter(todo => todo.id != id)),
    updateTodo: (state, update) => {
        const index = state.todos.findIndex(todo => todo.id === update.id);
        if (index !== -1) {
            state.todos.splice(index, 1, update);
        }
    }

};
export default {
    state,
    getters,
    actions,
    mutations
}