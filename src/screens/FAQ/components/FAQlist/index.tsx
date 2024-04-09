import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import { useCustomStyles } from './style';
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FAQ } from '../../../../lib/interfaces/FAQ';

interface Props {
  FAQs: FAQ;
}

const FAQlist: React.FC<Props> = ({ FAQs }) => {
  const style = useCustomStyles();
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <Accordion
      sx={style.AccordionStyle}
      expanded={expanded}
      onChange={handleExpand}
    >
      <AccordionSummary
        sx={style.AccordionStyle1}
        expandIcon={<ExpandMoreIcon sx={style.IconStyle} />}
      >
        <Typography variant="h6" sx={style.TitleStyle}>
          {FAQs.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={style.AccordionDetailStyle}>
        <Typography sx={style.DescriptionStyle}>{FAQs.description}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FAQlist;
