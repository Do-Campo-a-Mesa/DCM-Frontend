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
  onCategorySelectionChange: (selectedCategoryIds: number[]) => void;
}

const CategorySearchCard: React.FC<Props> = ({
  categories,
  onCategorySelectionChange,
}) => {
  const style = useCustomStyles();
  const [inputValue, setInputValue] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [filteredCategories, setFilteredCategories] =
    useState<ProductCategory[]>(categories);

  useEffect(() => {
    const filtered = categories.filter((category) =>
      category.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredCategories(filtered);
  }, [inputValue, categories]);

  const handleCategoryToggle = (categoryId: number) => {
    const currentIndex = selectedCategories.indexOf(categoryId);
    const newSelectedCategories = [...selectedCategories];

    if (currentIndex === -1) {
      newSelectedCategories.push(categoryId);
    } else {
      newSelectedCategories.splice(currentIndex, 1);
    }

    setSelectedCategories(newSelectedCategories);
    onCategorySelectionChange(newSelectedCategories);
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
            {filteredCategories.map((category: ProductCategory) => (
              <FormControlLabel
                key={category.id}
                control={
                  <Checkbox
                    sx={style.checkboxStyle}
                    checked={selectedCategories.includes(category.id)}
                    onChange={() => handleCategoryToggle(category.id)}
                  />
                }
                label={category.name}
                sx={style.checklabelStyle}
              />
            ))}
          </FormGroup>
        </div>
      </CardContent>
    </Card>
  );
};

export default CategorySearchCard;
