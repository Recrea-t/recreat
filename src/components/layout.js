import React from 'react'
import SEO from '../components/SEO/seo'

const TemplateWrapper = ({
	title,
	description,
	image,
	isBlogPost,
	datePublished,
	children,
}) => {

	return (
		<React.Fragment>
			<SEO title={title} description={description} image={image} isBlogPost={isBlogPost} datePublished={datePublished} />
			{children}
		</React.Fragment>
	)
}

export default TemplateWrapper
