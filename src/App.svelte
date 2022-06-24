<script lang="ts">
  import Hello from "./Hello.svelte";

  let count: number = 0;

  const increment = () => (count += 1);

  const decrement = () => (count -= 1);
</script>

<main>
  <h1>count => {count}</h1>
  <button on:click={increment}>increment</button>
  <button on:click={decrement}>decrement</button>
</main>

<style>
  h1 {
    color: #ff3e00;
    font-size: 2rem;
    text-align: center;
    margin-top: 5rem;
  }
</style>
