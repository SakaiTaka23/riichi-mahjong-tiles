import type { SVGProps } from "react";
const SvgBlackFrontR = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" {...props}>
    <defs>
      <mask id="Black-Front-r_svg__b" maskUnits="userSpaceOnUse">
        <rect
          width={300.059}
          height={400.778}
          y={652.284}
          ry={40}
          style={{
            opacity: 1,
            fill: "#ff3737",
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none",
            strokeWidth: 10,
            strokeLinecap: "butt",
            strokeLinejoin: "round",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 1,
          }}
        />
      </mask>
      <mask id="Black-Front-r_svg__c" maskUnits="userSpaceOnUse">
        <rect
          width={300.059}
          height={400.778}
          x={-451.938}
          y={-1325.603}
          ry={40}
          style={{
            opacity: 1,
            fill: "#ff3737",
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none",
            strokeWidth: 10,
            strokeLinecap: "butt",
            strokeLinejoin: "round",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 1,
          }}
          transform="scale(-1)"
        />
      </mask>
      <filter
        id="Black-Front-r_svg__a"
        width={1.05}
        height={1.109}
        x={-0.025}
        y={-0.054}
      >
        <feGaussianBlur result="blur" stdDeviation="2.51 2.51" />
      </filter>
    </defs>
    <g transform="rotate(90 526.181 526.181)">
      <rect
        width={300.059}
        height={400.778}
        y={652.284}
        ry={40}
        style={{
          opacity: 1,
          fill: "#1e1e1e",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
          strokeWidth: 10,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M-4.769 775.071c-4.881-33.076-12.077-100.834 3.49-123.007 20.277-26.12 234.78-20.433 264.593 1.846 12.9 8.739-192.964 9.211-216.215 37.835C24.391 719.112.651 818.187-4.769 775.07"
        mask="url(#Black-Front-r_svg__b)"
        style={{
          fill: "#fff",
          fillOpacity: 0.15686275,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          filter: "url(#Black-Front-r_svg__a)",
        }}
      />
      <path
        d="M151.736 1025.018c-3.327-9.314-10.249-68.454 5.318-90.627 20.277-26.12 219.436-16.458 231.555-9.932 11.074 5.317-178.604.06-204.851 34.867-21.594 30-26.501 82.178-32.022 65.692"
        mask="url(#Black-Front-r_svg__c)"
        style={{
          fill: "#000",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          filter: "url(#Black-Front-r_svg__a)",
        }}
        transform="rotate(180 225.969 988.943)"
      />
    </g>
  </svg>
);
export default SvgBlackFrontR;
