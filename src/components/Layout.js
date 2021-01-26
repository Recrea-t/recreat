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

import {Flex, HStack, Icon, Text, Link} from "@chakra-ui/react"
import {FaCookieBite} from "@react-icons/all-files/fa/FaCookieBite"

import {
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
} from "@chakra-ui/react"

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
			<CookieConsent
				location="bottom"
				buttonText="Acceptar"
				onAccept={() => {initializeAndTrack(location)}}
				enableDeclineButton
				declineButtonText="&times;"
				cookieName="gatsby-gdpr-google-analytics"
				style={{backgroundColor: "#9A9AA0", marginBottom: "3rem"}}
				buttonWrapperClasses="cookie-consent-buttons"
				buttonClasses="accept-btn"
				declineButtonClasses="decline-btn"
				expires={150}>
				<HStack spacing={2} color="dimGray.500">
					<Icon as={FaCookieBite} h={8} w={8} />
					<Text>
						Utilitzem galetes per millorar la informació i optimitzar l'experiència de l'usuari de manera contínua.
					Per a més informació, consulteu la <Link href="/politica-de-galetes" target="_blank" title="Política de cookies" fontWeight="semibold" > política de galetes</Link>.
				</Text>
				</HStack>
			</CookieConsent>
		</React.Fragment >
	)
}

export default TemplateWrapper
