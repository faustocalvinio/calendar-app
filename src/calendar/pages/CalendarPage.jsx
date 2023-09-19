
import { Calendar } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css';

import {  localizer,getMessagesES  } from "../../helpers";
import { useCalendarStore, useUiStore } from "../../hooks";
import { CalendarEvent, CalendarModal, FabAddNew, FabDelete, Navbar } from "../";
// import { addHours } from "date-fns";
// import { useState } from "react";



// const events=[{
//   title:'Cumpleanios del jefe',
//   notes:'Hay que comprar la torta',
//   start: new Date(),
//   end: addHours(new Date(),2),
//   bgColor:'#fafafa',
//   user:{
//     _id:'123',
//     name:'Fausto'
// }}]


export const CalendarPage = () => {
  const { events, setActiveEvent } = useCalendarStore();
  const { openDateModal } = useUiStore();
  // const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week' );

  const eventStyleGetter=()=>{
    // event, start, end, isSelected ARGUMENTOS
    const style={
      backgroundColor:'#347CF7',
      borderRadius:'0px',
      opacity:0.8,
      color:'white'
    }
    return{
      style
    }
  }

  const onDoubleClick=()=>{
    openDateModal();
  }
  const onSelect=(event)=>{    
    setActiveEvent(event);
  }

  const onViewChanged=(event)=>{
    localStorage.setItem('lastView',event)
  }
  return (
    <>
      <Navbar />

      <Calendar
        culture='es'
        localizer={ localizer }
        events={ events }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={ getMessagesES() }
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelect }
        onView={ onViewChanged }
      />
      <CalendarModal />
      <FabAddNew />
      <FabDelete />
    </>
  )
}
