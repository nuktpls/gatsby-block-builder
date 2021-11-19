import React from 'react'

import Layout from 'gatsby-layout-builder'
import AtomicBlock from 'gatsby-atomic-block'
import slugify from './tools/slugify'

const ScrollSomething = ({ title, numColumns, debug = false }) => {
	if (!title) {
		return null
	}
	const titleSlug = slugify(title)

	return (
		<Layout
			type="ROW"
			opt={{
				bgColor: '#3df',
				isBoxed: true,
				classes: 'light-content',
				alignTo: 'left',
			}}
			setLocation="home-quote"
		>
			{/* opt.bgColor
opt.bgColor
opt.bgColor
opt.classes
opt.isBoxed
opt.numColumns
opt.alignTo
opt.bgColor
opt.bgImg
opt.bgImg */}
			<AtomicBlock
				type="BLOCK"
				blockTitle={title}
				heading="Meu conteudo"
				// paragraph="conteudo Aqui"
				// link="/"
				// linkText="Link here, click me."
				// srcSet={data.imagenzinha.childrenImageSharp[0].fluid.srcSet}
				// sizes={data.imagenzinha.childrenImageSharp[0].fluid.sizes}
				// src={data.imagenzinha.childrenImageSharp[0].fluid.src}
				// alt={`Orra meu`}
				// formID={`051`}
				// form={`meu form`}
				numColumns={numColumns}
				alignTo="center"
				backgroundColor="#d4f"
				isCarousel={false}
				// sliderClass=""
				gridType=""
				// numColumns=""
				// alignTo=""
				sliderClass={titleSlug}
				bgColor="#ffffff"
				debug={debug}
				// debugInfos={debugInfos}
				// columnWidth="full-width-row"
			>
				<h2>oi mano</h2>
				<h2>oi mano</h2>
				<h2>Segundo</h2>
				<h2>Vinte</h2>
			</AtomicBlock>
		</Layout>
	)
}

export default ScrollSomething
