<script lang="ts">
  import { auth } from "../firebase";
  import { fly } from "svelte/transition";
  import type { Message } from "../types/index";

  export let message: Message;

  const { text, uid, photoURL, displayName } = message;

  // sender or reciver
  const send_revicer = uid === auth.currentUser.uid ? "send" : "recived";
</script>

<div class={`message ${send_revicer}`}>
  <img src={photoURL} alt={displayName} />
  <p>{text}</p>
</div>

<style>
  .message {
    display: flex;
    align-items: center;
    margin: 6px 0;
  }

  .message img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 2px 5px;
    object-fit: cover;
  }

  .message p {
    max-width: 300px;
    font-size: 1rem;
    line-height: 24px;
    padding: 5px 15px;
    font-weight: 300;
    border-radius: 8px;
    color: #000000;
    background: #ff3e00;
    overflow-wrap: break-word;
  }

  .message.send {
    flex-direction: column;
  }

  .message.send p {
    align-self: flex-start;
    border-bottom-right-radius: 1px;
    color: #fff;
  }

  .message.recived p {
    border-bottom-left-radius: 3px;
    background: #ddd;
  }
</style>
