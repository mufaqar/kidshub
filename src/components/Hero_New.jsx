import Image from 'next/image'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'
import MainScreen from '@/images/screenshots/payroll.png';
import Featured from '../../public/images/kidshub-feature.png';




export function Hero_New() {
  return (
    <Container className="md:pt-6 md:pb-10 py-10 gap-8 flex md:flex-row flex-col items-center">
      <div className='md:w-1/2 w-full'>
        <h1 className="font-display text-3xl font-medium tracking-tight text-slate-900 md:text-6xl">
          Childcare Software{' '}<span className="relative whitespace-nowrap text-blue-600">
            Built For You
          </span>{' '}
        </h1>
        <p className="mt-6 text-lg tracking-tight text-slate-700">
          Quick to learn, and even easier to use: Kids Hub’s staff-first platform is built with you in mind.
        </p>
        <div className="flex flex-col mt-8 space-y-3 lg:space-y-0 lg:flex-row">
          <input type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Your email"></input>

          <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            Get Started
          </button>
        </div>
      </div>
      <div className='md:w-1/2 w-full'>
        <Image src={Featured} alt="Image"  />
      </div>
    </Container>
  )
}
