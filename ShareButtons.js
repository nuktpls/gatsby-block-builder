import React from 'react'
import MainWrapper from './MainWrapper'

import {
	FacebookShareButton,
	TelegramShareButton,
	TwitterShareButton,
	WhatsappShareButton,
} from 'react-share'

import { FaFacebook, FaWhatsapp, FaTelegram, FaTwitter } from 'react-icons/fa'

const ShareButtons = ({ title, siteUrl }) => {
	if (!title) {
		return null
	}
	return (
		<MainWrapper title={'index-link-wrapper'}>
			<div className="wrapper-buttons">
				<span>Compartilhe</span>
				<div className="modal-share-button">
					<FacebookShareButton quote={title} url={siteUrl} title={title}>
						<FaFacebook />
					</FacebookShareButton>
					<TwitterShareButton url={siteUrl} title={title}>
						<FaTwitter />
					</TwitterShareButton>
					<WhatsappShareButton url={siteUrl} title={title}>
						<FaWhatsapp />
					</WhatsappShareButton>
					<TelegramShareButton url={siteUrl} title={title}>
						<FaTelegram />
					</TelegramShareButton>
				</div>
			</div>
		</MainWrapper>
	)
}
export default ShareButtons
