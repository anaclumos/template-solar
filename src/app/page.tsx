import { CallToAction } from '@template-solar/components/molecules/call-to-action'
import { FeatureDivider } from '@template-solar/components/molecules/feature-divider'
import { Features } from '@template-solar/components/molecules/features'
import { Hero } from '@template-solar/components/molecules/hero'
import { MapSection } from '@template-solar/components/molecules/map/map'
import { Testimonial } from '@template-solar/components/molecules/testimonial'
import { hero, features, testimonial, map, callToAction } from './site-config'
export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col">
      <Hero {...hero} />
      <Features {...features} />
      <Testimonial {...testimonial} />
      <FeatureDivider />
      <MapSection {...map} />
      <FeatureDivider />
      <CallToAction {...callToAction} />
    </main>
  )
}
