import { useTheme } from '@emotion/react';
import { formatDate } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery
} from '@mui/material';
import { useConfirm } from 'material-ui-confirm';
import React, { useState } from 'react';
import { colorTokens } from '../../theme';
import Header from './../../components/Header';

const initialEvents = [
  { id: 1, title: 'event 1', start: '2023-08-09' },
  { id: 2, title: 'event 2', start: '2023-08-20' },
];

const Calendar = () => {
  const [events, setEvents] = useState(initialEvents);
  const Confirm = useConfirm();
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const isLg = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const handleDateClick = (selected) => {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      const event = {
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      };
      calendarApi.addEvent(event);
      setEvents((prev) => [...prev, event]);
    }
  };

  const handleEventClick = async (selected) => {
    try {
      const res = await Confirm({
        title: 'Delete',
        description: `Are you sure you want to delete the event '${selected.event.title}'`,
        confirmationButtonProps: {
          autoFocus: true,
          color: `secondary`,
          variant: 'contained',
        },
        cancellationButtonProps: {
          variant: 'outlined',
          color: `secondary`,
        },
      });
      selected.event.remove();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Box
        py={2}
        px={2}
        spacing={1}
        sx={{ height: '100%', overflowY: 'scroll' }}
      >
        <Header title='Calendar' subtitle='Full Calendar Interactive Page' />
        <Box
          sx={{
            width: '100%',
            pt: 3,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} lg={3}>
              <Stack
                maxHeight={'100vh'}
                width={'100%'}
                direction={'column'}
                sx={{
                  backgroundColor: colors.primary[400],
                  overflowY: 'scroll',
                }}
                p={1}
              >
                <Typography mt={1} variant='h4' color='inherit'>
                  Events
                </Typography>
                <List>
                  {events.map((event) => (
                    <ListItem
                      key={event.id}
                      sx={{
                        backgroundColor: colors.greenAccent[500],
                        borderRadius: '2px',
                        my: 1.5,
                      }}
                    >
                      <ListItemText
                        primary={event.title}
                        secondary={
                          <>
                            <Typography
                              component={'span'}
                              variant='body1'
                              color='inherit'
                            >
                              {formatDate(event.start, {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                              })}
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Stack>
            </Grid>

            <Grid item xs={12} lg={9}>
              <FullCalendar
                editable={true}
                height={'100vh'}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                plugins={[
                  dayGridPlugin,
                  interactionPlugin,
                  timeGridPlugin,
                  listPlugin,
                ]}
                initialView='dayGridMonth'
                select={handleDateClick}
                eventClick={handleEventClick}
                eventsSet={(events) => {
                  setEvents(events);
                }}
                initialEvents={events}
                {...(isLg && {
                  headerToolbar: {
                    left: 'prev,next,today',
                    center: 'title',
                    right: 'dayGridMonth,dayGridWeek,dayGridDay',
                  },
                })}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Calendar;
