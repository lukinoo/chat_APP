<script lang="ts">
  import type { Messages } from "../types";

  import Form from "./Form.svelte";
  import Header from "./Header.svelte";
  import Section from "./Section.svelte";

  export let messages: Messages;
</script>

<div class="home-container">
  <Header />
  <Section {messages} />
  <Form />
</div>

<style>
  .home-container {
    min-height: 100vh;
  }
</style>
