/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhArrowElbowDownLeft = {
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
      ${weight === "bold" && svg`<polyline points="96 128 48 176 96 224" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="192 32 192 176 48 176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<polyline points="96 128 48 176 96 224" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="192 32 192 176 48 176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M192,24a8.00008,8.00008,0,0,0-8,8V168H67.31348l34.34375-34.34326a8.00018,8.00018,0,1,0-11.31446-11.31348l-48,48c-.0205.02051-.03759.04321-.05761.064-.16358.167-.32178.33935-.47046.52026-.08277.10059-.15479.20654-.23194.31006-.07861.10571-.1604.20874-.23388.31836-.08081.1206-.15113.24585-.22486.36987-.05932.1001-.12231.19751-.17749.30029-.06738.126-.12475.25538-.18481.384-.05078.1084-.10523.2146-.15137.32568-.05151.12476-.09326.25195-.13843.37842-.04272.11987-.08911.238-.12622.36059-.03857.12769-.06714.25757-.09936.38672-.03076.124-.06568.2461-.09082.37256-.03.15088-.04834.30322-.06958.45532-.01465.10645-.0354.21094-.0459.31861a8.02276,8.02276,0,0,0,0,1.584c.0105.10767.03125.21216.0459.31861.02124.1521.03955.30444.06958.45532.02514.12646.06006.24853.09082.37256.03222.12915.06079.259.09936.38672.03711.12255.0835.24072.12622.36059.04517.12647.08692.25366.13843.37842.04614.11108.10059.21728.15137.32568.06006.12866.11743.25806.18481.384.05518.10278.11817.20019.17749.30029.07373.124.14405.24927.22486.36987.07348.10962.15527.21265.23388.31836.07715.10352.14917.20947.23194.31006.14868.18091.30688.35327.47046.52026.02.02076.03711.04346.05761.064l48,48a8.00018,8.00018,0,1,0,11.31446-11.31348L67.31348,184H192a8.00008,8.00008,0,0,0,8-8V32A8.00008,8.00008,0,0,0,192,24Z"/>`}
      ${weight === "light" && svg`<polyline points="96 128 48 176 96 224" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="192 32 192 176 48 176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<polyline points="96 128 48 176 96 224" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="192 32 192 176 48 176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<polyline points="96 128 48 176 96 224" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="192 32 192 176 48 176" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-arrow-elbow-down-left", PhArrowElbowDownLeft);
export default PhArrowElbowDownLeft;