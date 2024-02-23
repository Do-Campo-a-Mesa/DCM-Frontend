import React from 'react';
import { Typography } from '@mui/material';

interface ResultsInfoProps {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
}

const ResultsInfo: React.FC<ResultsInfoProps> = ({
  currentPage,
  itemsPerPage,
  totalItems,
}) => {
  // Calcula o índice do primeiro item na página atual
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  // Calcula o índice do último item na página atual
  const endIndex = Math.min(startIndex + itemsPerPage - 1, totalItems);

  return (
    <Typography variant="body2" align="center">
      Mostrando {startIndex} - {endIndex} de {totalItems} resultados
    </Typography>
  );
};

export default ResultsInfo;
