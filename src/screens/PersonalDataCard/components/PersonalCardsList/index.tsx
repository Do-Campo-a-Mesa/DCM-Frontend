import React, { useState } from 'react';
import { useCustomStyles } from './style';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Typography,
} from '@mui/material';
import PersonalCards from '../personalCards';
import cardPayment from '../../../../tests/mock/cardPayment/index.json';
import { CardPayment } from '../../../../lib/interfaces/CardPayment';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

const PersonalCardsList: React.FC = () => {
  const style = useCustomStyles();
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleExpandClick = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };
  // Função para substituir os valores centrais por asteriscos
  const maskCardNumber = (cardNumber: string): string => {
    const visibleDigits = 4; // Número de dígitos visíveis no início e no final do número do cartão
    const maskedDigits = cardNumber.length - visibleDigits * 2; // Número de dígitos a serem substituídos por asteriscos
    const maskedPart = '*'.repeat(maskedDigits); // Cria uma string com asteriscos do tamanho correto
    const visiblePart =
      cardNumber.slice(0, visibleDigits) +
      maskedPart +
      cardNumber.slice(-visibleDigits); // Combina os dígitos visíveis com os asteriscos
    return visiblePart;
  };
  return (
    <div>
      <Grid
        container
        sx={{
          alignItems: 'top',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
        }}
      >
        <Grid
          container
          alignItems="top"
          justifyContent="flex-start"
          spacing={3}
          item
          md={12}
        >
          <Grid item>
            <Typography variant="h5" gutterBottom sx={style.Title}>
              CARTÕES
            </Typography>
          </Grid>
          <Grid item>
            <Link to={`/perfil/cartoes/novo_cartao`}>
              <Button variant="outlined" sx={style.Button}>
                Novo cartão
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {cardPayment.map((userData: CardPayment, index: number) => (
          <Grid item xs={12} key={index}>
            <Accordion sx={style.Accordion} expanded={expanded === index}>
              <AccordionSummary>
                <Grid
                  container
                  spacing={2}
                  direction="row"
                  sx={{ justifyContent: 'space-between' }}
                >
                  <Grid item>
                    <Typography
                      sx={{
                        typography: style.Theme.customTypography.h9,
                        fontFamily: style.Theme.customTypography.fontFamily,
                        color: style.Theme.customPalette.neutral.secondaryText,
                      }}
                    >
                      APELIDO
                    </Typography>
                    <Typography
                      sx={{
                        typography: style.Theme.customTypography.body3,
                        fontFamily: style.Theme.customTypography.fontFamily,
                        color: style.Theme.customPalette.primary.black,
                      }}
                    >
                      {userData.apelido}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={{
                        typography: style.Theme.customTypography.h9,
                        fontFamily: style.Theme.customTypography.fontFamily,
                        color: style.Theme.customPalette.neutral.secondaryText,
                      }}
                    >
                      NÚMERO DO CARTÃO
                    </Typography>
                    <Typography
                      sx={{
                        typography: style.Theme.customTypography.body3,
                        fontFamily: style.Theme.customTypography.fontFamily,
                        color: style.Theme.customPalette.primary.black,
                      }}
                    >
                      {maskCardNumber(userData.numero)}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      onClick={() => handleExpandClick(index)}
                      sx={style.Button}
                    >
                      {expanded === index ? 'Recolher' : 'Ver cartão'}
                      <ExpandMoreIcon
                        sx={{
                          transform:
                            expanded === index ? 'rotate(180deg)' : 'none',
                        }}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <PersonalCards userData={userData} />
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PersonalCardsList;
