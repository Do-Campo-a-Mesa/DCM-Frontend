import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { ProductCategory } from '../../../../lib/interfaces/Categories';
import SearchIcon from '@mui/icons-material/Search';
import CategoryIcon from '@mui/icons-material/Category';
import { useTheme } from '@mui/material/styles';

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
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setCategory(newValue);
  };

  const theme = useTheme();

  return (
    <Box sx={{ mb: '15px' }}>
      <Tabs
        value={categoryId}
        onChange={handleChange}
        aria-label="category tabs"
        variant="scrollable"
        scrollButtons="auto"
        TabIndicatorProps={{
          sx: {
            backgroundColor: theme.customPalette.primary.main,
          },
        }}
      >
        <Tab
          label="TODOS"
          value={0}
          icon={<CategoryIcon />}
          iconPosition="start"
          sx={{
            color: theme.customPalette.primary.main,
            '&.Mui-selected': {
              color: theme.customPalette.primary.main,
            },
          }}
        />
        {categories.map((category: ProductCategory) => (
          <Tab
            key={category.id}
            label={category.name}
            value={category.id}
            icon={<SearchIcon />}
            iconPosition="start"
            sx={{
              color: theme.customPalette.primary.main,
              '&.Mui-selected': {
                color: theme.customPalette.primary.main,
              },
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default CategoriesList;
