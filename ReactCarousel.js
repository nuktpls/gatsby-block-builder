import React from 'react'
import Layout from 'gatsby-layout-builder'
import MainWrapper from './MainWrapper'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

const ReactCarousel = ({ data }) => (
	<MainWrapper title={'carousel-logos'}>
		<h2 className="heading-logos">Nossos Parceiros</h2>
		<Carousel showThumbs={false} transitionTime="00">
			<div className="slide-logos" key="logotipos-01">
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.astrazeneca }} />
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bayer }} />
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.bd }} />
			</div>

			<div className="slide-logos" key="logotipos-02">
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.novartis }} />
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.nordisk }} />
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.roche }} />
			</div>

			<div className="slide-logos" key="logotipos-03">
				<Layout type="BLOCK_IMAGE" opt={{ queryCard: data.sanofi }} />
			</div>
		</Carousel>
	</MainWrapper>
)

export default ReactCarousel
