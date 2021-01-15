import React from 'react'

export default function drawing({ width, height }) {
	return (
		// <svg
		// 	xmlns="http://www.w3.org/2000/svg"
		// 	width="989"
		// 	height="1006"
		// 	fill="none"
		// 	viewBox="0 0 989 1006"
		// >
		// 	<path
		// 		fill="#1983CA"
		// 		fill-opacity=".3"
		// 		d="M153 308.66c0-264.2 238.839-478.202 533.701-478.202S1220.402 44.46 1220.402 308.66 981.563 786.862 686.701 786.862 153 572.86 153 308.66z"
		// 	/>
		// 	<g filter="url(#filter0_d)" opacity=".5">
		// 		<path
		// 			stroke="url(#paint0_linear)"
		// 			stroke-dasharray="200 100"
		// 			stroke-linecap="round"
		// 			stroke-width="20"
		// 			d="M294.047 27.603C217.295 213.68 90.362 533.724 417.135 717.881c326.776 184.157 479.103 64.405 622.105 8.885 143-55.521 496.58-92.988 443.74-314.227-52.83-221.23-64.06-608.527-318.1-607.249-254.034 1.279-220.127 106.091-383.31 125.5-163.177 19.408-410.771-89.266-487.523 96.813z"
		// 			clip-rule="evenodd"
		// 			opacity=".5"
		// 		/>
		// 	</g>
		// 	<g filter="url(#filter1_d)" opacity=".2">
		// 		<path
		// 			stroke="url(#paint1_linear)"
		// 			stroke-dasharray="100 50"
		// 			stroke-linecap="round"
		// 			stroke-width="10"
		// 			d="M371.224 64.927c-67.333 164.894-178.585 448.547 116.125 614.988 294.713 166.442 430.398 61.16 558.241 12.926 127.85-48.234 444.81-78.704 395.57-275.914-49.23-197.211-62.49-541.804-290.41-542.717-227.935-.915-196.645 92.59-342.896 108.537-146.252 15.947-369.299-82.716-436.63 82.18z"
		// 			clip-rule="evenodd"
		// 			opacity=".2"
		// 		/>
		// 	</g>
		// 	<g filter="url(#filter2_d)">
		// 		<path
		// 			stroke="url(#paint2_linear)"
		// 			stroke-dasharray="200 100"
		// 			stroke-linecap="round"
		// 			stroke-width="30"
		// 			d="M287.007-41.976c-79.301 192.261-210.45 522.93 127.178 713.208 337.627 190.277 495.017 66.551 642.765 9.185 147.75-57.366 513.09-96.082 458.5-324.668-54.6-228.579-66.2-628.744-328.68-627.423-262.472 1.32-227.436 109.615-396.039 129.669-168.602 20.053-424.421-92.232-503.724 100.03z"
		// 			clip-rule="evenodd"
		// 		/>
		// 	</g>
		// 	<g filter="url(#filter3_d)" opacity=".5">
		// 		<path
		// 			stroke="url(#paint3_linear)"
		// 			stroke-dasharray="200 100"
		// 			stroke-linecap="round"
		// 			stroke-width="20"
		// 			d="M859.821-318.868C783.069-132.79 656.136 187.253 982.909 371.41c326.771 184.157 479.101 64.405 622.101 8.885 143-55.521 496.59-92.988 443.75-314.227-52.84-221.229-64.06-608.527-318.1-607.248-254.04 1.278-220.13 106.09-383.32 125.499-163.17 19.408-410.767-89.266-487.519 96.813z"
		// 			clip-rule="evenodd"
		// 			opacity=".5"
		// 		/>
		// 	</g>
		// 	<g filter="url(#filter4_d)" opacity=".2">
		// 		<path
		// 			stroke="url(#paint4_linear)"
		// 			stroke-dasharray="100 50"
		// 			stroke-linecap="round"
		// 			stroke-width="10"
		// 			d="M936.998-281.543C869.665-116.65 758.413 167.003 1053.12 333.445c294.72 166.442 430.4 61.159 558.25 12.925 127.85-48.233 444.8-78.704 395.57-275.914-49.24-197.21-62.5-541.804-290.42-542.717-227.93-.914-196.64 92.59-342.89 108.537-146.25 15.947-369.3-82.716-436.632 82.181z"
		// 			clip-rule="evenodd"
		// 			opacity=".2"
		// 		/>
		// 	</g>
		// 	<g filter="url(#filter5_d)">
		// 		<path
		// 			stroke="url(#paint5_linear)"
		// 			stroke-dasharray="200 100"
		// 			stroke-linecap="round"
		// 			stroke-opacity=".3"
		// 			stroke-width="30"
		// 			d="M852.781-388.447c-79.301 192.261-210.45 522.93 127.178 713.208 337.631 190.277 495.021 66.551 642.771 9.185 147.75-57.366 513.09-96.081 458.49-324.668-54.6-228.579-66.2-628.744-328.67-627.423-262.48 1.321-227.44 109.615-396.05 129.669-168.6 20.053-424.416-92.231-503.719 100.029z"
		// 			clip-rule="evenodd"
		// 		/>
		// 	</g>
		// 	<g filter="url(#filter6_d)" opacity=".5">
		// 		<path
		// 			stroke="url(#paint6_linear)"
		// 			stroke-dasharray="200 100"
		// 			stroke-linecap="round"
		// 			stroke-width="20"
		// 			d="M327.403-44.578C250.651 141.499 123.718 461.543 450.491 645.7c326.776 184.156 479.103 64.405 622.109 8.884 143-55.52 496.58-92.988 443.74-314.226-52.84-221.23-64.06-608.527-318.1-607.249-254.038 1.278-220.13 106.091-383.314 125.5-163.177 19.408-410.771-89.266-487.523 96.813z"
		// 			clip-rule="evenodd"
		// 			opacity=".5"
		// 		/>
		// 	</g>
		// 	<g filter="url(#filter7_d)" opacity=".2">
		// 		<path
		// 			stroke="url(#paint7_linear)"
		// 			stroke-dasharray="100 50"
		// 			stroke-linecap="round"
		// 			stroke-width="10"
		// 			d="M404.58-7.254C337.247 157.64 225.995 441.292 520.706 607.734c294.712 166.442 430.397 61.16 558.244 12.926 127.85-48.234 444.8-78.704 395.57-275.915-49.24-197.21-62.5-541.804-290.42-542.716-227.928-.915-196.639 92.59-342.89 108.537-146.251 15.947-369.298-82.717-436.63 82.18z"
		// 			clip-rule="evenodd"
		// 			opacity=".2"
		// 		/>
		// 	</g>
		// 	<g filter="url(#filter8_d)">
		// 		<path
		// 			stroke="url(#paint8_linear)"
		// 			stroke-dasharray="200 100"
		// 			stroke-linecap="round"
		// 			stroke-opacity=".3"
		// 			stroke-width="30"
		// 			d="M320.364-114.157c-79.302 192.26-210.451 522.93 127.178 713.208 337.626 190.277 495.016 66.55 642.768 9.185 147.75-57.366 513.09-96.082 458.49-324.669-54.59-228.578-66.2-628.743-328.67-627.423-262.476 1.321-227.439 109.616-396.043 129.669-168.602 20.053-424.421-92.231-503.723 100.03z"
		// 			clip-rule="evenodd"
		// 		/>
		// 	</g>
		// 	<defs>
		// 		<filter
		// 			id="filter0_d"
		// 			width="1661.43"
		// 			height="1388.75"
		// 			x="15.641"
		// 			y="-383.456"
		// 			color-interpolation-filters="sRGB"
		// 			filterUnits="userSpaceOnUse"
		// 		>
		// 			<feFlood flood-opacity="0" result="BackgroundImageFix" />
		// 			<feColorMatrix
		// 				in="SourceAlpha"
		// 				values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
		// 			/>
		// 			<feOffset />
		// 			<feGaussianBlur stdDeviation="89.374" />
		// 			<feColorMatrix values="0 0 0 0 0.129427 0 0 0 0 0.224219 0 0 0 0 0.4375 0 0 0 0.3 0" />
		// 			<feBlend
		// 				in2="BackgroundImageFix"
		// 				result="effect1_dropShadow"
		// 			/>
		// 			<feBlend
		// 				in="SourceGraphic"
		// 				in2="effect1_dropShadow"
		// 				result="shape"
		// 			/>
		// 		</filter>
		// 		<filter
		// 			id="filter1_d"
		// 			width="1520.29"
		// 			height="1263.56"
		// 			x="109.765"
		// 			y="-309.542"
		// 			color-interpolation-filters="sRGB"
		// 			filterUnits="userSpaceOnUse"
		// 		>
		// 			<feFlood flood-opacity="0" result="BackgroundImageFix" />
		// 			<feColorMatrix
		// 				in="SourceAlpha"
		// 				values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
		// 			/>
		// 			<feOffset />
		// 			<feGaussianBlur stdDeviation="89.374" />
		// 			<feColorMatrix values="0 0 0 0 0.129427 0 0 0 0 0.224219 0 0 0 0 0.4375 0 0 0 0.3 0" />
		// 			<feBlend
		// 				in2="BackgroundImageFix"
		// 				result="effect1_dropShadow"
		// 			/>
		// 			<feBlend
		// 				in="SourceGraphic"
		// 				in2="effect1_dropShadow"
		// 				result="shape"
		// 			/>
		// 		</filter>
		// 		<filter
		// 			id="filter2_d"
		// 			width="1714.09"
		// 			height="1432.35"
		// 			x=".622"
		// 			y="-465.419"
		// 			color-interpolation-filters="sRGB"
		// 			filterUnits="userSpaceOnUse"
		// 		>
		// 			<feFlood flood-opacity="0" result="BackgroundImageFix" />
		// 			<feColorMatrix
		// 				in="SourceAlpha"
		// 				values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
		// 			/>
		// 			<feOffset />
		// 			<feGaussianBlur stdDeviation="89.374" />
		// 			<feColorMatrix values="0 0 0 0 0.129427 0 0 0 0 0.224219 0 0 0 0 0.4375 0 0 0 0.3 0" />
		// 			<feBlend
		// 				in2="BackgroundImageFix"
		// 				result="effect1_dropShadow"
		// 			/>
		// 			<feBlend
		// 				in="SourceGraphic"
		// 				in2="effect1_dropShadow"
		// 				result="shape"
		// 			/>
		// 		</filter>
		// 		<filter
		// 			id="filter3_d"
		// 			width="1661.43"
		// 			height="1388.75"
		// 			x="581.415"
		// 			y="-729.927"
		// 			color-interpolation-filters="sRGB"
		// 			filterUnits="userSpaceOnUse"
		// 		>
		// 			<feFlood flood-opacity="0" result="BackgroundImageFix" />
		// 			<feColorMatrix
		// 				in="SourceAlpha"
		// 				values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
		// 			/>
		// 			<feOffset />
		// 			<feGaussianBlur stdDeviation="89.374" />
		// 			<feColorMatrix values="0 0 0 0 0.129427 0 0 0 0 0.224219 0 0 0 0 0.4375 0 0 0 0.3 0" />
		// 			<feBlend
		// 				in2="BackgroundImageFix"
		// 				result="effect1_dropShadow"
		// 			/>
		// 			<feBlend
		// 				in="SourceGraphic"
		// 				in2="effect1_dropShadow"
		// 				result="shape"
		// 			/>
		// 		</filter>
		// 		<filter
		// 			id="filter4_d"
		// 			width="1520.29"
		// 			height="1263.56"
		// 			x="675.539"
		// 			y="-656.013"
		// 			color-interpolation-filters="sRGB"
		// 			filterUnits="userSpaceOnUse"
		// 		>
		// 			<feFlood flood-opacity="0" result="BackgroundImageFix" />
		// 			<feColorMatrix
		// 				in="SourceAlpha"
		// 				values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
		// 			/>
		// 			<feOffset />
		// 			<feGaussianBlur stdDeviation="89.374" />
		// 			<feColorMatrix values="0 0 0 0 0.129427 0 0 0 0 0.224219 0 0 0 0 0.4375 0 0 0 0.3 0" />
		// 			<feBlend
		// 				in2="BackgroundImageFix"
		// 				result="effect1_dropShadow"
		// 			/>
		// 			<feBlend
		// 				in="SourceGraphic"
		// 				in2="effect1_dropShadow"
		// 				result="shape"
		// 			/>
		// 		</filter>
		// 		<filter
		// 			id="filter5_d"
		// 			width="1714.09"
		// 			height="1432.35"
		// 			x="566.396"
		// 			y="-811.889"
		// 			color-interpolation-filters="sRGB"
		// 			filterUnits="userSpaceOnUse"
		// 		>
		// 			<feFlood flood-opacity="0" result="BackgroundImageFix" />
		// 			<feColorMatrix
		// 				in="SourceAlpha"
		// 				values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
		// 			/>
		// 			<feOffset />
		// 			<feGaussianBlur stdDeviation="89.374" />
		// 			<feColorMatrix values="0 0 0 0 0.129427 0 0 0 0 0.224219 0 0 0 0 0.4375 0 0 0 0.3 0" />
		// 			<feBlend
		// 				in2="BackgroundImageFix"
		// 				result="effect1_dropShadow"
		// 			/>
		// 			<feBlend
		// 				in="SourceGraphic"
		// 				in2="effect1_dropShadow"
		// 				result="shape"
		// 			/>
		// 		</filter>
		// 		<filter
		// 			id="filter6_d"
		// 			width="1661.43"
		// 			height="1388.75"
		// 			x="48.998"
		// 			y="-455.637"
		// 			color-interpolation-filters="sRGB"
		// 			filterUnits="userSpaceOnUse"
		// 		>
		// 			<feFlood flood-opacity="0" result="BackgroundImageFix" />
		// 			<feColorMatrix
		// 				in="SourceAlpha"
		// 				values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
		// 			/>
		// 			<feOffset />
		// 			<feGaussianBlur stdDeviation="89.374" />
		// 			<feColorMatrix values="0 0 0 0 0.129427 0 0 0 0 0.224219 0 0 0 0 0.4375 0 0 0 0.3 0" />
		// 			<feBlend
		// 				in2="BackgroundImageFix"
		// 				result="effect1_dropShadow"
		// 			/>
		// 			<feBlend
		// 				in="SourceGraphic"
		// 				in2="effect1_dropShadow"
		// 				result="shape"
		// 			/>
		// 		</filter>
		// 		<filter
		// 			id="filter7_d"
		// 			width="1520.29"
		// 			height="1263.56"
		// 			x="143.121"
		// 			y="-381.723"
		// 			color-interpolation-filters="sRGB"
		// 			filterUnits="userSpaceOnUse"
		// 		>
		// 			<feFlood flood-opacity="0" result="BackgroundImageFix" />
		// 			<feColorMatrix
		// 				in="SourceAlpha"
		// 				values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
		// 			/>
		// 			<feOffset />
		// 			<feGaussianBlur stdDeviation="89.374" />
		// 			<feColorMatrix values="0 0 0 0 0.129427 0 0 0 0 0.224219 0 0 0 0 0.4375 0 0 0 0.3 0" />
		// 			<feBlend
		// 				in2="BackgroundImageFix"
		// 				result="effect1_dropShadow"
		// 			/>
		// 			<feBlend
		// 				in="SourceGraphic"
		// 				in2="effect1_dropShadow"
		// 				result="shape"
		// 			/>
		// 		</filter>
		// 		<filter
		// 			id="filter8_d"
		// 			width="1714.09"
		// 			height="1432.35"
		// 			x="33.978"
		// 			y="-537.6"
		// 			color-interpolation-filters="sRGB"
		// 			filterUnits="userSpaceOnUse"
		// 		>
		// 			<feFlood flood-opacity="0" result="BackgroundImageFix" />
		// 			<feColorMatrix
		// 				in="SourceAlpha"
		// 				values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
		// 			/>
		// 			<feOffset />
		// 			<feGaussianBlur stdDeviation="89.374" />
		// 			<feColorMatrix values="0 0 0 0 0.129427 0 0 0 0 0.224219 0 0 0 0 0.4375 0 0 0 0.3 0" />
		// 			<feBlend
		// 				in2="BackgroundImageFix"
		// 				result="effect1_dropShadow"
		// 			/>
		// 			<feBlend
		// 				in="SourceGraphic"
		// 				in2="effect1_dropShadow"
		// 				result="shape"
		// 			/>
		// 		</filter>
		// 		<linearGradient
		// 			id="paint0_linear"
		// 			x1="1405.83"
		// 			x2="341.326"
		// 			y1="627.339"
		// 			y2="-52.404"
		// 			gradientUnits="userSpaceOnUse"
		// 		>
		// 			<stop stop-color="#844FFC" />
		// 			<stop offset="1" stop-color="#2FB8FF" />
		// 		</linearGradient>
		// 		<linearGradient
		// 			id="paint1_linear"
		// 			x1="1373.7"
		// 			x2="413.099"
		// 			y1="607.364"
		// 			y2="-6.036"
		// 			gradientUnits="userSpaceOnUse"
		// 		>
		// 			<stop stop-color="#844FFC" />
		// 			<stop offset="1" stop-color="#2FB8FF" />
		// 		</linearGradient>
		// 		<linearGradient
		// 			id="paint2_linear"
		// 			x1="1435.73"
		// 			x2="335.858"
		// 			y1="577.682"
		// 			y2="-124.642"
		// 			gradientUnits="userSpaceOnUse"
		// 		>
		// 			<stop stop-color="#844FFC" />
		// 			<stop offset="1" stop-color="#2FB8FF" />
		// 		</linearGradient>
		// 		<linearGradient
		// 			id="paint3_linear"
		// 			x1="1971.6"
		// 			x2="907.1"
		// 			y1="280.868"
		// 			y2="-398.875"
		// 			gradientUnits="userSpaceOnUse"
		// 		>
		// 			<stop stop-color="#844FFC" />
		// 			<stop offset="1" stop-color="#2FB8FF" />
		// 		</linearGradient>
		// 		<linearGradient
		// 			id="paint4_linear"
		// 			x1="1939.47"
		// 			x2="978.873"
		// 			y1="260.894"
		// 			y2="-352.506"
		// 			gradientUnits="userSpaceOnUse"
		// 		>
		// 			<stop stop-color="#844FFC" />
		// 			<stop offset="1" stop-color="#2FB8FF" />
		// 		</linearGradient>
		// 		<linearGradient
		// 			id="paint5_linear"
		// 			x1="2001.5"
		// 			x2="901.632"
		// 			y1="231.211"
		// 			y2="-471.113"
		// 			gradientUnits="userSpaceOnUse"
		// 		>
		// 			<stop stop-color="#844FFC" />
		// 			<stop offset="1" stop-color="#2FB8FF" />
		// 		</linearGradient>
		// 		<linearGradient
		// 			id="paint6_linear"
		// 			x1="1439.18"
		// 			x2="374.682"
		// 			y1="555.158"
		// 			y2="-124.586"
		// 			gradientUnits="userSpaceOnUse"
		// 		>
		// 			<stop stop-color="#844FFC" />
		// 			<stop offset="1" stop-color="#2FB8FF" />
		// 		</linearGradient>
		// 		<linearGradient
		// 			id="paint7_linear"
		// 			x1="1407.06"
		// 			x2="446.455"
		// 			y1="535.183"
		// 			y2="-78.217"
		// 			gradientUnits="userSpaceOnUse"
		// 		>
		// 			<stop stop-color="#844FFC" />
		// 			<stop offset="1" stop-color="#2FB8FF" />
		// 		</linearGradient>
		// 		<linearGradient
		// 			id="paint8_linear"
		// 			x1="1469.08"
		// 			x2="369.214"
		// 			y1="505.501"
		// 			y2="-196.823"
		// 			gradientUnits="userSpaceOnUse"
		// 		>
		// 			<stop stop-color="#844FFC" />
		// 			<stop offset="1" stop-color="#2FB8FF" />
		// 		</linearGradient>
		// 	</defs>
		// </svg>
		<svg
			width={width ? width : 1100}
			height={height ? height : 1100}
			// width="1100"
			// height="1100"
			viewBox="0 0 934 907"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M1084.37 587.689C992.574 636.045 891.883 654.731 785.756 655.607C665.576 656.6 537.251 666.654 434.052 593.059C325.875 515.913 239.517 388.813 227.053 257.174C215.178 131.764 319.715 44.121 371.819 -64.1929C416.938 -157.986 434.704 -267.309 511.491 -334.11C596.348 -407.932 704.529 -479.284 818.714 -452.971C931.406 -427.003 989.114 -294.888 1070.34 -205.329C1139.94 -128.594 1217.3 -62.28 1259.15 32.6256C1307.27 141.735 1358.81 263.706 1324.82 371.655C1290.5 480.65 1181.89 536.324 1084.37 587.689Z"
				fill="#1983CA"
				// fill-opacity="0.7"
			/>
		</svg>

		// <svg
		// 	width="1100"
		// 	height="1100"
		// 	viewBox="0 0 934 907"
		// 	fill="none"
		// 	xmlns="http://www.w3.org/2000/svg"
		// >
		// 	<path
		// 		fill-rule="evenodd"
		// 		clip-rule="evenodd"
		// 		d="M360.871 -75.6945C276.634 76.5712 136.099 338.955 397.544 529.468C658.987 719.981 801.329 632.17 929.29 598.612C1057.25 565.053 1363.72 567.823 1340.5 372.541C1317.28 177.267 1346.22 -156.559 1128.59 -180.577C910.967 -204.595 929.567 -111.202 787.92 -110.662C646.276 -110.123 445.108 -227.96 360.871 -75.6945Z"
		// 		stroke="url(#paint0_linear)"
		// 		stroke-width="30"
		// 		stroke-linecap="round"
		// 		stroke-dasharray="200 100"
		// 	/>
		// 	<path
		// 		fill-rule="evenodd"
		// 		clip-rule="evenodd"
		// 		d="M1084.37 587.689C992.574 636.045 891.883 654.731 785.756 655.607C665.576 656.6 537.251 666.654 434.052 593.059C325.875 515.913 239.517 388.813 227.053 257.174C215.178 131.764 319.715 44.121 371.819 -64.1929C416.938 -157.986 434.704 -267.309 511.491 -334.11C596.348 -407.932 704.529 -479.284 818.714 -452.971C931.406 -427.003 989.114 -294.888 1070.34 -205.329C1139.94 -128.594 1217.3 -62.28 1259.15 32.6256C1307.27 141.735 1358.81 263.706 1324.82 371.655C1290.5 480.65 1181.89 536.324 1084.37 587.689Z"
		// 		fill="#1983CA"
		// 		fill-opacity="0.3"
		// 	/>
		// 	<defs>
		// 		<linearGradient
		// 			id="paint0_linear"
		// 			x1="1253.06"
		// 			y1="549.438"
		// 			x2="407.306"
		// 			y2="-137.278"
		// 			gradientUnits="userSpaceOnUse"
		// 		>
		// 			<stop stop-color="#844FFC" />
		// 			<stop offset="1" stop-color="#2FB8FF" />
		// 		</linearGradient>
		// 	</defs>
		// </svg>
	)
}
