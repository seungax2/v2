import React, { Component } from 'react';

import Logo from '../components/Logo'
import Logo2 from '../components/Logo2'
import Logo3 from '../components/Logo3'

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
					<div>
						<Logo3 />
					</div>
				</section>
			</article >
		);
	}


}

export default Intro;