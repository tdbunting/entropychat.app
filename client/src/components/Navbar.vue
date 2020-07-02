<template>
  <nav class="navbar">
    <h3><i class="icon-hashtag"></i>Channel Name</h3>    
    <div>
      <i class="icon-notification mr-1"></i>
      <i class="icon-group mr-1"></i>
      <i class="icon-search mr-1"></i>
    
      <input type="text" class="search--input" placeholder="Search..." />
    </div>
    <!-- <Button @click.native="logout()">Log Out</Button> MOVED TO COMMUNITIES LIST FOR NOW -->
  </nav>
</template>

<script>
import { useActions } from '@u3u/vue-hooks';

export default {
  setup() {
    const { logout } = useActions('auth', ['logout']);

    return {
      logout,
    };
  },
};
</script>

<style lang="scss">
nav {
  background: $bg_dark;
  color: white;
  display: flex;
  justify-content: space-between;
  height: 40px;
  padding: 15px;
  align-items: center;

  .search--input {
    background: $nav-dark;
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

  h3 {
    margin: 0;
    font-size: 14px;
    i {
      margin-right: 15px;
    }
  }
}
</style>