import React, { Component } from 'react';
import Logo3 from '../components/svg/LogoSeungax2'
import Logo4 from '../components/svg/LogoSeungax2V2'


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

				<section className="flexColumn center" style={style}>
					<Logo3 />
					<Logo4 />
					<div className="btn_scroll flexColumn center">
						<a href="#demo">
							<div className="ic_scroll_down">
								<span></span>
								<span></span>
								<span></span>
							</div>
						</a>
					</div>
				</section>

			</article >
		);
	}


}

export default Intro;