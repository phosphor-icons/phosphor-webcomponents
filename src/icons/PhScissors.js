/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhScissors = {
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
      svg`<circle cx="60" cy="76" r="28" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="60" cy="180" r="28" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="136" y1="128" x2="83.10669" y2="164.19016" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="232" y1="193.68421" x2="83.10611" y2="91.80944" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="232" y1="62.31579" x2="171.41815" y2="103.76653" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<circle cx="60" cy="76" r="28" opacity="0.2"/>
  <circle cx="60" cy="180" r="28" opacity="0.2"/>
  <circle cx="60" cy="76" r="28" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="60" cy="180" r="28" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="136" y1="128" x2="83.10669" y2="164.19016" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="232" y1="62.31579" x2="164.33455" y2="108.6132" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="232" y1="193.68421" x2="83.10611" y2="91.80944" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M157.73193,113.13086a8.00047,8.00047,0,0,1,2.085-11.12012l67.66553-46.29785A8.00013,8.00013,0,0,1,236.51758,68.918l-67.66553,46.29785a7.99794,7.99794,0,0,1-11.12012-2.085Zm80.87061,85.07129a7.99794,7.99794,0,0,1-11.12012,2.085l-91.4826-62.59351L93.49408,166.77686a36.034,36.034,0,1,1-9.05035-13.19458l37.38867-25.582-37.3891-25.582a35.84637,35.84637,0,1,1,9.0506-13.19458L236.51758,187.082A8.00047,8.00047,0,0,1,238.60254,198.20215ZM80,180a20,20,0,1,0-5.85791,14.1416A19.86692,19.86692,0,0,0,80,180ZM74.14209,90.1416a20,20,0,1,0-28.28418,0A19.86692,19.86692,0,0,0,74.14209,90.1416Z"/>`}
      ${weight === "light" &&
      svg`<circle cx="60" cy="76" r="28" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="60" cy="180" r="28" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="136" y1="128" x2="83.10669" y2="164.19016" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="232" y1="62.31579" x2="164.33455" y2="108.6132" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="232" y1="193.68421" x2="83.10611" y2="91.80944" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<circle cx="60" cy="76" r="28" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="60" cy="180" r="28" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="136" y1="128" x2="83.10669" y2="164.19016" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="232" y1="62.31579" x2="164.33455" y2="108.6132" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="232" y1="193.68421" x2="83.10611" y2="91.80944" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<circle cx="60" cy="76" r="28" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="60" cy="180" r="28" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="136" y1="128" x2="83.10669" y2="164.19016" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="232" y1="62.31579" x2="164.33455" y2="108.6132" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="232" y1="193.68421" x2="83.10611" y2="91.80944" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-scissors", PhScissors);
export default PhScissors;
