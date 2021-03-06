/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhUserSquare = {
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
      svg`<circle cx="128" cy="120" r="40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M57.78418,215.99979a72.02025,72.02025,0,0,1,140.43164,0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M208,40H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48A8,8,0,0,0,208,40ZM57.78418,215.99976A72.0276,72.0276,0,0,1,128,160a40,40,0,1,1,40-40,40.00006,40.00006,0,0,1-40,40,72.02755,72.02755,0,0,1,70.21582,55.99976Z" opacity="0.2"/>
  <circle cx="128" cy="120" r="40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M57.78418,215.99979a72.02025,72.02025,0,0,1,140.43164,0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <circle cx="128" cy="120" r="44"/>
    <path d="M208,32H48A16.01833,16.01833,0,0,0,32,48V208a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V48A16.01833,16.01833,0,0,0,208,32Zm0,176h-3.67322a80.44452,80.44452,0,0,0-26.069-38.24561,79.23073,79.23073,0,0,0-8.98218-6.26953,59.83684,59.83684,0,0,1-82.55126,0,79.23073,79.23073,0,0,0-8.98218,6.26953A80.44452,80.44452,0,0,0,51.67322,208H48V48H208l.01025,159.99951Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<circle cx="128" cy="120" r="40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M57.78418,215.99979a72.02025,72.02025,0,0,1,140.43164,0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<circle cx="128" cy="120" r="40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M57.78418,215.99979a72.02025,72.02025,0,0,1,140.43164,0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<circle cx="128" cy="120" r="40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="40" y="40" width="176" height="176" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M57.78418,215.99979a72.02025,72.02025,0,0,1,140.43164,0" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-user-square", PhUserSquare);
export default PhUserSquare;
