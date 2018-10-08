import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FormattedMessage } from 'react-intl'
import { Trigger, Container } from '../../common'

const Header = () => (
	<StyledHeader>
		<Navbar as={Container}>
			<Link to="/">
				<FormattedMessage id="logo_text" />
			</Link>
			<Links>
				<Link to="/">
					<FormattedMessage id="home" />
				</Link>
				<Link to="/about">
					<FormattedMessage id="about" />
				</Link>
				<Trigger />
			</Links>
		</Navbar>
	</StyledHeader>
)

// Feel free to move these to a separated styles.js file and import them above

const StyledHeader = styled.div`
	padding: 1rem 0;
	background: #00BCD4;
`
const Navbar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	a {
		color: #fff;
		text-decoration: none;
	}
`
const Links = styled.div`
	display: flex;
	align-items: center;
	a {
		margin: 0 1rem;
	}
`

export default Header
