import "@fontsource/montserrat"
import "@fontsource/montserrat/100.css" // Thin
import "@fontsource/montserrat/200.css" // Light
import "@fontsource/montserrat/600.css" // Semi-bold
import "@fontsource/montserrat/700.css" // Bold
import "@fontsource/playfair-display"

import React from 'react'
import {useLocation} from "@reach/router"
import useSiteMetadata from './siteMetadata'

import CookieConsent from "react-cookie-consent";
import {initializeAndTrack} from 'gatsby-plugin-gdpr-cookies'

import {Icon} from "@chakra-ui/react"
import {FaCookieBite} from "@react-icons/all-files/fa/FaCookieBite"

import {Flex} from "@chakra-ui/react"
import Header from "./sections/Header"
import Footer from "./sections/Footer"
import SEO from './SEO/seo'

const TemplateWrapper = (props) => {
	const {
		title,
		description,
		image,
		isBlogPost,
		datePublished,
	} = props

	const location = useLocation()
	const {defaultTitle} = useSiteMetadata()

	return (
		<React.Fragment>
			<SEO title={title} description={description} image={image} isBlogPost={isBlogPost} datePublished={datePublished} />
			<Flex
				direction="column"
				align="center"
				justify="space-between"
				h="100vh"
			>
				<Header />
				<Flex as="main" pos="relative" w="full" mt={28} direction="column">
					{props.children}
				</Flex>
				<Footer title={defaultTitle} />
			</Flex>
			{/*
            <CookieConsent
                location="bottom"
                buttonText="Acceptar"
                onAccept={() => { initializeAndTrack(location) }}
                enableDeclineButton
                declineButtonText=""
                cookieName="gatsby-gdpr-google-analytics"
                disableStyles={true}
                containerClasses="cookie-consent fixed-bottom alert alert-dark alert-dismissible fade show text-sm d-flex flex-row justify-content-between"
                buttonWrapperClasses="buttons"
                buttonClasses="btn btn-sm btn-primary"
                declineButtonClasses="btn-close"
                expires={150}>
                <p>
                    <Icon as={FaCookieBite} />
					Utilitzem galetes per millorar la informació i optimitzar l'experiència de l'usuari de manera contínua.
					Per a més informació, consulteu la <a href="/politica-de-galetes" target="_blank" title="Política de cookies" className="alert-link"> política de galetes</a>.
				</p>
            </CookieConsent>
						*/}
		</React.Fragment>
	)
}

export default TemplateWrapper
