import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user : {
        name: "Jose Annunziato",
        handle: "@jannunzi",
        profilePicture: "mongodb.png",
        bannerPicture: "polyglot.jpeg",
        bio: "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
        website: "youtube.com/webdevtv",
        location: "Boston, MA",
        dateOfBirth: "7/7/1968",
        dateJoined: "4/2009",
        followingCount: 340,
        followersCount: 223
    },
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser(state, action) {
            state.user = action.payload;
        },
    },
});

export default userSlice.reducer;
export const {updateUser} = userSlice.actions;