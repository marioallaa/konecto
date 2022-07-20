import {
  DirectUpIcon,
  DiscountIcon,
  HappyemojiIcon,
  TreeIcon,
} from '@/components/common/icons'
import * as FutureImage from 'next/future/image'

const cards = [
  {
    id: 1,
    title: 'Eco-Friendly',
    description:
      'Ut enim ad minima veniam culture galaxies extraordinary claims require extraordinary evidence dispassionate extraterrestrial observer trillion.',
    icon: TreeIcon,
  },
  {
    id: 2,
    title: 'Affordable',
    description:
      'Encyclopaedia galactica the carbon in our apple pies vastness is bearable only through love paroxysm of global death laws of physics take root.',
    icon: DiscountIcon,
  },
  {
    id: 3,
    title: 'Always up-to-date',
    description:
      'Encyclopaedia galactica the carbon in our apple pies vastness is bearable only through love paroxysm of global death laws of physics take root.',
    icon: DirectUpIcon,
  },
  {
    id: 4,
    title: 'Convenient',
    description:
      'Ut enim ad minima veniam culture galaxies extraordinary claims require extraordinary evidence dispassionate extraterrestrial observer trillion. ',
    icon: HappyemojiIcon,
  },
]

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

                <div className="grid gap-8 mb-8 md:grid-cols-2">
                  {cards.map((card) => (
                    <div key={card.id} className="flex items-center mt-6">
                      <div>
                        <card.icon className="w-8 h-8 mb-4 text-primary" />

                        <div>
                          <h3 className="inline-block text-lg font-semibold leading-6 text-gradient-primary">
                            {card.title}
                          </h3>
                          <p className="mt-2 text-base leading-6">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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
                quality={50}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThingsKonectoCardSection
