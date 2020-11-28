/* GENERATED FILE */
import { html, svg, define } from "hybrids";

const PhSunHorizon = {
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
      ${weight === "bold" && svg`<line x1="92.79312" y1="59.00308" x2="85.13946" y2="40.52549" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="43.00308" y1="108.79312" x2="24.52549" y2="101.13946" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="212.99692" y1="108.79312" x2="231.47451" y2="101.13946" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="163.20688" y1="59.00308" x2="170.86054" y2="40.52549" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="240" y1="160" x2="16" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="208" y1="200" x2="48" y2="200" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M77.3915,160.00018a52,52,0,1,1,101.217.00018" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`}
      ${weight === "duotone" && svg`<path d="M70.157,160.00035a60,60,0,1,1,115.686-.00008Z" opacity="0.2"/>
  <line x1="92.79312" y1="59.00308" x2="85.13946" y2="40.52549" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="43.00308" y1="108.79312" x2="24.52549" y2="101.13946" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="212.99692" y1="108.79312" x2="231.47451" y2="101.13946" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="163.20688" y1="59.00308" x2="170.86054" y2="40.52549" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="240" y1="160" x2="16" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="208" y1="200" x2="48" y2="200" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M70.157,160.00035a60,60,0,1,1,115.686-.00008" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
      ${weight === "fill" && svg`<path d="M77.74854,43.58691a8.00009,8.00009,0,0,1,14.78222-6.123l7.65332,18.47754a8.00009,8.00009,0,1,1-14.78222,6.123ZM21.46387,108.53027l18.47754,7.65332a7.99964,7.99964,0,1,0,6.123-14.78125L27.58691,93.749a7.99964,7.99964,0,1,0-6.123,14.78125ZM213,116.79492a7.97082,7.97082,0,0,0,3.05859-.61133l18.47754-7.65332a7.99964,7.99964,0,1,0-6.123-14.78125l-18.47754,7.65332A8.001,8.001,0,0,0,213,116.79492ZM160.14551,66.39355a7.99266,7.99266,0,0,0,10.45263-4.3291l7.65332-18.47754a8.00009,8.00009,0,0,0-14.78222-6.123l-7.65332,18.47754A7.99929,7.99929,0,0,0,160.14551,66.39355ZM240,152H195.52319a68,68,0,1,0-135.04638,0H16a8,8,0,0,0,0,16H185.81812l.02905.00195L185.87085,168H240a8,8,0,0,0,0-16Zm-32,40H48a8,8,0,0,0,0,16H208a8,8,0,0,0,0-16Z"/>`}
      ${weight === "light" && svg`<line x1="92.79312" y1="59.00308" x2="85.13946" y2="40.52549" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="43.00308" y1="108.79312" x2="24.52549" y2="101.13946" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="212.99692" y1="108.79312" x2="231.47451" y2="101.13946" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="163.20688" y1="59.00308" x2="170.86054" y2="40.52549" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="240" y1="160" x2="16" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="208" y1="200" x2="48" y2="200" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M70.157,160.00035a60,60,0,1,1,115.686-.00008" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`}
      ${weight === "thin" && svg`<line x1="92.79312" y1="59.00308" x2="85.13946" y2="40.52549" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="43.00308" y1="108.79312" x2="24.52549" y2="101.13946" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="212.99692" y1="108.79312" x2="231.47451" y2="101.13946" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="163.20688" y1="59.00308" x2="170.86054" y2="40.52549" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="240" y1="160" x2="16" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="208" y1="200" x2="48" y2="200" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M70.157,160.00035a60,60,0,1,1,115.686-.00008" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`}
      ${weight === "regular" && svg`<line x1="92.79312" y1="59.00308" x2="85.13946" y2="40.52549" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="43.00308" y1="108.79312" x2="24.52549" y2="101.13946" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="212.99692" y1="108.79312" x2="231.47451" y2="101.13946" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="163.20688" y1="59.00308" x2="170.86054" y2="40.52549" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="240" y1="160" x2="16" y2="160" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="208" y1="200" x2="48" y2="200" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M70.157,160.00035a60,60,0,1,1,115.686-.00008" fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`}
    </svg>
  `,
};

define("ph-sun-horizon", PhSunHorizon);
export default PhSunHorizon;