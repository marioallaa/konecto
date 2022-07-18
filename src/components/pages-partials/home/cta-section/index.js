import { ExternalLinkIcon } from '@heroicons/react/outline'

const CTASection = () => {
  return (
    <div className="relative mx-auto my-16 max-w-7xl lg:grid lg:grid-cols-2 bg-gradient-secondary rounded-xl">
      <div className="relative px-4 py-12 sm:px-6 lg:px-20 lg:py-20">
        <h2 className="mt-2 font-extrabold tracking-tight text-white font-base text-3x sm:text-4xl">
          Share your Konecto everywhere!
        </h2>
        <p className="mt-3 text-lg text-indigo-200">
          It’s your community&apos;s portal to your next song, video, drop, and
          more. Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
          Malesuada adipiscing sagittis vel nulla nec.
        </p>
        <div className="mt-8">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-blue-500 bg-white border border-transparent rounded-md hover:bg-gray-50"
            >
              Create a new one
            </a>
          </div>
        </div>
      </div>
      <div>
        <img
          className="object-fill w-full h-full"
          src="/images/home/home-phones.png"
          alt="CTA Image"
        />
      </div>
    </div>
  )
}

export default CTASection
