import { Container } from '@/components/Container'
import Footer_New from '@/components/Footer_New'
import Header_New from '@/components/Header-new'
import { Hero_New } from '@/components/Hero_New'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import React from 'react'

export default function Landing() {
  return (
    <>
      <Header_New />

      <Hero_New />

      <PrimaryFeatures />

      <Pricing />

      <Container className="md:pt-16 md:pb-16 gap-10 flex md:flex-row flex-col">
        <div className='md:w-1/2 w-full'>
          <h1 className="font-display text-3xl font-medium tracking-tight text-slate-900 md:text-4xl">
            Save Time / Save Money
          </h1>
          <p className="mt-6 text-lg tracking-tight text-slate-700">
            Unlike some clunky, complicated software and DIY solutions, Kids Hub was built to empower you and your staff to manage every aspect of your business so that you can focus on what really matters.
          </p>
          <div className='h-[1px] w-full my-6 bg-slate-200'></div>
          <div className='flex md:flex-row flex-col gap-8'>
            <div>
              <h3 className='font-display text-2xl font-medium tracking-tight text-blue-600 md:text-3xl'>94%</h3>
              <p className="mt-6 text-lg tracking-tight text-slate-700">
                Customers Say They Save Time
              </p>
            </div>
            <div>
              <h3 className='font-display text-2xl font-medium tracking-tight text-blue-600 md:text-3xl'>98%</h3>
              <p className="mt-6 text-lg tracking-tight text-slate-700">
                Increase in Parent Satisfaction
              </p>
            </div>
          </div>
        </div>
        <div className='md:w-1/2 w-full grid grid-cols-2 gap-5'>
          <div className='flex flex-col justify-center items-center shadow-xl py-10'>
            <svg className="h-16 w-16 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="mt-6 text-lg tracking-tight text-slate-700">
              Save Time
            </p>
          </div>
          <div className='flex flex-col justify-center items-center shadow-xl py-10'>
            <svg className="h-16 w-16 text-slate-700" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="9" />  <line x1="9" y1="10" x2="9.01" y2="10" />  <line x1="15" y1="10" x2="15.01" y2="10" />  <path d="M9.5 15a3.5 3.5 0 0 0 5 0" /></svg>
            <p className="mt-6 text-lg tracking-tight text-slate-700">
              Increase Parent Satisfaction
            </p>
          </div>
          <div className='flex flex-col justify-center items-center shadow-xl py-10'>
            <svg className="h-16 w-16 text-slate-700" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="4 19 8 13 12 15 16 10 20 14 20 19 4 19" />  <polyline points="4 12 7 8 11 10 16 4 20 8" /></svg>
            <p className="mt-6 text-lg tracking-tight text-slate-700">
              Increase Compliance
            </p>
          </div>
          <div className='flex flex-col justify-center items-center shadow-xl py-10'>
            <svg className="h-16 w-16 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <line x1="12" y1="1" x2="12" y2="23" />  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
            <p className="mt-6 text-lg tracking-tight text-slate-700">
              Save Money
            </p>
          </div>
        </div>
      </Container>

      <Testimonials />

      <Footer_New />
    </>
  )
}
