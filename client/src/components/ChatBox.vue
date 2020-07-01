<template>
  <form class="chatbox" @submit.prevent="sendMessage()">
    <input
      v-model="message"
      class="chatbox--input"
      placeholder="Send a Message"
    />
  </form>
</template>

<script>
import { ref } from '@vue/composition-api';
import { useActions } from '@u3u/vue-hooks';

export default {
  setup() {
    const message = ref('');

    const { createMessage } = useActions('messages', ['createMessage']);

    const sendMessage = () => {
      createMessage({
        text: message.value,
      });
      message.value = '';
    };

    return {
      sendMessage,
      message,
    };
  },
};
</script>

<style lang="scss">
.chatbox {
  display: flex;
  margin-top: auto;
  padding: 15px;

  .chatbox--input {
    background: $primary;
    width: 100%;
    border: 0;
    border-radius: 100px;
    padding: 10px;
    color: white;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: white;
    }
  }
}
</style>
