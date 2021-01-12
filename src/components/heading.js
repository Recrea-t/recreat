import React from 'react'

const Heading = ({id, heading}) => {
	return (
		<div id={id} style={{overflow: 'hidden', }}>
			<h2 className="my-3">{heading}</h2>
			<div className="sep"><span></span></div>
		</div>
	)
}

export default Heading

