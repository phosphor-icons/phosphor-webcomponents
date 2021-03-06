/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhPaintBucket = {
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
      svg`<rect x="42.46089" y="60.11775" width="147.07821" height="135.7645" rx="8" transform="translate(-56.53405 119.51472) rotate(-45)" stroke-width="24" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="116.00586" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M204,208c0-19.99414,20-40,20-40s20,20.00586,20,40a20,20,0,0,1-40,0Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="113.85786" y1="101.86372" x2="49.85786" y2="37.86372" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M208,196c0-19.99414,20-40,20-40s20,20.00586,20,40a20,20,0,0,1-40,0Z" opacity="0.2"/>
  <rect x="42.46089" y="60.11775" width="147.07821" height="135.7645" rx="8" transform="translate(-56.53405 119.51472) rotate(-45)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="116.00586" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M208,196c0-19.99414,20-40,20-40s20,20.00586,20,40a20,20,0,0,1-40,0Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="113.85786" y1="101.86372" x2="49.85786" y2="37.86372" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <path d="M233.65723,150.34375a7.99945,7.99945,0,0,0-11.31446,0C221.42969,151.25635,200,172.958,200,196a28,28,0,0,0,56,0C256,172.958,234.57031,151.25635,233.65723,150.34375Z"/>
    <path d="M55.51465,32.207A8.00018,8.00018,0,0,0,44.2002,43.52051L68.68286,68.00317,79.99658,56.689Z"/>
    <path d="M220.68652,124A15.89427,15.89427,0,0,0,216,112.68652L131.31348,27.999A16.02162,16.02162,0,0,0,108.68555,28l-28.689,28.689,43.87451,43.87452a16.06775,16.06775,0,1,1-11.31372,11.31421L68.68286,68.00317,16.001,120.68555A15.99888,15.99888,0,0,0,16,143.31348L100.68555,228l.001.001A16.02134,16.02134,0,0,0,123.31445,228L215.999,135.31445A15.895,15.895,0,0,0,220.68652,124Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<rect x="42.46089" y="60.11775" width="147.07821" height="135.7645" rx="8" transform="translate(-56.53405 119.51472) rotate(-45)" stroke-width="12" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="116.00586" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M208,196c0-19.99414,20-40,20-40s20,20.00586,20,40a20,20,0,0,1-40,0Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="113.85786" y1="101.86372" x2="49.85786" y2="37.86372" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<rect x="42.46089" y="60.11775" width="147.07821" height="135.7645" rx="8" transform="translate(-56.53405 119.51472) rotate(-45)" stroke-width="8" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="116.00586" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M208,196c0-19.99414,20-40,20-40s20,20.00586,20,40a20,20,0,0,1-40,0Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="113.85786" y1="101.86372" x2="49.85786" y2="37.86372" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<rect x="42.46089" y="60.11775" width="147.07821" height="135.7645" rx="8" transform="translate(-56.53405 119.51472) rotate(-45)" stroke-width="16" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="128" cy="116.00586" r="20" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M208,196c0-19.99414,20-40,20-40s20,20.00586,20,40a20,20,0,0,1-40,0Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="113.85786" y1="101.86372" x2="49.85786" y2="37.86372" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-paint-bucket", PhPaintBucket);
export default PhPaintBucket;
