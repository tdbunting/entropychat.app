<template>
  <div class="channels">
    <!-- Change to Server Channels Navbar -->
    <nav>
      <h3>Community Name</h3>
      <!-- ICON FOR COMMUNITY SETTINGS -->
      <span>
        <i class="fa fa-cog" />
      </span>
    </nav>

    <!-- CHANNELS LIST -->
    <div class="channels--list">
      <ChannelsListItem v-for="group in channelGroups" :key="group.id" :channelListGroup="group" />
    </div>

    <!-- USER AREA IN CHANNEL LIST -->
    <ChannelsListUserArea />
  </div>
</template>

<script>
import ChannelsListItem from '@/components/ChannelsListItem.vue';
import ChannelsListUserArea from '@/components/ChannelsListUserArea.vue';

export default {
  name: 'ChannelsList',
  components: {
    ChannelsListItem,
    ChannelsListUserArea,
  },
  setup(){
    const channelGroups = [
      {
        id: 1,
        name: 'Default Channel Group',
        channels: [
          {
            id: 101,
            name: 'General 1'
          },
          {
            id: 102,
            name: 'General 2'
          },
          {
            id: 103,
            name: 'General 3'
          },
          {
            id: 104,
            name: 'General 4'
          },
        ]
      },
      {
        id: 2,
        name: 'Channel Group 2',
        channels: [
          {
            id: 105,
            name: 'Bomb 1'
          },
          {
            id: 106,
            name: 'Bomb 2'
          },
          {
            id: 107,
            name: 'Bomb 3'
          },
          {
            id: 108,
            name: 'Bomb 4'
          },
        ]
      }
    ]
    return { channelGroups }
  }
};
</script>

<style lang="scss" scoped>
.channels {
  background: $background-mid;
  width: 240px;
  height: 100%;
  color: $gray-text;
  display: flex;
  flex-direction: column;
  nav {
    color: white;
    background: #38333f;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    height: 40px;
    h3 {
      margin: 0;
      font-size: 14px;
    }
  }
}

.channels--list {
  padding: 15px 0;
}
</style>