import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
    _id: new Date().getTime(),
    title:'Cumpleanios del jefe',
    notes:'Hay que comprar la torta',
    start: new Date(),
    end: addHours(new Date(),2),
    bgColor:'#fafafa',
    user:{
      _id:'123',
      name:'Fausto Calvo'
    }
};

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [tempEvent],
        activeEvent: null,
    },
    reducers: {
        onSetActiveEvent: ( state, { payload } ) => {
            state.activeEvent = payload;
        },
        onAddNewEvent: ( state, { payload } ) => {
            state.events.push( payload );     
            state.activeEvent = null;  
            console.log('onaddnewevent'); 
        },
        onUpdateEvent: ( state, { payload } ) => {
            console.log('onupdateevent');
            state.events = state.events.map( event => {
                if ( event._id === payload._id ) {
                    return payload;
                }
                return event;
            });
        },
        onDeleteEvent: ( state ) => {
            if (state.activeEvent ) {
                state.events = state.events.filter( event => event._id !== state.activeEvent._id );
                state.activeEvent = null;
            }

        },
    },
});

export const { 
    onAddNewEvent,
    onDeleteEvent,
    onSetActiveEvent,
    onUpdateEvent,
} = calendarSlice.actions;