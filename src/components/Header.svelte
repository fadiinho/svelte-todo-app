<script lang="ts">
  import { darkTheme } from "../stores/theme"
  import { createTodo } from "../stores/todos"
  import IconSun from "../assets/icon-sun.svg"
  import IconMoon from "../assets/icon-moon.svg"
  import { Icon, ArrowRight } from "svelte-hero-icons";

  let value = "";

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.code === "Enter" && value) {
      createTodo(value);
      value = "";
    }
  }

  const handleClick = () => {
    if (value) {
      createTodo(value);
      value = "";
    }
  }
</script>

<div class="flex flex-col justify-between items-center pt-10 px-4 w-full ">
  <div class="flex justify-between w-full">
    <h1 class="text-xl tracking-[0.4em] font-extrabold">TODO</h1>
    <span class="cursor-pointer" on:keydown on:click={() => $darkTheme = !$darkTheme}>
      <img alt="theme switch icon" src={ $darkTheme ? IconMoon : IconSun} />
    </span>
  </div>
  <div class="flex text-sm items-center w-full dark:bg-very-dark-desaturated-blue rounded mt-8 mb-4 sm:w-3/4">
    <input 
      bind:value
      on:keydown={handleKeydown}
      class="w-full text-xs p-2 rounded bg-very-light-gray text-very-dark-grayish-blue dark:text-light-grayish-blue dark:bg-very-dark-desaturated-blue"
      placeholder="Create a new todo..."
    />
    <button on:click={handleClick}>
      <Icon src={ArrowRight} size="28" class="pr-2" />
    </button>
  </div>
</div>
