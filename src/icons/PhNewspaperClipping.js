/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhNewspaperClipping = {
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
      transform=${mirrored ? "scale(-1, 1)" : undefined}
    >
      <slot />
      ${weight === "bold" && svg`<path d="M32,216V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V216l-32-16-32,16-32-16L96,216,64,200Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="148" y1="108" x2="184" y2="108" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="148" y1="148" x2="184" y2="148" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <rect x="72" y="96" width="40" height="64" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "duotone" && svg`<path d="M216,48H40a8.00009,8.00009,0,0,0-8,8V216l32-16,32,16,32-16,32,16,32-16,32,16V56A8.00009,8.00009,0,0,0,216,48ZM112,160H64V96h48Z" opacity="0.2"/>
  <path d="M32,216V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V216l-32-16-32,16-32-16L96,216,64,200Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="144" y1="112" x2="192" y2="112" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="144" y1="144" x2="192" y2="144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="64" y="96" width="48" height="64" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "fill" && svg`<path d="M72,104h32v48H72ZM232,56V216a7.99951,7.99951,0,0,1-11.57812,7.15527L192,208.94434l-28.42188,14.21093a8.00049,8.00049,0,0,1-7.15624,0L128,208.94434,99.57812,223.15527a7.99634,7.99634,0,0,1-7.15624,0L64,208.94434,35.57812,223.15527A7.99951,7.99951,0,0,1,24,216V56A16.01833,16.01833,0,0,1,40,40H216A16.01833,16.01833,0,0,1,232,56ZM120,96a8.00039,8.00039,0,0,0-8-8H64a8.00039,8.00039,0,0,0-8,8v64a8.00039,8.00039,0,0,0,8,8h48a8.00039,8.00039,0,0,0,8-8Zm80,48a8.00039,8.00039,0,0,0-8-8H144a8,8,0,0,0,0,16h48A8.00039,8.00039,0,0,0,200,144Zm0-32a8.00039,8.00039,0,0,0-8-8H144a8,8,0,0,0,0,16h48A8.00039,8.00039,0,0,0,200,112Z"/>`}
      ${weight === "light" && svg`<path d="M32,216V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V216l-32-16-32,16-32-16L96,216,64,200Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="144" y1="112" x2="192" y2="112" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="144" y1="144" x2="192" y2="144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="64" y="96" width="48" height="64" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "thin" && svg`<path d="M32,216V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V216l-32-16-32,16-32-16L96,216,64,200Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="144" y1="112" x2="192" y2="112" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="144" y1="144" x2="192" y2="144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="64" y="96" width="48" height="64" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
      ${weight === "regular" && svg`<path d="M32,216V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V216l-32-16-32,16-32-16L96,216,64,200Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="144" y1="112" x2="192" y2="112" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="144" y1="144" x2="192" y2="144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="64" y="96" width="48" height="64" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`}
    </svg>
  `,
};

define("ph-newspaper-clipping", PhNewspaperClipping);
export default PhNewspaperClipping;