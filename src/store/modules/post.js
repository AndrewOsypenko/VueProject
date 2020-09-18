export default {
    actions: {
        async fetchPosts(ctx, limit = 3) {
            const res = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos?_limit=' + limit)
            const photos = await res.json()
            ctx.commit('updatePosts', photos)
        }
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
    },
    state: {
        posts: []
    },
    getters: {
        allPosts(state) {
            return state.posts
        },
        postsCount(state) {
            return state.posts.length
        }
    }
}