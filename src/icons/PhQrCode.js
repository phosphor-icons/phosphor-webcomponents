/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhQrCode = {
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
      svg`<rect x="48.00244" y="48" width="60" height="60" rx="8" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="48.00244" y="148" width="60" height="60" rx="8" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="148.00244" y="48" width="60" height="60" rx="8" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="148.00244" y1="148" x2="148.00244" y2="172" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="148.002 208 184.002 208 184.002 148" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="184.00244" y1="164" x2="208.00244" y2="164" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<rect x="48.00244" y="48" width="64" height="64" rx="8" opacity="0.2"/>
  <rect x="48.00244" y="144" width="64" height="64" rx="8" opacity="0.2"/>
  <rect x="144.00244" y="48" width="64" height="64" rx="8" opacity="0.2"/>
  <rect x="48.00244" y="48" width="64" height="64" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="48.00244" y="144" width="64" height="64" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="144.00244" y="48" width="64" height="64" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="144.00244" y1="144" x2="144.00244" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="144.002 208 176.002 208 176.002 144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="176.00244" y1="160" x2="208.00244" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="208.00244" y1="192" x2="208.00244" y2="208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <rect x="40.00244" y="40" width="80" height="80" rx="16"/>
    <rect x="40.00244" y="136" width="80" height="80" rx="16"/>
    <rect x="136.00244" y="40" width="80" height="80" rx="16"/>
    <path d="M144.00244,184a8.00039,8.00039,0,0,0,8-8V144a8,8,0,0,0-16,0v32A8.00039,8.00039,0,0,0,144.00244,184Z"/>
    <path d="M208.00244,152h-24v-8a8,8,0,0,0-16,0v56h-24a8,8,0,1,0,0,16h32a8.00039,8.00039,0,0,0,8-8V168h24a8,8,0,0,0,0-16Z"/>
    <path d="M208.00244,184a8.00039,8.00039,0,0,0-8,8v16a8,8,0,0,0,16,0V192A8.00039,8.00039,0,0,0,208.00244,184Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<rect x="48.00244" y="48" width="64" height="64" rx="8" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="48.00244" y="144" width="64" height="64" rx="8" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="144.00244" y="48" width="64" height="64" rx="8" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="144.00244" y1="144" x2="144.00244" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="144.002 208 176.002 208 176.002 144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="176.00244" y1="160" x2="208.00244" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="208.00244" y1="192" x2="208.00244" y2="208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<rect x="48.00244" y="48" width="64" height="64" rx="8" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="48.00244" y="144" width="64" height="64" rx="8" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="144.00244" y="48" width="64" height="64" rx="8" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="144.00244" y1="144" x2="144.00244" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="144.002 208 176.002 208 176.002 144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="176.00244" y1="160" x2="208.00244" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="208.00244" y1="192" x2="208.00244" y2="208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<rect x="48.00244" y="48" width="64" height="64" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="48.00244" y="144" width="64" height="64" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="144.00244" y="48" width="64" height="64" rx="8" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="144.00244" y1="144" x2="144.00244" y2="176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="144.002 208 176.002 208 176.002 144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="176.00244" y1="160" x2="208.00244" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="208.00244" y1="192" x2="208.00244" y2="208" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-qr-code", PhQrCode);
export default PhQrCode;
