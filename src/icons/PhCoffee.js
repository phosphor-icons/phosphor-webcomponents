/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhCoffee = {
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
      svg`<line x1="84" y1="24" x2="84" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="120" y1="24" x2="120" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="156" y1="24" x2="156" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="32" y1="216" x2="208" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M83.29651,216.0038A88.01441,88.01441,0,0,1,32,136V88H208v48a88.0144,88.0144,0,0,1-51.29712,80.00408" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M208,88h4a32,32,0,0,1,32,32V128a32,32,0,0,1-32,32h-7.37846" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M83.29651,216.0038A88.01441,88.01441,0,0,1,32,136V88H208v48a88.0144,88.0144,0,0,1-51.29712,80.00408Z" opacity="0.2"/>
  <line x1="88" y1="24" x2="88" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="120" y1="24" x2="120" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="152" y1="24" x2="152" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="32" y1="216" x2="208" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M83.29651,216.0038A88.01441,88.01441,0,0,1,32,136V88H208v48a88.0144,88.0144,0,0,1-51.29712,80.00408" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M208,88h0a32,32,0,0,1,32,32V128a32,32,0,0,1-32,32h-3.37846" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm40,8a8.00008,8.00008,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8.00008,8.00008,0,0,0,120,64Zm32,0a8.00008,8.00008,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8.00008,8.00008,0,0,0,152,64Zm96,56v8a40.04613,40.04613,0,0,1-37.50781,39.91455A96.65441,96.65441,0,0,1,183.46387,208H208a8,8,0,0,1,0,16H156.8208c-.0376.00049-.07568.00586-.11279.00586-.02832,0-.05615-.00537-.08447-.00586H83.15869c-.04541-.001-.09033.00146-.13574,0H32a8,8,0,0,1,0-16H56.53613A96.31957,96.31957,0,0,1,24,136V88a8.00008,8.00008,0,0,1,8-8H208A40.04521,40.04521,0,0,1,248,120Zm-16,0a24.03806,24.03806,0,0,0-16-22.624V136a95.32337,95.32337,0,0,1-1.20312,15.01367A24.039,24.039,0,0,0,232,128Z"/>`}
      ${weight === "light" &&
      svg`<line x1="88" y1="24" x2="88" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="120" y1="24" x2="120" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="152" y1="24" x2="152" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="32" y1="216" x2="208" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M83.29651,216.0038A88.01441,88.01441,0,0,1,32,136V88H208v48a88.0144,88.0144,0,0,1-51.29712,80.00408" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M208,88h0a32,32,0,0,1,32,32V128a32,32,0,0,1-32,32h-3.37846" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<line x1="88" y1="24" x2="88" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="120" y1="24" x2="120" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="152" y1="24" x2="152" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="32" y1="216" x2="208" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M83.29651,216.0038A88.01441,88.01441,0,0,1,32,136V88H208v48a88.0144,88.0144,0,0,1-51.29712,80.00408" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M208,88h0a32,32,0,0,1,32,32V128a32,32,0,0,1-32,32h-3.37846" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="88" y1="24" x2="88" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="120" y1="24" x2="120" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="152" y1="24" x2="152" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="32" y1="216" x2="208" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M83.29651,216.0038A88.01441,88.01441,0,0,1,32,136V88H208v48a88.0144,88.0144,0,0,1-51.29712,80.00408" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M208,88h0a32,32,0,0,1,32,32V128a32,32,0,0,1-32,32h-3.37846" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-coffee", PhCoffee);
export default PhCoffee;
