import React from "react"
import {Link, Icon} from '@chakra-ui/react'

const SocialLink = (props) => {
	const {item, icon} = props
	return (
		<Link
			href={`${item.baseUrl}${item.username}`}
			title={item.title}
			target="_blank"
			rel="noopener"
		>
			<Icon as={icon} h={8} w={8} />
		</Link >
	)
}

export default SocialLink
