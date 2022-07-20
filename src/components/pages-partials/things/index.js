import SharedLayout from '@/components/layout/shared-layout'
import React from 'react'
import ThingsHero from './hero'

const ThingsPageMain = () => {
  return (
    <SharedLayout title="Things">
      <ThingsHero />
    </SharedLayout>
  )
}

export default ThingsPageMain
