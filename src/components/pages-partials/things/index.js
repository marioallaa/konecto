import SharedLayout from '@/components/layout/shared-layout'
import { CTASection } from '@/components/shared-sections'
import ThingsComparisonSection from './comparison'
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
      <ThingsComparisonSection />
      <CTASection />
    </SharedLayout>
  )
}

export default ThingsPageMain
