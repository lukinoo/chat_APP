<script lang="ts">
</script>

<section>
  <div class="messages-list">
    <div class="message">
      <img src="" alt="" />
      <p>this is message</p>
    </div>
    <div class="message">
      <img src="" alt="" />
      <p>this is message</p>
    </div>
    <div class="message">
      <img src="" alt="" />
      <p>this is message</p>
    </div>
    <div class="message">
      <img src="" alt="" />
      <p>this is message</p>
    </div>
    <div class="message">
      <img src="" alt="" />
      <p>this is message</p>
    </div>
    <div class="message">
      <img src="" alt="" />
      <p>this is message</p>
    </div>
    <div class="message">
      <img src="" alt="" />
      <p>this is message</p>
    </div>
    <div class="message">
      <img src="" alt="" />
      <p>this is message</p>
    </div>
    <div class="message">
      <img src="" alt="" />
      <p>this is message</p>
    </div>
    <div class="message">
      <img src="" alt="" />
      <p>this is message</p>
    </div>
    <div class="message">
      <img src="" alt="" />
      <p>this is message</p>
    </div>
    <div class="message">
      <img src="" alt="" />
      <p>this is message</p>
    </div>
    <div class="message">
      <img src="" alt="" />
      <p>this is message</p>
    </div>
    <div class="message">
      <img src="" alt="" />
      <p>this is message</p>
    </div>
    <div class="message">
      <img src="" alt="" />
      <p>this is message</p>
    </div>
    <div class="message">
      <img src="" alt="" />
      <p>this is message</p>
    </div>
    <div class="message">
      <img src="" alt="" />
      <p>this is message</p>
    </div>
    <div class="message">
      <img src="" alt="" />
      <p>this is message</p>
    </div>
  </div>
</section>

<style>
  section {
    width: 100%;
    /* background: lightblue; */
  }

  section .messages-list {
    max-width: 100%;
    height: 76vh;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem 0;
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

  section .messages-list .message {
    height: 50px;
    color: #fff;
    /* background: lightgreen; */
  }
</style>
