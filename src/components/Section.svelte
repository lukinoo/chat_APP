<script lang="ts">
  import type { Messages } from "../types";

  export let messages: Messages;
</script>

<section>
  <div class="messages-list">
    <pre>{JSON.stringify(messages, null, 2)}</pre>
  </div>
</section>

<style>
  section {
    width: 100%;
  }

  section .messages-list {
    max-width: 100%;
    height: 76vh;
    overflow-y: auto;
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
  }

  section .messages-list::-webkit-scrollbar {
    width: 0.6rem;
  }

  section .messages-list::-webkit-scrollbar-track {
    background: none;
  }

  section .messages-list::-webkit-scrollbar-thumb {
    background: #ff3e00;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  }
</style>
