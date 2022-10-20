<script lang="ts">
  import { todos, removeCompleted } from "../stores/todos";
  import TodoItem from "./TodoItem.svelte"; 
</script>


<div class="flex flex-col justify-center items-center px-4 w-full sm:w-3/4">
  <div id="todos" class="flex flex-col w-full rounded overflow-hidden divide-y dark:divide-very-dark-grayish-2">
    {#each $todos as item}
      <TodoItem id={item.id} text={item.text} checked={item.completed} />
    {/each}
    <div class="w-full flex justify-between p-4 items-center bg-very-light-gray dark:bg-very-dark-desaturated-blue text-xs text-dark-grayish-blue">
      <span>{$todos.length} items left</span>
      <button on:click={removeCompleted}>Clear Completed</button>
    </div>
  </div>
</div>
