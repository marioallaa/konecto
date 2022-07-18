import { InboxGradientIcon } from '@/components/common/icons'
import Image from 'next/image'

const LaunchSection = () => {
  return (
    <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48 lg:bg-launch-section lg:bg-[center_right_-50%] lgx:bg-right lg:bg-no-repeat">
      <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
        <div>
          <div>
            <InboxGradientIcon width={48} height={48} />
            <div className="z-50 mt-6">
              <div className="sm:max-w-3xl">
                <h2 className="text-3xl font-extrabold tracking-tighter font-base">
                  Launch your Konecto in minutes
                </h2>
                <p className="mt-6 text-xl text-gray-300">
                  Customize your link in bio to make it pop! Add links, videos,
                  mailing lists, and more. Semper curabitur ullamcorper posuere
                  nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia
                  porttitor. Pulvinar laoreet sagittis viverra duis. In
                  venenatis sem arcu pretium pharetra at. Lectus viverra dui
                  tellus ornare pharetra.
                </p>
              </div>
              <form action="#" className="mt-6 sm:max-w-xl sm:mx-auto lg:mx-0">
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
              </form>
            </div>
            <hr className="my-6" />
            <blockquote>
              <div>
                <p className="text-base text-gray-300">
                  &ldquo;Konecto is velit quis eros eget rhoncus lacus ultrices
                  sed diam. Sit orci risus aenean curabitur donec aliquet. Mi
                  venenatis in euismod ut.&rdquo;
                </p>
              </div>
              <footer className="mt-3">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <Image
                      width="24"
                      height="24"
                      className="rounded-full"
                      src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                      alt="commentor image"
                    />
                  </div>
                  <div className="text-base font-medium">
                    Marcia Hill, Digital Marketing Manager
                  </div>
                </div>
              </footer>
            </blockquote>
            <div></div>
          </div>
        </div>
      </div>

      <div className="sm:mx-auto sm:max-w-3xl sm:px-6 lg:hidden">
        <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
            <img
              className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
              src="/images/home/launch-section.png"
              alt="Launch your Konecto in minutes"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LaunchSection
