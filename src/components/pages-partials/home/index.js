import SharedLayout from '@/components/layout/shared-layout'
import AnalyticsSection from './analytics-section'
import MediaKitSection from './media-kit-section'
import HeroSection from './hero'
import LaunchSection from './launch-section'
import ThingsSection from './things-section'

const HomePageMain = () => {
  return (
    <SharedLayout title="Home">
      <HeroSection />
      <AnalyticsSection />
      <LaunchSection />
      <MediaKitSection />
      <ThingsSection />
    </SharedLayout>
  )
}

export default HomePageMain
