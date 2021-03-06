/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhListBullets = {
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
      svg`<line x1="88" y1="64" x2="216" y2="64" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="88.00614" y1="128" x2="216" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="88.00614" y1="192" x2="216" y2="192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="44" cy="128" r="16"/>
  <circle cx="44" cy="64" r="16"/>
  <circle cx="44" cy="192" r="16"/>`}
      ${weight === "duotone" &&
      svg`<line x1="88" y1="64" x2="216" y2="64" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="88.00614" y1="128" x2="216" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="88.00614" y1="192" x2="216" y2="192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="44" cy="64" r="12"/>
  <circle cx="44" cy="128" r="12"/>
  <circle cx="44" cy="192" r="12"/>`}
      ${weight === "fill" &&
      svg`<path d="M80,64a8.00008,8.00008,0,0,1,8-8H216a8,8,0,0,1,0,16H88A8.00008,8.00008,0,0,1,80,64Zm136,56H88.00586a8,8,0,1,0,0,16H216a8,8,0,0,0,0-16Zm0,64H88.00586a8,8,0,1,0,0,16H216a8,8,0,0,0,0-16ZM44,116a12,12,0,1,0,12,12A12.01343,12.01343,0,0,0,44,116Zm0-64A12,12,0,1,0,56,64,12.01343,12.01343,0,0,0,44,52Zm0,128a12,12,0,1,0,12,12A12.01343,12.01343,0,0,0,44,180Z"/>`}
      ${weight === "light" &&
      svg`<line x1="88" y1="64" x2="216" y2="64" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="88.00614" y1="128" x2="216" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="88.00614" y1="192" x2="216" y2="192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="44" cy="64" r="10"/>
  <circle cx="44" cy="192" r="10"/>
  <circle cx="44" cy="128" r="10"/>`}
      ${weight === "thin" &&
      svg`<line x1="88" y1="64" x2="216" y2="64" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="88.00614" y1="128" x2="216" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="88.00614" y1="192" x2="216" y2="192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="44" cy="128" r="8"/>
  <circle cx="44" cy="64" r="8"/>
  <circle cx="44" cy="192" r="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="88" y1="64" x2="216" y2="64" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="88.00614" y1="128" x2="216" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="88.00614" y1="192" x2="216" y2="192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="44" cy="64" r="12"/>
  <circle cx="44" cy="128" r="12"/>
  <circle cx="44" cy="192" r="12"/>`}
    </svg>
  `,
};

define("ph-list-bullets", PhListBullets);
export default PhListBullets;
