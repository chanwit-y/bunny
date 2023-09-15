import { AppBarProps, CreateMUIStyled, Theme } from '@mui/material';
import { ComponentType } from 'react';

export const createAppBar = (
  styled: CreateMUIStyled<Theme>,
  AppBar: ComponentType<AppBarProps>,
  drawerWidth: number
): any => {
  return styled(AppBar, {
    shouldForwardProp: (prop: any) => prop !== 'open',
  })<AppBarProps & {open: boolean}>(({ theme, open }: any) => ({
    backgroundColor: 'white',
    borderBottom: 1,
    borderBottomColor: 'lightgrey',
    borderBottomStyle: 'solid',
    zIndex: theme.zIndex.drawer + 1,
    ...(open
      ? {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }
      : {
          marginLeft: 74,
          width: `calc(100% - ${74}px)`,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }),
  }));
};
