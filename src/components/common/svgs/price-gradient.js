import * as React from 'react'

const SvgPriceGradient = (props) => (
  <svg
    width={1512}
    height={814}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#price-gradient_svg__a)">
      <path
        transform="translate(-99.52)"
        fill="url(#price-gradient_svg__b)"
        d="M0 0h1711.04v814H0z"
      />
      <path
        d="M-99.52-30.646S17.949 9.816 100.163 132.423c92.338 137.705 350.61 159.345 522.864 205.391 200.828 53.684 347.295 177.957 526.324 423.617 258.55 354.769 370.23 520.009 509.02 709.529 88.87 121.37 560.95 135.37 560.95 135.37H-99.52V-30.646Z"
        fill="url(#price-gradient_svg__c)"
      />
      <path
        d="M-99.52 356.343s140.954-20.591 248.099 11.671c151.167 45.518 226.289 139.908 357.724 175.069 153.236 40.993 254.257 58.771 463.886 155.227 268.871 123.716 461.971 273.264 642.611 522.4 177.7 245.1 121.3 385.62 121.3 385.62H-99.52V356.343Z"
        fill="url(#price-gradient_svg__d)"
      />
      <path
        d="M-99.52 605.248S74.907 735.108 345.52 803.829c130.13 33.047 262.116 21.833 446.191 85.274 281.32 96.954 310.14 306.047 511.91 462.577 156.46 121.38 366.64 254.65 366.64 254.65H-99.52V605.248Z"
        fill="url(#price-gradient_svg__e)"
      />
      <g filter="url(#price-gradient_svg__f)">
        <path
          d="M1122.88 1063.28c25.48-47.22 40.72-86.656 40.72-86.656S979.78 835.446 852.889 821.438c-159.897-17.652-405.662-159.322-497.696-376.639-53.728-126.868-105.194-334.727-220.569-488.214H-99.519v996.818s59.577 120.087 146.48 175.007c114.361 72.28 373.272 102.52 373.272 102.52s85.829-4.64 171.366-19.26c68.104-11.64 134.299-27.5 177.586-49.84 54.86-28.32 120.465-137.06 120.465-137.06l186.85 103.64s24.38-24.37 46.38-65.13Z"
          fill="#fff"
          fillOpacity={0.01}
        />
      </g>
      <path
        d="M-99.52 0h1687v494.956l-1687-243.654V0Z"
        fill="url(#price-gradient_svg__g)"
      />
      <path
        d="M1587.48 814h-1687V702.553l1687-277.525V814Z"
        fill="url(#price-gradient_svg__h)"
      />
    </g>
    <defs>
      <linearGradient
        id="price-gradient_svg__b"
        x1={0}
        y1={0}
        x2={0}
        y2={814}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0034DF" />
        <stop offset={1} stopColor="#B06AB3" />
      </linearGradient>
      <linearGradient
        id="price-gradient_svg__c"
        x1={-99.519}
        y1={-30.646}
        x2={-99.519}
        y2={1606.33}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E346FC" />
        <stop offset={1} stopColor="#3F5EFB" />
      </linearGradient>
      <linearGradient
        id="price-gradient_svg__d"
        x1={-99.519}
        y1={349.869}
        x2={-99.519}
        y2={1606.33}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5036EF" />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
      <linearGradient
        id="price-gradient_svg__e"
        x1={-99.519}
        y1={605.248}
        x2={-99.519}
        y2={1606.33}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#464DFC" />
        <stop offset={1} stopColor="#3F5EFB" />
      </linearGradient>
      <linearGradient
        id="price-gradient_svg__g"
        x1={414.557}
        y1={723.859}
        x2={448.585}
        y2={0}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopOpacity={0} />
        <stop offset={1} />
      </linearGradient>
      <linearGradient
        id="price-gradient_svg__h"
        x1={1462.38}
        y1={254.034}
        x2={1391.36}
        y2={803.074}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopOpacity={0} />
        <stop offset={0.6} stopOpacity={0.884} />
        <stop offset={1} />
      </linearGradient>
      <clipPath id="price-gradient_svg__a">
        <path
          fill="#fff"
          transform="translate(-99.52)"
          d="M0 0h1711.04v814H0z"
        />
      </clipPath>
      <filter
        id="price-gradient_svg__f"
        x={-324.253}
        y={-268.149}
        width={1712.58}
        height={1723.81}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImage" stdDeviation={112.367} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_194_3798"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_194_3798"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)

export default SvgPriceGradient
