/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhArrowLineDown = {
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
      svg`<line x1="128" y1="23.99627" x2="128" y2="175.99627" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="56 103.996 128 175.996 200 103.996" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="48" y1="215.99627" x2="208" y2="215.99627" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<line x1="128" y1="23.99627" x2="128" y2="183.99627" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="56 111.996 128 183.996 200 111.996" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="48" y1="215.99627" x2="208" y2="215.99627" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <path d="M122.34082,189.65039q.28125.28125.59033.53369c.08545.07031.17578.13111.26367.19727.12061.09082.23926.18432.36524.26855.10937.073.22265.13623.335.20337.11133.0669.2207.137.33545.19849.11621.062.23584.11474.35449.17065.11816.05591.23389.1145.355.1648.11524.0476.23291.08593.3501.12817.12939.04663.25683.096.38916.136.11767.03564.23682.06152.35547.09155.13379.03369.26611.071.40283.09814.13916.02759.27979.04419.41992.06421.11817.01685.23389.03931.353.051.26269.02588.52588.03979.78955.03979s.52686-.01391.78955-.03979c.11914-.01172.23486-.03418.353-.051.14013-.02.28076-.03662.41992-.06421.13672-.0271.269-.06445.40283-.09814.11865-.03.23779-.05591.35547-.09155.13232-.04.25977-.08936.38916-.136.11719-.04224.23486-.08057.3501-.12817.12109-.0503.23681-.10889.355-.1648.11865-.05591.23828-.10864.35449-.17065.11475-.06153.22412-.13159.33545-.19849.11231-.06714.22559-.13037.335-.20337.126-.08423.24463-.17773.36524-.26855.08789-.06616.17822-.127.26367-.19727.20556-.16846.40332-.34643.59131-.53442l71.99658-71.99683a7.99983,7.99983,0,0,0-11.31348-11.31347L136,164.68262V23.99609a8,8,0,0,0-16,0V164.68262L61.65674,106.33936a7.99983,7.99983,0,0,0-11.31348,11.31347Z"/>
    <path d="M208,207.99609H48a8,8,0,1,0,0,16H208a8,8,0,0,0,0-16Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<line x1="128" y1="23.99627" x2="128" y2="183.99627" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="56 111.996 128 183.996 200 111.996" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="48" y1="215.99627" x2="208" y2="215.99627" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<line x1="128" y1="23.99627" x2="128" y2="183.99627" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="56 111.996 128 183.996 200 111.996" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="48" y1="215.99627" x2="208" y2="215.99627" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="128" y1="23.99627" x2="128" y2="183.99627" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="56 111.996 128 183.996 200 111.996" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="48" y1="215.99627" x2="208" y2="215.99627" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-arrow-line-down", PhArrowLineDown);
export default PhArrowLineDown;
