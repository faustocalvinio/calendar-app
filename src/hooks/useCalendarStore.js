import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../store';

export const useCalendarStore = () => {
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector( state => state.calendar);

    const setActiveEvent = (calendarEvent) => {
        dispatch( onSetActiveEvent(calendarEvent) );
    };

    const startSavingEvent = async ( calendarEvent ) => {     
        if ( calendarEvent._id ) {            
            dispatch( onUpdateEvent({...calendarEvent}) );
        } else {
            dispatch( onAddNewEvent({...calendarEvent,  _id: new Date().getTime() }) );        
        }
    
    } 

    const startDeletingEvent = () => {
        dispatch( onDeleteEvent()  )
    }
    

    return {
        // ESTADOS
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,
        // METODOS
        startDeletingEvent,
        setActiveEvent,
        startSavingEvent,
    }
}
