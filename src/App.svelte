<script lang="ts">
  import { auth } from "./firebase/index";
  import { loginWithGoogle, logout } from "./auth/auth";

  let isUser: boolean = true;

  auth.onAuthStateChanged((user) => {
    if (user) {
      return (isUser = true);
    }

    isUser = false;
  });
</script>

<main>
  <h1>hello, world {isUser}</h1>
  {#if isUser}
    <h2>this is user</h2>
    <button on:click={logout}>sign out</button>
  {:else}
    <button on:click={loginWithGoogle}>sing in with google</button>
  {/if}
</main>

<style>
  h1 {
    color: #ff3e00;
    font-size: 2rem;
    text-align: center;
  }
</style>
