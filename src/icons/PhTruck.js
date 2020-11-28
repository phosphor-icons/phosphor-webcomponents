/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhTruck = {
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
      ${weight === "bold" && svg`<path d="M240,120H176V80h42.58374a8,8,0,0,1,7.42781,5.02887Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="16" y1="144" x2="176" y2="144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="180" cy="192" r="24" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="76" cy="192" r="24" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="156" y1="192" x2="100" y2="192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M52,192H24a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H176V168.33192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M176,168.33192V120h64v64a8,8,0,0,1-8,8H204" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<path d="M176,144H16v40a8,8,0,0,0,8,8H44a24,24,0,0,1,48,0h72a23.99048,23.99048,0,0,1,11.99813-20.78815Z" opacity="0.2"/>
  <path d="M212,192a24.00631,24.00631,0,0,0-36.00187-20.78815L176,120h64v64a8,8,0,0,1-8,8H212" opacity="0.2"/>
  <path d="M240,120H176V80h42.58374a8,8,0,0,1,7.42781,5.02887Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="16" y1="144" x2="176" y2="144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="188" cy="192" r="24" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>
  <circle cx="68" cy="192" r="24" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>
  <line x1="164" y1="192" x2="92" y2="192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M44,192H24a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H176V171.21508" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M176,171.21508V120h64v64a8,8,0,0,1-8,8H212" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M247.99682,119.94092c-.00073-.084-.00952-.168-.01269-.252-.00855-.22216-.02271-.44287-.04907-.66015-.01148-.09424-.02808-.188-.04322-.28223-.03393-.21631-.07568-.4292-.12695-.63965-.02051-.08447-.0415-.16845-.06494-.25293q-.10035-.36108-.23364-.708c-.0149-.03858-.02344-.07862-.03882-.11719l-.04956-.12354-.01075-.02734-13.928-34.82031A15.92368,15.92368,0,0,0,218.58374,72h-34.584V64a8.00039,8.00039,0,0,0-8-8h-152a16.01833,16.01833,0,0,0-16,16V184a16.01833,16.01833,0,0,0,16,16h13.0127a32.00444,32.00444,0,0,0,61.97461,0h58.02539a32.00444,32.00444,0,0,0,61.97461,0h13.01269a16.01833,16.01833,0,0,0,16-16V120C247.99975,119.98,247.99682,119.96094,247.99682,119.94092ZM183.99975,88h34.584l9.59961,24h-44.1836Zm-160-16h144v64h-144Zm44,136a16,16,0,1,1,16-16A16.01833,16.01833,0,0,1,67.99975,208Zm120,0a16,16,0,1,1,16-16A16.01833,16.01833,0,0,1,187.99975,208Z"/>`}
      ${weight === "light" && svg`<path d="M240,120H176V80h42.58374a8,8,0,0,1,7.42781,5.02887Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="16" y1="144" x2="176" y2="144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="188" cy="192" r="24" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="68" cy="192" r="24" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="164" y1="192" x2="92" y2="192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M44,192H24a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H176V171.21508" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M176,171.21508V120h64v64a8,8,0,0,1-8,8H212" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<path d="M240,120H176V80h42.58374a8,8,0,0,1,7.42781,5.02887Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="16" y1="144" x2="176" y2="144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="188" cy="192" r="24" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="68" cy="192" r="24" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="164" y1="192" x2="92" y2="192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M44,192H24a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H176V171.21508" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M176,171.21508V120h64v64a8,8,0,0,1-8,8H212" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<path d="M240,120H176V80h42.58374a8,8,0,0,1,7.42781,5.02887Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="16" y1="144" x2="176" y2="144" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="188" cy="192" r="24" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>
  <circle cx="68" cy="192" r="24" fill="none" stroke="${color}" stroke-miterlimit="10" stroke-width="16"/>
  <line x1="164" y1="192" x2="92" y2="192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M44,192H24a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H176V171.21508" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M176,171.21508V120h64v64a8,8,0,0,1-8,8H212" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-truck", PhTruck);
export default PhTruck;