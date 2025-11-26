import { CheckCircle } from 'lucide-react'
import React from 'react'

export const FAQ = () => {
  return (
    <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8">FAQ</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center">
                <CheckCircle className="text-orange-500 mr-3" size={24} />
                <p className="font-semibold">
                  What forms of payment do we accept?
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center">
                <CheckCircle className="text-orange-500 mr-3" size={24} />
                <p className="font-semibold">
                  What happens if there is a(n) +€1,250,000 claims?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
