import React, { useEffect, useState } from 'react';
import { collection, query, getDocs } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import { Timeline } from '@mui/lab';

import { db, storage } from 'firebaseAuth';
import TimelineSlot from 'components/TimelineSlot';
import { EternalTimelineDoc } from 'types/EternalTimelineDoc';
import { getDisplayDate } from 'utils';

const EndlessTimeline: React.FC = () => {
  const [memories, setMemories] = useState<EternalTimelineDoc[]>();

  useEffect(() => {
    (async () => {
      const q = query(collection(db, 'etertl'));
      const qs = await getDocs(q);

      const ms: EternalTimelineDoc[] = await Promise.all(
        qs.docs.map(async (doc) => {
          const memory = { id: doc.id, ...doc.data() } as EternalTimelineDoc;
          const storageRef = ref(storage, 'etertl/' + memory.filename);
          const url = await getDownloadURL(storageRef);
          memory.filename = url;
          return memory;
        })
      );
      setMemories(ms.sort((a, b) => a.timestamp.seconds - b.timestamp.seconds));
    })();
  }, []);

  return (
    <Timeline position='alternate'>
      {memories ? (
        memories.map((memory) => (
          <TimelineSlot
            key={memory.id}
            date={getDisplayDate(memory.timestamp.toDate())}
            header={memory.header}
            imgSrc={memory.filename}
            desc={memory.desc}
          />
        ))
      ) : (
        <div>loading</div>
      )}
    </Timeline>
  );
};

export default EndlessTimeline;
