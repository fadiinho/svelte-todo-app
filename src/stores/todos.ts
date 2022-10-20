import { writable } from "svelte/store";
import type { Todo } from "../types/Todos";

let id = 1;

export const todos = writable<Todo[]>([]);

export const createTodo = (text: string) => {
  todos.update((_todos) => [..._todos, { id: id++, text, completed: false } as Todo]);
}

export const removeTodo = (todoId: number) => {
  todos.update((_todos) => _todos.filter((_todo) => _todo.id !== todoId))
}

export const toggleTodo = (todoId: number) => {
  todos.update((_todos) => {
    const _matchedTodo = _todos.find((_todo) => _todo.id === todoId);
    _todos[_todos.indexOf(_matchedTodo)] = { ..._matchedTodo, completed: !_matchedTodo.completed }
    return _todos;
  })
}

export const removeCompleted = () => {
  todos.update((_todos) => {
    console.log(_todos.filter((_todo) => !_todo.completed))
    return _todos.filter((_todo) => !_todo.completed);
  })
}
