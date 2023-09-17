import { Box, Button, IconButton } from '@mui/material'
import React, { useMemo } from 'react'
import { useEntity } from './Context'

import AddBoxIcon from '@mui/icons-material/AddBox';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import SaveIcon from '@mui/icons-material/Save';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';

export const ToolBox = () => {
	const { addEntity, nodes, createEntity, updateEntity } = useEntity();

	return (
		<Box display="flex" position="sticky" top={0} >
			<IconButton color='primary' onClick={() => addEntity()}>
				<AddBoxIcon />
			</IconButton>
			<IconButton color='primary'>
				<SaveIcon />
			</IconButton>
			<IconButton color='primary'>
				<UpgradeIcon />
			</IconButton>
			<IconButton color='primary'>
				<HistoryToggleOffIcon />
			</IconButton>
			{/* <Button onClick={() => addEntity()}>Add</Button> */}
			<Button onClick={async () => {
				console.log(nodes)
				await createEntity();
			}}>Create</Button>
			<Button onClick={async () => {
				console.log(nodes)
				await updateEntity();
			}}>Update</Button>
		</Box>
	)
}
