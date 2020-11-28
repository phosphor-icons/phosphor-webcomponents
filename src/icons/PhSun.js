/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhSun = {
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
      ${weight === "bold" && svg`<circle cx="128" cy="128" r="60" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="128" y1="28" x2="128" y2="12" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="198.71068" y1="57.28932" x2="210.02439" y2="45.97561" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="228" y1="128" x2="244" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="198.71068" y1="198.71068" x2="210.02439" y2="210.02439" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="128" y1="228" x2="128" y2="244" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="57.28932" y1="198.71068" x2="45.97561" y2="210.02439" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="28" y1="128" x2="12" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="57.28932" y1="57.28932" x2="45.97561" y2="45.97561" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<circle cx="128" cy="128" r="60" opacity="0.2"/>
  <circle cx="128" cy="128" r="60" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="36" x2="128" y2="16" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="62.94618" y1="62.94618" x2="48.80404" y2="48.80404" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="36" y1="128" x2="16" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="62.94618" y1="193.05382" x2="48.80404" y2="207.19596" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="220" x2="128" y2="240" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="193.05382" y1="193.05382" x2="207.19596" y2="207.19596" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="220" y1="128" x2="240" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="193.05382" y1="62.94618" x2="207.19596" y2="48.80404" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<g>
    <circle cx="128" cy="128" r="68"/>
    <path d="M128,44a8.00008,8.00008,0,0,0,8-8V16a8,8,0,0,0-16,0V36A8.00008,8.00008,0,0,0,128,44Z"/>
    <path d="M57.28955,68.603A7.99984,7.99984,0,1,0,68.603,57.28955L54.46094,43.14746A7.99984,7.99984,0,1,0,43.14746,54.46094Z"/>
    <path d="M44,128a8.00008,8.00008,0,0,0-8-8H16a8,8,0,0,0,0,16H36A8.00008,8.00008,0,0,0,44,128Z"/>
    <path d="M57.28955,187.397,43.14746,201.53906a7.99984,7.99984,0,1,0,11.31348,11.31348L68.603,198.71045A7.99984,7.99984,0,1,0,57.28955,187.397Z"/>
    <path d="M128,212a8.00008,8.00008,0,0,0-8,8v20a8,8,0,0,0,16,0V220A8.00008,8.00008,0,0,0,128,212Z"/>
    <path d="M198.71045,187.397A7.99984,7.99984,0,1,0,187.397,198.71045l14.14209,14.14209a7.99984,7.99984,0,1,0,11.31348-11.31348Z"/>
    <path d="M240,120H220a8,8,0,0,0,0,16h20a8,8,0,0,0,0-16Z"/>
    <path d="M193.05371,70.94629a7.97507,7.97507,0,0,0,5.65674-2.34326l14.14209-14.14209a7.99984,7.99984,0,1,0-11.31348-11.31348L187.397,57.28955a7.99976,7.99976,0,0,0,5.65674,13.65674Z"/>
  </g>`}
      ${weight === "light" && svg`<circle cx="128" cy="128" r="60" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="128" y1="36" x2="128" y2="16" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="62.94618" y1="62.94618" x2="48.80404" y2="48.80404" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="36" y1="128" x2="16" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="62.94618" y1="193.05382" x2="48.80404" y2="207.19596" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="128" y1="220" x2="128" y2="240" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="193.05382" y1="193.05382" x2="207.19596" y2="207.19596" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="220" y1="128" x2="240" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="193.05382" y1="62.94618" x2="207.19596" y2="48.80404" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<circle cx="128" cy="128" r="60" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="128" y1="36" x2="128" y2="16" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="62.94618" y1="62.94618" x2="48.80404" y2="48.80404" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="36" y1="128" x2="16" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="62.94618" y1="193.05382" x2="48.80404" y2="207.19596" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="128" y1="220" x2="128" y2="240" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="193.05382" y1="193.05382" x2="207.19596" y2="207.19596" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="220" y1="128" x2="240" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="193.05382" y1="62.94618" x2="207.19596" y2="48.80404" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<circle cx="128" cy="128" r="60" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="36" x2="128" y2="16" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="62.94618" y1="62.94618" x2="48.80404" y2="48.80404" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="36" y1="128" x2="16" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="62.94618" y1="193.05382" x2="48.80404" y2="207.19596" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="220" x2="128" y2="240" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="193.05382" y1="193.05382" x2="207.19596" y2="207.19596" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="220" y1="128" x2="240" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="193.05382" y1="62.94618" x2="207.19596" y2="48.80404" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-sun", PhSun);
export default PhSun;