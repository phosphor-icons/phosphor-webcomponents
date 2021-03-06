/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhFolderNotchPlus = {
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
      svg`<path d="M128,80h88a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H40a8.02352,8.02352,0,0,1-8-8V104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M93.33333,104H32V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6L128,80,98.13333,102.4A8,8,0,0,1,93.33333,104Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="103.99707" y1="148" x2="151.99707" y2="148" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="127.99707" y1="124" x2="127.99707" y2="172" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M93.33333,104H32V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6L128,80,98.13333,102.4A8,8,0,0,1,93.33333,104Z" opacity="0.2"/>
  <path d="M128,80h88a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H40a8.02352,8.02352,0,0,1-8-8V104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M93.33333,104H32V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6L128,80,98.13333,102.4A8,8,0,0,1,93.33333,104Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="103.99121" y1="148" x2="151.99121" y2="148" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="127.99121" y1="124" x2="127.99121" y2="172" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M215.99512,71.99805H130.65625L102.917,51.19336a16.07363,16.07363,0,0,0-9.57812-3.19531H39.99512a16.01581,16.01581,0,0,0-16,16v136a16.01582,16.01582,0,0,0,16,16h176a16.01583,16.01583,0,0,0,16-16v-112A16.01582,16.01582,0,0,0,215.99512,71.99805Zm-176,24v-32H93.33887l21.32617,15.999-21.3418,16.001ZM151.99707,156h-16v16a8,8,0,0,1-16,0V156h-16a8,8,0,0,1,0-16h16V124a8,8,0,0,1,16,0v16h16a8,8,0,0,1,0,16Z"/>`}
      ${weight === "light" &&
      svg`<path d="M128,80h88a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H40a8.02352,8.02352,0,0,1-8-8V104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M93.33333,104H32V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6L128,80,98.13333,102.4A8,8,0,0,1,93.33333,104Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="103.99707" y1="148" x2="151.99707" y2="148" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="127.99707" y1="124" x2="127.99707" y2="172" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M128,80h88a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H40a8.02352,8.02352,0,0,1-8-8V104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M93.33333,104H32V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6L128,80,98.13333,102.4A8,8,0,0,1,93.33333,104Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="103.99707" y1="148" x2="151.99707" y2="148" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="127.99707" y1="124" x2="127.99707" y2="172" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M128,80h88a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H40a8.02352,8.02352,0,0,1-8-8V104" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M93.33333,104H32V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6L128,80,98.13333,102.4A8,8,0,0,1,93.33333,104Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="103.99707" y1="148" x2="151.99707" y2="148" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="127.99707" y1="124" x2="127.99707" y2="172" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-folder-notch-plus", PhFolderNotchPlus);
export default PhFolderNotchPlus;
