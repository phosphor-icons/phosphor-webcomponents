/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhBellSlash = {
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: false,
  render: ({ color, size, weight, mirrored }) => html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${size}"
      height="${size}"
      fill="${color}"
      viewBox="0 0 256 256"
      transform=${mirrored ? "scale(-1, 1)" : null}
    >
      ${weight === "bold" &&
      svg`<line x1="48" y1="40" x2="208" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M96,192v8a32,32,0,0,0,64,0v-8" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M186.18182,192H48.98365A7.99908,7.99908,0,0,1,42.103,179.95641c6.60328-11.35959,14.1-32.1426,14.1-67.95641v-8A71.80594,71.80594,0,0,1,68.9457,63.0404" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M99.96516,37.69664A71.42478,71.42478,0,0,1,128.5484,32.002c39.58967.29432,71.25651,33.20133,71.25651,72.90185V112a189.04639,189.04639,0,0,0,3.776,39.67466" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M56.20305,103.97925a71.899,71.899,0,0,1,72.34535-71.998c39.58967.29432,71.25651,33.20133,71.25651,72.90185v7.09613c0,35.81563,7.49325,56.59893,14.093,67.95814a7.999,7.999,0,0,1-6.88165,12.04186H48.98365A7.99908,7.99908,0,0,1,42.103,179.93566c6.60328-11.35959,14.1-32.1426,14.1-67.95641Z" opacity="0.2"/>
  <line x1="48" y1="40" x2="208" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M96,192v8a32,32,0,0,0,64,0v-8" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M186.18182,192H48.98365A7.99908,7.99908,0,0,1,42.103,179.95641c6.60328-11.35959,14.1-32.1426,14.1-67.95641v-8A71.80594,71.80594,0,0,1,68.9457,63.0404" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M92.515,41.39547A71.33425,71.33425,0,0,1,128.5484,32.002c39.58967.29432,71.25651,33.20133,71.25651,72.90185V112c0,26.66813,4.15442,45.002,9.001,57.31684" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M53.91992,34.61816A8.0006,8.0006,0,1,0,42.08008,45.38184L58.93164,63.91846A79.70131,79.70131,0,0,0,48.20312,104v8c0,34.33594-7.0791,53.7207-13.0166,63.93555A15.99886,15.99886,0,0,0,48.9834,200H88a40,40,0,0,0,80,0h14.64209l19.438,21.38184a8.0006,8.0006,0,1,0,11.83984-10.76368ZM128,224a24.0275,24.0275,0,0,1-24-24h48A24.0275,24.0275,0,0,1,128,224ZM86.59473,46.77734a8.00066,8.00066,0,0,1,1.95215-12.32812A79.89269,79.89269,0,0,1,128.6084,24.002c43.66894.32422,79.19629,36.61719,79.19629,80.90235V112c0,21.85059,2.84179,40.14844,8.44531,54.38672a8.00047,8.00047,0,0,1-13.36426,8.31152Z"/>`}
      ${weight === "light" &&
      svg`<line x1="48" y1="40" x2="208" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M96,192v8a32,32,0,0,0,64,0v-8" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M186.18182,192H48.98365A7.99908,7.99908,0,0,1,42.103,179.95641c6.60328-11.35959,14.1-32.1426,14.1-67.95641v-8A71.80594,71.80594,0,0,1,68.9457,63.0404" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M92.515,41.39547A71.33425,71.33425,0,0,1,128.5484,32.002c39.58967.29432,71.25651,33.20133,71.25651,72.90185V112c0,26.66813,4.15442,45.002,9.001,57.31684" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<line x1="48" y1="40" x2="208" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M96,192v8a32,32,0,0,0,64,0v-8" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M186.18182,192H48.98365A7.99908,7.99908,0,0,1,42.103,179.95641c6.60328-11.35959,14.1-32.1426,14.1-67.95641v-8A71.80594,71.80594,0,0,1,68.9457,63.0404" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M92.515,41.39547A71.33425,71.33425,0,0,1,128.5484,32.002c39.58967.29432,71.25651,33.20133,71.25651,72.90185V112c0,26.66813,4.15442,45.002,9.001,57.31684" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="48" y1="40" x2="208" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M96,192v8a32,32,0,0,0,64,0v-8" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M186.18182,192H48.98365A7.99908,7.99908,0,0,1,42.103,179.95641c6.60328-11.35959,14.1-32.1426,14.1-67.95641v-8A71.80594,71.80594,0,0,1,68.9457,63.0404" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M92.515,41.39547A71.33425,71.33425,0,0,1,128.5484,32.002c39.58967.29432,71.25651,33.20133,71.25651,72.90185V112c0,26.66813,4.15442,45.002,9.001,57.31684" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-bell-slash", PhBellSlash);
export default PhBellSlash;
