<script lang="ts">
  import { auth } from "../firebase";
  import type { Message } from "../types/index";
  import { owner } from "../env";

  export let message: Message;

  const { text, uid, photoURL, displayName } = message;

  // sender or reciver
  const send_revicer = uid === auth.currentUser.uid ? "send" : "recived";
  // admin :)
  const admin = uid === owner ? "admin" : "";
</script>

<div class={`message ${send_revicer} ${admin}`}>
  <img src={photoURL} alt={displayName} />
  <p>{text}</p>
</div>

<style>
  .message {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 6px 0;
  }

  .message img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 2px 5px;
    -o-object-fit: cover;
    object-fit: cover;
  }

  .message p {
    max-width: 350px;
    font-size: 1.2em;
    line-height: 24px;
    padding: 10px 20px;
    font-weight: lighter;
    border-radius: 8px;
    color: #000000;
    background: #ff3e00;
    overflow-wrap: break-word;
  }

  .message.send {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }

  .message.admin p {
    background-image: -o-linear-gradient(
      135deg,
      rgba(59, 173, 227, 1) 0%,
      rgba(87, 111, 230, 1) 25%,
      rgba(152, 68, 183, 1) 51%,
      rgba(255, 53, 127, 1) 100%
    ) !important;
    background-image: linear-gradient(
      -45deg,
      rgba(59, 173, 227, 1) 0%,
      rgba(87, 111, 230, 1) 25%,
      rgba(152, 68, 183, 1) 51%,
      rgba(255, 53, 127, 1) 100%
    ) !important;
    background-size: 300% 300%;
    color: #fff !important;
    -webkit-animation: AnimateBG 15s ease infinite;
    animation: AnimateBG 15s ease infinite;
  }

  @-webkit-keyframes AnimateBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes AnimateBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .message.send p {
    -ms-flex-item-align: start;
    align-self: flex-start;
    border-bottom-right-radius: 1px;
    color: #fff;
  }

  .message.recived p {
    border-bottom-left-radius: 3px;
    background: #ddd;
  }
</style>
