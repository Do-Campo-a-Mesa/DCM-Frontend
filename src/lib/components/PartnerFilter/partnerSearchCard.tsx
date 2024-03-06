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

  useEffect(() => {
    const filtered = partners.filter((partner) =>
      partner.companyName.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredPartners(filtered);
  }, [inputValue, partners]);

  const handlePartnerToggle = (partnerId: number) => {
    const newSelectedPartners = selectedPartners.includes(partnerId)
      ? selectedPartners.filter((id) => id !== partnerId)
      : [...selectedPartners, partnerId];

    setSelectedPartners(newSelectedPartners);
    onPartnerSelectionChange(newSelectedPartners);
  };

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
          sx={style.searchStyle}
        />
        <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
          <FormGroup>
            {filteredPartners.map((partner: Partner) => (
              <FormControlLabel
                key={partner.id}
                control={
                  <Checkbox
                    sx={style.checkboxStyle}
                    checked={selectedPartners.includes(partner.id)}
                    onChange={() => handlePartnerToggle(partner.id)}
                  />
                }
                label={partner.companyName}
                sx={style.checklabelStyle}
              />
            ))}
          </FormGroup>
        </div>
      </CardContent>
    </Card>
  );
};

export default PartnerSearchCard;
