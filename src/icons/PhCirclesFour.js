/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhCirclesFour = {
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
      svg`<circle cx="74" cy="74" r="34" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="182" cy="74" r="34" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="74" cy="182" r="34" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="182" cy="182" r="34" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<circle cx="76" cy="180" r="36" opacity="0.2"/>
  <circle cx="76" cy="76" r="36" opacity="0.2"/>
  <circle cx="180" cy="76" r="36" opacity="0.2"/>
  <circle cx="180" cy="180" r="36" opacity="0.2"/>
  <circle cx="76" cy="76" r="36" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="180" cy="76" r="36" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="180" cy="180" r="36" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="76" cy="180" r="36" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <circle cx="76" cy="76" r="44"/>
    <circle cx="180" cy="76" r="44"/>
    <circle cx="76" cy="180" r="44"/>
    <circle cx="180" cy="180" r="44"/>
  </g>`}
      ${weight === "light" &&
      svg`<circle cx="76" cy="76" r="36" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="180" cy="76" r="36" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="76" cy="180" r="36" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="180" cy="180" r="36" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<circle cx="76" cy="76" r="36" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="180" cy="76" r="36" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="76" cy="180" r="36" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="180" cy="180" r="36" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<circle cx="76" cy="76" r="36" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="180" cy="76" r="36" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="76" cy="180" r="36" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="180" cy="180" r="36" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-circles-four", PhCirclesFour);
export default PhCirclesFour;
