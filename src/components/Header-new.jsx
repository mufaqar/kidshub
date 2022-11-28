import { useState } from "react"
import { Products } from "../../public/navItems"
export {Products, Pricing } from '../../public/navItems'

export default function Header_New() {
    const [menu, setMenu] = useState(null)
    const handleNav =id=>{
        setMenu(id)
        if(menu === id){
            return setMenu(null)
        }
    }
    return (
        <>
            <div className="relative border-b-2 border-gray-100">
                <div className="mx-auto container px-4">
                    <div className="flex items-center justify-between py-3 md:justify-start md:space-x-10">
                        <div className="flex justify-start ">
                            <a href="#">
                                <span className="sr-only">Your Company</span>
                                KidsHub
                            </a>
                        </div>
                        <div className="-my-2 -mr-2 md:hidden">
                            <span type="button" className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                                <span className="sr-only">Open menu</span>

                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </span>
                        </div>
                        <nav className="hidden space-x-4 md:flex">
                            
                            <div className="relative">

                                <span onClick={()=>handleNav(1) }
                                    className="cursor-pointer text-gray-500 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <span>Products</span>

                                    <svg className=" ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <div className={`${menu === 1 ? 'block' : 'hidden'} absolute z-10 -ml-4 mt-3 w-screen max-w-5xl transform px-2 sm:px-0 `}>
                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">

                                        <div className="relative grid md:grid-cols-3 bg-white px-5 py-6 sm:p-8">

                                            <div className="flex flex-col items-start">
                                                <a href="#" className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">Run Your Childcare Center Effiencty</a>
                                                <ul className="space-y-2 list-outside">
                                                   
                                                    {
                                                        Products.map((nav,i)=>(

                                                            <li className="text-sm font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                            <a href="#">{nav.name}</a>
                                                        </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                            <div className="flex flex-col items-start">
                                                <a href="#" className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">Engage Your Parents</a>
                                                <ul className="space-y-2 list-outside">
                                                    <li className="text-sm font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                        <a href="#">Messaging</a>
                                                    </li>
                                                    <li className="text-sm font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                        <a href="#">Activities</a>
                                                    </li>
                                                    <li className="text-sm font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                        <a href="#">Stories</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="flex flex-col items-start">
                                                <a href="#" className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">Manage Productive Daycare Staff</a>
                                                <ul className="space-y-2 list-outside">
                                                    <li className="text-sm font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                        <a href="#">Schedules</a>
                                                    </li>
                                                    <li className="text-sm font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                        <a href="#">Time Tracking</a>
                                                    </li>
                                                    <li className="text-sm font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                        <a href="#">Messaging</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="flex flex-col items-start">
                                                <a href="#" className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">Streamline Childcare Managment</a>
                                                <ul className="space-y-2 list-outside">
                                                    <li className="text-sm font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                        <a href="#">Online Forms</a>
                                                    </li>
                                                    <li className="text-sm font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                        <a href="#">Centralize Student and Staff Information</a>
                                                    </li>
                                                    <li className="text-sm font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                        <a href="#">Reports</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="flex flex-col items-start">
                                                <a href="#" className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">See How Kids Hub Products Work Together</a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">

                                <span onClick={()=>handleNav(2) }
                                    className="cursor-pointer text-gray-500 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <span>Pricing</span>

                                    <svg className=" ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <div className={`${menu === 2 ? 'block' : 'hidden'} absolute z-10 -ml-4 mt-3 w-screen max-w-sm transform px-2 sm:px-0 `}>
                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                        <div className="relative grid bg-white px-5 py-6 sm:p-8">
                                            <ul className="space-y-2 list-outside">
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">Starter</a>
                                                </li>
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">Basic</a>
                                                </li>
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">Growth</a>
                                                </li>
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">Pro</a>
                                                </li>
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">Enterprise</a>
                                                </li>
                                            </ul>



                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">

                                <span onClick={()=>handleNav(3) }
                                    className="cursor-pointer text-gray-500 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <span>Solutions</span>

                                    <svg className=" ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <div className={`${menu === 3 ? 'block' : 'hidden'} absolute z-10 -ml-4 mt-3 w-screen max-w-sm transform px-2 sm:px-0 `}>
                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                        <div className="relative grid bg-white px-5 py-6 sm:p-8">
                                            <ul className="space-y-2 list-outside">
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">Attendance</a>
                                                </li>
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">Online Payments</a>
                                                </li>
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">Automated Billing</a>
                                                </li>
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">Messaging</a>
                                                </li>
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">Online Forms</a>
                                                </li>
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">Schedules</a>
                                                </li>
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">Forms</a>
                                                </li>
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">Profiles & Roles</a>
                                                </li>
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">Reports</a>
                                                </li>
                                            </ul>



                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <span onClick={()=>handleNav(4) }
                                    className="cursor-pointer text-gray-500 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <span>Childcare Types</span>

                                    <svg className=" ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <div className={`${menu === 4 ? 'block' : 'hidden'} absolute z-10 -ml-4 mt-3 w-screen max-w-sm transform px-2 sm:px-0 `}>
                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                        <div className="relative grid bg-white px-5 py-6 sm:p-8">
                                            <ul className="space-y-2 list-outside">
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">Home Daycare</a>
                                                </li>
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">Childcare Center</a>
                                                </li>
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">Preschool</a>
                                                </li>
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">Montesouri</a>
                                                </li>
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">Forest Schools</a>
                                                </li>
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">Nature Schools</a>
                                                </li>
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">Waldorf</a>
                                                </li>
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">Reggio Emilia</a>
                                                </li>
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">Others</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <span onClick={()=>handleNav(5) }
                                    className="cursor-pointer text-gray-500 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <span>Learn</span>

                                    <svg className=" ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <div className={`${menu === 5 ? 'block' : 'hidden'} absolute z-10 -ml-4 mt-3 w-screen max-w-sm transform px-2 sm:px-0 `}>
                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                        <div className="relative grid bg-white px-5 py-6 sm:p-8">
                                            <ul className="space-y-2 list-outside">
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">Video Course</a>
                                                </li>
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">Compare</a>
                                                </li>
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">Customer Stories</a>
                                                </li>
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">Blog</a>
                                                </li>
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">Free Tools & Templates</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <span onClick={()=>handleNav(6) }
                                    className="cursor-pointer text-gray-500 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <span>Support</span>

                                    <svg className=" ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <div className={`${menu === 6 ? 'block' : 'hidden'} absolute z-10 -ml-4 mt-3 w-screen max-w-sm transform px-2 sm:px-0 `}>
                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                        <div className="relative grid bg-white px-5 py-6 sm:p-8">
                                            <ul className="space-y-2 list-outside">
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">Help Center</a>
                                                </li>
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">24/7 Support</a>
                                                </li>
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">Local Partner Advocates</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <span onClick={()=>handleNav(7) }
                                    className="cursor-pointer text-gray-500 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <span>Company</span>

                                    <svg className=" ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <div className={`${menu === 7 ? 'block' : 'hidden'} absolute z-10 -ml-4 mt-3 w-screen max-w-sm transform px-2 sm:px-0 `}>
                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                        <div className="relative grid bg-white px-5 py-6 sm:p-8">
                                            <ul className="space-y-2 list-outside">
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">About Us</a>
                                                </li>
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">News</a>
                                                </li>
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">Leadership</a>
                                                </li>
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">Careers</a>
                                                </li>
                                                <li className="text-base font-medium rounded-lg p-3 text-gray-900 hover:bg-gray-50">
                                                    <a href="#">Investors</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                            
                            <a href="#" className="ml-8 inline-flex items-center justify-center whitespace-nowrap border border-transparent bg-[#559fff] px-5 py-1 text-base font-medium text-white shadow-sm hover:bg-[#3c91ff] rounded-full">Start with free trial</a>
                        </div>
                    </div>
                </div>

                {/* mobile menu */}
                <div className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition hidden">
                    <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="px-5 pt-5 pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                                </div>
                                <div className="-mr-2">
                                    <button type="button" className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>

                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    <a href="#" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">

                                        <svg className="h-6 w-6 flex-shrink-0 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                                        </svg>
                                        <span className="ml-3 text-base font-medium text-gray-900">Analytics</span>
                                    </a>

                                    <a href="#" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">

                                        <svg className="h-6 w-6 flex-shrink-0 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                                        </svg>
                                        <span className="ml-3 text-base font-medium text-gray-900">Engagement</span>
                                    </a>

                                    <a href="#" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">

                                        <svg className="h-6 w-6 flex-shrink-0 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                        </svg>
                                        <span className="ml-3 text-base font-medium text-gray-900">Security</span>
                                    </a>

                                    <a href="#" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">

                                        <svg className="h-6 w-6 flex-shrink-0 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                                        </svg>
                                        <span className="ml-3 text-base font-medium text-gray-900">Integrations</span>
                                    </a>

                                    <a href="#" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">

                                        <svg className="h-6 w-6 flex-shrink-0 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12c0-1.232.046-2.453.138-3.662a4.006 4.006 0 013.7-3.7 48.678 48.678 0 017.324 0 4.006 4.006 0 013.7 3.7c.017.22.032.441.046.662M4.5 12l-3-3m3 3l3-3m12 3c0 1.232-.046 2.453-.138 3.662a4.006 4.006 0 01-3.7 3.7 48.657 48.657 0 01-7.324 0 4.006 4.006 0 01-3.7-3.7c-.017-.22-.032-.441-.046-.662M19.5 12l-3 3m3-3l3 3" />
                                        </svg>
                                        <span className="ml-3 text-base font-medium text-gray-900">Automations</span>
                                    </a>
                                </nav>
                            </div>
                        </div>
                        <div className="space-y-6 py-6 px-5">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Pricing</a>

                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Docs</a>

                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Help Center</a>

                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Guides</a>

                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Events</a>

                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Security</a>
                            </div>
                            <div>
                                <a href="#" className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Sign up</a>
                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                    Existing customer?
                                    <a href="#" className="text-indigo-600 hover:text-indigo-500">Sign in</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
