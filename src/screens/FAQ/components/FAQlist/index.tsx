import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
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
    <>
      <Accordion expanded={expanded} onChange={handleExpand}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" sx={style.TitleStyle}>
            {FAQs.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={style.DescriptionStyle}>
            {FAQs.description}
          </Typography>
          <Button variant="contained" color="primary">
            Ver Resposta
          </Button>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default FAQlist;
