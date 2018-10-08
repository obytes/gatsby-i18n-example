module.exports = {
	siteMetadata: {
		title: 'Gatsby i18n Example',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-plugin-google-fonts',
			options: {
				fonts: [
					'Cairo',
					'Roboto'
				]
			}
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'gatsby-starter-default',
				short_name: 'starter',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui',
				icon: 'src/images/gatsby-icon.png',
			},
		},
		'gatsby-plugin-offline',
	],
}
