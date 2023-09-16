import { Fragment, useState } from "react";
// import { useAppInsights } from "@banpudev/react-appinsights";
import { AppBar, ImageIcon, Main, Sidebar, Toolbar } from "../common";
import { Box, Typography, Divider } from "@mui/material";
import { menus } from "@/core/config/menu";
import Image from "next/image";
import logo from "@/asset/logo.png";

// import logo from "../../assets/images/logo.png";
// import { useLocation } from "react-router-dom";
// import { useAuth } from "../../lib/config/auth";
// import { useAppInsights } from "@banpudev/react-appinsights";

type Props = {
	children: React.ReactNode
};
export const Layout = ({ children }: Props) => {
	// const location = useLocation();
	const [open, setOpen] = useState(true);

	// const { userProfile } = useAuth();
	// const { setAuthenticatedUserContext } = useAppInsights();

	// useEffect(() => {
	// 	setAuthenticatedUserContext(userProfile?.email || "");
	// }, [setAuthenticatedUserContext, userProfile])

	return (
		<Fragment>
			<AppBar elevation={0} open={open}>
				<Toolbar start={<>Start</>} end={<>End</>} />
			</AppBar>
			<Sidebar
				menus={menus}
				// logo={<ImageIcon src={"../../..//assets/images/logo.png"} width="35px" height="35px" />}
				logo={<Image src={logo} width={35} height={35} alt={""} />}
				// nextLogo={logo}
				headerLine={<Divider sx={{ color: "black", width: "240px", height: "4px" }} />}
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
