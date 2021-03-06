/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhHourglassSimple = {
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
      svg`<path d="M59.31371,40H196.68629a8,8,0,0,1,5.65686,13.65685L53.65685,202.34315A8,8,0,0,0,59.31371,216H196.68629a8,8,0,0,0,5.65686-13.65685L53.65685,53.65685A8,8,0,0,1,59.31371,40Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<path d="M59.31371,40H196.68629a8,8,0,0,1,5.65686,13.65685L53.65685,202.34315A8,8,0,0,0,59.31371,216H196.68629a8,8,0,0,0,5.65686-13.65685L53.65685,53.65685A8,8,0,0,1,59.31371,40Z" opacity="0.2"/>
  <path d="M59.31371,40H196.68629a8,8,0,0,1,5.65686,13.65685L53.65685,202.34315A8,8,0,0,0,59.31371,216H196.68629a8,8,0,0,0,5.65686-13.65685L53.65685,53.65685A8,8,0,0,1,59.31371,40Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M139.31543,127.99854,208,59.31348A15.9999,15.9999,0,0,0,196.68652,32H59.31348A15.9999,15.9999,0,0,0,48,59.31348l68.68457,68.688L48,196.68652A15.9999,15.9999,0,0,0,59.31348,224h137.373A15.9999,15.9999,0,0,0,208,196.68652Z"/>`}
      ${weight === "light" &&
      svg`<path d="M59.31371,40H196.68629a8,8,0,0,1,5.65686,13.65685L53.65685,202.34315A8,8,0,0,0,59.31371,216H196.68629a8,8,0,0,0,5.65686-13.65685L53.65685,53.65685A8,8,0,0,1,59.31371,40Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<path d="M59.31371,40H196.68629a8,8,0,0,1,5.65686,13.65685L53.65685,202.34315A8,8,0,0,0,59.31371,216H196.68629a8,8,0,0,0,5.65686-13.65685L53.65685,53.65685A8,8,0,0,1,59.31371,40Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<path d="M59.31371,40H196.68629a8,8,0,0,1,5.65686,13.65685L53.65685,202.34315A8,8,0,0,0,59.31371,216H196.68629a8,8,0,0,0,5.65686-13.65685L53.65685,53.65685A8,8,0,0,1,59.31371,40Z" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-hourglass-simple", PhHourglassSimple);
export default PhHourglassSimple;
