import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'name',
    initialState: {
        isDateModalOpen: false,
    },
reducers: {
    onOpenDateModal: (state) =>{
        state.isDateModalOpen=true;
    },
    onCloseDateModal: (state) =>{
        state.isDateModalOpen=false;
    },
}
});

export const { increment } = uiSlice.actions;