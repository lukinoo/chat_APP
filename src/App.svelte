<script lang="ts">
  let count: number = 0;

  const incrementHandler = (): void => {
    count += 1;
  };

  const decrementHandler = (): void => {
    count -= 1;
  };
</script>

<main>
  <h1>Count {count}</h1>
  <button on:click={incrementHandler}>increment</button>
  <button on:click={decrementHandler}>decrement</button>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
