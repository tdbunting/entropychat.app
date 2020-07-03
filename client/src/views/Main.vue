<template>
  <div class="main">
    <CommunitiesList :communities="communities">
      <!-- This button appears as last element in communities list -->
      <button @click="logout()" class="signout--button">
        <i class="icon-sign-out"></i>
      </button>
    </CommunitiesList>

    <div class="community--wrapper">
      <!-- List of channels in specified community -->
      <ChannelsList />

      <!-- Chat for specified channel in specified community -->
      <Messages /> 
    </div>
  </div>
</template>

<script>
// IMPLEMENTED JUST LIKE MESSAGES VIEW
import { watch } from '@vue/composition-api';
import { useState, useActions, useRouter } from '@u3u/vue-hooks';
import ChatBox from '@/components/ChatBox.vue';
import Messages from '@/views/Messages.vue'
import CommunitiesList from '@/components/CommunitiesList.vue';
import ChannelsList from '@/components/ChannelsList.vue';

export default {
  components: {
    CommunitiesList,
    ChannelsList,
    Messages,
    ChatBox,
  },
  setup() {
    const { router } = useRouter();

    const { user } = useState('auth', ['user']);
    
    const communities = [
      {
            "_id": "5efbe0a0435ac500769bcd74",
            "public": false,
            "name": "Coding Garden",
            "icon_url": "https://static-cdn.jtvnw.net/jtv_user_pictures/611cac54-34e0-4c2a-851b-66e5ea2b3f81-profile_image-300x300.png",
            "owner_id": "5efb7d31e6fbc9008cc235a5",
        },
        {
            "_id": "5efbe0f4435ac500769bcd75",
            "public": false,
            "name": "Smile Bot",
            "icon_url": "https://cdn.pixabay.com/photo/2016/09/01/08/24/smiley-1635449_1280.png",
            "owner_id": "5efb7d31e6fbc9008cc235a5",
        },
        {
            "_id": "5efbe10d435ac500769bcd76",
            "public": false,
            "name": "Friendsly",
            "icon_url": "https://cdn.pixabay.com/photo/2016/04/01/12/11/avatar-1300582_1280.png",
            "owner_id": "5efb7d31e6fbc9008cc235a5",
        },
        {
            "_id": "5efbe12b435ac500769bcd77",
            "public": false,
            "name": "Pandas",
            "icon_url": "https://cdn.pixabay.com/photo/2017/10/17/05/17/panda-2859555_1280.jpg",
            "owner_id": "5efb7d31e6fbc9008cc235a5",
        }
    ]

    const { logout } = useActions('auth', ['logout']);

    watch(user, () => {
      if (!user.value) {
        router.push('/');
      }
    });

    return {
      user,
      logout,
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