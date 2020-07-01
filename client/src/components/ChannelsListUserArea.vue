<template>
  <!-- USER AREA IN CHANNEL PANEL -->
  <div class="channels--user-area">
    <div class="name">
      <img v-if="user.image" class="user-icon" :src="user.image" />
      <span v-else class="user-icon">
        {{ user.github_username[0].toUpperCase() }}
      </span>
      <div class="title">
        <h4>{{ user.github_username }}</h4>
        <span class="subtext">online</span>
      </div>
    </div>
    <div class="icons">
      <span>
        <i class="fa fa-microphone" />
      </span>
      <span>
        <i class="fa fa-headphones" />
      </span>
      <span>
        <i class="fa fa-cog" />
      </span>
    </div>
  </div>
</template>

<script>
import { useState } from '@u3u/vue-hooks';

export default {
  setup() {
    const { user } = useState('auth', ['user']);

    return { user };
  },
};
</script>

<style lang="scss" scoped>
.channels--user-area {
  background: #120e19;
  margin-top: auto;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .name {
    display: flex;

    .user-icon {
      width: 35px;
      height: 35px;
      background: white;
      color: $icon-gray;
      border-radius: 50%;
      align-items: center;
      justify-items: center;
      text-align: center;
      margin-right: 10px;
    }

    h4 {
      margin: 10px 0 3px;
      color: white;
      line-height: 0;
    }

    .subtext {
      color: $icon-gray;
      font-size: 12px;
    }
  }

  .icons {
    margin-left: 5px;
    display: flex;
    flex-direction: row;
    span {
      padding: 10px;
    }
  }
}
</style>