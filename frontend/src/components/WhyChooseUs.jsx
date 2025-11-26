import React from 'react'

export const WhyChooseUs = () => {
  return (
     <section id='chooseus' className="py-16 flex bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
          <h2 className="text-4xl font-bold text-center mb-12">
            WHY CHOOSE US
          </h2>

          <div className="grid  grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="flex items-center">
                <span className="text-5xl font-bold text-orange-500">12,000+</span>
              </div>
            </div>

            <div className="text-center">
              <div className="flex items-center gap-5 mb-4">
                <span className="text-5xl font-bold text-orange-500 ">68%</span>
                <p className="text-xl font-bold">Frine Transtarts</p>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center">
                <p className="text-3xl font-bold">Official partner</p>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center gap-5 mb-4">
                <span className="text-3xl font-bold text-orange-500 ">4075</span>
                <p className="text-xl font-bold">Brand Enterprices</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white w-1/2">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <h2 className="text-4xl font-bold text-center mb-12">HOW IT WORKS</h2> */}

          <div className="grid grid-cols-1 gap-8 lg:pl-24">
            <div className="flex gap-5 items-center">
              <div className="border-2 border-orange-500 text-orange-500 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Choose your event</h3>
            </div>

            <div className="flex gap-5 items-center">
              <div className="border-2 border-orange-500 text-orange-500 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">
                We arrange your travel + tickets
              </h3>
            </div>

            <div className="flex gap-5 items-center">
              <div className="border-2 border-orange-500 text-orange-500 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">
                Enjoy a seamless sports experience
              </h3>
            </div>
          </div>
        </div>
      </div>
      </section>
  )
}
