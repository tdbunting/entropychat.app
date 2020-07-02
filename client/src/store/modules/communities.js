import feathers from '../../feathers'

export default {
  namespaced: true,
  state: {
    loading: false,
    error: '',
    currentCommunity: null,
    communities: [],
  },
  actions: {
    async getCommunities({ state }) {
      try {
        state.loading = true
        const communities = await feathers.service('communities').find({})
        state.communities = communities.data
      } catch (e) { }
      state.loading = false
    },
  },
}
