<template>
  <div class="communities">
    <div class="community--icon">
      <span><i class="fa fa-home"></i></span>
    </div>
    <div class="community--seperator"></div>
    <div class="community--icon">
      <span>CG</span>
    </div>
    <div class="community--icon">
      <span>CG</span>
    </div>
    <div class="community--icon">
      <span>CG</span>
    </div>
    <div class="community--seperator"></div>
    <div class="community--icon">
      <span><i class="fa fa-plus"></i></span>
    </div>

    <button class="signout--button" @click="logout()">
      <i class="fa fa-sign-out"></i>
    </button>
  </div>
</template>

<script>
import { useActions } from '@u3u/vue-hooks'

export default {
  name: 'CommunitiesList',
  setup() {
    const { logout } = useActions('auth', ['logout'])

    return {
      logout
    }
  }
}
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
      content: '';
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

.signout--button {
  background: none;
  color: white;
  outline: none;
  border: none;
  margin-top: auto;
  margin-bottom: 5px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: $background-light;
  }
}
</style>
