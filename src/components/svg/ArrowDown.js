import React, { Component } from "react"

class ArrowDown extends Component {
	render(){
		return(
			<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
			width="50px" height="50px" viewBox="0 0 880.000000 923.000000"
			preserveAspectRatio="xMidYMid meet">
				<defs>
					<linearGradient id="color_change" gradientUnits="objectBoundingBox">

						<stop offset="1" stopColor="#00e7ff">
							<animate id="a1" attributeName="stop-color" values="#a008ff; #00e7ff; #1b25c1" begin="0; a2.end" dur="5s" />
							<animate id="a2" attributeName="stop-color" values="#1b25c1; #b4ff00; #ff0079" begin="a1.end" dur="5s" />
						</stop>
						
					</linearGradient>
				</defs>
				<g transform="translate(0.000000,923.000000) scale(0.100000,-0.100000)"
				fill="url(#color_change)" stroke="none">
				<path d="M842 8806 c-188 -46 -356 -204 -415 -391 -47 -149 -23 -349 57 -474
				32 -51 3288 -3327 3455 -3478 104 -92 191 -148 291 -184 92 -34 265 -34 361
				-1 153 53 103 5 1932 1836 939 940 1729 1737 1754 1770 88 117 128 246 120
				386 -7 113 -37 203 -98 295 -163 244 -481 325 -747 191 -62 -31 -189 -157
				-1602 -1570 -844 -845 -1539 -1536 -1545 -1536 -5 0 -701 690 -1545 1534
				l-1535 1534 -85 41 c-47 23 -109 46 -139 51 -72 13 -194 11 -259 -4z"/>
				<path d="M838 5364 c-185 -44 -352 -202 -410 -387 -48 -151 -24 -349 56 -476
				18 -29 750 -770 1765 -1786 1856 -1858 1797 -1802 1966 -1871 64 -26 80 -29
				195 -29 112 1 132 4 194 28 152 60 145 54 1351 1262 2100 2104 2319 2325 2357
				2390 142 237 106 530 -87 720 -70 69 -169 125 -261 149 -78 20 -212 21 -289 1
				-151 -39 -50 56 -1721 -1616 -846 -847 -1543 -1539 -1549 -1539 -5 0 -703 692
				-1550 1538 -1418 1417 -1545 1541 -1605 1570 -36 17 -92 38 -125 47 -72 18
				-210 18 -287 -1z"/>
				</g>
			</svg>
		);
	}
}

export default ArrowDown