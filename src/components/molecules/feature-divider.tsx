import { cx } from '@template-solar/lib/utils'
import { Divider } from '../atoms/divider'

export const FeatureDivider = ({ className }: { className?: string }) => {
  return (
    <Divider className={cx('my-16 max-w-6xl', className)}>
      <div className="relative h-4 w-5">
        <div
          className="absolute top-0 left-0 size-1 rounded-full bg-gray-300"
          style={{
            animation: `wave 2s infinite ease-in-out`,
            animationDelay: `${0 * 0.2}s`,
          }}
        />
        <div
          className="absolute top-0 left-4 size-1 rounded-full bg-gray-300"
          style={{
            animation: `wave 2s infinite ease-in-out`,
            animationDelay: `${0 * 0.2}s`,
          }}
        />
        <div
          className="absolute top-1 left-2 size-1 rounded-full bg-gray-300"
          style={{
            animation: `wave 2s infinite ease-in-out`,
            animationDelay: `${2 * 0.2}s`,
          }}
        />
        <div
          className="absolute top-2 left-0 size-1 rounded-full bg-gray-300"
          style={{
            animation: `wave 2s infinite ease-in-out`,
            animationDelay: `${3 * 0.2}s`,
          }}
        />
        <div
          className="absolute top-2 left-4 size-1 rounded-full bg-gray-300"
          style={{
            animation: `wave 2s infinite ease-in-out`,
            animationDelay: `${3 * 0.2}s`,
          }}
        />
        <div
          className="absolute top-3 left-2 size-1 rounded-full bg-gray-300"
          style={{
            animation: `wave 2s infinite ease-in-out`,
            animationDelay: `${5 * 0.2}s`,
          }}
        />
      </div>
    </Divider>
  )
}
