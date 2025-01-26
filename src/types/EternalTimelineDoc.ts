import { Timestamp } from 'firebase/firestore';

export interface EternalTimelineDoc {
  id: string;
  desc: string;
  filename: string;
  header: string;
  timestamp: Timestamp;
}
