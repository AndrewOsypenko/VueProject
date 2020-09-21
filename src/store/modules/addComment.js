export default {
    actions: {
    },
    mutations: {
        createComment(state, comment) {
            state.comments.unshift(comment)
        }
    },
    state: {
        comments: [
            {
                _id: 1,
                postId: 1,
                albumId: 1,
                comment: "comment one"
            },
            {
                _id: 2,
                postId: 2,
                albumId: 1,
                comment: "comment two"
            },
            {
                _id: 3,
                postId: 3,
                albumId: 1,
                comment: "comment three"
            },
            {
                _id: 4,
                postId : 3,
                albumId: 21,
                comment: "comment four"
            },
            {
                _id: 5,
                postId : 1,
                albumId: 2,
                comment: "comment five"
            },
        ]
    },
    getters: {
        getCurrentComments: (state) => (id) => {
            return state.comments.filter(comment => comment.postId === id)
        }
    }
}