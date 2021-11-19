import React from 'react'
import slugify from './tools/slugify'
import MainWrapper from './MainWrapper'

import Layout from 'gatsby-layout-builder'

const HeaderBlock = ({ title, debug = false, logotipoImg }) => {
	if (!title) {
		return null
	}
	const titleSlug = slugify(title)

	return (
		<MainWrapper title={titleSlug}>
			<Layout
				type="HEADER"
				opt={{
					logoHeader: (
						<Layout type="BLOCK_IMAGE" opt={{ queryCard: logotipoImg }} />
					),
				}}
			/>
		</MainWrapper>
	)
}

export default HeaderBlock
