import { memo } from "react"
import EntityProvider from "./Context"
import { Entity } from "./Entity"
import { ToolBox } from "./ToolBox"
import { Box } from "@mui/material"

export const EntityContainer = memo(() => {
	return (
		<EntityProvider id="ksuzK5dyHkmKOnEHZs9p">
			<ToolBox />
			{/* <Box height="88%" width="92%"> */}
				<Entity />
			{/* </Box> */}
		</EntityProvider>
	)
})
