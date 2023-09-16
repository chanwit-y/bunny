
import { ComponentType } from "react";
import { Colors } from "../constants/coolor";

import StorageIcon from '@mui/icons-material/Storage';
import FunctionsIcon from '@mui/icons-material/Functions';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

import SettingIcon from "@mui/icons-material/Settings";
import SquareIcon from "@mui/icons-material/Square";
import { Menu, MenuGroup } from "../components/hoc/index.d";

const primarySXIcon = { color: Colors.primary };

const initIcon = (Icon: ComponentType<any>) => (
	<Icon sx={{ ...primarySXIcon }} />
);

export const menus: (Menu | MenuGroup)[] = [
	{
		groupName: "Database",
		//     text: "Database",
		groupIcon: initIcon(StorageIcon),
		//     path: "/",
		//     breadcrumbs: ["Database"],
		//     breadcrumbLinks: ["/database", '/'],
		//     active: true,

		menus: [
			{
				name: "Entity",
				text: "Entity",
				icon: <SquareIcon fontSize="small" sx={{ fontSize: 10, color: Colors.lavenderBlue, rotate: "45deg" }} />,
				path: "/",
				breadcrumbs: ["Entity"],
				breadcrumbLinks: ["/"],
				active: true,
			},
		]
	},
	{
		name: "function",
		text: "Function",
		icon: initIcon(FunctionsIcon),
		path: "/function",
		breadcrumbs: ["Function"],
		breadcrumbLinks: ["/function", '/'],
		active: true,
	},
	{
		groupName: "Settings",
		groupIcon: initIcon(SettingIcon),
		menus: [
			{
				name: "connection",
				text: "Connection",
				icon: <SquareIcon fontSize="small" sx={{ fontSize: 10, color: Colors.lavenderBlue, rotate: "45deg" }} />,
				path: "/connection",
				breadcrumbs: ["Connection"],
				breadcrumbLinks: ["/connection"],
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
