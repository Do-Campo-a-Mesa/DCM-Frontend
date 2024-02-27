import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  TextField,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from '@mui/material';
import { ProductCategory } from '../../interfaces/Categories';
import { useCustomStyles } from './style';

interface Props {
  categories: ProductCategory[];
  categoryId: number;
  setCategory: (categoryId: number) => void;
}

const SearchCard: React.FC<Props> = ({ categories }) => {
  const style = useCustomStyles();
  const [inputValue, setInputValue] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredCategories, setFilteredCategories] =
    useState<ProductCategory[]>(categories);

  const handleCategoryToggle = (category: string) => {
    const currentIndex = selectedCategories.indexOf(category);
    const newSelectedCategories = [...selectedCategories];

    if (currentIndex === -1) {
      newSelectedCategories.push(category);
    } else {
      newSelectedCategories.splice(currentIndex, 1);
    }

    setSelectedCategories(newSelectedCategories);
  };

  useEffect(() => {
    const filtered = categories.filter((category) =>
      category.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredCategories(filtered);
  }, [inputValue, categories]);

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
            {filteredCategories.map((category: ProductCategory) => (
              <FormControlLabel
                key={category.name}
                control={
                  <Checkbox
                    checked={selectedCategories.indexOf(category.name) !== -1}
                    onChange={() => handleCategoryToggle(category.name)}
                  />
                }
                label={category.name}
              />
            ))}
          </FormGroup>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchCard;
