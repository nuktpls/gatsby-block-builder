import React from 'react'
import slugify from './tools/slugify'
import MainButton from './MainButton'
import MainWrapper from './MainWrapper'
import arrayButtons from './configs/arrayButtonsConfigs'

const ButtonsMain = ({ title }) => {
	if (!title) {
		return null
	}

	const titleSlug = slugify(title)

	return (
		<MainWrapper title={titleSlug}>
			<div className={`index-link-wrapper ${titleSlug}`}>
				{arrayButtons.map((btn, indx) => (
					<MainButton
						slug={titleSlug}
						key={indx}
						linkUrl={btn.linkUrl}
						text={btn.text}
						icon={btn.icon}
					/>
				))}
			</div>
		</MainWrapper>
	)
}

export default ButtonsMain
