import clsx from 'clsx'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'

function Plan({ name, price, period, description, href, features, featured = false }) {
  return (
    <section
      className={clsx('flex flex-col rounded-3xl px-6 sm:px-8', {
        'order-first bg-blue-600 py-8 lg:order-none': featured,
        'lg:py-8 bg-slate-900': !featured,
      })}
    >
      <h3 className="mt-5 font-display text-lg text-white">{name}</h3>
      <p
        className={clsx('mt-2 text-base', {
          'text-white': featured,
          'text-slate-400': !featured,
        })}
      >
        {description}
      </p>
      <div className='flex items-baseline'>
        <p className="order-first font-display text-5xl font-light tracking-tight text-white">
          {price}
        </p>
        <p className="order-first font-display text-base font-light tracking-tight text-white">
          {period}
        </p>
      </div>
      <ul
        className={clsx('order-last mt-10 space-y-3 text-sm', {
          'text-white': featured,
          'text-slate-200': !featured,
        })}
      >
        {features.map((feature) => (
          <li key={feature} className="flex">
            <svg
              aria-hidden="true"
              className={clsx('h-6 w-6 flex-none', {
                'fill-white stroke-white': featured,
                'fill-slate-400 stroke-slate-400': !featured,
              })}
            >
              <path
                d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                strokeWidth={0}
              />
              <circle
                cx={12}
                cy={12}
                r={8.25}
                fill="none"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="ml-4">{feature}</span>
          </li>
        ))}
      </ul>
      <ButtonLink
        href={href}
        variant={featured ? 'solid' : 'outline'}
        color="white"
        className="mt-8"
        aria-label={`Get started with ${name} plan for ${price}`}
      >
        Get started
      </ButtonLink>
    </section>
  )
}

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="py-20 sm:py-32"
    >
      <h2 id="pricing-title" className="sr-only">
        Pricing
      </h2>
      <Container>
        <div className="md:text-center">
          <p className="font-display text-3xl tracking-tight text-black sm:text-4xl">
          Save 10% If You Signup Before End of Year
          </p>
          <p className="mt-4 text-lg text-black">
          Paid Monthly / Paid Annually
          </p>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-8 mt-12'>
          <Plan
            name="Starter"
            price="$17"
            period="\month"
            description="The perfect plan for in-home centers. "
            href="/register"
            features={[
              'Up to 10 Active Students / 1 Location',
              'Automated Billing',
              'Online Payments',
            ]}
          />
          <Plan
            featured
            name="Basic"
            price="$40"
            period="\month"
            tip=""
            description="The perfect plan to help your center grow."
            href="/register"
            features={[
              'Up to 20 Active Students / 1 Location',
              'Digitzed Attendance',
              'Everything included in Starter',
            ]}
          />
          <Plan
            name="Growth / Pro / Enterprise"
            price="Custom"
            period="\month"
            description="Price the perfect plan for your center during the trial process."
            href="/register"
            features={[
              'Unlimited Active Students / Unlimited Locations',
              'Parent Engagement',
              'Forms',
              'Scheduling',
              'Everything included in Basic',
            ]}
          />
        </div>


      </Container>
    </section>
  )
}
