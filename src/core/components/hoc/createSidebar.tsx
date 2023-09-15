import {
  BoxProps,
  CollapseProps,
  CreateMUIStyled,
  CSSObject,
  DrawerProps,
  IconButtonProps,
  ListItemIconProps,
  ListItemTextProps,
  ListProps,
  MenuItemProps,
  PopoverProps,
  Theme,
} from '@mui/material';
import {
  ForwardRefComponent,
  HTMLMotionProps,
  MotionStyle,
} from 'framer-motion';
import { ComponentType, Dispatch, Fragment, SetStateAction } from 'react';
import { Menu, MenuGroup } from './index.d';
import { MenuCollapseItem } from '../common';

export type CreateSidebarProps = {
  menus: (Menu | MenuGroup)[];
  logo: JSX.Element;
  headerLine?: JSX.Element;
  projectName: JSX.Element;
  location: string[] | string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  footer?: JSX.Element;
  footerCollapse?: JSX.Element;
};

export type SidebarOption = {
  styled: CreateMUIStyled<Theme>;
  MotionDiv: ForwardRefComponent<HTMLDivElement, HTMLMotionProps<'div'>>;
  Drawer: ComponentType<DrawerProps>;
  Box: ComponentType<BoxProps>;
  IconButton: ComponentType<IconButtonProps>;
  Collapse: ComponentType<CollapseProps>;
  Link: ComponentType<any>;
  List: ComponentType<ListProps>;
  ListItem: ComponentType<any>;
  ListItemText: ComponentType<ListItemTextProps>;
  ListItemIcon: ComponentType<ListItemIconProps>;
  DoubleArrow: ComponentType<any>;
  ExpandMore: ComponentType<any>;
  Popover: ComponentType<PopoverProps>;
  MenuItem: ComponentType<MenuItemProps>;
  drawerWidth: number;
  colorActiveBorder: string;
  colorActive: string;
  colorInactive: string;
  colorTextGroup: string;
  colorText: string;
  sizeTextItem?: number;
};

