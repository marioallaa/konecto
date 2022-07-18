import * as React from 'react'

const SvgSparklesGradientIcon = (props) => (
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
      fill="url(#sparkles-gradient-icon_svg__a)"
    />
    <path
      d="M17 15v4m-2-2h4m-1 12v4m-2-2h4m5-16 2.286 6.857L33 24l-5.714 2.143L25 33l-2.286-6.857L17 24l5.714-2.143L25 15Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="sparkles-gradient-icon_svg__a"
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

export default SvgSparklesGradientIcon
