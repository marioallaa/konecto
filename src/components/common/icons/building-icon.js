import * as React from 'react'

const SvgBuildingIcon = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 65 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={0.667}
      width={64}
      height={64}
      rx={12}
      fill="url(#building-icon_svg__a)"
    />
    <path
      d="M39.667 41V25a2 2 0 0 0-2-2h-10a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0h-2m2 0h5m-1-14h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m-4 0h4"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="building-icon_svg__a"
        x1={-6.181}
        y1={-6.092}
        x2={42.697}
        y2={88.813}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.089} stopColor="#1B0B7C" />
        <stop offset={0.463} stopColor="#563CC9" />
        <stop offset={1} stopColor="#49E9FB" />
      </linearGradient>
    </defs>
  </svg>
)

export default SvgBuildingIcon
