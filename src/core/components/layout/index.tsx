import { Fragment, useState } from "react";
import { AppBar, Main, Sidebar, Toolbar } from "../common";
import { Box, Typography, Divider } from "@mui/material";
import { menus } from "@/core/config/menu";
import Image from "next/image";
import logo from "@/asset/logo.png";
import { Colors } from "@/core/constants";

type Props = {
	children: React.ReactNode
};
export const Layout = ({ children }: Props) => {
	const [open, setOpen] = useState(true);

	return (
		<Fragment>
			<AppBar elevation={0} open={open}>
				<Toolbar start={<>A</>} end={<>B</>} />
			</AppBar>
			<Sidebar
				menus={menus}
				logo={<Image src={logo} width={35} height={35} alt={""} />}
				// headerLine={<Divider sx={{ color: Colors.primary, width: "240px", height: "8px" }} />}
				projectName={<Box display="flex" justifyContent="center" alignItems="center">
					<Typography fontWeight={600} fontSize={16} >
						Bunny
					</Typography>
				</Box>}
				location={"/"}
				open={open}
				setOpen={setOpen}
			/>
			<Main open={open} sx={{ height: 'calc(100vh - 112px)' }}>{children}</Main>
		</Fragment>
	)
}
