<script lang="ts">
  import Welcome from "./components/Welcome.svelte";
  import Home from "./components/Home.svelte";
  import { auth } from "./firebase/index";
  import { db } from "./firebase/index";
  import { collection, onSnapshot, query } from "firebase/firestore";
  import type { Messages } from "./types/index";

  let isUser: boolean;
  let messages: Messages = [];

  auth.onAuthStateChanged((user) => {
    if (user) {
      return (isUser = true);
    }

    isUser = false;
  });

  const q = query(collection(db, "messages"));

  // datas
  onSnapshot(q, (querySnapShot) => {
    let temp_messages = [];

    querySnapShot.forEach((doc) => {
      let msg = { ...doc.data(), id: doc.id };
      temp_messages = [...temp_messages, msg];
    });

    messages = temp_messages;
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
