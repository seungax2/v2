import React, { Component } from "react";


class Logo extends Component {
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
			width="510.000000pt" height="102.000000pt" viewBox="0 0 510.000000 102.000000"
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

						<stop offset="0" stopColor="#ff0079">
							<animate id="a1" attributeName="stop-color" values="#ff0079; #1b25c1" begin="0; a2.end" dur="1s" />
							<animate id="a2" attributeName="stop-color" values="#1b25c1; #ff0079" begin="a1.end" dur="1s" />
						</stop>
						<stop offset="1" stopColor="#1b25c1">
							<animate id="a3" attributeName="stop-color" values="#1b25c1; #ff0079" begin="0; a4.end" dur="1s" />
							<animate id="a4" attributeName="stop-color" values="#ff0079; #1b25c1" begin="a3.end" dur="1s" />
						</stop>

					</linearGradient>
				</defs>
				<g transform="translate(0.000000,102.000000) scale(0.100000,-0.100000)"
				fill="#000000" stroke="none">
					<path ref={ this.pathAnimationStart } stroke="url(#editing-gradient-gradient)" strokeWidth="25" fill="none" className="s" d="M353 979 c-58 -29 -146 -126 -182 -202 -16 -34 -35 -93 -41 -130 -11
					-59 -10 -74 5 -113 18 -47 69 -86 131 -99 18 -3 40 -15 50 -27 28 -30 24 -124
					-8 -185 -24 -48 -70 -85 -85 -70 -4 5 -10 50 -13 100 -5 86 -6 92 -28 95 -32
					5 -149 -36 -156 -54 -22 -56 5 -187 47 -233 53 -57 167 -69 254 -26 161 81
					267 338 197 477 -18 34 -48 56 -99 69 -69 18 -85 34 -85 82 0 45 36 133 64
					156 15 13 19 13 26 0 12 -18 30 -102 30 -135 0 -13 7 -27 15 -30 19 -8 113 14
					144 33 23 15 24 19 18 97 -8 95 -36 160 -87 194 -45 30 -137 31 -197 1z"/>
					<path ref={ this.pathAnimationStart } stroke="url(#editing-gradient-gradient)" strokeWidth="25" fill="none" className="e" d="M735 968 c-13 -41 -25 -97 -25 -120 0 -25 3 -28 36 -28 29 0 34 -3
					30 -17 -30 -101 -186 -727 -186 -747 l0 -26 229 0 c171 0 231 3 239 13 13 16
					35 124 27 137 -4 6 -60 10 -141 10 -74 0 -134 3 -134 6 0 9 50 206 61 242 l11
					32 129 0 129 0 10 26 c6 14 13 50 16 80 l7 54 -127 0 c-117 0 -127 1 -122 18
					3 9 10 37 16 62 6 25 16 60 21 78 l11 32 134 0 c155 0 158 2 170 103 l7 57
					-272 0 c-208 0 -273 -3 -276 -12z"/>
					<path ref={ this.pathAnimationStart } stroke="url(#editing-gradient-gradient)" strokeWidth="25" fill="none" className="u" d="M1466 972 c-3 -4 -41 -150 -85 -325 -86 -334 -96 -410 -69 -500 16
					-53 64 -102 113 -116 53 -14 158 -14 207 1 22 6 62 32 89 56 83 74 117 161
					209 523 44 173 80 326 80 342 l0 27 -79 0 c-51 0 -82 -4 -88 -12 -5 -7 -47
					-159 -92 -338 -88 -344 -125 -445 -171 -467 -62 -29 -97 18 -87 117 4 32 41
					196 83 364 42 168 74 312 70 321 -4 12 -23 15 -90 15 -47 0 -87 -4 -90 -8z"/>
					<path ref={ this.pathAnimationStart } stroke="url(#editing-gradient-gradient)" strokeWidth="25" fill="none" className="n" d="M2130 958 c-21 -50 -231 -900 -226 -914 8 -21 165 -16 177 6 5 8 37
					127 72 264 l63 248 60 -263 59 -264 81 -3 c57 -2 84 1 91 10 15 19 236 892
					231 914 -3 16 -14 19 -85 22 -70 2 -83 0 -91 -15 -5 -10 -35 -123 -67 -250
					-32 -128 -61 -233 -65 -233 -3 0 -30 107 -60 238 -29 130 -57 243 -63 250 -6
					8 -37 12 -88 12 -73 0 -80 -2 -89 -22z"/>
					<path ref={ this.pathAnimationStart } stroke="url(#editing-gradient-gradient)" strokeWidth="25" fill="none" className="g" d="M2982 970 c-104 -47 -204 -204 -258 -405 -23 -84 -27 -122 -28 -235
					-1 -121 2 -140 22 -185 12 -27 30 -58 40 -69 50 -56 187 -74 269 -35 80 39
					144 132 212 309 15 41 32 90 36 108 l7 33 -163 -3 -162 -3 -13 -45 c-23 -77
					-22 -80 42 -80 l56 0 -7 -27 c-11 -45 -48 -105 -78 -127 l-29 -21 -20 25 c-61
					75 44 535 136 595 42 28 56 7 56 -81 0 -40 4 -76 10 -79 17 -11 180 46 191 67
					21 39 -9 177 -49 222 -50 55 -186 74 -270 36z"/>
					<path ref={ this.pathAnimationStart } stroke="url(#editing-gradient-gradient)" strokeWidth="25" fill="none" className="a" d="M3667 962 c-31 -34 -468 -886 -465 -907 3 -17 12 -21 73 -26 39 -3
					79 -2 90 2 13 4 41 50 80 128 l59 121 99 0 99 0 -8 -125 -7 -125 86 0 c47 0
					88 4 92 9 3 6 17 209 31 452 18 318 22 450 15 466 -10 22 -16 23 -119 23 -93
					0 -111 -3 -125 -18z m58 -349 c-10 -183 -5 -173 -81 -173 l-64 0 72 145 c40
					80 74 145 76 145 2 0 1 -53 -3 -117z"/>

					<path className="x" ref={ this.pathAnimationStart } stroke="url(#editing-gradient-gradient)" strokeWidth="25" fill="none" d="M4040 713 c0 -16 18 -93 39 -173 l38 -145 -108 -165 c-60 -91 -109
					-173 -109 -183 0 -16 9 -17 91 -15 l92 3 46 85 45 85 16 -75 c8 -41 19 -81 23
					-87 5 -9 35 -13 88 -13 l79 0 0 28 c0 15 -18 93 -39 174 l-39 146 120 171 c66
					94 117 175 113 181 -3 5 -43 10 -89 10 l-83 0 -49 -94 c-27 -52 -52 -92 -55
					-88 -4 4 -14 41 -24 82 -10 41 -22 81 -28 88 -6 8 -37 12 -88 12 l-79 0 0 -27z"/>
					<path className="2" ref={ this.pathAnimationStart } stroke="url(#editing-gradient-gradient)" strokeWidth="25" fill="none" d="M4754 907 c-100 -48 -163 -137 -167 -239 l-2 -53 73 3 c91 3 108 11
					117 59 19 104 98 158 126 86 11 -29 -2 -87 -33 -147 -11 -22 -107 -138 -213
					-258 -204 -230 -221 -257 -191 -304 l17 -24 227 2 227 3 13 28 c8 15 16 53 19
					83 l6 55 -131 -3 -131 -3 38 40 c308 324 336 364 336 490 -1 87 -23 137 -78
					173 -34 23 -53 27 -121 30 -69 2 -89 -1 -132 -21z"/>
				</g>
			</svg>
		);
	}
}

export default Logo;

