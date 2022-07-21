import SharedLayout from '@/components/layout/shared-layout'
import ThingsHero from './hero'
import ThingsKonectoBusinessSection from './konecto-business'
import ThingsKonectoCardSection from './konecto-card'

const ThingsPageMain = () => {
  return (
    <SharedLayout title="Things">
      <ThingsHero />
      <ThingsKonectoCardSection />
      <ThingsKonectoBusinessSection />
    </SharedLayout>
  )
}

export default ThingsPageMain
