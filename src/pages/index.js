import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Layout, Container } from '../components/common'
import Head from '../components/common/Head'

const IndexPage = () => (
	<Layout>
		<>
			<Head title="welcome" />
			<Container>
				<h2>
					<FormattedMessage id="welcome" />
				</h2>
			</Container>
		</>
	</Layout>
)

export default IndexPage
