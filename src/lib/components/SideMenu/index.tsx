import {
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';

import { useCustomStyles } from './style';
import { sections } from './items';
import { Link, useLocation } from 'react-router-dom';

export default function SideMenu() {
  const style = useCustomStyles();
  const location = useLocation();
  return (
    <>
      <Grid container item xs={12} sm={12} md={3} sx={style.Content}>
        <List sx={style.ListStyle}>
          <Typography
            sx={{
              display: 'flex',
              justifyContent: 'center',
              typography: style.Theme.customTypography.h4,
              fontFamily: style.Theme.customTypography.fontFamily,
              pb: '1em',
            }}
          >
            Olá, User!
          </Typography>
          {sections.map((section) => {
            const Icon = section.icon;
            const isSelected = location.pathname === section.path;
            return (
              <Link
                to={section.path}
                key={section.path}
                style={{ textDecoration: 'none' }}
              >
                <ListItemButton selected={isSelected} key={section.path}>
                  <ListItemIcon>
                    <Icon
                      sx={{
                        color: isSelected
                          ? style.Theme.customPalette.primary.yellow
                          : style.Theme.customPalette.primary.background,
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      color: isSelected
                        ? style.Theme.customPalette.primary.yellow
                        : style.Theme.customPalette.primary.background,
                    }}
                    primary={section.label}
                  />
                </ListItemButton>
              </Link>
            );
          })}
        </List>
      </Grid>
    </>
  );
}
