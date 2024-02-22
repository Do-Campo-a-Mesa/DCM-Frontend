import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { ProductCategory } from '../../../../lib/interfaces/Categories';
import SearchIcon from '@mui/icons-material/Search';
import CategoryIcon from '@mui/icons-material/Category';
import { useCustomStyles } from './style';
import { useTheme } from '@mui/material';

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

  const style = useCustomStyles();
  const theme = useTheme();
  return (
    <Box sx={style.boxStyle}>
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
          label="Todos"
          value={0}
          icon={<CategoryIcon />}
          iconPosition="start"
          sx={style.tabStyle}
        />
        {categories.map((category: ProductCategory) => (
          <Tab
            key={category.id}
            label={category.name}
            value={category.id}
            icon={<SearchIcon />}
            iconPosition="start"
            sx={style.tabStyle}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default CategoriesList;
