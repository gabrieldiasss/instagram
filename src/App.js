import React from 'react'

import Layout from './components/Layout/Layout'
import GlobalStyles from './styles/GlobalStyles'

import { v4: uuidV4 } from 'uuid'

export default function App() {

	return (
		<>
			<Layout />

			<GlobalStyles />
		</>
	)
}
