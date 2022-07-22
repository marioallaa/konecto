/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import NextLink from 'next/link'

const tiers = {
  monthly: [
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
  ],
  yearly: [
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
      price: 240,
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
      price: 320,
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
      price: 480,
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
  ],
}

const ThingsPricingSection = () => {
  const [activeTab, setActiveTab] = useState('monthly')

  const renderButtons = (tier, activeTab) => {
    return (
      <button
        className={`relative w-1/2 py-2 text-sm font-medium text-white rounded-md whitespace-nowrap focus:outline-none focus:ring-0 focus:z-10 sm:w-auto sm:px-8 ${
          activeTab === tier ? 'bg-gradient-primary' : 'bg-transparent'
        }`}
        onClick={() => setActiveTab(tier)}
      >
        {tier === 'monthly' ? 'Monthly billing' : 'Yearly billing'}
      </button>
    )
  }

  return (
    <div className="bg-center sm:bg-[right_top_2rem] bg-no-repeat bg-cover bg-price-section">
      <div className="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-extrabold sm:text-center">
            Pricing <span className="text-gradient-primary">Plans</span>
          </h1>
          <p className="mt-5 text-xl text-gray-200 sm:text-center">
            Start building for free, then add a site plan to go live. Account
            plans unlock additional features.
          </p>
          <div className="relative self-center mt-6 border border-gray-700 rounded-lg p-0.5 flex sm:mt-8">
            {Object.keys(tiers).map((tier) => {
              return <span key={tier}>{renderButtons(tier, activeTab)}</span>
            })}
          </div>
        </div>
        <div className="grid grid-cols-1 mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
          {tiers[activeTab].map((tier) => (
            <div
              key={tier.name}
              className="relative block bg-black bg-opacity-50 border border-gray-800 divide-y divide-gray-700 shadow-sm rounded-3xl min-h-[675px] overflow-hidden content-none before:filter before:backdrop-blur-2xl before:inset-0 before:absolute before:z-[0] before:h-full"
            >
              <div className="absolute inset-0 z-50 flex flex-col w-full h-full">
                <div className="p-6">
                  <h2 className="text-lg font-medium leading-6">{tier.name}</h2>
                  <p className="mt-4 text-sm">{tier.description}</p>
                  <p className="mt-8">
                    <span className="text-4xl font-extrabold">
                      {tier.price === 0 ? 'Free' : `$${tier.price}`}
                    </span>{' '}
                    <span className="text-base font-medium">
                      {tier.price !== 0 &&
                        (activeTab === 'monthly' ? '/mo' : '/year')}
                    </span>
                  </p>
                  <NextLink href={tier.href}>
                    <a className="block w-full py-4 mt-8 text-xl font-medium text-center text-white uppercase rounded-md bg-gradient-primary hover:bg-gray-900">
                      {tier.buttonText}
                    </a>
                  </NextLink>
                </div>
                <div className="px-6 pt-6 pb-8">
                  <h3 className="text-xs font-medium tracking-wide uppercase">
                    What&apos;s included
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {tier.includedFeatures.map((feature) => (
                      <li key={feature} className="flex space-x-3">
                        <CheckIcon
                          className="flex-shrink-0 w-5 h-5 text-blue-400"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ThingsPricingSection
