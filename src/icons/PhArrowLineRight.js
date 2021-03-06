/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhArrowLineRight = {
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
      svg`<line x1="23.99627" y1="128" x2="175.99627" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="103.996 200 175.996 128 103.996 56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="215.99627" y1="208" x2="215.99627" y2="48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<line x1="23.99627" y1="128" x2="183.99627" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="111.996 200 183.996 128 111.996 56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="215.99627" y1="208" x2="215.99627" y2="48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <path d="M190.6499,132.44043c.07373-.11047.1377-.2251.20557-.33838.06592-.11035.13525-.21838.19629-.332.0625-.11682.11523-.23682.17138-.356.05567-.11767.11426-.2334.16456-.35425.04736-.11523.08593-.23291.12792-.34985.04639-.129.09571-.25659.13575-.38867.03564-.11792.06152-.23755.09179-.35657.0337-.13367.07129-.26575.09815-.402.02734-.13769.04346-.27685.06348-.41552.01708-.11963.03955-.23731.05175-.35852q.03736-.38234.03858-.76648l.001-.02222-.001-.02222q-.00073-.38379-.03858-.76648c-.0122-.12121-.03467-.23889-.05175-.35852-.02-.13867-.03614-.27783-.06348-.41552-.02686-.13623-.06445-.26831-.09815-.402-.03027-.119-.05615-.23865-.09179-.35657-.04-.13208-.08936-.25964-.13575-.38867-.042-.11694-.08056-.23462-.12792-.34985-.0503-.12085-.10889-.23658-.16456-.35425-.05615-.11914-.10888-.23914-.17138-.356-.061-.11365-.13037-.22168-.19629-.332-.06787-.11328-.13184-.22791-.20557-.33838-.083-.12427-.17529-.24133-.26513-.3606-.06739-.08935-.1294-.18127-.20069-.26831a7.95171,7.95171,0,0,0-.53418-.59057L117.65332,50.34326a7.99984,7.99984,0,0,0-11.31348,11.31348L164.68262,120H23.99609a8,8,0,1,0,0,16H164.68262l-58.34278,58.34326a7.99984,7.99984,0,1,0,11.31348,11.31348l71.99658-71.99683a7.95171,7.95171,0,0,0,.53418-.59057c.07129-.087.1333-.179.20069-.26831C190.47461,132.68176,190.56689,132.5647,190.6499,132.44043Z"/>
    <path d="M215.99609,40a8.00008,8.00008,0,0,0-8,8V208a8,8,0,0,0,16,0V48A7.99977,7.99977,0,0,0,215.99609,40Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<line x1="23.99627" y1="128" x2="183.99627" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="111.996 200 183.996 128 111.996 56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="215.99627" y1="208" x2="215.99627" y2="48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<line x1="23.99627" y1="128" x2="183.99627" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="111.996 200 183.996 128 111.996 56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="215.99627" y1="208" x2="215.99627" y2="48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="23.99627" y1="128" x2="183.99627" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="111.996 200 183.996 128 111.996 56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="215.99627" y1="208" x2="215.99627" y2="48" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-arrow-line-right", PhArrowLineRight);
export default PhArrowLineRight;
