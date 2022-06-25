<script lang="ts">
  import Welcome from "./components/Welcome.svelte";
  import Home from "./components/Home.svelte";
  import { auth } from "./firebase/index";
  import Router from "svelte-spa-router";
  import { onMount } from "svelte";
  import { db } from "./firebase/index";

  let isUser: boolean;
  let messages: any[] = [];

  auth.onAuthStateChanged((user) => {
    if (user) {
      return (isUser = true);
    }

    isUser = false;
  });

  onMount(() => {
    db.collection("messages")
      .orderBy("timestamp")
      .onSnapshot((snapshot) => {
        messages = [
          snapshot.docs.map((doc) => ({
            id: doc.id,
            text: doc.data().text,
          })),
        ];
      });
  });
</script>

<main>
  {#if isUser}
    <Home {messages} />
  {:else}
    <Welcome />
  {/if}
</main>

<style>
</style>
