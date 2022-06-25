<script lang="ts">
  import { auth } from "../firebase";
  import { db } from "../firebase/index";

  let input: string = "";

  const { displayName, uid, photoURL } = auth.currentUser;

  const sendMessage = async (e: Event) => {
    e.preventDefault();

    await db.collection("messages").add({
      text: input,
      uid,
      photoURL,
      displayName,
    });

    input = "";
  };
</script>

<form on:submit={sendMessage}>
  <input
    placeholder="type something..."
    id="message"
    class="form__field"
    bind:value={input}
    type="text"
  />
  <button class="form__button" disabled={!input.trim()} type="submit">🚀</button
  >
</form>

<style>
  form {
    min-height: 12vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: lightseagreen; */
    background: #18181c;
  }

  form .form__field {
    width: 25%;
    font-family: inherit;
    outline: none;
    color: #111;
    border: none;
    background: #fff;
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }

  form .form__field::placeholder {
    font-family: inherit;
  }

  form .form__button {
    padding: 0.5rem;
    font-family: inherit;
    font-size: 1rem;
    border: none;
    background: #fff;
  }
</style>
