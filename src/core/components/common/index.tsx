import { styled, AppBar as MuiAppBar, Toolbar as MuiToolbar, Box, Drawer, IconButton, Collapse, List, ListItem, ListItemText, ListItemIcon, Popover, MenuItem, Link } from "@mui/material";
import { createAppBar, createImageIcon, createMain, createSidebar, createToolbar } from "../hoc";
import { createDomMotionComponent } from "framer-motion";

import { ExpandMore, DoubleArrow } from "@mui/icons-material";
import { SidebarOption } from "../hoc/createSidebar";



const MotionDiv = createDomMotionComponent("div");

const sidebarOption: SidebarOption  = {
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
	drawerWidth: 260,
	colorActiveBorder: "#1876d1",
	colorActive: "#EEEDFD",
	colorInactive: "#fff",
	colorTextGroup: "#515A6E",
	colorText: "#515A6E",
	sizeTextItem: 12,
};


export { MenuCollapseItem } from "./MenuCollapseItem";



export const ImageIcon = createImageIcon(styled);
export const AppBar = createAppBar(styled, MuiAppBar, 250);
export const Toolbar = createToolbar(MuiToolbar, Box);
export const Sidebar = createSidebar(sidebarOption);
export const Main = createMain(styled, 250, 65);