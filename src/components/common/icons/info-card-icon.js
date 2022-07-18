import * as React from 'react'

const SvgInfoCardIcon = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={64} height={64} rx={12} fill="url(#info-card-icon_svg__a)" />
    <path
      d="M37 41H27c-4 0-5-1-5-5v-8c0-4 1-5 5-5h10c4 0 5 1 5 5v8c0 4-1 5-5 5ZM34 28h5M35 32h4M37 36h2"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M28.5 31.29a1.81 1.81 0 1 0 0-3.62 1.81 1.81 0 0 0 0 3.62ZM32 36.33a3.02 3.02 0 0 0-2.74-2.72 7.72 7.72 0 0 0-1.52 0A3.03 3.03 0 0 0 25 36.33"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="info-card-icon_svg__a"
        x1={-6.847}
        y1={-6.092}
        x2={42.03}
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

export default SvgInfoCardIcon
