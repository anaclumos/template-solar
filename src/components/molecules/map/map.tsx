import { Icons } from '@template-solar/components/atoms/icons'
import { RiHome9Fill, RiPlaneLine, RiSignalTowerFill, RiTruckFill } from '@remixicon/react'
import { SvgMap } from './svg-map'

export type MapProps = {
  id?: string
  eyebrow: string
  title: string
  description: string
  labels: {
    scanning: string
    irrigating: string
    idle: string
  }
}

export const MapSection = ({ id = 'farm-management', eyebrow, title, description, labels }: MapProps) => {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="relative flex w-full max-w-6xl scroll-my-24 flex-col items-center justify-center overflow-hidden rounded-2xl bg-gray-950 px-10 shadow-2xl shadow-black/50 sm:px-16 md:px-28 lg:mx-auto px-4 xl:px-0"
    >
      <div className="absolute left-0 z-10 h-full backdrop-blur-[2px]" aria-hidden>
        <svg
          className="h-full w-8 border-r border-zinc-900 stroke-zinc-800 sm:w-20"
          style={{
            maskImage: 'linear-gradient(transparent, white 10rem, white calc(100% - 10rem), transparent)',
          }}
          aria-hidden="true"
        >
          <defs>
            <pattern id={`${id}-diag-border-left`} patternUnits="userSpaceOnUse" width="64" height="64">
              {Array.from({ length: 17 }, (_, i) => {
                const offset = i * 8
                return (
                  <path
                    key={`left-${offset}`}
                    d={`M${-106 + offset} 110L${22 + offset} -18`}
                    stroke=""
                    strokeWidth="1"
                  />
                )
              })}
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${id}-diag-border-left)`} />
        </svg>
      </div>
      <div className="absolute right-0 z-10 h-full backdrop-blur-[2px]" aria-hidden>
        <svg
          className="h-full w-8 border-r border-zinc-900 stroke-zinc-800 sm:w-20"
          style={{
            maskImage: 'linear-gradient(transparent, white 10rem, white calc(100% - 10rem), transparent)',
          }}
          aria-hidden="true"
        >
          <defs>
            <pattern id={`${id}-diag-border-right`} patternUnits="userSpaceOnUse" width="64" height="64">
              {Array.from({ length: 17 }, (_, i) => {
                const offset = i * 8
                return (
                  <path
                    key={`right-${offset}`}
                    d={`M${-106 + offset} 110L${22 + offset} -18`}
                    stroke=""
                    strokeWidth="1"
                  />
                )
              })}
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${id}-diag-border-right)`} />
        </svg>
      </div>

      <div className="pt-12 text-base font-semibold tracking-tight text-orange-400 sm:pt-20 sm:text-lg">{eyebrow}</div>
      <h2
        id={`${id}-title`}
        className="mt-6 max-w-[700px] text-center text-2xl font-semibold tracking-tight text-balance text-white md:text-5xl"
      >
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-center text-base text-balance text-gray-400 sm:mt-8 sm:text-xl">
        {description}
      </p>

      <div className="relative mt-20 mb-10 ml-[17rem] scale-90 sm:mb-16 md:mt-24 md:ml-0 md:scale-100">
        <SvgMap className="w-[50rem] shrink-0" />
        <div className="absolute -top-3 left-[130px]">
          <div className="relative flex items-center justify-center">
            <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15"></div>
            <div className="absolute -top-4 -right-[3.7rem] flex w-fit items-center justify-center rounded-full bg-gray-950 px-1.5 py-0.5 text-xs whitespace-nowrap text-white ring-1 ring-white/15">
              {labels.scanning}
            </div>
            <RiPlaneLine className="relative size-5 rotate-90 text-white" />
            <div
              style={{
                animationDelay: '3.5s',
              }}
              className="absolute size-10 animate-[ping_5s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
            ></div>
          </div>
        </div>
        <div className="absolute top-[73px] left-[243px]">
          <div className="relative flex items-center justify-center">
            <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15"></div>
            <div className="absolute -top-4 -right-[3.7rem] flex w-fit items-center justify-center rounded-full bg-gray-950 px-1.5 py-0.5 text-xs whitespace-nowrap text-white ring-1 ring-white/15">
              {labels.irrigating}
            </div>
            <Icons.QuadCopter className="relative size-5 rotate-90 text-white" />
            <div
              style={{
                animationDelay: '3.5s',
              }}
              className="absolute size-10 animate-[ping_5s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
            ></div>
          </div>
        </div>
        <div className="absolute top-32 right-[300px]">
          <div className="relative flex items-center justify-center">
            <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15"></div>
            <div className="absolute -top-4 -right-[3.7rem] flex w-fit items-center justify-center rounded-full bg-gray-950 px-1.5 py-0.5 text-xs whitespace-nowrap text-white ring-1 ring-white/15">
              {labels.scanning}
            </div>
            <RiPlaneLine className="relative size-5 rotate-90 text-white" />
            <div
              style={{
                animationDelay: '3.5s',
              }}
              className="absolute size-10 animate-[ping_5s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
            ></div>
          </div>
        </div>
        <div className="absolute top-20 right-[390px]">
          <div className="relative flex items-center justify-center">
            <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15"></div>
            <RiHome9Fill className="relative size-5 text-white" />
          </div>
        </div>
        <div className="absolute top-12 right-[430px]">
          <div className="relative flex items-center justify-center">
            <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15"></div>
            <div className="absolute -top-4 -right-7 flex w-fit items-center justify-center rounded-full bg-gray-950 px-1.5 py-0.5 text-xs whitespace-nowrap text-white ring-1 ring-white/15">
              {labels.idle}
            </div>
            <RiTruckFill className="relative size-5 text-white" />
          </div>
        </div>
        <div className="absolute top-9 right-56">
          <div className="relative flex items-center justify-center">
            <RiSignalTowerFill className="z-10 size-5 text-white" />
            <div className="absolute size-10 rounded-full bg-gray-950 ring-1 ring-white/15 backdrop-blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
