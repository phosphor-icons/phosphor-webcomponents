/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhDiceFour = {
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
      svg`<rect x="40" y="40" width="176" height="176" rx="24" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="96" cy="96" r="16"/>
  <circle cx="160" cy="96" r="16"/>
  <circle cx="96" cy="160" r="16"/>
  <circle cx="160" cy="160" r="16"/>`}
      ${weight === "duotone" &&
      svg`<rect x="40" y="40" width="176" height="176" rx="24" opacity="0.2"/>
  <rect x="40" y="40" width="176" height="176" rx="24" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="100" cy="100" r="12"/>
  <circle cx="156" cy="100" r="12"/>
  <circle cx="100" cy="156" r="12"/>
  <circle cx="156" cy="156" r="12"/>`}
      ${weight === "fill" &&
      svg`<path d="M192,32H64A32.03667,32.03667,0,0,0,32,64V192a32.03667,32.03667,0,0,0,32,32H192a32.03667,32.03667,0,0,0,32-32V64A32.03667,32.03667,0,0,0,192,32ZM100,168a12,12,0,1,1,12-12A12,12,0,0,1,100,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,100,112Zm56,56a12,12,0,1,1,12-12A12,12,0,0,1,156,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,156,112Z"/>`}
      ${weight === "light" &&
      svg`<rect x="40" y="40" width="176" height="176" rx="24" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="100" cy="100" r="10"/>
  <circle cx="156" cy="100" r="10"/>
  <circle cx="100" cy="156" r="10"/>
  <circle cx="156" cy="156" r="10"/>`}
      ${weight === "thin" &&
      svg`<rect x="40" y="40" width="176" height="176" rx="24" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="100" cy="100" r="8"/>
  <circle cx="156" cy="100" r="8"/>
  <circle cx="100" cy="156" r="8"/>
  <circle cx="156" cy="156" r="8"/>`}
      ${weight === "regular" &&
      svg`<rect x="40" y="40" width="176" height="176" rx="24" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="100" cy="100" r="12"/>
  <circle cx="156" cy="100" r="12"/>
  <circle cx="100" cy="156" r="12"/>
  <circle cx="156" cy="156" r="12"/>`}
    </svg>
  `,
};

define("ph-dice-four", PhDiceFour);
export default PhDiceFour;
