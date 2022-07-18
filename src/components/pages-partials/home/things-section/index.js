import { BuildingIcon, InfoCardIcon, TagIcon } from '@/components/common/icons'
import { InfoCard } from '@/components/ui/cards'

const things = [
  {
    name: 'Konecto Card',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: InfoCardIcon,
  },
  {
    name: 'Konecto Tag ',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: TagIcon,
  },
  {
    name: 'Konecto Business',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: BuildingIcon,
  },
]

const ThingsSection = () => {
  return (
    <div className="py-32">
      <div className="max-w-xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mb-24">
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Konecto Things
          </h2>
          <p className="text-xl text-gray-300 lg:max-w-3xl">
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate
            id malesuada non. Cras aliquet purus dui laoreet diam sed lacus,
            fames. Dui, amet, nec sit pulvinar.
          </p>
        </div>
        <div className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {things.map((info) => (
            <InfoCard key={info.name} info={info} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ThingsSection
