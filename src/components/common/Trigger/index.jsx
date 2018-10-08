import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { Context } from '../Context'

const Trigger = () => (
	<Context.Consumer>
		{({ toggleLanguage }) => (
			<Button type="button" onClick={toggleLanguage}>
				<FormattedMessage id="language" />
			</Button>
		)}
	</Context.Consumer>
)

// I recommend moving the style down below to a separate file

const Button = styled.button`
	color: #fff;
	padding: .3rem 1rem;
	box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
	background: #3F51B5;
	border-radius: 4px;
	font-size: 15px;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: .025em;
	text-decoration: none;
	cursor: pointer;
	border: none;
	&:focus {
		outline: none;
	}
`

export { Trigger }
