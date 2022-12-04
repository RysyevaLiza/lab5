import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "toolkit",
    initialState: {
        isLoading: true,
        hotel: [],
        room: [],
        show: [],
        order:[],
        client:[],
    },
    reducers: {
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
        loadHotels(state, action) {
            state.hotel = action.payload;
        },
        loadHotel(state, action) {
            state.hotel.push(action.payload);
        }
    },
});np

export default slice.reducer;

export const { loadHotels, loadHotel, setLoading } = slice.actions;