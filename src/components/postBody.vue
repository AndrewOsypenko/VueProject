<template>
  <v-container>
    <post v-for="post in allPosts"
                  :post="post"
                  :key="allPosts.indexOf(post)">
    </post>
  </v-container>
</template>

<script>
import {mapGetters, mapActions,} from 'vuex'
import Post from "./post";

export default {
  components: {
    Post
  },
  computed: {
    ...mapGetters(["allPosts", "postsCount"]),
  },
  methods: {
    ...mapActions(["fetchPosts"]),
  },
  async mounted() {
    await this.fetchPosts();
  }
}
</script >

<style scoped>
</style>