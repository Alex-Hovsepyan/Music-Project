import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
    name : 'song',
    initialState : [
        {
            trackNumber : 1,
            songName : "Skyfall",
            artistName : "Adele",
            isLiked : false,
            file : '',
        },
        {
            trackNumber : 2,
            songName : "Mockingbird",
            artistName : "Eminem",
            isLiked : false,
            file : '',
        },
        {
            trackNumber : 3,
            songName : "The wonder of you",
            artistName : "Elvis Presley",
            isLiked : false,
            file : '',
        },
        {
            trackNumber : 4,
            songName : "Unshaken",
            artistName : "D'Angelo",
            isLiked : false,
            file : '',
        },
    ],
    reducers: {
        setSongName: (state, action) => {
            state.push(action.payload)
        },
    }
})

export const { setSongName } = songSlice.actions;
  
export default songSlice.reducer