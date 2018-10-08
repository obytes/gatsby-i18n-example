import React from 'react'
import {  FormattedMessage } from 'react-intl'
import { Layout, Container } from '../components/common'
import Head from '../components/common/Head'

const NotFoundPage = () => (
	<Layout>
		<>
			<Head title="not_found" />
			<Container>
				<h2>
					<FormattedMessage id="not_found" />
				</h2>
			</Container>
		</>
	</Layout>
)

export default NotFoundPage
