<template>
    <v-card class="postImg text-center">
      <h2>{{post.title}}</h2>
      <v-img
          :src="post.thumbnailUrl"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="200px"
          margin-bottom="1rem"
      ></v-img>
      <v-card-actions>
        <v-btn @click="like" icon  >
          <v-icon :color="iconColor">mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-comment</v-icon>
        </v-btn>
      </v-card-actions>
      <p>{{likes}} Likes</p>
      <v-list class="text-left">
        <v-list-item-content dence v-for="com in getC(post.id)" :key="com._id">
          <v-list-item-title v-text="com.albumId"></v-list-item-title>
          <v-list-item-subtitle font-size="0.2rem" v-text="com.comment"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list>

      <form>
        <div class='commentForm'>
          <v-text-field v-model="comment" placeholder="Write a comment..." rounded></v-text-field>
          <v-btn @click="addComment(post)"  text small>add comment</v-btn>
        </div>
      </form>
    </v-card>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  props: {
    post: Object
  },
  data(){
    return {
      likes: 0,
      comment: "",
      isLiked: false,
      iconColor: "#5f6464"
    }
  },
  components: {
  },
  computed: {
    ...mapGetters(["allPosts", "postsCount"]),
  },
  methods: {
    addComment(post) {
      this.createComment({
        albumId: post.albumId,
        _id: Date.now(),
        postId: post.id,
        comment: this.comment
      })
      this.comment = this.comment = "";
    },
    getC(id){
      return this.$store.getters.getCurrentComments(id)
    },

    like() {
      this.isLiked ? this.iconColor = "#5f6464" : this.iconColor = "#ef3535"
      this.isLiked ? this.likes-- : this.likes++;
      this.isLiked = !this.isLiked;
      console.log('click');
    },
    ...mapGetters(["getCurrentComments"]),
    ...mapMutations(["createComment"])
  },
}
</script >


<style scoped>

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