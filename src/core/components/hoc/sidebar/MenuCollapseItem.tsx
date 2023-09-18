import {
  BoxProps,
  CollapseProps,
  CreateMUIStyled,
  ListItemIconProps,
  ListItemTextProps,
  MenuItemProps,
  PopoverProps,
  Theme
} from '@mui/material';
import { ForwardRefComponent, HTMLMotionProps } from 'framer-motion';
import { Fragment, ComponentType, useState, MouseEvent } from 'react';
import { MenuGroup } from '../index.d';

type Props = {
  active: boolean;
  menuGroup: MenuGroup;
  subMenu: (JSX.Element | undefined)[];
  openDrawer: boolean;
  styled: CreateMUIStyled<Theme>;
  Box: ComponentType<BoxProps>;
  MotionDiv: ForwardRefComponent<HTMLDivElement, HTMLMotionProps<'div'>>;
  Link: ComponentType<any>;
  ListItem: ComponentType<any>;
  ListItemText: ComponentType<ListItemTextProps>;
  ListItemIcon: ComponentType<ListItemIconProps>;
  Collapse: ComponentType<CollapseProps>;
  ExpandMoreIcon: ComponentType<any>;
  Popover: ComponentType<PopoverProps>;
  MenuItem: ComponentType<MenuItemProps>;
  colorText: string;
  colorActiveBorder: string;
  colorActive: string;
  colorInactive: string;
  sizeTextItem?: number;
};

export const MenuCollapseItem = ({
  active,
  menuGroup,
  subMenu,
  openDrawer,
  styled,
  Box,
  MotionDiv,
  Link,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  ExpandMoreIcon,
  Popover,
  MenuItem,
  colorText,
  colorActiveBorder,
  colorActive,
  colorInactive,
  sizeTextItem,
}: Props) => {
  const BoxListGroup = styled(Box, {
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
    color: colorText,
  }));

  const StyledListItemText = styled(ListItemText)(() => ({
    color: colorText,
    '& .MuiListItemText-primary': {
      fontSize: sizeTextItem,
      letterSpacing: 0.5,
    },
  }));

  const [open, setOpen] = useState(false);
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const openPopover = Boolean(anchorEl);
  const id = open ? `popover-${menuGroup.groupName}` : undefined;

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
    setClientX(event.clientX);
    setClientY(event.clientY);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <BoxListGroup
        display="flex"
        alignItems="center"
        active={openDrawer ? false : active}
        onClick={(e: MouseEvent<HTMLDivElement>) =>
          openDrawer ? setOpen((prev) => !prev) : handleClick(e)
        }
      >
        <ListItem button={!openDrawer}>
          <ListItemIcon>
            <BoxIcon ml={-0.4} active={open}>
              {menuGroup.groupIcon}
            </BoxIcon>
          </ListItemIcon>
          <StyledListItemText
            primaryTypographyProps={{ style: { fontSize: sizeTextItem } }}
            primary={menuGroup.groupName}
          />
          <MotionDiv
            initial={{ rotate: open ? 0 : 180 }}
            animate={{ rotate: !open ? 0 : 180 }}
          >
            <ExpandMoreIcon />
          </MotionDiv>
        </ListItem>
      </BoxListGroup>
      {openDrawer ? (
        <Collapse in={open} timeout="auto" unmountOnExit>
          {subMenu.map((e) => e)}
        </Collapse>
      ) : (
        <Popover
          id={id}
          open={openPopover}
          anchorEl={anchorEl}
          onClose={handleClose}
          sx={{
            left: clientX,
            top: clientY,
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          {menuGroup.menus.map((s, i) => (

            // <Link style={{ textDecoration: 'none' }} to={s.path}>
            <Link style={{ textDecoration: 'none' }} href={{
              pathname: s.path,
            }}>
              <MenuItem key={`sub-menu-item-${i}`} onClick={handleClose}>
                <ListItemIcon>{s.icon}</ListItemIcon>
                <ListItemText sx={{ height: 50 }}><p style={{ fontSize: 14 }}>{s.text}</p></ListItemText>
              </MenuItem>
            </Link>
          ))}
        </Popover>
      )}
    </Fragment>
  );
};
