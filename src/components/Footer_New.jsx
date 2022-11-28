import React from 'react'

export default function Footer_New() {
    return (
        <footer class="bg-white ">
            <div class="container px-6 py-12 mx-auto">


                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div>
                        <p class="font-semibold text-gray-800 ">Quick Link</p>

                        <div class="flex flex-col items-start mt-5 space-y-2">
                            <a href="#" class="text-gray-600 transition-colors duration-300 hover:underline hover:text-blue-500">Home</a>
                            <a href="#" class="text-gray-600 transition-colors duration-300 hover:underline hover:text-blue-500">Who We Are</a>
                            <a href="#" class="text-gray-600 transition-colors duration-300 hover:underline hover:text-blue-500">Our Philosophy</a>
                        </div>
                    </div>

                    <div>
                        <p class="font-semibold text-gray-800 ">Industries</p>

                        <div class="flex flex-col items-start mt-5 space-y-2">
                            <a href="#" class="text-gray-600 transition-colors duration-300 hover:underline hover:text-blue-500">Retail & E-Commerce</a>
                            <a href="#" class="text-gray-600 transition-colors duration-300 hover:underline hover:text-blue-500">Information Technology</a>
                            <a href="#" class="text-gray-600 transition-colors duration-300 hover:underline hover:text-blue-500">Finance & Insurance</a>
                        </div>
                    </div>

                    <div>
                        <p class="font-semibold text-gray-800 dark:text-white">Services</p>

                        <div class="flex flex-col items-start mt-5 space-y-2">
                            <a href="#" class="text-gray-600 transition-colors duration-300 hover:underline hover:text-blue-500">Translation</a>
                            <a href="#" class="text-gray-600 transition-colors duration-300 hover:underline hover:text-blue-500">Proofreading & Editing</a>
                            <a href="#" class="text-gray-600 transition-colors duration-300 hover:underline hover:text-blue-500">Content Creation</a>
                        </div>
                    </div>

                    <div>
                        <p class="font-semibold text-gray-800 dark:text-white">Contact Us</p>

                        <div class="flex flex-col items-start mt-5 space-y-2">
                            <a href="#" class="text-gray-600 transition-colors duration-300 hover:underline hover:text-blue-500">+880 768 473 4978</a>
                            <a href="#" class="text-gray-600 transition-colors duration-300 hover:underline hover:text-blue-500">info@merakiui.com</a>
                        </div>
                    </div>
                </div>

                <hr class="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

                <div class="md:flex md:-mx-3 items-center md:justify-between">
                    <div>
                        <h3 class="text-xl font-semibold tracking-tight text-gray-800 md:text-2xl">Subscribe our newsletter to get update.</h3>
                        <p className="text-base tracking-tight text-slate-700">
                            Quick to learn, and even easier to use: Kids Hub’s staff-first platform is built with you in mind.
                        </p>
                    </div>

                    <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row">
                        <input type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Your email"></input>

                        <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            Get Started
                        </button>
                    </div>
                </div>

                <hr class="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

                <div class="flex flex-col items-center justify-between sm:flex-row">
                    <a href="#" class="text-2xl font-bold text-gray-800 transition-colors duration-300 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Brand</a>

                    <p class="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">© Copyright 2021. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}
