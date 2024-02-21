import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ProductCategory } from '../../../../lib/interfaces/Categories';

interface Props {
  categories: ProductCategory[];
  categoryId: number;
  setCategory: (categoryId: number) => void;
}

const CategoriesList: React.FC<Props> = ({
  categories,
  categoryId,
  setCategory,
}) => {
  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: number
  ) => {
    setCategory(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={categoryId}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      defaultValue={0}
    >
      <ToggleButton value={0}>TODOS</ToggleButton>
      {categories.map((category: ProductCategory) => (
        <ToggleButton value={category.id}>{category.name}</ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default CategoriesList;
