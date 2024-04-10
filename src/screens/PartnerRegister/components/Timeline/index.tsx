import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function BasicTimeline() {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: 'green' }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Passo 1: Preencher o cadastro de parceria
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: 'green' }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Passo 2: Aguarde a verificação</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: 'green' }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Passo 3: Notificação de aprovação</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: 'green' }} />
        </TimelineSeparator>
        <TimelineContent>Passo 4: Anuncie seu primeiro produto</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
