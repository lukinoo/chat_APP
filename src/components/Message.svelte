<script>
</script>

<div class="message send">
  <img src="" alt="" />
  <p>this is message</p>
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
    border-radius: 25px;
    color: #000000;
    background: #ff3e00;
    overflow-wrap: break-word;
  }

  .message.send {
    align-self: flex-end;
  }

  .message.recived {
    align-self: flex-start;
  }

  .message.recived p {
    border-bottom-left-radius: 3px;
    background: #ddd;
  }

  .message.send p {
    border-bottom-right-radius: 3px;
    color: #fff;
  }
</style>
