<template>
  <div class="communities">
    <div class="community--icon">
      <span>
        <i class="icon-home"></i>
      </span>
    </div>

    <div v-if="communities.length > 1" class="community--seperator"></div>

    <div v-for="community in communities" :key="community._id">
      <img
        class="community--icon"
        v-if="community.icon_url"
        :src="community.icon_url"
        :alt="community.name"
      />
      <div v-else class="community--icon">
        <span>CG</span>
      </div>
    </div>

    <div class="community--seperator"></div>

    <div class="community--icon">
      <span>
        <i class="icon-add"></i>
      </span>
    </div>

    <slot />
  </div>
</template>

<script>
export default {
  name: 'CommunitiesList',
  props: ['communities'],
};
</script>

<style lang="scss" scoped>
.communities {
  background: $background-dark;
  height: 100%;
  width: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 12px;
}

.community--icon {
  width: 50px;
  height: 50px;
  background: $icon-gray;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  cursor: pointer;
  color: white;
  position: relative;
  transition: all 0.2s ease-in-out;
  &.active {
    &:before {
      content: "";
      position: absolute;
      left: 0;
      width: 13px;
      background: white;
      height: 46px;
      border-radius: 33px;
      margin-left: -19px;
    }
  }

  &:hover {
    border-radius: 25%;
    background: $primary;
  }
}

.community--seperator {
  width: 30px;
  height: 2px;
  background: $icon-gray;
  margin-bottom: 10px;
  border-radius: 2px;
}
</style>