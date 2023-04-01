import React, { useState } from 'react'
import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import { Box, Heading, Text } from '@chakra-ui/layout'
import Header from '../../components/Header'
const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState([])

  const handleDateClick = (selected) => {
    const title = prompt('Please enter a new title for your event')
    const calendarApi = selected.view.calendar
    calendarApi.unselect()

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      })
    }
  }

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove()
    }
  }

  return (
    <Box>
      {/* <Header title="Calendar" subtitle="Full Calendar Interactive Page" /> */}
      <Header title='Calendar' />

      <Box display='flex' justifyContent='space-between'>
        {/* CALENDAR SIDEBAR */}
        <Box
          flex='1 1 25%'
          backgroundColor='#042b47'
          p='15px'
          borderRadius='4px'
        >
          <Text variant='h5'>Events</Text>
          <Box>
            {currentEvents.map((event) => (
              <Box
                key={event.id}
                backgroundColor='#032239'
                my={'10px'}
                pl='6px'
                borderRadius='4px'
              >
                {event.title}
                <Text>
                  {formatDate(event.start, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>

        {/* CALENDAR */}
        <Box flex='1 1 100%' ml='15px'>
          <FullCalendar
            height='75vh'
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: '12315',
                title: 'All-day event',
                date: '2023-04-14',
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Calendar

// const orders = {
//  orderedItems: [product1,product2,etc],// put the cartProducts
//  userId:'dfsdfdsfsdf234',
//  orderStatus:'pending',
//  orderedAt:Date.now(),
//  address:{name:'something',state:''}
// }
