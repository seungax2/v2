import React, { Component } from "react";
import * as THREE from 'three';

class Thing2 extends Component {
	componentDidMount() {
		setTimeout(function () { this.drawScene(); }.bind(this), 0);
	}

	componentWillUnmount() {
		this.stop()
		this.mount.removeChild(this.renderer.domElement)
	}

	drawScene() {
		const width = this.mount.clientWidth;
		const height = this.mount.clientHeight;

		//1.공간,장면
		this.scene = new THREE.Scene();

		//2.카메라
		this.cam = new THREE.PerspectiveCamera(75, width / height, 0.1, 10000);
		this.cam.position.z = 4

		//3.랜더러
		this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		this.renderer.setSize(width, height);
		this.mount.appendChild(this.renderer.domElement);

		//4.빛
		this.light = new THREE.PointLight(0xFFFFFF, 1);
		this.light.position.set(2, 3, -4);
		this.scene.add(this.light);

		this.ambientLight = new THREE.AmbientLight(0x808080);
		this.scene.add(this.ambientLight);

		//5.물체
		const cube_Geometry = new THREE.BoxGeometry(2, 2, 2);
		const cube_Meterial = new THREE.MeshLambertMaterial({ color: '#3666d3' });
		this.cube = new THREE.Mesh(cube_Geometry, cube_Meterial);
		this.scene.add(this.cube);

		this.start()
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
		this.cube.rotation.x += 0.01
		this.cube.rotation.y += 0.01

		this.renderScene()
		this.frameId = window.requestAnimationFrame(this.animate)
	}

	renderScene = () => {
		this.renderer.render(this.scene, this.cam)
	}
	render() {
		return (
			<div
				style={{ width: '100%', height: '100%' }}
				ref={(mount) => { this.mount = mount }}
			/>
		)

	}
}
export default Thing2
