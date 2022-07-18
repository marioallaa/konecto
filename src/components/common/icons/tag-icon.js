import * as React from 'react'

const SvgTagIcon = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 65 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={0.333}
      width={64}
      height={64}
      rx={12}
      fill="url(#tag-icon_svg__a)"
    />
    <path
      d="M27.333 27h.01m-.01-4h5c.512 0 1.024.195 1.415.586l7 7a2 2 0 0 1 0 2.828l-7 7a2 2 0 0 1-2.829 0l-7-7A1.993 1.993 0 0 1 23.333 32v-5a4 4 0 0 1 4-4Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="tag-icon_svg__a"
        x1={-6.514}
        y1={-6.092}
        x2={42.364}
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

export default SvgTagIcon
