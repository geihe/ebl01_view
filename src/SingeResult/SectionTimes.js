import {getISO, timeDiffString} from "../helper/timeHelper";

const frames = [
  {
    name: 'Gesamt', //muss als erstes stehen
    frame1: {
      id: f => f.id === 'firstFrame',
      include: true
    },
    frame2: {
      id: f => f.id === 'Feedback',
      include: true
    }
  },
  {
    name: 'Einführung',
    frame1: {
      id: f => f.id === 'firstFrame',
      include: true
    },
    frame2: {
      id: f => f.id === 'Test_pre1step_1',
      include: false
    }
  },
  {
    name: 'Mathekurs',
    frame1: {
      id: f => f.id === 'MathCourse02',
      include: true
    },
    frame2: {
      id: f => f.id === 'MathCourse08',//TODO
      include: true
    }
  },
  {
    name: 'JoL',
    frame1: {
      id: f => f.id === 'JoL1',
      include: true
    },
    frame2: {
      id: f => f.id === 'JoL4',
      include: true
    }
  },
  {
    name: 'Examples',
    frame1: {
      id: f => f.id === 'MathCourse08',
      include: false
    },
    frame2: {
      id: f => f.component === 'Z',
      include: false
    }
  },
  {
    name: 'Pause',
    frame1: {
      id: f => f.component === 'Z',
      include: true
    },
    frame2: {
      id: f => f.component === 'Z',
      include: true
    }
  },
  {
    name: 'Posttest',
    frame1: {
      id: f => f.component === 'pn',
      include: false
    },
    frame2: {
      id: f => f.id === 'Test_postMC_7_draw3',
      include: false
    }
  },
  {
    name: 'Concepttest',
    frame1: {
      id: f => f.id === 'Test_postConcept_1',
      include: true
    },
    frame2: {
      id: f => f.id === 'Test_lw-rvt8',
      include: true
    }
  },
]

export function SectionTimeList(prop) {
  const {row}=prop;
  const times=frames.map(f => ({name: f.name, time: sectionTime(row, f)}));
  const title=times.map(t=>`${t.name}: ${t.time}`).join('\n');

  return <td title={title}>{times[0].time}</td>
}

function sectionTime(row, frames) {
  const frameObject1 = frames.frame1;
  const frameObject2 = frames.frame2;

  const frame1 = row.find(e => frameObject1.id(e));
  const frame2 = row.find(e => frameObject2.id(e));
  const timeString1 = frameObject1.include ? frame1?.startTime : frame1?.endTime;
  const timeString2 = frameObject2.include ? frame2?.endTime : frame2?.startTime;
  if (timeString1 && timeString2) {
    const start = new Date(getISO(timeString1));
    const end = new Date(getISO(timeString2));
    return timeDiffString(start, end);
  }
  return '';
}

