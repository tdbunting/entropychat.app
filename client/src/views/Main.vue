<template>
  <div class="main">
    <CommunitiesList :communities="communities">
      <!-- This button appears as last element in communities list -->
      <button @click="logout()" class="signout--button">
        <i class="fa fa-sign-out"></i>
      </button>
    </CommunitiesList>

    <div class="community--wrapper">
      <!-- List of channels in specified community -->
      <ChannelsList />

      <!-- Chat for specified channel in specified community -->
      <div class="channel--content">
        <!-- Change to Channel Chat Navbar -->
        <Navbar />

        <div class="messages">
          <Message v-for="message in messages" :key="message._id" :message="message" />
        </div>
        <ChatBox />
      </div>
    </div>
  </div>
</template>

<script>
// IMPLEMENTED JUST LIKE MESSAGES VIEW
import { watch } from '@vue/composition-api';
import { useState, useActions, useRouter } from '@u3u/vue-hooks';
import Navbar from '@/components/Navbar.vue';
import ChatBox from '@/components/ChatBox.vue';
import Message from '@/components/Message.vue';
import CommunitiesList from '@/components/CommunitiesList.vue';
import ChannelsList from '@/components/ChannelsList.vue';

export default {
  components: {
    CommunitiesList,
    ChannelsList,
    Navbar,
    Message,
    ChatBox,
  },
  setup() {
    const { router } = useRouter();

    const { user } = useState('auth', ['user']);
    const { communities } = useState('communities', ['communities']);

    const { loading, messages } = useState('messages', ['messages', 'loading']);

    const { logout } = useActions('auth', ['logout']);

    const { listen } = useActions('messages', ['listen']);

    const { getCommunities } = useActions('communities', ['getCommunities']);

    getCommunities();

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
      communities,
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  height: 100vh;
  display: flex;
}

.community--wrapper {
  background: $background-light;
  width: 100%;
  height: 100%;
  display: flex;
}

.channel--content {
  width: 100%;
  background: $background-light;
  display: flex;
  flex-direction: column;
}

.messages {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}

.signout--button {
  display: flex;
  background: none;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: auto;
  margin-bottom: 5px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-radius: 25%;
    background: $icon-gray;
  }
}
</style>
