import SharedLayout from '@/components/layout/shared-layout'
import ThingsFullFeatures from './full-features'
import ThingsHero from './hero'
import ThingsKonectoBusinessSection from './konecto-business'
import ThingsKonectoCardSection from './konecto-card'
import ThingsPricingSection from './pricing'

const ThingsPageMain = () => {
  return (
    <SharedLayout title="Things">
      <ThingsHero />
      <ThingsKonectoCardSection />
      <ThingsKonectoBusinessSection />
      <ThingsPricingSection />
      <ThingsFullFeatures />
    </SharedLayout>
  )
}

export default ThingsPageMain
