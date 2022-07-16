import {
  StaticKitLogo,
  TupleLogo,
  WorkationLogo,
} from '@/components/common/svgs'
import { ChevronRightIcon } from '@heroicons/react/solid'
import NextLink from 'next/link'

const Hero = () => {
  return (
    <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <NextLink href="#">
                <a className="inline-flex items-center p-1 pr-2 text-white bg-gray-900 rounded-full sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                  <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-primary rounded-full">
                    join community
                  </span>
                  <span className="ml-4 text-sm">Visit our careers page</span>
                  <ChevronRightIcon
                    className="w-5 h-5 ml-2 text-gray-500"
                    aria-hidden="true"
                  />
                </a>
              </NextLink>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block">Level up your</span>
                <span className="block pb-3 text-transparent text-gradient-primary sm:pb-5">
                  Link-in-Bio
                </span>
              </h1>
              <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                Share and cross promote your links, music, videos, social media,
                and more on one page.
              </p>
              <div className="mt-10">
                <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                  <div className="sm:flex">
                    <div className="flex-1 min-w-0">
                      <label htmlFor="email" className="block mb-3">
                        Check username availability now!!!
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="konecto.me/karen-daily"
                        className="input-main input-dark"
                      />
                    </div>
                    <div className="self-end mt-3 sm:mt-0 sm:ml-3">
                      <button type="submit" className="btn-gradient btn-thick">
                        Check
                      </button>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                    We care about the protection of your data. Read our
                    <NextLink href="#">
                      <a className="font-medium text-blue-500">
                        {' '}
                        Privacy Policy
                      </a>
                    </NextLink>
                    .
                  </p>
                </form>
                <div className="mt-10">
                  <span className="text-sm font-semibold uppercase">
                    Powered by
                  </span>
                  <div className="flex items-center justify-between gap-2 mt-6">
                    <a href="#">
                      <TupleLogo />
                    </a>
                    <a href="#">
                      <WorkationLogo />
                    </a>
                    <a href="#">
                      <StaticKitLogo />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
              <img
                className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
