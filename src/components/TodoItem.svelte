<script lang="ts">
  import { removeTodo, toggleTodo } from "../stores/todos";
  import IconCross from "../assets/icon-cross.svg"
  import IconCheck from "../assets/icon-check.svg"
  export let id: number = undefined;
  export let text: string = undefined;

  export let checked: boolean = undefined;
</script>
<div class="w-full flex justify-between p-3 items-center bg-very-light-gray text-very-dark-grayish-blue dark:bg-very-dark-desaturated-blue dark:text-light-grayish-blue">
  <div 
    on:keydown
    on:click={() => toggleTodo(id)}
    class={`flex items-center justify-center place-items-center border border-dark-grayish-blue rounded-full p-2 mx-1 cursor-pointer ${checked ? "bg-gradient-to-br from-gradient-from to-gradient-to" : ""}`}
  >
    <img alt="Mark as completed" src={IconCheck}  class={`w-2 h-2 aspect-auto ${checked ? "" : "opacity-0"}`} />
  </div>
  <span class="flex-1 ml-1 text-sm">
    {text}
  </span>
  <img on:keydown on:click={() => removeTodo(id)} class="w-3 h-3" alt="remove todo" src={IconCross} />
</div>
