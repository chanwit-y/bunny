import { CreateMUIStyled, Theme } from '@mui/material';

export const createMain = (
  styled: CreateMUIStyled<Theme>,
  drawerWidth: number,
  minDrawerWidth: number = 0
): any => {
  return styled('main', {
    shouldForwardProp: (prop: any) => prop !== 'open',
  })<{
    open: boolean;
  }>(({ theme, open }: any) => ({
    flexGrow: 1,
    marginTop: 60,
    backgroundColor: '#F4F7FA',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // marginLeft: `-${drawerWidth}px`,
    overflow: "auto",
    marginLeft:  minDrawerWidth,
    // marginLeft: `0`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: drawerWidth,
    }),
  }));
};
