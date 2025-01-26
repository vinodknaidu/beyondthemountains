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
import { SxProps, Theme } from '@mui/material';

const TimelineSlot: React.FC<TimelineSlotProps> = (props) => {
  return (
    <TimelineItem sx={props.sx}>
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
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <BasicCard {...props} sx={{ width: '300px' }} />
      </TimelineContent>
    </TimelineItem>
  );
};

interface TimelineSlotProps extends BasicCardProps {
  date: string;
  sx?: SxProps<Theme>;
}

export default TimelineSlot;
