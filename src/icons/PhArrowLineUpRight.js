/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhArrowLineUpRight = {
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
      svg`<line x1="80" y1="168" x2="192" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="192 152 192 56 96 56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="48" y1="216" x2="208" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<line x1="80" y1="168" x2="192" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="192 152 192 56 96 56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="48" y1="216" x2="208" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<g>
    <path d="M80,176a7.977,7.977,0,0,0,5.65723-2.34326L184,75.31372V152a8,8,0,0,0,16,0V56c0-.26349-.01416-.52686-.04-.78931-.01123-.11853-.03369-.23358-.05029-.35052-.02051-.14136-.03711-.28314-.06494-.42352-.02637-.13349-.063-.26294-.09571-.39393-.03076-.12194-.05761-.24462-.09423-.36535-.03907-.129-.08741-.25354-.13282-.37976-.043-.11994-.08252-.2406-.13135-.35877-.04882-.11792-.10644-.231-.16064-.346-.05713-.12182-.11133-.24462-.17529-.364-.0586-.11011-.126-.2146-.18994-.32153-.06983-.11688-.13575-.23517-.21192-.34912-.07959-.11878-.168-.23053-.25342-.34473-.07129-.09466-.13671-.19189-.21289-.28406a8.04368,8.04368,0,0,0-1.1167-1.11694c-.08837-.07233-.18115-.135-.27148-.203-.11816-.08893-.23438-.18048-.35791-.26282-.10986-.07367-.22412-.13739-.33691-.205-.11133-.06653-.21973-.13611-.33448-.19732-.11474-.06147-.2334-.11353-.35058-.169-.11914-.05658-.23682-.116-.35938-.16675-.11279-.04663-.228-.0841-.34228-.12536-.13184-.04767-.26221-.098-.397-.1388-.11377-.0343-.229-.05914-.34326-.08826-.13818-.03515-.2749-.0736-.416-.1015-.12989-.02575-.26172-.04065-.39258-.05993-.12695-.01868-.25244-.04236-.38135-.055-.23193-.02282-.46484-.03271-.69824-.03527C192.05859,48.00415,192.02979,48,192,48H96a8,8,0,0,0,0,16h76.68652L74.34277,162.34326A8,8,0,0,0,80,176Z"/>
    <path d="M208,208H48a8,8,0,0,0,0,16H208a8,8,0,0,0,0-16Z"/>
  </g>`}
      ${weight === "light" &&
      svg`<line x1="80" y1="168" x2="192" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="192 152 192 56 96 56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="48" y1="216" x2="208" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<line x1="80" y1="168" x2="192" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="192 152 192 56 96 56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="48" y1="216" x2="208" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<line x1="80" y1="168" x2="192" y2="56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="192 152 192 56 96 56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="48" y1="216" x2="208" y2="216" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-arrow-line-up-right", PhArrowLineUpRight);
export default PhArrowLineUpRight;
