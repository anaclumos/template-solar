import { RiDropFill, RiNavigationFill, RiPieChartFill, RiRobot3Fill } from '@remixicon/react'
import { z } from 'zod'

// Zod schemas for type validation
const LinkSchema = z.object({
  label: z.string(),
  href: z.string(),
})

const HeroSchema = z.object({
  badgeLabel: z.string(),
  badgeText: z.string(),
  badgeHref: z.string(),
  titleTopLine: z.string(),
  titleBottomLine: z.string(),
  subtitle: z.string(),
  ctaLabel: z.string(),
  ctaHref: z.string(),
})

const FeatureBlockSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  description: z.string(),
})

const OrbitLabelSchema = z.object({
  status: z.string(),
  text: z.string(),
  color: z.string(),
})

const FeaturesSchema = z.object({
  blocks: z.array(FeatureBlockSchema),
  orbitLabels: z.array(OrbitLabelSchema),
})

const TestimonialSchema = z.object({
  backgroundSrc: z.string(),
  backgroundAlt: z.string(),
  foregroundSrc: z.string(),
  foregroundAlt: z.string(),
  quoteStrong: z.string(),
  quoteRest: z.string(),
  authorName: z.string(),
  authorTitle: z.string(),
  authorImageSrc: z.string(),
})

const MapSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  description: z.string(),
  labels: z.object({
    scanning: z.string(),
    irrigating: z.string(),
    idle: z.string(),
  }),
})

const CallToActionSchema = z.object({
  title: z.string(),
  description: z.string(),
  primary: LinkSchema,
  secondary: LinkSchema,
  imageSrc: z.string(),
  imageAlt: z.string(),
})

const MetadataSchema = z.object({
  metadataBase: z.url(),
  title: z.string(),
  description: z.string(),
  keywords: z.array(z.string()),
  authors: z.array(
    z.object({
      name: z.string(),
      url: z.string().optional(),
    })
  ),
  creator: z.string(),
  openGraph: z.object({
    type: z.string(),
    locale: z.string(),
    url: z.url(),
    title: z.string(),
    description: z.string(),
    siteName: z.string(),
  }),
  twitter: z.object({
    card: z.string(),
    title: z.string(),
    description: z.string(),
    creator: z.string(),
  }),
  icons: z.object({
    icon: z.string(),
  }),
})

const BaseLinksSchema = z.object({
  home: z.string(),
})

const SiteConfigSchema = z.object({
  name: z.string(),
  url: z.url(),
  description: z.string(),
  baseLinks: BaseLinksSchema,
  metadata: MetadataSchema,
  hero: HeroSchema,
  features: FeaturesSchema,
  testimonial: TestimonialSchema,
  map: MapSchema,
  callToAction: CallToActionSchema,
})

