/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhBarbell = {
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
      svg`<rect x="52" y="56" width="40" height="144" rx="8" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="164" y="56" width="40" height="144" rx="8" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M208,80h24a8,8,0,0,1,8,8v80a8,8,0,0,1-8,8H208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M48,176H24a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="92" y1="128" x2="164" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<rect x="48" y="56" width="40" height="144" rx="8" opacity="0.2"/>
  <rect x="168" y="56" width="40" height="144" rx="8" opacity="0.2"/>
  <rect x="48" y="56" width="40" height="144" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="168" y="56" width="40" height="144" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M208,80h24a8,8,0,0,1,8,8v80a8,8,0,0,1-8,8H208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M48,176H24a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="88" y1="128" x2="168" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M232,72H216V64a16.01833,16.01833,0,0,0-16-16H176a16.01833,16.01833,0,0,0-16,16v56H96V64A16.01833,16.01833,0,0,0,80,48H56A16.01833,16.01833,0,0,0,40,64v8H24A16.01833,16.01833,0,0,0,8,88v80a16.01833,16.01833,0,0,0,16,16H40v8a16.01833,16.01833,0,0,0,16,16H80a16.01833,16.01833,0,0,0,16-16V136h64v56a16.01833,16.01833,0,0,0,16,16h24a16.01833,16.01833,0,0,0,16-16v-8h16a16.01833,16.01833,0,0,0,16-16V88A16.01833,16.01833,0,0,0,232,72ZM24,168V88H40v80Zm208,0H216V88h16Z"/>`}
      ${weight === "light" &&
      svg`<rect x="48" y="56" width="40" height="144" rx="8" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="168" y="56" width="40" height="144" rx="8" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M208,80h24a8,8,0,0,1,8,8v80a8,8,0,0,1-8,8H208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M48,176H24a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="88" y1="128" x2="168" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<rect x="48" y="56" width="40" height="144" rx="8" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="168" y="56" width="40" height="144" rx="8" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M208,80h24a8,8,0,0,1,8,8v80a8,8,0,0,1-8,8H208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M48,176H24a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="88" y1="128" x2="168" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<rect x="48" y="56" width="40" height="144" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="168" y="56" width="40" height="144" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M208,80h24a8,8,0,0,1,8,8v80a8,8,0,0,1-8,8H208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M48,176H24a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="88" y1="128" x2="168" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-barbell", PhBarbell);
export default PhBarbell;
