<script lang="ts">
  import { loginWithGoogle } from "../auth/auth";
  import { onDestroy, onMount } from "svelte";
  import { swoop } from "../animations/index"; // imported animation

  let ready: boolean = false;

  onMount(() => (ready = true)); // page mount
</script>

{#if ready}
  <div class="welcome-container">
    <h2 transition:swoop class="welcome-container-title">
      Welcome to the Chat App
    </h2>
    <button
      transition:swoop
      class="welcome-container-button"
      on:click={loginWithGoogle}>sing in with google</button
    >
  </div>
{/if}

<style>
  .welcome-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .welcome-container h2.welcome-container-title {
    color: #ff3e00;
    font-size: 3.5rem;
  }

  .welcome-container button.welcome-container-button {
    border: 1px solid #000;
    border-radius: 3px;
    color: #000;
    font-size: 14px;
    line-height: 1.2em;
    padding: 15px;
    background: none;
    font-family: inherit;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.3s, color 0.3s;
  }

  .welcome-container button.welcome-container-button:hover {
    background: #000;
    color: #fff;
  }
</style>
