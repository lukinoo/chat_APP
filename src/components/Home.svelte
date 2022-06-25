<script lang="ts">
  import Form from "./Form.svelte";
  import Header from "./Header.svelte";
  import Section from "./Section.svelte";

  export let messages: any[];

  // const { displayName, uid, photoURL } = auth.currentUser;

  // console.log(auth.currentUser);
  // console.log(messages);
</script>

<div class="home-container">
  <Header />
  <Section />
  <Form />
</div>

<style>
  .home-container {
    min-height: 100vh;
    background: #1b1c1f;
  }
</style>
