<script lang="ts">
  import "./app.css";
  import { darkTheme } from "./stores/theme";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import TodoList from "./components/TodoList.svelte";

	$: dark = $darkTheme;
</script>

<div class:dark class="h-screen w-full">
  <div 
    class="flex flex-col items-center w-full h-full bg-very-light-grayish-blue 
            bg-m-header-image sm:bg-d-header-image dark:bg-m-header-image-dark dark:sm:bg-d-header-image-dark
            bg-no-repeat bg-[length:100%_200px] dark:bg-very-dark-blue">
    <Header />
    <TodoList />
    <Footer />
  </div>
</div>
