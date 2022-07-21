import * as React from 'react'

const SvgBookSavedIcon = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={48} height={48} rx={8} fill="url(#book-saved-icon_svg__a)" />
    <path
      d="M34 16.67v12.07c0 .96-.78 1.86-1.74 1.98l-.33.04c-2.18.29-5.54 1.4-7.46 2.46-.26.15-.69.15-.96 0l-.04-.02c-1.92-1.05-5.27-2.15-7.44-2.44l-.29-.04C14.78 30.6 14 29.7 14 28.74V16.66c0-1.19.97-2.09 2.16-1.99 2.1.17 5.28 1.23 7.06 2.34l.25.15c.29.18.77.18 1.06 0l.17-.11c.63-.39 1.43-.78 2.3-1.13V20l2-1.33L31 20v-5.22c.27-.05.53-.08.77-.1h.06c1.19-.1 2.17.79 2.17 1.99ZM24 17.49v15"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M31 14.78V20l-2-1.33L27 20v-4.08c1.31-.52 2.77-.94 4-1.14Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="book-saved-icon_svg__a"
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

export default SvgBookSavedIcon
