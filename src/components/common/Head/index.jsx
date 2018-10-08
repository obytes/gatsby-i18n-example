import React from 'react'
import { Helmet } from 'react-helmet'
import { injectIntl } from 'react-intl'
import { Context } from '../Context'

const Head = ({ title, intl: { formatMessage } }) => (
	<Context.Consumer>
		{({ lang }) => (
			<Helmet>
				<html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} />
				<title>
					{formatMessage({ id: title })}
				</title>
			</Helmet>
		)}
	</Context.Consumer>
)

export default injectIntl(Head)
