import CompanyBanners from '@/components/common/company-banners'
import { Tile1, Tile2, Tile3, Tile4, Tile5 } from '@/components/common/svgs'
import Image from 'next/image'

const companies = [
  { id: 1, name: 'Tuple', logo: Tile3, url: '#' },
  { id: 2, name: 'Mirage', logo: Tile1, url: '#' },
  { id: 3, name: 'StaticKit', logo: Tile2, url: '#' },
  { id: 4, name: 'Transistor', logo: Tile5, url: '#' },
  { id: 5, name: 'Workcation', logo: Tile4, url: '#' },
]

const ThingsHero = () => {
  return (
    <>
      <div className="px-4 mx-auto mt-16 max-w-7xl sm:mt-24 sm:px-6">
        <div className="text-center">
          <span className="px-3 py-0.5 mb-6 inline-block text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-primary rounded-full">
            konecto things
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block text-white">Simple, Fast, Efficient</span>
            <span className="block text-gradient-primary">
              with Your Konecto Things!
            </span>
          </h1>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>

        <div className="relative px-4 py-16 mt-12 min-h-[20rem] md:min-h-[50rem] sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <Image
            className="object-cover w-full h-full"
            src="/images/home/launch-section.png"
            alt="People working on laptops"
            layout="fill"
            priority={true}
          />
        </div>
        <div className="py-24">
          <h2 className="text-sm font-semibold tracking-wide text-center text-gray-400 uppercase">
            Trusted by over 26,000 forward-thinking companies
          </h2>
          <div>
            <CompanyBanners
              companies={companies}
              w="lg:min-w-[180px]"
              className="gap-6 lg:gap-0"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ThingsHero
