import React from "react"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet"
import {useLocation} from "@reach/router"
import useSiteMetadata from '../siteMetadata'
import SchemaOrg from './SchemaOrg';

const SEO = ({title, description, image, lang, locale, isBlogPost, datePublished}) => {
	const {pathname} = useLocation()

	const {
		defaultTitle,
		titleTemplate,
		defaultDescription,
		defaultImage,
		siteUrl,
		color,
		author,
		organization,
		social,
	} = useSiteMetadata()

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: `${siteUrl}${image || defaultImage}`,
		url: `${siteUrl}${pathname}`,
	}

	return (
		<React.Fragment>
			<Helmet title={seo.title} titleTemplate={titleTemplate}>
				<html lang={lang} />
				<meta name="description" content={seo.description} />
				<meta name="image" content={seo.image} />
				<meta name="theme-color" content={color} />
				<link rel="canonical" href={seo.url} />

				{/* OpenGraph tags */}
				<meta property="og:url" content={seo.url} />
				{
					isBlogPost ?
						<meta property="og:type" content="article" /> :
						<meta property="og:type" content="website" />
				}
				{
					lang !== 'en' ?
						<meta property="og:locale" content={locale} /> : null
				}
				<meta property="og:title" content={seo.title} />
				<meta property="og:description" content={seo.description} />
				<meta property="og:image" content={seo.image} />

				{/* Twitter Card tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content={social.twitter} />
				<meta name="twitter:title" content={seo.title} />
				<meta name="twitter:description" content={seo.description} />
				<meta name="twitter:image" content={seo.image} />

				{/* Facebook tag */}
				{
					social.fbAppID && (
						<meta property="fb:app_id" content={social.fbAppID} />
					)
				}
			</Helmet>
			<SchemaOrg
				isBlogPost={isBlogPost}
				url={seo.url}
				title={seo.title}
				image={seo.image}
				description={seo.description}
				datePublished={datePublished}
				siteUrl={siteUrl}
				author={author}
				organization={organization}
				defaultTitle={defaultTitle}
			/>
		</React.Fragment>
	)
}

SEO.defaultProps = {
	title: null,
	description: null,
	image: null,
	lang: `ca`,
	locale: `ca_ES`,
	isBlogPost: false,
	datePublished: null,
}

SEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string,
	lang: PropTypes.string,
	locale: PropTypes.string,
	isBlogPost: PropTypes.bool,
	datePublished: PropTypes.instanceOf(Date),
}

export default SEO
