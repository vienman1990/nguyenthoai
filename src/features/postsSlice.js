import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: true,
    list: [],
    count: 0,
    currentPage : 1
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        getPosts: (state, action) => {
            state.list = action.payload.posts;
            state.count = action.payload.found;
            state.isLoading = false;
        },
        loadingPosts: (state) => {
            state.isLoading = true;
            state.count = 0;
        }
    },
})

// Action creators are generated for each case reducer function
export const { getPosts, loadingPosts } = postsSlice.actions

export default postsSlice.reducer