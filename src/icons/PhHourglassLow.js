/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhHourglassLow = {
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
      svg`<path d="M128,128,67.2,82.4A8,8,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.6412a8,8,0,0,1-3.17594,6.38188L128,128h0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M128,128,67.2,173.6A8,8,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.3588a8,8,0,0,0-3.17594-6.38188L128,128h0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="192" y1="180.3588" x2="64" y2="180" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.3588Z" opacity="0.2"/>
  <path d="M128,128,67.2,82.4A8,8,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.6412a8,8,0,0,1-3.17594,6.38188L128,128h0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M128,128,67.2,173.6A8,8,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.3588a8,8,0,0,0-3.17594-6.38188L128,128h0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="192" y1="180.3588" x2="64" y2="180" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M200,75.64111V40a16.01833,16.01833,0,0,0-16-16H72A16.01833,16.01833,0,0,0,56,40V76a16.07589,16.07589,0,0,0,6.3999,12.7998L114.667,128l-52.2666,39.2002a16.06134,16.06134,0,0,0-6.34814,11.92236A7.943,7.943,0,0,0,56,180v36a16.01833,16.01833,0,0,0,16,16H184a16.01833,16.01833,0,0,0,16-16V180.35889a8.04861,8.04861,0,0,0-.05273-.89307,16.06854,16.06854,0,0,0-6.29932-11.87061L141.2666,128l52.38184-39.595A16.08467,16.08467,0,0,0,200,75.64111ZM82.59717,172.052l45.38428-34.03784,45.36572,34.29248ZM184,75.64136l-56.01855,42.34448L72,76V40H184Z"/>`}
      ${weight === "light" &&
      svg`<path d="M128,128,67.2,82.4A8,8,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.6412a8,8,0,0,1-3.17594,6.38188L128,128h0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M128,128,67.2,173.6A8,8,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.3588a8,8,0,0,0-3.17594-6.38188L128,128h0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="192" y1="180.3588" x2="64" y2="180" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M128,128,67.2,82.4A8,8,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.6412a8,8,0,0,1-3.17594,6.38188L128,128h0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M128,128,67.2,173.6A8,8,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.3588a8,8,0,0,0-3.17594-6.38188L128,128h0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="192" y1="180.3588" x2="64" y2="180" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M128,128,67.2,82.4A8,8,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.6412a8,8,0,0,1-3.17594,6.38188L128,128h0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M128,128,67.2,173.6A8,8,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.3588a8,8,0,0,0-3.17594-6.38188L128,128h0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="192" y1="180.3588" x2="64" y2="180" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-hourglass-low", PhHourglassLow);
export default PhHourglassLow;
