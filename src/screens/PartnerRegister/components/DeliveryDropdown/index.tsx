import React, { useState } from 'react';
import {
  Select,
  MenuItem,
  InputLabel,
  SelectChangeEvent,
  Chip,
  OutlinedInput,
} from '@mui/material';
import { DeliveryOption } from '../../../../lib/interfaces/DeliveryOptions';
import { useCustomStyles } from './style';

interface DeliveryOptionsProps {
  options: DeliveryOption[];
  onChange: (selectedOptions: DeliveryOption[]) => void;
  defaultValue: DeliveryOption[];
}

const DeliveryOptionsDropdown: React.FC<DeliveryOptionsProps> = ({
  options,
  onChange,
  defaultValue,
}) => {
  const [selectedOption, setSelectedOption] =
    useState<DeliveryOption[]>(defaultValue);

  const handleChange = (event: SelectChangeEvent<typeof selectedOption>) => {
    const selectedValues = event.target.value as DeliveryOption[];
    setSelectedOption(selectedValues);
    onChange(selectedValues);
  };
  const style = useCustomStyles();
  return (
    <>
      <InputLabel id="delivery-options-label">Opções de Entrega</InputLabel>
      <Select
        input={<OutlinedInput id="labelChip" label="Opções de Entrega" />}
        labelId="delivery-options-label"
        value={selectedOption}
        onChange={handleChange}
        multiple
        renderValue={(selected) => (
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {(selected as unknown as string[]).map((value) => (
              <Chip
                sx={style.ChipLabel}
                key={value}
                label={options.find((option) => option.name === value)?.name}
                style={{ margin: '2px' }}
              />
            ))}
          </div>
        )}
      >
        {options.map((option) => (
          <MenuItem key={option.id} value={option.name}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default DeliveryOptionsDropdown;
