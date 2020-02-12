import React, { Component, useState } from "react";
import { useSpring, animated } from "react-spring";
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GeometryUtils } from "three/examples/jsm/utils/GeometryUtils"


function SpringDiv({ bgColor, children }) {
	const [state, toggle] = useState(true)
	const spring_props = useSpring({
		from: { height: '15%', opacity: '0', position: 'absolute', width: '0px', },
		to: { height: state ? '15%' : '80%', opacity: state ? '0' : '1', width: state ? '0px' : '1000px' },
	})
	return (
		<div onClick={() => toggle(!state)} className="s2ClickDiv flexColumn center" data-color={bgColor} >
			<p data-disabled="true">{children}</p>
			<animated.div style={spring_props} className="popDiv"></animated.div>
		</div>

	)
}

class MakeParticles extends Component {

	componentDidMount() {
		setTimeout(function () { this.drawScene(); }.bind(this), 0);
		window.addEventListener("resize", this.updateHeight.bind(this));
	}
	componentWillUnmount() {
		this.stop()
		this.mount.removeChild(this.renderer.domElement);
		window.removeEventListener("resize", this.updateHeight.bind(this));
	}
	updateHeight() {
		const height = this.mount.clientHeight;

		this.cam.aspect = this.width / height;
		this.cam.updateProjectionMatrix();

		this.renderer.setSize(this.width, height);
	}
	drawScene() {
		this.width = 1200;
		this.height = this.mount.clientHeight;
		console.log(this.width)

		// this.triggers = this.mount.getElementsByTagName('span')
		this.triggers = this.mount.getElementsByClassName('s2ClickDiv')
		//옵션
		this.particleCount = 15000;
		this.particleSize = .5;
		this.defaultAnimationSpeed = 1
		this.morphAnimationSpeed = 10
		this.color = '#FFFFFF';

		// Animate
		this.normalSpeed = (this.defaultAnimationSpeed / 100)
		this.fullSpeed = (this.morphAnimationSpeed / 100)

		this.animationVars = {
			speed: this.normalSpeed,
			color: this.color,
			rotation: 45
		}

		//공간,장면
		this.scene = new THREE.Scene();

		//카메라
		this.cam = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 10000);
		this.cam.position.x = 250
		this.cam.position.y = -45;
		this.cam.position.z = 45;

		//랜더러
		this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(this.width, this.height);
		this.mount.appendChild(this.renderer.domElement);

		//빛
		this.light = new THREE.AmbientLight(0xFFFFFF, 1);
		this.scene.add(this.light);

		/* //컨트롤
		this.controls = new OrbitControls(this.cam, this.mount);
		this.controls.update(); */

		//Particles
		this.particles = new THREE.Geometry();
		this.texts = [];
		this.pMaterial = new THREE.PointsMaterial({ size: this.particleSize });

		//texts
		const loader = new THREE.FontLoader();
		const typeface = 'https://dl.dropboxusercontent.com/s/bkqic142ik0zjed/swiss_black_cond.json?';

		loader.load(typeface, (font) => {
			Array.from(this.triggers).forEach((trigger, idx) => {
				this.texts[idx] = {};
				console.log(trigger.textContent)
				this.texts[idx].geometry = new THREE.TextGeometry(trigger.textContent, {
					font: font,
					size: this.width * 0.02,
					height: 5,
					curveSegments: 10,
				});

				this.texts[idx].particles = new THREE.Geometry();
				this.texts[idx].particles.center(this.texts[idx].geometry);

				this.texts[idx].points = GeometryUtils.randomPointsInGeometry(this.texts[idx].geometry, this.particleCount);

				this.createVertices(this.texts[idx].particles, this.texts[idx].points);
				this.enableTrigger(trigger, idx);
			});
		})

		//particles
		for (let p = 0; p < this.particleCount; p++) {
			let vertex = new THREE.Vector3();
			vertex.x = 0;
			vertex.y = 0;
			vertex.z = 0;

			this.particles.vertices.push(vertex);
		}

		this.particleSystem = new THREE.Points(this.particles, this.pMaterial);
		this.particleSystem.position.y = 30
		this.particleSystem.sortParticles = true;

		this.scene.add(this.particleSystem);

		this.start();
	}
	createVertices(emptyArray, points) {
		for (let p = 0; p < this.particleCount; p++) {
			let vertex = new THREE.Vector3();
			vertex.x = points[p]['x'];
			vertex.y = points[p]['y'];
			vertex.z = points[p]['z'];

			emptyArray.vertices.push(vertex);
		}
	}

	enableTrigger(trigger, idx) {
		trigger.setAttribute('data-disabled', false);
		trigger.addEventListener('click', () => {
			this.morphTo(this.texts[idx].particles, trigger.dataset.color);
		})

		if (idx == 0) {
			this.morphTo(this.texts[idx].particles, trigger.dataset.color);
		}
	}

	start = () => {
		if (!this.frameId) {
			this.frameId = requestAnimationFrame(this.animate);
		}
	}
	stop = () => {
		cancelAnimationFrame(this.frameId)
	}

	animate = () => {
		this.particleSystem.rotation.y += this.animationVars.speed;
		this.particles.verticesNeedUpdate = true;

		this.cam.position.z = this.animationVars.rotation;
		this.cam.position.y = this.animationVars.rotation;
		this.cam.lookAt(this.scene.position);

		this.particleSystem.material.color = new THREE.Color(this.animationVars.color);

		this.frameId = window.requestAnimationFrame(this.animate)
		this.renderer.render(this.scene, this.cam)
	}

	morphTo(newParticles, color = '#FFFFFF') {
		for (let i = 0; i < this.particles.vertices.length; i++) {
			TweenMax.to(this.particles.vertices[i], 2, {
				ease: Elastic.easeOut.config(0.1, .3),
				x: newParticles.vertices[i].x,
				y: newParticles.vertices[i].y,
				z: newParticles.vertices[i].z
			});
		}

		TweenMax.to(this.animationVars, .1, {
			ease: Power4.easeIn,
			speed: this.fullSpeed,
			onComplete: this.slowDown.bind(this)
		});
		TweenMax.to(this.animationVars, 2, {
			ease: Linear.easeNone,
			color: color
		});
		TweenMax.to(this.animationVars, 2, {
			ease: Elastic.easeOut.config(0.1, .3),
			rotation: this.animationVars.rotation
		});

	}

	slowDown() {
		TweenMax.to(this.animationVars, 0.3, {
			ease: Power2.easeOut,
			speed: this.normalSpeed,
			delay: 0.2
		});
	}

	render() {
		return (
			<div
				className="threeWrap flex center"
				style={{ width: '100%', height: '100%' }}
				ref={(mount) => { this.mount = mount }}
			>
				<div className="contentsWrap flex center">
					<SpringDiv bgColor={'#00cbff'} gradationColor={'#5ee7df', '#b490ca'}>HELLO</SpringDiv>
					<SpringDiv bgColor={'#18b097'}>ABILITY</SpringDiv>
					<SpringDiv bgColor={'#a278ff'}>E-MAIL</SpringDiv>
				</div>
			</div>
		);
	}
}

export default MakeParticles;