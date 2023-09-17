
import { ComponentType } from "react";
import { Colors } from "../../core/constants/coolor";

import StorageIcon from '@mui/icons-material/Storage';
import FunctionsIcon from '@mui/icons-material/Functions';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

import SettingIcon from "@mui/icons-material/Settings";
import SquareIcon from "@mui/icons-material/Square";
import { Menu, MenuGroup } from "../../core/components/hoc/index.d";

const primarySXIcon = { color: Colors.primary };

const initIcon = (Icon: ComponentType<any>) => (
	<Icon sx={{ ...primarySXIcon }} />
);

export const menus: (Menu | MenuGroup)[] = [
	{
		name: "project",
		text: "Project",
		icon: initIcon(AccountTreeIcon),
		path: "/",
		breadcrumbs: ["Project"],
		breadcrumbLinks: ["/project", '/'],
		active: true,
	},
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
				path: "/database/entity",
				breadcrumbs: ["Entity"],
				breadcrumbLinks: ["/database/entity"],
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
