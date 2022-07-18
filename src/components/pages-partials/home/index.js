import SharedLayout from '@/components/layout/shared-layout'
import AnalyticsSection from './analytics-section'
import MediaKitSection from './media-kit-section'
import HeroSection from './hero'
import LaunchSection from './launch-section'

const HomePageMain = () => {
  return (
    <SharedLayout title="Home">
      <HeroSection />
      <AnalyticsSection />
      <LaunchSection />
      <MediaKitSection />
    </SharedLayout>
  )
}

export default HomePageMain
