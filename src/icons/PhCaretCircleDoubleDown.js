/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhCaretCircleDoubleDown = {
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
      svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="160 88 128 120 96 88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="160 144 128 176 96 144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<circle cx="128" cy="128" r="96" opacity="0.2"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="160 88 128 120 96 88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="160 144 128 176 96 144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M54.46094,54.46094a103.95314,103.95314,0,1,0,147.07812,0A104.12262,104.12262,0,0,0,54.46094,54.46094Zm99.88281,83.88281a7.99915,7.99915,0,1,1,11.3125,11.3125l-32,32a7.99708,7.99708,0,0,1-11.3125,0l-32-32a7.99915,7.99915,0,0,1,11.3125-11.3125L128,164.6875Zm0-56a7.99915,7.99915,0,1,1,11.3125,11.3125l-32,32a7.99708,7.99708,0,0,1-11.3125,0l-32-32a7.99915,7.99915,0,0,1,11.3125-11.3125L128,108.6875Z"/>`}
      ${weight === "light" &&
      svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="160 88 128 120 96 88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="160 144 128 176 96 144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="160 88 128 120 96 88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="160 144 128 176 96 144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="160 88 128 120 96 88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="160 144 128 176 96 144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-caret-circle-double-down", PhCaretCircleDoubleDown);
export default PhCaretCircleDoubleDown;
