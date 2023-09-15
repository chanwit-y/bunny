
export type Menu = {
	name: string;
	text: string;
	icon?: JSX.Element;
	path: string;
	breadcrumbs: string[];
	breadcrumbLinks: string[];
	active: boolean;
      };
      
      export type MenuGroup = {
	groupName: string;
	groupIcon?: JSX.Element;
	menus: Menu[];
      };
