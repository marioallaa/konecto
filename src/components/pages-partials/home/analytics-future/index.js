import Image from 'next/image'

const AnalyticsFutureSection = () => {
  return (
    <div className="relative pt-16 sm:pt-24 lg:pt-32">
      <div className="max-w-md px-4 mx-auto text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-base font-semibold tracking-wider text-blue-600 uppercase">
            complete analytics
          </h2>
          <h3 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Own your data
          </h3>
          <p className="mx-auto mt-5 text-xl text-gray-300 max-w-prose">
            We believe in empowering creators just like you with the analytics
            you need to build your business. Accumsan in quis quis nunc,
            ullamcorper malesuada. Eleifend condimentum id viverra nulla.
          </p>
        </div>
        <div className="mt-12 aspect-w-16 aspect-h-9">
          <Image
            className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
            src="/images/screen-img.png"
            alt="analytics future"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  )
}

export default AnalyticsFutureSection
