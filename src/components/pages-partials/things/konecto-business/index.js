import {
  BookSavedIcon,
  BuildingGrIcon,
  PersonCardIcon,
  UserAddIcon,
} from '@/components/common/icons'
import * as FutureImage from 'next/future/image'

const transferFeatures = [
  {
    id: 1,
    name: 'Organization view & card control',
    description:
      'Konecto is velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean curabitur donec aliquet. Mi venenatis in euismod ut.',
    icon: PersonCardIcon,
  },
  {
    id: 2,
    name: 'Add/remove employees and edit their permissions',
    description:
      'Mi venenatis in euismod ut. Konecto is velit quis eros eget rhoncus lacus ultrices sed diam.',
    icon: UserAddIcon,
  },
  {
    id: 3,
    name: 'Corporate address book',
    description:
      'Konecto is velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean curabitur donec aliquet. Mi venenatis in euismod ut.',
    icon: BookSavedIcon,
  },
  {
    id: 4,
    name: 'Business-level support',
    description:
      'Curabitur donec aliquet. Mi venenatis in euismod ut. Konecto is velit quis eros eget rhoncus lacus ultrices sed diam.',
    icon: BuildingGrIcon,
  },
]

const ThingsKonectoBusinessSection = () => {
  return (
    <div className="py-16 overflow-hidden lg:py-24">
      <div className="relative max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative">
          <h2 className="text-4xl font-extrabold leading-8 tracking-tight text-center sm:text-4xl">
            Konecto <span className="text-gradient-primary">Business</span>
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">
            Create, manage, distribute digital cards for your company.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative mt-10 -mx-4 lg:mt-0" aria-hidden="true">
            <FutureImage
              className="relative w-full mx-auto md:transform md:scale-125"
              src="/images/things/business-man.png"
              alt="Konecto business"
              layout="raw"
              width={1280}
              height={720}
              quality={70}
            />
          </div>

          <div className="relative">
            <p className="mt-3 text-lg">
              Konecto offers digital business card subscription plans for teams
              and companies of all sizes at an affordable price. Not only can
              you enjoy everything that comes with our free plan, but you also
              have access to premium features like corporate branding,
              administrative control, and more.
            </p>

            <dl className="mt-10 space-y-10">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center w-12 h-12 text-white">
                      <item.icon className="w-12 h-12" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-semibold leading-6 ">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-400">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThingsKonectoBusinessSection
