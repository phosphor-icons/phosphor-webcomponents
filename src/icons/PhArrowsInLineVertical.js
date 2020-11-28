/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhArrowsInLineVertical = {
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
      ${weight === "bold" && svg`<line x1="216" y1="128" x2="40" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="128" y1="12" x2="128" y2="88" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="160 56 128 88 96 56" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="128" y1="244" x2="128" y2="168" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="96 200 128 168 160 200" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<line x1="216" y1="128" x2="40" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="16" x2="128" y2="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="160 64 128 96 96 64" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="240" x2="128" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="96 192 128 160 160 192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M224,128a8.00039,8.00039,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8.00039,8.00039,0,0,1,224,128ZM122.34277,101.65723c.0542.0542.11377.10034.16895.15283.13525.12744.27.25561.41406.37353.10645.08765.21826.16431.32813.24561.10009.074.19726.15185.30078.22119.12207.08154.248.15259.37353.22681.09912.05884.19629.12134.29834.17627.124.0664.25147.1228.37842.18237.11035.05176.21875.10693.332.154.1211.05005.24463.09058.36768.13452.12353.04444.2456.0918.37207.13013.12158.03687.24512.064.36816.09473.13037.033.25879.06933.3916.0957.14063.02783.28321.04443.42481.0647.1167.0166.231.03882.34912.05029.26221.02588.52588.04.78955.04s.52734-.01416.78955-.04c.11816-.01147.23242-.03369.34912-.05029.1416-.02027.28418-.03687.42481-.0647.13281-.02637.26123-.06274.3916-.0957.123-.03076.24658-.05786.36816-.09473.12647-.03833.24854-.08569.37207-.13013.12305-.04394.24658-.08447.36768-.13452.11328-.04712.22168-.10229.332-.154.127-.05957.25439-.116.37842-.18237.10205-.05493.19922-.11743.29834-.17627.12549-.07422.25146-.14527.37353-.22681.10352-.06934.20069-.14722.30078-.22119.10987-.0813.22168-.158.32813-.24561.144-.11792.27881-.24609.41406-.37353.05518-.05249.11475-.09863.16895-.15283l32-32a8.00053,8.00053,0,0,0-11.31446-11.31446L136,76.68628V16a8,8,0,0,0-16,0V76.68628L101.65723,58.34277A8.00053,8.00053,0,0,0,90.34277,69.65723Zm11.31446,52.68554c-.05323-.05322-.11133-.09863-.166-.1499-.13623-.12891-.27246-.25781-.417-.37695-.10449-.0857-.21436-.16065-.32178-.24024-.10254-.07617-.20166-.15551-.3081-.22656-.11817-.0791-.24073-.148-.36231-.22-.10351-.06177-.2041-.12671-.31055-.18359-.11865-.06324-.24023-.117-.36084-.17383-.11669-.05518-.23144-.11328-.35107-.16284-.1123-.04663-.22754-.084-.3418-.12525-.13281-.04785-.26367-.09839-.39941-.1394-.10938-.0332-.2207-.05713-.33106-.08521-.14257-.03637-.2832-.07592-.42822-.10473-.12158-.02393-.24414-.0376-.3667-.05567-.13574-.02051-.27-.04565-.4082-.05908-.20215-.01977-.40479-.02612-.60742-.03076C128.11768,152.00757,128.05957,152,128,152s-.11768.00757-.17676.00879c-.20263.00464-.40527.011-.60742.03076-.13818.01343-.27246.03857-.4082.05908-.12256.01807-.24512.03174-.3667.05567-.145.02881-.28565.06836-.42822.10473-.11036.02808-.22168.052-.33106.08521-.13574.041-.2666.09155-.39941.1394-.11426.04126-.2295.07862-.3418.12525-.11963.04956-.23438.10766-.35107.16284-.12061.05688-.24219.11059-.36084.17383-.10645.05688-.207.12182-.31055.18359-.12158.072-.24414.14087-.36231.22-.10644.07105-.20556.15039-.3081.22656-.10742.07959-.21729.15454-.32178.24024-.14453.11914-.28076.248-.417.37695-.05469.05127-.11279.09668-.166.1499l-32,32a8.00053,8.00053,0,0,0,11.31446,11.31446L120,179.31372V240a8,8,0,0,0,16,0V179.31372l18.34277,18.34351a8.00053,8.00053,0,0,0,11.31446-11.31446Z"/>`}
      ${weight === "light" && svg`<line x1="216" y1="128" x2="40" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="128" y1="16" x2="128" y2="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="160 64 128 96 96 64" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="128" y1="240" x2="128" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="96 192 128 160 160 192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<line x1="216" y1="128" x2="40" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="128" y1="16" x2="128" y2="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="160 64 128 96 96 64" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="128" y1="240" x2="128" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="96 192 128 160 160 192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<line x1="216" y1="128" x2="40" y2="128" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="16" x2="128" y2="96" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="160 64 128 96 96 64" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="128" y1="240" x2="128" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="96 192 128 160 160 192" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-arrows-in-line-vertical", PhArrowsInLineVertical);
export default PhArrowsInLineVertical;