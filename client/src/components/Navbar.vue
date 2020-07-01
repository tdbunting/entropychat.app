<template>
  <nav class="navbar">
    <h3><i class="fa fa-circle"></i>Channel Name</h3>
    <input type="text" class="search--input" placeholder="Search..." />
    <!-- <Button @click.native="logout()">Log Out</Button> MOVED TO COMMUNITIES LIST FOR NOW -->
  </nav>
</template>

<script>
import { useActions } from '@u3u/vue-hooks'
import Button from '@/components/Button.vue'

export default {
  components: {
    Button
  },
  setup() {
    const { logout } = useActions('auth', ['logout'])

    return {
      logout
    }
  }
}
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
    background: $background-mid;
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
