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
  const boxStyle = {
    display: 'flex',
    justifyContent: 'center',
    mb: 2,
  };
  const tabStyle = {
    color: theme.customPalette.neutral.inactive,
    typography: theme.customTypography.h6,
    fontFamily: theme.customTypography.fontFamily,
    textTransform: 'capitalize',
    '&.Mui-selected': {
      color: theme.customPalette.primary.main,
    },
  };
  return (
    <Box sx={boxStyle}>
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
          sx={tabStyle}
        />
        {categories.map((category: ProductCategory) => (
          <Tab
            key={category.id}
            label={category.name}
            value={category.id}
            icon={<SearchIcon />}
            iconPosition="start"
            sx={tabStyle}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default CategoriesList;
