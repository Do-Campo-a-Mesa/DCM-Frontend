import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  TextField,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from '@mui/material';

import { useCustomStyles } from './style';
import { Partner } from '../../interfaces/Partner';

interface Props {
  partners: Partner[];
  onPartnerSelectionChange: (selectedPartners: number[]) => void;
}

const PartnerSearchCard: React.FC<Props> = ({
  partners,
  onPartnerSelectionChange,
}) => {
  const style = useCustomStyles();
  const [inputValue, setInputValue] = useState('');
  const [selectedPartners, setSelectedPartners] = useState<number[]>([]);
  const [filteredPartners, setFilteredPartners] = useState<Partner[]>(partners);

  const handlePartnerToggle = (partner: number) => {
    const currentIndex = selectedPartners.indexOf(partner);
    const newSelectedPartners = [...selectedPartners];

    if (currentIndex === -1) {
      newSelectedPartners.push(partner);
    } else {
      newSelectedPartners.splice(currentIndex, 1);
    }

    setSelectedPartners(newSelectedPartners);
    onPartnerSelectionChange(newSelectedPartners);
  };

  useEffect(() => {
    const filtered = partners.filter((partner) =>
      partner.companyName.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredPartners(filtered);
  }, [inputValue, partners]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Card sx={style.cardStyle}>
      <CardContent>
        <TextField
          label="Buscar"
          value={inputValue}
          onChange={handleInputChange}
          sx={{ minWidth: '100%' }}
        />
        <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
          <FormGroup>
            {filteredPartners.map((partner: Partner) => (
              <FormControlLabel
                key={partner.id}
                control={
                  <Checkbox
                    checked={selectedPartners.includes(partner.id)}
                    onChange={() => handlePartnerToggle(partner.id)}
                  />
                }
                label={partner.companyName}
              />
            ))}
          </FormGroup>
        </div>
      </CardContent>
    </Card>
  );
};

export default PartnerSearchCard;
