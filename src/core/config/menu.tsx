import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";

import { ComponentType } from "react";
import { Colors } from "../constants/coolor";

import SettingIcon from "@mui/icons-material/Settings";
import SquareIcon from "@mui/icons-material/Square";
import { Menu, MenuGroup } from "../components/hoc/index.d";

const primarySXIcon = { color: Colors.primary };

const initIcon = (Icon: ComponentType<any>) => (
  <Icon sx={{ ...primarySXIcon }} />
);

export const menus: (Menu | MenuGroup)[] = [
  {
    name: "customer",
    text: "Customer",
    icon: initIcon(ChromeReaderModeIcon),
    path: "/customer",
    breadcrumbs: ["Customer"],
    breadcrumbLinks: ["/customer", '/'],
    active: true,
  },
  {
    name: "user-profile",
    text: "User Profile",
    icon: initIcon(ChromeReaderModeIcon),
    path: "/user-profile",
    breadcrumbs: ["User Profile"],
    breadcrumbLinks: ["/user-profile", '/'],
    active: true,
  },
  {
	groupName: "Settings",
	groupIcon: initIcon(SettingIcon),
	menus: [
	  {
	    name: "setting-1",
	    text: "Setting 1",
	    icon: <SquareIcon fontSize="small" sx={{ fontSize: 10, color: Colors.lavenderBlue, rotate: "45deg" }} />,
	    path: "/setting-1",
	    breadcrumbs: ["Setting"],
	    breadcrumbLinks: ["/setting-1"],
	    active: true,
	  },
	  {
	    name: "setting-2",
	    text: "Setting 2",
	    icon: <SquareIcon fontSize="small" sx={{ fontSize: 10, color: Colors.lavenderBlue, rotate: "45deg" }} />,
	    path: "/setting-2",
	    breadcrumbs: ["Setting"],
	    breadcrumbLinks: ["/setting-2"],
	    active: true,
	  },
	],
      },
];
