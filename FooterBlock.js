import React from 'react'
import Layout from 'gatsby-layout-builder'
import { RiWhatsappFill, RiEyeFill } from 'react-icons/ri'
const FooterBlock = ({ social }) => {
	return (
		<Layout
			type="ROW"
			opt={{
				isBoxed: true,
				classes: 'footer-gray',
				alignTo: 'center',
				bgColor: '#2f2f2f',
			}}
		>
			<Layout type="FOOTER" opt={{ social: social }}>
				<p>Copyright 2017, todos os direitos reservados.</p>

				<p>ADJ – ASSOCIAÇÃO DE DIABETES JUVENIL</p>

				<p>R. Padre Antônio Tomás, 213 - Água Branca,</p>
				<p>São Paulo - SP, 05003-010.</p>
				<br />

				<p className="phones-container">
					(11) 3675-3266 – ramal 11
					<br />
					<RiWhatsappFill /> (11)9 7148-0465
				</p>
				<br />

				<p>
					Ninguém está autorizado a utilizar o logo e nome da Associação de
					Diabetes Juvenil - ADJ, principalmente para fins comerciais.
				</p>
				<p>
					O uso indevido e sem autorização acarretará a tomada das medidas
					legais cabíveis.
				</p>

				<p>
					É vedada a publicação do conteúdo deste site, no todo ou em parte, sem
					prévia autorização, por escrito, da ADJ Diabetes Brasil.
				</p>
				<p>Solicite autorização pelo e-mail: </p>
				<p>
					<span>
						<a href="mailto:revistaadj@adj.org.br" className="footer-link">
							revistaadj@adj.org.br
						</a>
					</span>
				</p>
				<br />

				<p className="warn-message-container">
					<RiEyeFill />
					<strong>INFORMAÇÃO IMPORTANTE</strong>
				</p>
				<br />

				<p>
					O conteúdo desse site tem finalidade exclusivamente informativa e
					educativa e não substitui, em nenhuma hipótese,
				</p>
				<p>
					a necessidade de seguir as orientações de seu médico e/ou de outros
					profissionais de saúde,
				</p>
				<p>
					únicos habilitados a prescrever o tratamento mais adequado às suas
					necessidades.
				</p>
			</Layout>
		</Layout>
	)
}

export default FooterBlock
