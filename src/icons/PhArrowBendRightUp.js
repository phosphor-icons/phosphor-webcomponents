/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhArrowBendRightUp = {
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
      svg`<polyline points="104 80 152 32 200 80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M56,224a96,96,0,0,0,96-96V32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" &&
      svg`<polyline points="104 80 152 32 200 80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M56,224a96,96,0,0,0,96-96V32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" &&
      svg`<path d="M205.65723,74.34277l-48-48c-.05347-.05322-.11158-.09863-.166-.1499-.13623-.12891-.27222-.25781-.417-.377-.10449-.08545-.21411-.16065-.32178-.24024-.10229-.07617-.2019-.15527-.3081-.22656-.11817-.0791-.24073-.14795-.36206-.22021-.10352-.06153-.20459-.12647-.311-.1836-.11816-.063-.23975-.1167-.36035-.17334-.1167-.05517-.23169-.11328-.35132-.16308-.11255-.04639-.22754-.084-.3418-.125-.13256-.04834-.26367-.09864-.39917-.13965-.10962-.0332-.22094-.05713-.3313-.08545-.14233-.03613-.2832-.07568-.42846-.10449-.12134-.02393-.24414-.0376-.36621-.05567-.136-.02051-.27027-.04541-.40845-.05908-.2019-.01953-.40454-.02637-.60718-.03076C152.11743,24.00781,152.05981,24,152,24s-.11743.00781-.177.00879c-.20264.00439-.40528.01123-.60718.03076-.13818.01367-.27246.03857-.40845.05908-.12207.01807-.24487.03174-.36621.05567-.14526.02881-.28613.06836-.42846.10449-.11036.02832-.22168.05225-.3313.08545-.1355.041-.26661.09131-.39917.13965-.11426.041-.22925.07861-.3418.125-.11963.0498-.23462.10791-.35132.16308-.1206.05664-.24219.11035-.36035.17334-.10645.05713-.20752.12207-.311.1836-.12133.07226-.24389.14111-.36206.22021-.1062.07129-.20581.15039-.3081.22656-.10767.07959-.21729.15479-.32178.24024-.14477.11914-.28076.248-.417.377-.05444.05127-.11255.09668-.166.1499l-48,48a8.00053,8.00053,0,0,0,11.31446,11.31446L144,51.31348V128a88.09957,88.09957,0,0,1-88,88,8,8,0,0,0,0,16A104.11791,104.11791,0,0,0,160,128V51.31348l34.34277,34.34375a8.00053,8.00053,0,0,0,11.31446-11.31446Z"/>`}
      ${weight === "light" &&
      svg`<polyline points="104 80 152 32 200 80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M56,224a96,96,0,0,0,96-96V32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" &&
      svg`<polyline points="104 80 152 32 200 80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M56,224a96,96,0,0,0,96-96V32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" &&
      svg`<polyline points="104 80 152 32 200 80" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M56,224a96,96,0,0,0,96-96V32" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-arrow-bend-right-up", PhArrowBendRightUp);
export default PhArrowBendRightUp;
