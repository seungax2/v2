import React, { Component, useState, useEffect } from 'react';
import Logo3 from '../components/svg/LogoSeungax2'
import Logo4 from '../components/svg/LogoSeungax2V2'
import Particles from '../components/Particles'

//hooks 버전
function Intro() {

	const [height, setHeight] = useState(window.innerHeight);
	const updateHeight = () => {
		setHeight(window.innerHeight)
	};
	useEffect(() => {
		window.addEventListener('resize', updateHeight);
		return () => window.removeEventListener('resize', updateHeight);
	});

	let style = {
		width: '100%',
		height: height,
		background: '#709074'
	};

	return (
		<article className="introArticle">

			{/* <section className="flexColumn center" style={{ ...style, ...{ background: '#000' } }} > */}
			<section id="intro_s1" className="flexColumn center" style={{ ...style }} >
				<div className="logoWrapper flexColumn center">
					<Logo3 />
					<Logo4 />
				</div>
				<div className="btn_scroll flexColumn center">
					<a href="#intro_s2">
						<div className="ic_scroll_down">
							<span></span>
							<span></span>
							<span></span>
						</div>
					</a>
				</div>
			</section>

			<section id="intro_s2" className="flexColumn center" style={style}>
				<Particles text="HELLO" color="#3D8CD0" />
			</section>
		</article >
	);
}

export default Intro;