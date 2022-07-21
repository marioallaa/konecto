import * as React from 'react'

const SvgPersonCardIcon = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={48} height={48} rx={8} fill="url(#person-card-icon_svg__a)" />
    <path
      d="M29 33H19c-4 0-5-1-5-5v-8c0-4 1-5 5-5h10c4 0 5 1 5 5v8c0 4-1 5-5 5ZM26 20h5M27 24h4M29 28h2"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.5 23.29a1.81 1.81 0 1 0 0-3.62 1.81 1.81 0 0 0 0 3.62ZM24 28.33a3.02 3.02 0 0 0-2.74-2.72 7.72 7.72 0 0 0-1.52 0A3.03 3.03 0 0 0 17 28.33"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="person-card-icon_svg__a"
        x1={0}
        y1={0}
        x2={56.819}
        y2={32.657}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#20D1FD" />
        <stop offset={1} stopColor="#9642FF" />
      </linearGradient>
    </defs>
  </svg>
)

export default SvgPersonCardIcon
