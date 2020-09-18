<template>
  <v-container >
    <h1 class="text-center">{{postsCount}}</h1>
    <PostForm/>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
import PostForm from "@/components/post";

export default {
  name: 'Home',
  components: {
    PostForm
  },
  computed: mapGetters(["postsCount"]),
}
</script >

<style>

</style>