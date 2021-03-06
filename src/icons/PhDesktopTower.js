/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhDesktopTower = {
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
      svg`<path d="M108,180H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80h76" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="108" y1="216" x2="68" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="204" y1="76" x2="180" y2="76" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="204" y1="112" x2="180" y2="112" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <rect x="144" y="40" width="96" height="176" rx="8" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="88" y1="180" x2="88" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="192" cy="176" r="16"/>`}
      ${weight === "duotone" &&
      svg`<rect x="144" y="40" width="96" height="176" rx="8" opacity="0.2"/>
  <path d="M112,184H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80h80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="112" y1="216" x2="64" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="208" y1="72" x2="176" y2="72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="208" y1="104" x2="176" y2="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="144" y="40" width="96" height="176" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="88" y1="184" x2="88" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="192" cy="180" r="12"/>`}
      ${weight === "fill" &&
      svg`<path d="M120,80V184a8.00008,8.00008,0,0,1-8,8H96v16h16a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16H80V192H32A24.0275,24.0275,0,0,1,8,168V96A24.0275,24.0275,0,0,1,32,72h80A8.00008,8.00008,0,0,1,120,80ZM248,48V208a16.01833,16.01833,0,0,1-16,16H152a16.01833,16.01833,0,0,1-16-16V48a16.01833,16.01833,0,0,1,16-16h80A16.01833,16.01833,0,0,1,248,48ZM204,180a12,12,0,1,0-12,12A12.01343,12.01343,0,0,0,204,180Zm20-76a8.00008,8.00008,0,0,0-8-8H168a8,8,0,0,0,0,16h48A8.00008,8.00008,0,0,0,224,104Zm0-32a8.00008,8.00008,0,0,0-8-8H168a8,8,0,0,0,0,16h48A8.00008,8.00008,0,0,0,224,72Z"/>`}
      ${weight === "light" &&
      svg`<path d="M112,184H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80h80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="112" y1="216" x2="64" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="208" y1="72" x2="176" y2="72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="208" y1="104" x2="176" y2="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <rect x="144" y="40" width="96" height="176" rx="8" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="88" y1="184" x2="88" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="192" cy="180" r="10"/>`}
      ${weight === "thin" &&
      svg`<path d="M112,184H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80h80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="112" y1="216" x2="64" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="208" y1="72" x2="176" y2="72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="208" y1="104" x2="176" y2="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <rect x="144" y="40" width="96" height="176" rx="8" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="88" y1="184" x2="88" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="192" cy="180" r="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M112,184H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80h80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="112" y1="216" x2="64" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="208" y1="72" x2="176" y2="72" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="208" y1="104" x2="176" y2="104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <rect x="144" y="40" width="96" height="176" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="88" y1="184" x2="88" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="192" cy="180" r="12"/>`}
    </svg>
  `,
};

define("ph-desktop-tower", PhDesktopTower);
export default PhDesktopTower;
