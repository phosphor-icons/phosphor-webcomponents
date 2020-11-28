/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhCar = {
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
      ${weight === "bold" && svg`<line x1="16" y1="120" x2="240" y2="120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M224,176v32a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M72,176v32a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M224,120,194.11151,52.75089A8,8,0,0,0,186.801,48H69.199a8,8,0,0,0-7.31049,4.75089L32,120v56H224Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<path d="M224,184v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V184Z" opacity="0.2"/>
  <path d="M72,184v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V184Z" opacity="0.2"/>
  <path d="M224,120,194.11151,52.75089A8,8,0,0,0,186.801,48H69.199a8,8,0,0,0-7.31049,4.75089L32,120Z" opacity="0.2"/>
  <line x1="16" y1="120" x2="240" y2="120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M224,184v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V184" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M72,184v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V184" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="64" y1="152" x2="80" y2="152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="176" y1="152" x2="192" y2="152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M224,120,194.11151,52.75089A8,8,0,0,0,186.801,48H69.199a8,8,0,0,0-7.31049,4.75089L32,120v64H224Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M240,112H229.199L201.42188,49.501A16.01649,16.01649,0,0,0,186.80078,40H69.19922a16.0158,16.0158,0,0,0-14.6211,9.502L26.801,112H16a8,8,0,0,0,0,16h8v80a16.01833,16.01833,0,0,0,16,16H64a16.01833,16.01833,0,0,0,16-16V192h96v16a16.01833,16.01833,0,0,0,16,16h24a16.01833,16.01833,0,0,0,16-16V128h8a8,8,0,0,0,0-16ZM64,208H40V192H64Zm16-48H64a8,8,0,0,1,0-16H80a8,8,0,0,1,0,16Zm96,0a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm40,48H192V192h24Z"/>`}
      ${weight === "light" && svg`<line x1="16" y1="120" x2="240" y2="120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M224,184v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V184" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M72,184v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V184" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="64" y1="152" x2="80" y2="152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="176" y1="152" x2="192" y2="152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M224,120,194.11151,52.75089A8,8,0,0,0,186.801,48H69.199a8,8,0,0,0-7.31049,4.75089L32,120v64H224Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<line x1="16" y1="120" x2="240" y2="120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M224,184v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V184" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M72,184v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V184" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="64" y1="152" x2="80" y2="152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="176" y1="152" x2="192" y2="152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M224,120,194.11151,52.75089A8,8,0,0,0,186.801,48H69.199a8,8,0,0,0-7.31049,4.75089L32,120v64H224Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<line x1="16" y1="120" x2="240" y2="120" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M224,184v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V184" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M72,184v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V184" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="64" y1="152" x2="80" y2="152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="176" y1="152" x2="192" y2="152" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M224,120,194.11151,52.75089A8,8,0,0,0,186.801,48H69.199a8,8,0,0,0-7.31049,4.75089L32,120v64H224Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-car", PhCar);
export default PhCar;