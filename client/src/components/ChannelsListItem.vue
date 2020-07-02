<template>
  <div class="channels--list-item">
    <div class="channels--list-header">
      <h4>{{channelListGroup.name}}</h4>
      <span>
        <i class="icon-add"></i>
      </span>
    </div>
    <div class="channels--list-content">
      <div 
        v-for="channel in channelListGroup.channels"
        :key="channel.id"
        class="channels--list-content-item">
        <span>
          <i class="icon-hashtag"></i>
        </span>
        <p>{{channel.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChannelsListItem',
  props: ['channelListGroup'],
};
</script>

<style lang="scss" scoped>
.channels--list {
  padding: 15px 0;
}

.channels--list-header {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-bottom: 5px;
  padding: 0 10px;
  align-items: center;
  h4 {
    font-size: 12px;
    margin: 0;
    text-transform: uppercase;
    span {
      padding: 0 5px;
    }
  }
}

.channels--list-content-item {
  display: flex;
  align-items: center;
  padding: 2px 10px;
  margin: 0 5px;
  border-radius: 5px;
  &:hover {
    background: var(--color-grey-channelHover);
    color: white;
  }
  span {
    margin-right: 10px;
  }
  p {
    font-size: 12px;
    margin: 0;
    font-weight: 500;
  }
}
</style>