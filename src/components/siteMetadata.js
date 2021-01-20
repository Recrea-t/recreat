import {graphql, useStaticQuery} from 'gatsby'

const useSiteMetadata = () => {
	const {site} = useStaticQuery(
		graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
						defaultTitle: title
						titleTemplate
						defaultDescription: description
						defaultImage: image
						siteUrl
						color
						author {
							name
							url
						}
						organization {
							name
							url
							logo
							email
							phone {
								number
								title
							}
							address
						}
						social {
							twitter
							fbAppID
							instagram
							github
						}
          }
        }
      }
    `
	)
	return site.siteMetadata
}

export default useSiteMetadata