// Configuration object
const siteConfigRaw = {
  name: 'Hypany',
  url: 'https://hypany.com',
  description: 'Validate fast. Build smart. Grow faster.',
  baseLinks: {
    home: '/',
  },
  metadata: {
    metadataBase: 'https://hypany.com',
    title: 'Hypany',
    description: 'Validate fast. Build smart. Grow faster.',
    keywords: ['Startup Validation', 'Landing Pages', 'Waitlist Management', 'MVP Testing'],
    authors: [
      {
        name: 'yourname',
      },
    ],
    creator: 'yourname',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://hypany.com',
      title: 'Hypany',
      description: 'Validate fast. Build smart. Grow faster.',
      siteName: 'Hypany',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Hypany',
      description: 'Validate fast. Build smart. Grow faster.',
      creator: '@yourname',
    },
    icons: {
      icon: '/favicon.ico',
    },
  },
  hero: {
    badgeLabel: 'New',
    badgeText: 'AI Validation Assistant Now Live',
    badgeHref: '#',
    titleTopLine: 'Money Glitch',
    titleBottomLine: 'for your startup',
    subtitle:
      'Build your waitlist of ready-to-pay users before writing code. Validate fast, build smart, grow faster.',
    ctaLabel: 'Start Free',
    ctaHref: '/sign-up',
  },
  features: {
    blocks: [
      {
        eyebrow: 'Landing Page Builder',
        title: 'Launch professional pages in minutes with our drag-and-drop editor',
        description:
          '50+ conversion-optimized templates, mobile responsive design, custom domain support, and A/B testing ready.',
      },
      {
        eyebrow: 'Waitlist Management', 
        title: 'Build and nurture your early adopter community effortlessly',
        description:
          'Email verification, automated welcome emails, referral tracking, and export to any platform.',
      },
      {
        eyebrow: 'AI Validation Assistant',
        title: 'Get AI-powered insights on market opportunity and competition',
        description:
          'Market size analysis, competitor research, risk assessment, and pivot recommendations to validate your idea fast.',
      },
    ],
    orbitLabels: [
      {
        status: 'error',
        text: 'Low Conversion',
        color: 'bg-red-500',
      },
      {
        status: 'loading',
        text: 'A/B Testing',
        color: 'bg-gray-500',
      },
      {
        status: 'success',
        text: 'Validated',
        color: 'bg-emerald-500',
      },
    ],
  },
  testimonial: {
    backgroundSrc: '/images/field.png',
    backgroundAlt: 'startup workspace background',
    foregroundSrc: '/images/drone.png',
    foregroundAlt: 'laptop with analytics',
    quoteStrong: 'Hypany helped us validate our SaaS idea in just 2 weeks.',
    quoteRest:
      'We got 500+ signups before writing a single line of code. The AI insights showed us exactly what features to prioritize and helped us pivot away from a dead end.',
    authorName: 'Sarah Chen',
    authorTitle: 'Founder & CEO, TechFlow',
    authorImageSrc: '/images/smiller.jpeg',
  },
  map: {
    eyebrow: 'Validation Dashboard',
    title: 'Track Your Startup Journey in Real-Time',
    description:
      'Complete oversight of your validation process - from landing page performance to waitlist growth to user feedback, all in one dashboard.',
    labels: { scanning: 'Testing', irrigating: 'Converting', idle: 'Optimizing' },
  },
  analytics: {
    eyebrow: 'Hypany Analytics',
    title: 'Turn startup ideas into profitable ventures with real-time insights',
    cards: [
      {
        Icon: RiNavigationFill,
        title: 'Traffic Sources',
        description: 'Track where your best users come from and optimize your marketing spend.',
      },
      {
        Icon: RiRobot3Fill,
        title: 'AI Recommendations',
        description: 'Get smart suggestions on messaging, pricing, and feature priorities.',
      },
      {
        Icon: RiDropFill,
        title: 'Conversion Funnels',
        description: 'See exactly where users drop off and optimize your conversion rates.',
      },
      {
        Icon: RiPieChartFill,
        title: 'Market Analytics',
        description: 'Advanced analytics that predict market size and competition level.',
      },
    ],
  },
  performance: {
    title: 'Startup Validation Performance',
    totalValue: '2,847 signups',
    totalChange: '+387 signups',
    totalPercentage: '15.7%',
    periodLabel: 'This quarter',
    tableHeaders: {
      name: 'Hypothesis',
      value: 'Signups',
      expected: 'Target',
      resource: 'Ad Spend',
      metric1: 'Growth',
      metric2: 'Conversion',
      metric3: 'Engagement',
    },
    summary: [
      {
        name: 'AI Resume Builder',
        value: '1,249 signups',
        expected: '1,000 signups',
        resource: '$1,433 spent',
        metric1: '+24.9%',
        metric2: '+8.3%',
        metric3: '+12.1%',
        bgColor: 'bg-emerald-500',
        changeType: 'positive',
      },
      {
        name: 'Social Media Scheduler',
        value: '943 signups',
        expected: '800 signups',
        resource: '$889 spent',
        metric1: '+17.9%',
        metric2: '+6.2%',
        metric3: '+9.4%',
        bgColor: 'bg-blue-500',
        changeType: 'positive',
      },
      {
        name: 'Crypto Tax Tool',
        value: '655 signups',
        expected: '1,200 signups',
        resource: '$1,205 spent',
        metric1: '-45.4%',
        metric2: '-12.3%',
        metric3: '-18.7%',
        bgColor: 'bg-red-400',
        changeType: 'negative',
      },
    ],
  },
  callToAction: {
    title: 'Start building your waitlist today',
    description: 'Join thousands of founders who validate their ideas before building. Your first 100 signups are completely free.',
    primary: { label: 'Start Free', href: '/sign-up' },
    secondary: { label: 'View pricing', href: '/pricing' },
    imageSrc: '/images/farm-footer.webp',
    imageAlt: 'Startup workspace with analytics dashboard',
  },
} as const

// Validate the configuration
export const siteConfig = SiteConfigSchema.parse(siteConfigRaw)

// Export individual sections for easy access
export const { hero, features, testimonial, map, callToAction } = siteConfig

// Export type for TypeScript
export type SiteConfig = z.infer<typeof SiteConfigSchema>
