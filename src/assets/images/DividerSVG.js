import * as React from 'react';
import {SvgXml} from 'react-native-svg';

const xml = `
<svg width="321" height="11" viewBox="0 0 321 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M160.368 0.38107C160.021 0.306756 159.627 0.402671 159.319 0.670778L150.506 8.34808C150.45 8.3384 150.392 8.33336 150.334 8.33336H1.00024C0.447795 8.33336 0 8.78105 0 9.33332C0 9.88561 0.447795 10.3333 1.00024 10.3333H150.334C150.453 10.3333 150.567 10.3125 150.673 10.2743C151.042 10.3942 151.486 10.3078 151.825 10.0124L160.435 2.51318L168.869 9.90482C169.059 10.0718 169.283 10.1714 169.508 10.2041C169.653 10.2864 169.821 10.3333 170 10.3333H319.333C319.886 10.3333 320.334 9.88561 320.334 9.33332C320.334 8.78105 319.886 8.33336 319.333 8.33336H170.258L170.246 8.32305L161.486 0.646003C161.158 0.357671 160.728 0.270211 160.368 0.38107Z" fill="url(#paint0_linear_0_730)"/>
<defs>
<linearGradient id="paint0_linear_0_730" x1="320.334" y1="0.334648" x2="0" y2="0.334648" gradientUnits="userSpaceOnUse">
<stop stop-color="#222222" stop-opacity="0.01"/>
<stop offset="0.517235" stop-color="#222222" stop-opacity="0.15"/>
<stop offset="1" stop-color="#222222" stop-opacity="0.01"/>
</linearGradient>
</defs>
</svg>

`;
export default () => <SvgXml xml={xml} width="100%" height="100%" />;
