import React from 'react'
import styled from 'styled-components'
import ar from 'react-intl/locale-data/ar'
import en from 'react-intl/locale-data/en'
import { addLocaleData, IntlProvider } from 'react-intl'
import localEng from '../../../messages/en.json'
import localAr from '../../../messages/ar.json'
import { Context } from '../Context'
import Provider from './Provider'
import Header from '../../theme/Header'
import './layout.css'

addLocaleData(ar, en)

const Layout = ({ children }) => (
	<Provider>
		<Context.Consumer>
			{({ lang }) => (
				<IntlProvider locale={lang} messages={lang === 'en' ? localEng : localAr}>
					<Global lang={lang}>
						<Header />
						{children}
					</Global>
				</IntlProvider>
			)}
		</Context.Consumer>
	</Provider>
)

const Global = styled.div`
    font-family: 'Roboto', sans-serif;
    ${({ lang }) => lang === 'ar' && `
        font-family: 'Cairo', sans-serif;    
    `}
`

export { Layout }
