import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Layout, Container } from '../components/common'
import Head from '../components/common/Head'

const AboutPage = () => (
	<Layout>
		<>
			<Head title="about" />
			<Container>
				<h2>
					<FormattedMessage id="about" />
				</h2>
			</Container>
		</>
	</Layout>
)

export default AboutPage