export const createSidebar = <P extends CreateSidebarProps>(
  sidebarOption: SidebarOption
) => {
  const {
    styled,
    MotionDiv,
    Drawer,
    Box,
    IconButton,
    Collapse,
    Link,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    DoubleArrow,
    ExpandMore,
    Popover,
    MenuItem,
    drawerWidth,
    colorActiveBorder,
    colorActive,
    colorInactive,
    colorTextGroup,
    colorText,
    sizeTextItem,
  } = sidebarOption;
  const DrawerHeader = styled('div')(({ theme }: any) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: colorText,
    paddingTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    ...theme.mixins.toolbar,
  }));

  const StyledListItemText = styled(ListItemText)(() => ({
    // letterSpacing: 1.5,
    '& .MuiListItemText-primary': {
      color: colorText,
      fontSize: sizeTextItem,
      letterSpacing: 0.5,
    },
  }));

  const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    zIndex: 9999,
  });

  // use any bes build error in Theme
  const closedMixin = (theme: any /*Theme*/): CSSObject => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(8)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme?.spacing(9)} + 1px)`,
    },
  });

  const StyledDrawer = styled(Drawer, {
    shouldForwardProp: (prop: any) => prop !== 'open',
  })<{ open: boolean }>(({ theme, open }: any) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }));

  const BoxListItem = styled(Box, {
    shouldForwardProp: (prop: any) => prop !== 'active',
  })<{
    active: boolean | undefined;
  }>(({ active = false }) => ({
    width: '100%',
    borderLeft: 5,
    borderLeftColor: active ? colorActiveBorder : colorInactive,
    borderLeftStyle: 'solid',
    background: active ? colorActive : colorInactive,
    cursor: 'pointer',
  }));

  const BoxIcon = styled(Box, {
    shouldForwardProp: (prop: any) => prop !== 'active',
  })<{
    active: boolean | undefined;
  }>(({ active = false }) => ({
    //     color: active ? colorActive : colorInactive,
    color: colorText,
  }));

  return (props: P & CreateSidebarProps) => {
    const { menus, logo, headerLine, projectName, location, open, setOpen, footer, footerCollapse } =
      props;

    const displayMenu = (
      item: any,
      index: number,
      isSubMenu: boolean
    ): JSX.Element | undefined => {
      return (
        <BoxListItem
          key={`menu-item-${index}`}
          active={location.includes(item.name) || location === item.path}
        >
          <Link style={{ textDecoration: 'none' }} to={item.path}>
            <ListItem button key={`list-item-${item.name}`}>
              <ListItemIcon>
                <BoxIcon
                  ml={isSubMenu ? 3 : 0}
                  active={
                    location.includes(item.name) || location === item.path
                  }
                >
                  {item.icon}
                </BoxIcon>
              </ListItemIcon>
              <StyledListItemText
                primary={item.text}
                sx={{
                  ml: isSubMenu ? 1 : 0,
                }}
              ></StyledListItemText>
            </ListItem>
          </Link>
        </BoxListItem>
      );
    };

    const getMenu = (
      menu: (Menu | MenuGroup)[],
      isSubMenu: boolean = false
    ) => {
      return menu?.map((item, index) => {
        if ('active' in item && item.active)
          return displayMenu(item, index, isSubMenu);
        else if ('groupName' in item)
          return (
            <Fragment key={`fragment_menu_item_${index}`}>
              {
                <MenuCollapseItem
                  active={item.menus.some((m) => m.path === location)}
                  menuGroup={item}
                  subMenu={getMenu(item.menus, true)}
                  openDrawer={open}
                  styled={styled}
                  Box={Box}
                  MotionDiv={MotionDiv}
                  Link={Link}
                  ListItem={ListItem}
                  ListItemText={ListItemText}
                  ListItemIcon={ListItemIcon}
                  Collapse={Collapse}
                  ExpandMoreIcon={ExpandMore}
                  Popover={Popover}
                  MenuItem={MenuItem}
                  colorText={colorTextGroup}
                  colorActiveBorder={colorActiveBorder}
                  colorActive={colorActive}
                  colorInactive={colorInactive}
                  sizeTextItem={sizeTextItem}
                />
              }
            </Fragment>
          );
        else return <></>;
      });
    };

    const Logo = () => (
      <MotionDiv
        style={
          {
            marginTop: 5,
          } as MotionStyle
        }
        initial={{ opacity: 0, rotateY: open ? 0 : 360 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1, rotateY: !open ? 0 : 360 }}
        transition={{ duration: 0.4 }}
      >
        {logo}
      </MotionDiv>
    );

    const Arrow = () => (
      <MotionDiv
        style={
          {
            width: 45,
          } as MotionStyle
        }
        initial={{ rotateY: open ? 0 : 180 }}
        animate={{ rotateY: !open ? 0 : 180 }}
        transition={{ duration: 0.4 }}
      >
        <IconButton onClick={() => setOpen((prev) => !prev)}>
          <DoubleArrow />
        </IconButton>
      </MotionDiv>
    );

    return (
      <StyledDrawer variant="permanent" open={open} sx={{ height: "100%" }}>
        <DrawerHeader sx={{width: "100%", m: 0}}>
          {open ? (
            <Box width={"100%"}>
              <Box
                width="90%"
                mb={1}
                ml={2}
                display="flex"
                justifyContent="space-between"
              >
                <Logo />
                <Arrow />
              </Box>
              {projectName}
            </Box>
          ) : (
            <Box
              width="100%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Arrow />
              <Logo />
            </Box>
          )}
          <Box>{headerLine}</Box>
        </DrawerHeader>
        <List sx={{
          height: '90%',
          overflowY: 'auto',
          overflowX: 'hidden',
        }}>{getMenu(menus)}</List>
        {
          open ? (
            <ListItem sx={{
              // position: "fixed",
              bottom: 0,
              textAlign: "center",
              paddingBottom: 4,
              width: "fit-content"
            }}>
              {footer}
            </ListItem>
          ) : footerCollapse
        }
      </StyledDrawer>
    );
  };
};
