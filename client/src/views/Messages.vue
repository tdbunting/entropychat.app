<template>
  <div class="messages">
    <Navbar />
    <div class="messages__main scrollable">
      <Message v-for="message in messages" :key="message._id" :message="message" />
    </div>
    <ChatBox />
  </div>
</template>

<script>
import { watch } from '@vue/composition-api';
import { useState, useActions, useRouter } from '@u3u/vue-hooks';
import Navbar from '@/components/Navbar.vue';
import ChatBox from '@/components/ChatBox.vue';
import Message from '@/components/Message.vue';

export default {
  name: 'Messages',
  components: {
    Navbar,
    ChatBox,
    Message,
  },
  setup() {
    const { router } = useRouter();

    const { user } = useState('auth', ['user']);

    const { loading, messages } = useState('messages', ['messages', 'loading']);

    const { logout } = useActions('auth', ['logout']);

    const { listen } = useActions('messages', ['listen']);

    watch(user, () => {
      if (!user.value) {
        router.push('/');
      }
    });

    listen();

    return {
      user,
      logout,
      loading,
      messages,
    };
  },
};
</script>

<style lang="scss">
.messages{
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  background: $background-light;
}

.messages__main {
  height: 100%;
  position: relative;
}

.scrollable {
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: $bg-dark;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: $primary;
  }

  &::before {
    content: '';
    width: 100vw;
    height: 1rem;
    background: linear-gradient($bg 1%, rgba(1,1,1,0));
    top: 0px;
  }

  &::after {
    content: '';
    width: 100vw;
    height: 50vh;
    background: linear-gradient(rgba(1,1,1,0) 80%, $bg);
    bottom: 0px;
  }
}

</style>