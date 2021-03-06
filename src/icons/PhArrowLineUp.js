/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhArrowLineUp = {
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
      svg`<line x1="128" y1="232.00373" x2="128" y2="80.00373" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="56 152.004 128 80.004 200 152.004" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="48" y1="40.00373" x2="208" y2="40.00373" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<line x1="128" y1="232.00373" x2="128" y2="72.00373" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="56 144.004 128 72.004 200 144.004" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="48" y1="40.00373" x2="208" y2="40.00373" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <path d="M133.66016,66.35034c-.188-.188-.38575-.366-.59131-.53442-.08545-.07031-.17578-.13111-.26367-.19727-.12061-.09082-.23926-.18432-.36524-.26855-.10889-.07276-.22168-.13574-.33349-.20239-.11182-.06739-.22168-.1377-.33741-.19971-.11474-.061-.23242-.11279-.34912-.168-.11963-.05689-.23779-.11646-.36133-.16773-.1123-.04638-.22705-.08374-.3413-.125-.13184-.0476-.26221-.09814-.39747-.13891-.11377-.03443-.22851-.05933-.34326-.08838-.13818-.03516-.2749-.07349-.416-.10132-.12989-.02588-.26123-.04077-.39258-.06006-.12695-.01855-.25244-.04248-.38135-.05493-.23193-.02295-.46484-.03271-.69824-.0354-.02979-.00024-.05859-.00439-.08838-.00439s-.05859.00415-.08838.00439c-.2334.00269-.46631.01245-.69824.0354-.12891.01245-.2544.03638-.38135.05493-.13135.01929-.26269.03418-.39258.06006-.14111.02783-.27783.06616-.416.10132-.11475.02905-.22949.054-.34326.08838-.13526.04077-.26563.09131-.39747.13891-.11425.04126-.229.07862-.3413.125-.12354.05127-.2417.11084-.36133.16773-.1167.05518-.23438.10693-.34912.168-.11573.062-.22559.13232-.33741.19971-.11181.06665-.2246.12963-.33349.20239-.126.08423-.24463.17773-.36524.26855-.08789.06616-.17822.127-.26367.19727q-.30834.25267-.59033.53369L50.34326,138.34717a7.99983,7.99983,0,0,0,11.31348,11.31347L120,91.31738V232.00391a8,8,0,1,0,16,0V91.31738l58.34326,58.34326a7.99983,7.99983,0,1,0,11.31348-11.31347Z"/>
    <path d="M208,32.00391H48a8,8,0,0,0,0,16H208a8,8,0,0,0,0-16Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<line x1="128" y1="232.00373" x2="128" y2="72.00373" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="56 144.004 128 72.004 200 144.004" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="48" y1="40.00373" x2="208" y2="40.00373" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<line x1="128" y1="232.00373" x2="128" y2="72.00373" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="56 144.004 128 72.004 200 144.004" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="48" y1="40.00373" x2="208" y2="40.00373" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="128" y1="232.00373" x2="128" y2="72.00373" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="56 144.004 128 72.004 200 144.004" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="48" y1="40.00373" x2="208" y2="40.00373" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-arrow-line-up", PhArrowLineUp);
export default PhArrowLineUp;
