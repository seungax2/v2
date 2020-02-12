import React, { Component } from 'react';
import Logo3 from '../components/svg/LogoSeungax2'
import Logo4 from '../components/svg/LogoSeungax2V2'
import Particles from '../components/Particles'
import Thing from '../components/cubeTest'
import Thing2 from '../components/cubeTest2'
import { Canvas, useFrame } from 'react-three-fiber'

class Intro extends Component {
	state = { height: 0 }

	updateHeight = (e) => {
		this.setState({ height: window.innerHeight })
	}

	// Add event listener
	componentDidMount() {
		this.updateHeight();
		window.addEventListener("resize", this.updateHeight.bind(this));
	}

	//Remove event listener
	componentWillUnmount() {
		window.removeEventListener("resize", this.updateHeight.bind(this));
	}
	render() {
		let style = {
			width: '100%',
			height: this.state.height,
			background: '#000'
		};
		return (
			<article className="introArticle">

				<section className="flexColumn center" style={{ ...style, ...{ background: '#000' } }} >
					<Logo3 />
					<Logo4 />
					<div className="btn_scroll flexColumn center">
						<a href="#intro_s2" onClick={this.scrollDown}>
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
				{/* <section id="intro_s2" className="flexColumn center" style={style}>
					<Canvas>
						<Thing />
					</Canvas>
				</section>

				<section id="" className="flexColumn center" style={style}>
					<Thing2 />
				</section> */}

			</article >
		);
	}


}

export default Intro;