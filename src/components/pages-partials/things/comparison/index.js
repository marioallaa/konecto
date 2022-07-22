import ComparisonTable from '@/components/common/comparison-table'
import NextLink from 'next/link'

const tiers = [
  {
    name: 'Free',
    href: '#',
    price: 0,
    description: 'Experience digital business cards for free, forever.',
    includedFeatures: [
      'Potenti felis, in cras at at ligula nunc.',
      'Orci neque eget pellentesque.',
    ],
    buttonText: 'Sign up for free',
  },
  {
    name: 'Professional',
    href: '#',
    price: 24,
    description: 'Packed with powerful features to grow your network.',
    includedFeatures: [
      'Potenti felis, in cras at at ligula nunc. ',
      'Orci neque eget pellentesque.',
      'Donec mauris sit in eu tincidunt etiam.',
    ],
    buttonText: 'Sign up',
  },
  {
    name: 'Business',
    href: '#',
    price: 32,
    description: 'Create, manage, distribute digital cards for your company.',
    includedFeatures: [
      'Potenti felis, in cras at at ligula nunc. ',
      'Orci neque eget pellentesque.',
      'Donec mauris sit in eu tincidunt etiam.',
      'Faucibus volutpat magna.',
    ],
    buttonText: 'Start your plan',
  },
  {
    name: 'Enterprise',
    href: '#',
    price: 48,
    description: 'For medium to large organizations over 100 users!',
    includedFeatures: [
      'Potenti felis, in cras at at ligula nunc. ',
      'Orci neque eget pellentesque.',
      'Donec mauris sit in eu tincidunt etiam.',
      'Faucibus volutpat magna.',
      'Id sed tellus in varius quisque.',
      'Risus egestas faucibus.',
      'Risus cursus ullamcorper.',
    ],
    buttonText: 'Contact sales',
  },
]

const sections = [
  {
    name: 'Features',
    features: [
      {
        name: 'Molestie lobortis massa.',
        tiers: {
          Free: true,
          Professional: true,
          Business: true,
          Enterprise: true,
        },
      },
      {
        name: 'Urna purus felis.',
        tiers: {
          Free: true,
          Professional: true,
          Business: true,
          Enterprise: true,
        },
      },
      {
        name: 'Tellus pulvinar sit dictum.',
        tiers: { Professional: true, Business: true, Enterprise: true },
      },
      {
        name: 'Convallis.',
        tiers: {
          Professional: 'Up to 20 users',
          Business: 'Up , Enterprise: trueto 50 users',
          Enterprise: 'Up to 100 users',
        },
      },
    ],
  },
  {
    name: 'Reporting',
    features: [
      {
        name: 'Adipiscing.',
        tiers: {
          Free: true,
          Professional: true,
          Business: true,
          Enterprise: true,
        },
      },
      {
        name: 'Eget risus integer.',
        tiers: { Professional: true, Business: true, Enterprise: true },
      },
      {
        name: 'Gravida leo urna velit.',
        tiers: { Business: true, Enterprise: true },
      },
      {
        name: 'Elementum ut dapibus mi feugiat cras nisl.',
        tiers: { Business: true, Enterprise: true },
      },
    ],
  },
  {
    name: 'Support',
    features: [
      {
        name: 'Sit dignissim.',
        tiers: {
          Free: true,
          Professional: true,
          Business: true,
          Enterprise: true,
        },
      },
      {
        name: 'Congue at nibh et.',
        tiers: { Professional: true, Business: true, Enterprise: true },
      },
      {
        name: 'Volutpat feugiat mattis.',
        tiers: { Professional: true, Business: true, Enterprise: true },
      },
      {
        name: 'Tristique pellentesque ornare diam sapien.',
        tiers: { Business: true, Enterprise: true },
      },
    ],
  },
]

const ThingsComparisonSection = () => {
  return (
    <div className="py-16">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center">
          <div className="max-w-xl">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Read full features
            </h2>
            <p className="mt-5 text-xl text-gray-200">
              Start building for free, then add a site plan to go live. Account
              plans unlock additional features.
            </p>
          </div>
          <div className="w-full max-w-xs mt-10 lg:mt-0">
            <div>
              Need any help?
              <NextLink href="/contact">
                <a className="ml-2 btn-gradient">Contact us</a>
              </NextLink>
            </div>
          </div>
        </div>
      </div>

      <ComparisonTable tiers={tiers} sections={sections} />
    </div>
  )
}

export default ThingsComparisonSection
