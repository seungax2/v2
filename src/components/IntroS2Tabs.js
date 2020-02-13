import React, { Component, useState } from 'react';
import { useSpring, animated, config } from "react-spring";
import ReactHtmlParser from 'react-html-parser'

function IntroS2Tabs({ bgColor, children, blurColor, showData }) {
	const [state, toggle] = useState(true)
	const spring_props = useSpring({
		config: config.stiff,
		from: {
			height: '0%',
			opacity: '0',
			width: '0px',
			/* boxShadow: `0px 0px 15px 2px ${blurColor}`, */
		},
		to: {
			height: state ? '0%' : '60%',
			opacity: state ? '0' : '1',
			width: state ? '0px' : '1000px',
		},
	})
	return (
		<div className="s2ClickDiv flexColumn center" onClick={() => toggle(!state)} >
			<p className="tabBtn" data-color={bgColor} data-disabled="true" >{children}</p>
			<animated.div style={spring_props} className="popDiv flexColumn center">{ReactHtmlParser(showData)}</animated.div>
		</div>
	)
}

export default IntroS2Tabs