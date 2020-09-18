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
                albumId: 1,
                _id: 1,
                comment: "comment one"
            },
            {
                albumId: 1,
                _id: 2,
                comment: "comment two"
            },
        ]
    },
    getters: {
        getComments(state) {
            return state.comments
        },
        // getComments: (state) => (id) => {
        //     return state.comments.find(comment => comment.albumId === id)
        // }
    }
}