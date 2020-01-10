import React, { Component } from "react";


class LogoSeungax2 extends Component {
	pathAnimationStart(el){
		let svg_length = el.getTotalLength();
		el.setAttribute("stroke-dasharray",svg_length + " " + svg_length);
		el.setAttribute("stroke-dashoffset",svg_length);
		el.classList.add('startPathAni');
	}
	render() {
		return (
			<svg version="1.0" 
			xmlns="http://www.w3.org/2000/svg"
			width="500px" height="120px" 
			viewBox="0 -9 499.000000 111.000000"
			preserveAspectRatio="xMidYMid meet">
				<style>
					{ `
						.startPathAni {
							animation: dash 2s linear alternate 1;
							animation-fill-mode: forwards;
						}
						
						@keyframes dash {
							to {
								stroke-dashoffset: 0;
							}
						}

						.twinkAni {
							animation: twink 5s linear alternate infinite;
							animation-delay : 7s
							animation-fill-mode: forwards;
						}
						.twinkAni2 {
							animation: twink2 3s linear alternate infinite;
							animation-delay : 8s
							animation-fill-mode: forwards;
						}
						
						@keyframes twink {
							0%{
								opacity : 1;
							}
							29%{
								opacity : 1;
							}
							30%{
								opacity : 0;
							}
							32%{
								opacity : 1;
							}
							34%{
								opacity : 1;
							}
							35%{
								opacity : 0;
							}
							36%{
								opacity : 1;
							}
							to {
								opacity : 1;
							}
						}

						@keyframes twink2 {
							0%{
								opacity : 1;
							}
							40%{
								opacity : 1;
							}
							41%{
								opacity : 0;
							}
							33%{
								opacity : 1;
							}
							49%{
								opacity : 1;
							}
							50%{
								opacity : 0;
							}
							52%{
								opacity : 1;
							}
							to {
								opacity : 1;
							}
						}
					` }
				</style>
				<defs>
					<linearGradient
						id="editing-gradient-gradient"
						x1="0.7723195175075135"
						x2="0.22768048249248646"
						y1="0.08066471602728797"
						y2="0.919335283972712"
						gradientUnits="objectBoundingBox">

						<stop offset="0" stopColor="#00e7ff">
							<animate id="a1" attributeName="stop-color" values="#00e7ff; #a008ff; #1b25c1" begin="0; a2.end" dur="1.5s" />
							<animate id="a2" attributeName="stop-color" values="#1b25c1; #a008ff; #00e7ff" begin="a1.end" dur="1.15s" />
						</stop>
						<stop offset="1" stopColor="#1b25c1">
							<animate id="a3" attributeName="stop-color" values="#1b25c1; #b4ff00; #ff0079" begin="0; a4.end" dur="2s" />
							<animate id="a4" attributeName="stop-color" values="#ff0079; #b4ff00; #1b25c1" begin="a3.end" dur="2s" />
						</stop>

					</linearGradient>
				</defs>
				<g transform="translate(0.000000,102.000000) scale(0.100000,-0.100000)"
				fill="#000000" stroke="none">
					<path className="s" fill="url(#editing-gradient-gradient)" d="M166 1075 c-51 -18 -102 -69 -122 -122 -12 -32 -15 -65 -12 -131 5
					-117 27 -153 165 -275 129 -112 200 -187 213 -222 6 -15 10 -48 10 -75 0 -121
					-139 -163 -205 -61 -13 20 -29 66 -36 104 -10 53 -16 66 -28 63 -9 -3 -42 -12
					-73 -21 -32 -9 -58 -18 -58 -19 0 -1 5 -28 11 -60 31 -170 116 -245 277 -246
					95 0 140 15 191 63 51 49 71 100 71 188 0 142 -35 200 -229 373 -73 65 -139
					129 -148 142 -9 15 -16 47 -17 80 0 51 3 59 32 85 34 31 78 38 126 19 34 -13
					64 -64 72 -121 9 -69 10 -70 87 -51 l68 16 -6 36 c-23 133 -79 217 -160 239
					-55 15 -182 13 -229 -4z"/>

					<path className="g" fill="url(#editing-gradient-gradient)" d="M2759 1076 c-137 -49 -169 -150 -169 -531 1 -228 11 -326 40 -393 45
					-101 111 -141 233 -142 94 0 138 17 173 69 23 34 24 34 24 11 0 -62 8 -70 66
					-70 l54 0 0 265 0 265 -145 0 -145 0 0 -55 0 -55 71 0 72 0 -5 -98 c-6 -108
					-24 -162 -61 -187 -63 -41 -151 -23 -184 37 -16 29 -18 66 -21 343 -4 332 0
					365 44 406 21 20 36 24 84 24 48 0 63 -4 84 -24 27 -25 31 -40 41 -138 l7 -63
					75 0 76 0 -6 86 c-10 140 -60 220 -156 253 -46 15 -207 13 -252 -3z"/>

					<path className="2" ref={ this.pathAnimationStart } stroke="url(#editing-gradient-gradient)" strokeWidth="25" fill="none" d="M4600 1077 c-48 -16 -104 -75 -124 -133 -9 -27 -20 -84 -23 -126 l-6
					-78 80 0 80 0 5 76 c5 81 23 116 70 144 20 11 35 12 65 5 52 -13 73 -56 73
					-150 0 -93 -17 -127 -219 -440 -155 -242 -161 -252 -161 -302 l0 -53 255 0
					255 0 0 60 0 60 -160 0 c-88 0 -160 2 -160 5 0 3 69 109 152 237 168 257 197
					320 198 429 0 127 -49 221 -135 260 -46 21 -186 24 -245 6z"/>

					<path className="e" fill="url(#editing-gradient-gradient)" d="M670 550 l0 -530 215 0 215 0 0 55 0 55 -130 0 -130 0 0 190 0 190
					105 0 105 0 0 55 0 55 -105 0 -105 0 0 175 0 175 130 0 130 0 0 55 0 55 -215
					0 -215 0 0 -530z"/>
					
					<path className="u twinkAni" fill="url(#editing-gradient-gradient)" d="M1202 653 c4 -491 7 -506 82 -578 51 -50 99 -65 206 -65 98 0 147 13
					193 51 85 70 97 149 97 638 l0 381 -80 0 -79 0 -3 -427 c-3 -428 -3 -428 -26
					-465 -47 -76 -162 -74 -207 2 -19 34 -20 53 -23 463 l-3 427 -80 0 -80 0 3
					-427z"/>

					<path className="n" fill="url(#editing-gradient-gradient)" d="M1920 550 l0 -530 70 0 70 0 0 338 1 337 143 -335 143 -335 56 -3 57
					-3 0 531 0 530 -70 0 -70 0 -1 -327 -1 -328 -22 50 c-13 28 -76 175 -141 328
					l-117 277 -59 0 -59 0 0 -530z"/>

					<path className="a twinkAni2" fill="url(#editing-gradient-gradient)" d="M3475 1058 c-21 -91 -215 -1016 -215 -1025 0 -9 22 -13 75 -13 69 0
					75 2 80 23 6 30 45 237 45 243 0 2 45 4 100 4 113 0 99 12 120 -102 5 -32 15
					-83 21 -113 l10 -55 78 0 77 0 -113 528 c-62 290 -113 528 -113 530 0 1 -36 2
					-80 2 -74 0 -80 -1 -85 -22z m125 -443 c18 -93 34 -180 37 -192 5 -22 3 -23
					-77 -23 -73 0 -81 2 -76 18 2 9 19 94 36 187 31 173 40 208 46 190 2 -5 17
					-86 34 -180z"/>

					<path ref={ this.pathAnimationStart } className="x" stroke="url(#editing-gradient-gradient)" strokeWidth="25" fill="none" d="M3926 703 c92 -201 124 -274 124 -286 0 -6 -36 -96 -80 -200 -44
					-103 -80 -189 -80 -192 0 -3 33 -5 73 -5 l74 0 28 73 c16 39 37 92 47 117 l19
					44 53 -114 53 -115 77 -3 77 -3 -14 33 c-8 18 -47 104 -87 190 l-73 158 21 47
					c11 27 49 112 85 191 l66 142 -79 0 -78 0 -44 -110 -43 -110 -52 110 -52 110
					-75 0 -75 0 35 -77z"/>
				</g>
			</svg>
		);
	}
}

export default LogoSeungax2;

