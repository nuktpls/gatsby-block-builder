import React from 'react'
import Layout from 'gatsby-layout-builder'

const MainWrapper = ({ children, title, opt }) => {
	return (
		<Layout
			type="ROW"
			opt={{
				isBoxed: true,
				classes: (opt && opt.classes) || 'main-wrapper',
				alignTo: 'left',
				bgColor: '#fff',
				title: title,
			}}
		>
			{children}
		</Layout>
	)
}

export default MainWrapper
