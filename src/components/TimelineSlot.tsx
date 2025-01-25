import React from 'react';
import {
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';

import BasicCard, { BasicCardProps } from './BasicCard';

const TimelineSlot: React.FC<TimelineSlotProps> = (props) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        variant='body2'
        align='right'
        sx={{ m: 'auto 0' }}
      >
        {props.date}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <BasicCard {...props} />
      </TimelineContent>
    </TimelineItem>
  );
};

interface TimelineSlotProps extends BasicCardProps {
  date: string;
}

export default TimelineSlot;
