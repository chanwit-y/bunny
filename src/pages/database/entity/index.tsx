import React from 'react'
import dynamic from 'next/dynamic';
import { NextPage } from 'next'
import { Box } from '@mui/material';


const EntityContainer = dynamic(() => import('@/core/components/container/entity').then((module) => module.EntityContainer), {
	ssr: true, // Disable SSR and use CSR
      });

type Props = {}

const Entity: NextPage<Props> = ({ }: Props) => {

	return (
		<Box height="95%" width="100%">
			<EntityContainer />
		</Box>
	)
}

export default Entity;




