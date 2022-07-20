import * as FutureImage from 'next/future/image'

const ThingsKonectoCardSection = () => {
  return (
    <div className="relative pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-4xl font-extrabold tracking-tight">
                  Konecto <span className="text-gradient-primary">Card</span>
                </h2>
                <p className="mt-4 text-lg leading-7">
                  Konecto digital business cards are completely germ-free— no
                  physical contact is required to send or receive a virtual
                  card. Electronic business cards can be shared with anyone,
                  anywhere, anytime. Using a smart business card means
                  information can be updated at the touch of a button— no
                  waiting for new cards. You can even use HiHello with
                  NFC-compatible devices.
                </p>

                <div></div>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex px-4 py-2 text-base font-medium text-white rounded-md shadow-sm bg-gradient-primary"
                  >
                    Create one
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full lg:min-h-[50rem]">
              <FutureImage
                className="object-cover w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/images/things/konecto-card.jpeg"
                alt="Inbox user interface"
                layout="raw"
                width={1280}
                height={720}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThingsKonectoCardSection
