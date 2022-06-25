<script lang="ts">
  import { logout } from "../auth/auth";

  let logo: string =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/498px-Svelte_Logo.svg.png?20191219133350";
</script>

<header>
  <div class="header-wrapper">
    <img src={logo} alt="logo" />
    <button class="log__out__button" on:click={logout}>sign out</button>
  </div>
</header>

<style>
  header {
    background: #18181c;
  }

  header .header-wrapper {
    min-height: 12vh;
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  header .header-wrapper img {
    width: 40px;
    height: 50px;
  }

  header .header-wrapper button.log__out__button {
    border-radius: 3px;
    color: #fff;
    font-size: 14px;
    line-height: 1.2em;
    padding: 12px;
    border: 1px solid #ff3e00;
    background: none;
    font-family: inherit;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.3s, color 0.3s;
  }

  header button.log__out__button:hover {
    background: #ff3e00;
  }
</style>
