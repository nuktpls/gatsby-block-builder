import React from 'react'
import { Link } from 'gatsby'
const MainButton = ({ linkUrl, text, icon, slug }) => {
	return (
		<Link to={linkUrl} className={`index-link ${slug}-child`}>
			{text} {icon}
		</Link>
	)
}

export default MainButton
