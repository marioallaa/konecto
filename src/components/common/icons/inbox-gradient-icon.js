import * as React from 'react'

const SvgInboxGradientIcon = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      width={48}
      height={48}
      rx={6}
      fill="url(#inbox-gradient-icon_svg__a)"
    />
    <path
      d="M32 25v-7a2 2 0 0 0-2-2H18a2 2 0 0 0-2 2v7m16 0v5a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2v-5m16 0h-2.586a1 1 0 0 0-.707.293l-2.414 2.414a1 1 0 0 1-.707.293h-3.172a1 1 0 0 1-.707-.293l-2.414-2.414a1 1 0 0 0-.707-.293H16"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="inbox-gradient-icon_svg__a"
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

export default SvgInboxGradientIcon
