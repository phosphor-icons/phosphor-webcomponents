/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhPercent = {
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
      svg`<line x1="200" y1="56" x2="56" y2="200" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="76" cy="76" r="28" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="180" cy="180" r="28" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<circle cx="180" cy="180" r="28" opacity="0.2"/>
  <circle cx="76" cy="76" r="28" opacity="0.2"/>
  <line x1="200" y1="56" x2="56" y2="200" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="76" cy="76" r="28" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>
  <circle cx="180" cy="180" r="28" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <path d="M205.65674,50.34326a7.99915,7.99915,0,0,0-11.31348,0l-144,144a7.99984,7.99984,0,1,0,11.31348,11.31348l144-144A7.99915,7.99915,0,0,0,205.65674,50.34326Z"/>
    <path d="M76,108a32,32,0,1,0-22.62744-9.3728A31.78931,31.78931,0,0,0,76,108Z"/>
    <path d="M202.62744,157.37256a31.98536,31.98536,0,1,0,0,45.25488A32.03584,32.03584,0,0,0,202.62744,157.37256Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<line x1="200" y1="56" x2="56" y2="200" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="76" cy="76" r="28" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="180" cy="180" r="28" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<line x1="200" y1="56" x2="56" y2="200" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="76" cy="76" r="28" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="180" cy="180" r="28" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="200" y1="56" x2="56" y2="200" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="76" cy="76" r="28" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>
  <circle cx="180" cy="180" r="28" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-percent", PhPercent);
export default PhPercent;
