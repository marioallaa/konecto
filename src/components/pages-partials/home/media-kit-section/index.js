import { SparklesGradient } from '@/components/common/icons'
import NextLink from 'next/link'

const MediaKitSection = () => {
  return (
    <div className="mt-24">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div className="max-w-xl px-4 mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
          <div>
            <SparklesGradient width={48} height={48} />
            <div className="z-50 mt-6">
              <div className="sm:max-w-3xl">
                <h2 className="text-3xl font-extrabold tracking-tighter font-base">
                  Close deals with a Live Media Kit
                </h2>
                <p className="my-6 text-xl text-gray-300">
                  Every brand wants to see one. Konecto keeps yours
                  up-to-date...without any effort. Ornare iaculis bibendum
                  malesuada faucibus lacinia porttitor. Pulvinar laoreet
                  sagittis viverra duis. In venenatis sem arcu pretium pharetra
                  at. Lectus viverra dui tellus ornare pharetra.
                </p>
              </div>
              <NextLink href="#">
                <a className="btn-gradient">Get Started</a>
              </NextLink>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
          <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <img
              className="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
              src="/images/home/home-computer.png"
              alt="Close deals with a Live Media Kit"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MediaKitSection
