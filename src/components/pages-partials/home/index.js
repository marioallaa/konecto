import SharedLayout from '@/components/layout/shared-layout'
import AnalyticsSection from './analytics-section'
import MediaKitSection from './media-kit-section'
import HeroSection from './hero'
import LaunchSection from './launch-section'
import ThingsSection from './things-section'
import CommunitySection from './community-section'
import { CTASection } from '@/components/shared-sections'

const HomePageMain = () => {
  return (
    <SharedLayout title="Home">
      <HeroSection />
      <AnalyticsSection />
      <LaunchSection />
      <MediaKitSection />
      <ThingsSection />
      <CommunitySection />
      <CTASection />
    </SharedLayout>
  )
}

export default HomePageMain
