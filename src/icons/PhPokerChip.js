/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhPokerChip = {
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
      ${weight === "bold" && svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="128" cy="128" r="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="128" y1="72" x2="128" y2="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="88.40202" y1="88.40202" x2="60.11775" y2="60.11775" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="72" y1="128" x2="32" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="88.40202" y1="167.59798" x2="60.11775" y2="195.88225" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="128" y1="184" x2="128" y2="224" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="167.59798" y1="167.59798" x2="195.88225" y2="195.88225" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="184" y1="128" x2="224" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="167.59798" y1="88.40202" x2="195.88225" y2="60.11775" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<path d="M128,32a96,96,0,1,0,96,96A95.99991,95.99991,0,0,0,128,32Zm0,152a56,56,0,1,1,56-56A56.00012,56.00012,0,0,1,128,184Z" opacity="0.2"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128" cy="128" r="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="72" x2="128" y2="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="88.40202" y1="88.40202" x2="60.11775" y2="60.11775" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="72" y1="128" x2="32" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="88.40202" y1="167.59798" x2="60.11775" y2="195.88225" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="184" x2="128" y2="224" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="167.59798" y1="167.59798" x2="195.88225" y2="195.88225" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="184" y1="128" x2="224" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="167.59798" y1="88.40202" x2="195.88225" y2="60.11775" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M202.16064,200.833a103.80643,103.80643,0,0,0,0-145.666,7.39654,7.39654,0,0,0-1.32666-1.32666,103.80639,103.80639,0,0,0-145.668,0A7.39654,7.39654,0,0,0,53.83936,55.167a103.80643,103.80643,0,0,0,0,145.666,7.39012,7.39012,0,0,0,1.32714,1.3269,103.80581,103.80581,0,0,0,145.667,0,7.39012,7.39012,0,0,0,1.32714-1.3269ZM40.36768,136h24.1499a63.6708,63.6708,0,0,0,12.95605,31.21216l-17.06884,17.0686A87.60592,87.60592,0,0,1,40.36768,136ZM60.40479,71.71924l17.06884,17.0686A63.6708,63.6708,0,0,0,64.51758,120H40.36768A87.60592,87.60592,0,0,1,60.40479,71.71924ZM215.63232,120h-24.1499a63.6708,63.6708,0,0,0-12.95605-31.21216l17.06884-17.0686A87.60592,87.60592,0,0,1,215.63232,120ZM167.21191,77.47339A63.66789,63.66789,0,0,0,136,64.51782V40.36743a87.60765,87.60765,0,0,1,48.28076,20.03736ZM120,64.51782A63.66789,63.66789,0,0,0,88.78809,77.47339L71.71924,60.40479A87.60765,87.60765,0,0,1,120,40.36743ZM88.78809,178.52661A63.66789,63.66789,0,0,0,120,191.48218v24.15039a87.60765,87.60765,0,0,1-48.28076-20.03736ZM136,191.48218a63.66789,63.66789,0,0,0,31.21191-12.95557l17.06885,17.0686A87.60765,87.60765,0,0,1,136,215.63257Zm42.52637-24.27A63.6708,63.6708,0,0,0,191.48242,136h24.1499a87.60592,87.60592,0,0,1-20.03711,48.28076Z"/>`}
      ${weight === "light" && svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="128" cy="128" r="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="128" y1="72" x2="128" y2="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="88.40202" y1="88.40202" x2="60.11775" y2="60.11775" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="72" y1="128" x2="32" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="88.40202" y1="167.59798" x2="60.11775" y2="195.88225" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="128" y1="184" x2="128" y2="224" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="167.59798" y1="167.59798" x2="195.88225" y2="195.88225" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="184" y1="128" x2="224" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="167.59798" y1="88.40202" x2="195.88225" y2="60.11775" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="128" cy="128" r="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="128" y1="72" x2="128" y2="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="88.40202" y1="88.40202" x2="60.11775" y2="60.11775" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="72" y1="128" x2="32" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="88.40202" y1="167.59798" x2="60.11775" y2="195.88225" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="128" y1="184" x2="128" y2="224" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="167.59798" y1="167.59798" x2="195.88225" y2="195.88225" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="184" y1="128" x2="224" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="167.59798" y1="88.40202" x2="195.88225" y2="60.11775" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<circle cx="128" cy="128" r="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="128" cy="128" r="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="72" x2="128" y2="32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="88.40202" y1="88.40202" x2="60.11775" y2="60.11775" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="72" y1="128" x2="32" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="88.40202" y1="167.59798" x2="60.11775" y2="195.88225" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="184" x2="128" y2="224" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="167.59798" y1="167.59798" x2="195.88225" y2="195.88225" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="184" y1="128" x2="224" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="167.59798" y1="88.40202" x2="195.88225" y2="60.11775" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-poker-chip", PhPokerChip);
export default PhPokerChip;