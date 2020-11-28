/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhTelegramLogo = {
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
      ${weight === "bold" && svg`<path d="M88,134.87236l89.91726,79.12718a8,8,0,0,0,13.08288-4.21869L228.61385,45.64829a8,8,0,0,0-10.72308-9.233L33.33393,108.91975a8,8,0,0,0,1.35629,15.29065Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="88" y1="134.87236" x2="224.11223" y2="36.56908" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M132.90708,174.39059l-31.25023,31.25023A8,8,0,0,1,88,199.984v-65.1116" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<g opacity="0.2">
    <path d="M88,134.87236,224.11223,36.56908l.00168-.00367a7.87244,7.87244,0,0,0-6.22314-.15014L33.33393,108.91975a8,8,0,0,0,1.35629,15.29065Z"/>
  </g>
  <path d="M132.90708,174.39059l-31.25023,31.25023A8,8,0,0,1,88,199.984v-65.1116Z" opacity="0.2"/>
  <path d="M88,134.87236l89.91726,79.12718a8,8,0,0,0,13.08288-4.21869L228.61385,45.64829a8,8,0,0,0-10.72308-9.233L33.33393,108.91975a8,8,0,0,0,1.35629,15.29065Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="88" y1="134.87236" x2="224.11223" y2="36.56908" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M132.90708,174.39059l-31.25023,31.25023A8,8,0,0,1,88,199.984v-65.1116" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M231.25586,31.73635a15.9634,15.9634,0,0,0-16.29-2.76758L30.40869,101.47365a15.99988,15.99988,0,0,0,2.7124,30.58106L80,141.43069V199.9844a15.99415,15.99415,0,0,0,27.31348,11.31347L133.25684,185.355l39.376,34.65088a15.86863,15.86863,0,0,0,10.51709,4.00293,16.15674,16.15674,0,0,0,4.96338-.78711,15.86491,15.86491,0,0,0,10.68457-11.65332L236.41162,47.43557A15.96073,15.96073,0,0,0,231.25586,31.73635ZM183.20215,207.99416,100.81006,135.4883l118.64453-85.687Z"/>`}
      ${weight === "light" && svg`<path d="M88,134.87236l89.91726,79.12718a8,8,0,0,0,13.08288-4.21869L228.61385,45.64829a8,8,0,0,0-10.72308-9.233L33.33393,108.91975a8,8,0,0,0,1.35629,15.29065Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="88" y1="134.87236" x2="224.11223" y2="36.56908" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M132.90708,174.39059l-31.25023,31.25023A8,8,0,0,1,88,199.984v-65.1116" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<path d="M88,134.87236l89.91726,79.12718a8,8,0,0,0,13.08288-4.21869L228.61385,45.64829a8,8,0,0,0-10.72308-9.233L33.33393,108.91975a8,8,0,0,0,1.35629,15.29065Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="88" y1="134.87236" x2="224.11223" y2="36.56908" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M132.90708,174.39059l-31.25023,31.25023A8,8,0,0,1,88,199.984v-65.1116" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<path d="M88,134.87236l89.91726,79.12718a8,8,0,0,0,13.08288-4.21869L228.61385,45.64829a8,8,0,0,0-10.72308-9.233L33.33393,108.91975a8,8,0,0,0,1.35629,15.29065Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="88" y1="134.87236" x2="224.11223" y2="36.56908" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M132.90708,174.39059l-31.25023,31.25023A8,8,0,0,1,88,199.984v-65.1116" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-telegram-logo", PhTelegramLogo);
export default PhTelegramLogo;