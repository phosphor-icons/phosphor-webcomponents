/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhMoonStars = {
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
      svg`<line x1="220" y1="108" x2="220" y2="60" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="244" y1="84" x2="196" y2="84" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="164" y1="20" x2="164" y2="52" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="180" y1="36" x2="148" y2="36" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M221.567,149.56784A96.0849,96.0849,0,0,1,106.43219,34.43294l-.00127-.00029A96.01213,96.01213,0,1,0,221.56729,149.56932Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<line x1="216" y1="112" x2="216" y2="64" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="240" y1="88" x2="192" y2="88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="168" y1="24" x2="168" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="184" y1="40" x2="152" y2="40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M221.567,149.56784A96.0849,96.0849,0,0,1,106.43219,34.43294l-.00127-.00029A96.01213,96.01213,0,1,0,221.56729,149.56932Z" opacity="0.2"/>
  <path d="M221.567,149.56784A96.0849,96.0849,0,0,1,106.43219,34.43294l-.00127-.00029A96.01213,96.01213,0,1,0,221.56729,149.56932Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M248,88a8.00008,8.00008,0,0,1-8,8H224v16a8,8,0,0,1-16,0V96H192a8,8,0,0,1,0-16h16V64a8,8,0,0,1,16,0V80h16A8.00008,8.00008,0,0,1,248,88ZM152,48h8v8a8,8,0,0,0,16,0V48h8a8,8,0,0,0,0-16h-8V24a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16Zm67.77734,93.77051A88.08879,88.08879,0,0,1,114.22852,36.22119a7.99975,7.99975,0,0,0-9.58741-9.58545A104.00615,104.00615,0,1,0,229.36426,151.35791a8.00049,8.00049,0,0,0-9.58692-9.5874Z"/>`}
      ${weight === "light" &&
      svg`<line x1="216" y1="112" x2="216" y2="64" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="240" y1="88" x2="192" y2="88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="168" y1="24" x2="168" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="184" y1="40" x2="152" y2="40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M221.567,149.56784A96.0849,96.0849,0,0,1,106.43219,34.43294l-.00127-.00029A96.01213,96.01213,0,1,0,221.56729,149.56932Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<line x1="216" y1="112" x2="216" y2="64" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="240" y1="88" x2="192" y2="88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="168" y1="24" x2="168" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="184" y1="40" x2="152" y2="40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M221.567,149.56784A96.0849,96.0849,0,0,1,106.43219,34.43294l-.00127-.00029A96.01213,96.01213,0,1,0,221.56729,149.56932Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="216" y1="112" x2="216" y2="64" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="240" y1="88" x2="192" y2="88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="168" y1="24" x2="168" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="184" y1="40" x2="152" y2="40" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M221.567,149.56784A96.0849,96.0849,0,0,1,106.43219,34.43294l-.00127-.00029A96.01213,96.01213,0,1,0,221.56729,149.56932Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-moon-stars", PhMoonStars);
export default PhMoonStars;
