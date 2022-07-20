import SharedLayout from '@/components/layout/shared-layout'
import ThingsHero from './hero'
import ThingsKonectoCardSection from './konecto-card'

const ThingsPageMain = () => {
  return (
    <SharedLayout title="Things">
      <ThingsHero />
      <ThingsKonectoCardSection />
    </SharedLayout>
  )
}

export default ThingsPageMain
