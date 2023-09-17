import { memo } from "react"
import EntityProvider from "./Context"
import { Entity } from "./Entity"
import { ToolBox } from "./ToolBox"
import { Box } from "@mui/material"

export const EntityContainer = memo(() => {
	return (
		<EntityProvider id="ksuzK5dyHkmKOnEHZs9p">
			<ToolBox />
			<Box height={500} width={1100}>
				<Entity />
			</Box>
		</EntityProvider>
	)
})
