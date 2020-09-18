<template>
  <v-container>
    <v-card class="postImg text-center" v-for="post in allPosts" :key="post.id">
      <h2>{{post.title}}</h2>
      <v-img
          v-bind:src="post.thumbnailUrl"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="200px"
          margin-bottom="1rem"
      ></v-img>
      <v-card-actions>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-comment</v-icon>
        </v-btn>
      </v-card-actions>
      <v-list class="text-left">
        <v-list-item-content dence v-for="comm in allComments" :key="comm.id">
          <v-list-item-title v-text="comm.albumId"></v-list-item-title>
          <v-list-item-subtitle v-text="comm.comment"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list>

      <form>
        <div class='commentForm'>
          <v-text-field v-model="comments[post.id]" placeholder="Write a comment..." rounded></v-text-field>
          <v-btn @click="addComment(post)"  text small>add comment</v-btn>
        </div>
      </form>
    </v-card>
  </v-container>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  data(){
    return {
      comments: {}
    }
  },
  components: {
  },
  computed: {
    allComments() {
      return this.$store.getters.getComments
    },
    ...mapGetters(["allPosts", "postsCount"])
  },
  methods: {
    addComment(post) {
      console.log(post)
      this.createComment({
        albumId: post.albumId,
        _id: post.id,
        comment: this.comments[post.id]
      })
      this.comment = this.comment = "";
    },
    ...mapActions(["fetchPosts"]),
    ...mapMutations(["createComment"])
  },
  async mounted() {
    this.fetchPosts();
  }
}
</script >


<style>

.commentForm {
  display: flex;
}

.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.postImg {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}
</style>