import { CheckIcon, MinusIcon } from '@heroicons/react/outline'
import React, { Fragment } from 'react'
import { twMerge } from 'tailwind-merge'
import NextLink from 'next/link'

const ComparisonTable = ({ tiers, sections }) => {
  return (
    <div className="max-w-2xl py-16 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
      {/* xs to lg */}
      <div className="space-y-24 lg:hidden">
        {tiers.map((tier) => (
          <section key={tier.name}>
            <div className="px-4 mb-8">
              <h2 className="text-lg font-medium leading-6 ">{tier.name}</h2>
              <p className="mt-4 text-sm text-gray-300">{tier.description}</p>
            </div>

            {sections.map((section) => (
              <table key={section.name} className="w-full">
                <caption className="px-4 py-3 text-sm font-medium text-left bg-white bg-opacity-5">
                  {section.name}
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {section.features.map((feature) => (
                    <tr key={feature.name} className="">
                      <th
                        className="px-4 py-5 text-sm font-normal text-left text-gray-500"
                        scope="row"
                      >
                        {feature.name}
                      </th>
                      <td className="py-5 pr-4">
                        {typeof feature.tiers[tier.name] === 'string' ? (
                          <span className="block text-sm text-right text-gray-700">
                            {feature.tiers[tier.name]}
                          </span>
                        ) : (
                          <>
                            {feature.tiers[tier.name] === true ? (
                              <CheckIcon
                                className="w-5 h-5 ml-auto text-blue-600"
                                aria-hidden="true"
                              />
                            ) : (
                              <MinusIcon
                                className="w-5 h-5 ml-auto text-gray-400"
                                aria-hidden="true"
                              />
                            )}

                            <span className="sr-only">
                              {feature.tiers[tier.name] === true ? 'Yes' : 'No'}
                            </span>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ))}

            <div className="px-4 pt-5 ">
              <NextLink href={tier.href}>
                <a className="block w-full py-3 font-medium text-center text-white uppercase rounded-md shadow bg-gradient-primary">
                  {tier.buttonText}
                </a>
              </NextLink>
            </div>
          </section>
        ))}
      </div>

      {/* lg+ */}
      <div className="hidden lg:block">
        <table className="w-full h-px table-fixed">
          <caption className="sr-only">Pricing plan comparison</caption>
          <thead>
            <tr>
              <th
                className="pb-4 pl-6 pr-6 text-sm font-medium text-left uppercase"
                scope="col"
              >
                <span className="sr-only">Feature by</span>
                <span>Plans</span>
              </th>
              {tiers.map((tier) => (
                <th
                  key={tier.name}
                  className={twMerge(
                    'px-6 pb-4 text-lg font-medium leading-6 text-left uppercase',
                    `w-1/${tiers.length + 1}`,
                  )}
                  scope="col"
                >
                  {tier.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="">
            {sections.map((section) => (
              <Fragment key={section.name}>
                <tr>
                  <th
                    className="py-3 pl-6 text-sm font-medium text-left bg-white bg-opacity-5"
                    colSpan={tiers.length + 1}
                    scope="colgroup"
                  >
                    {section.name}
                  </th>
                </tr>
                {section.features.map((feature) => (
                  <tr key={feature.name}>
                    <th
                      className="py-5 pl-6 pr-6 text-sm font-normal text-left text-gray-300"
                      scope="row"
                    >
                      {feature.name}
                    </th>
                    {tiers.map((tier) => (
                      <td key={tier.name} className="px-6 py-5 ">
                        {typeof feature.tiers[tier.name] === 'string' ? (
                          <span className="block text-sm text-gray-300">
                            {feature.tiers[tier.name]}
                          </span>
                        ) : (
                          <>
                            {feature.tiers[tier.name] === true ? (
                              <CheckIcon
                                className="w-5 h-5 text-blue-600"
                                aria-hidden="true"
                              />
                            ) : (
                              <MinusIcon
                                className="w-5 h-5 text-gray-400"
                                aria-hidden="true"
                              />
                            )}

                            <span className="sr-only">
                              {feature.tiers[tier.name] === true
                                ? 'Included'
                                : 'Not included'}{' '}
                              in {tier.name}
                            </span>
                          </>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t border-gray-800">
              <th className="sr-only" scope="row">
                Choose your plan
              </th>
              {tiers.map((tier) => (
                <td key={tier.name} className="px-6 pt-5">
                  <NextLink href={tier.href}>
                    <a className="block w-full py-3 font-medium text-center text-white uppercase rounded-md shadow bg-gradient-primary">
                      {tier.buttonText}
                    </a>
                  </NextLink>
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

export default ComparisonTable
