import {useTodosStore} from "./todos.js";

export default function useStore() {
    return {
        todosStore: useTodosStore()
    }
}
