import React from 'react';
import { Timeline } from '@mui/lab';
import TimelineSlot from 'components/TimelineSlot';

const EndlessTimeline: React.FC = () => {
  return (
    <Timeline position='alternate'>
      <TimelineSlot
        date='25/01/2025'
        header='Life of Love'
        imgSrc='https://images.unsplash.com/photo-1471958680802-1345a694ba6d?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <TimelineSlot
        date='25/01/2025'
        header='Life of Love'
        imgSrc='https://images.unsplash.com/photo-1471958680802-1345a694ba6d?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
    </Timeline>
  );
};

export default EndlessTimeline;
