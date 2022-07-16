import SharedLayout from '@/components/layout/shared-layout'
import AnalyticsFutureSection from './analytics-future'
import HeroSection from './hero'

const HomePageMain = () => {
  return (
    <SharedLayout title="Home">
      <HeroSection />
      <AnalyticsFutureSection />
    </SharedLayout>
  )
}

export default HomePageMain
