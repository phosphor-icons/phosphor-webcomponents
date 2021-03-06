/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhNewspaper = {
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
      svg`<line x1="92" y1="92" x2="196" y2="92" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="92" y1="128" x2="196" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="92" y1="164" x2="196" y2="164" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M32,208H216a20,20,0,0,0,20-20V56a8,8,0,0,0-8-8H60a8,8,0,0,0-8,8V188a20,20,0,0,1-40,0V80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M32,208a16,16,0,0,0,16-16V56a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V192a16,16,0,0,1-16,16Z" opacity="0.2"/>
  <line x1="88" y1="96" x2="192" y2="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="88" y1="128" x2="192" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="88" y1="160" x2="192" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M32,208a16,16,0,0,0,16-16V56a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V192a16,16,0,0,1-16,16Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M32,208a16,16,0,0,1-16-16V80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M224,40H56A16.01833,16.01833,0,0,0,40,56V192a8,8,0,0,1-16,0V80A8,8,0,0,0,8,80V192.10645A24.02715,24.02715,0,0,0,32,216H216a24.0275,24.0275,0,0,0,24-24V56A16.01833,16.01833,0,0,0,224,40ZM192,168H88a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-32H88a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-32H88a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z"/>`}
      ${weight === "light" &&
      svg`<line x1="88" y1="96" x2="192" y2="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="88" y1="128" x2="192" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="88" y1="160" x2="192" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M32,208a16,16,0,0,0,16-16V56a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V192a16,16,0,0,1-16,16Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M32,208a16,16,0,0,1-16-16V80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<line x1="88" y1="96" x2="192" y2="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="88" y1="128" x2="192" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="88" y1="160" x2="192" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M32,208a16,16,0,0,0,16-16V56a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V192a16,16,0,0,1-16,16Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M32,208a16,16,0,0,1-16-16V80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="88" y1="96" x2="192" y2="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="88" y1="128" x2="192" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="88" y1="160" x2="192" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M32,208a16,16,0,0,0,16-16V56a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V192a16,16,0,0,1-16,16Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M32,208a16,16,0,0,1-16-16V80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-newspaper", PhNewspaper);
export default PhNewspaper;
