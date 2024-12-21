import React from 'react'
import { MdEmail } from 'react-icons/md'
import { services } from '../constants'


const CalltoAction = () => {
  return (
    <section className='py-16 lg:py-24'>
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="flex flex-col items-start justify-center gap-6">
            <h1 className='text-2xl font-bold'>How we can help you</h1>
            <p className='text-sm lg:text-md text-text'>
              Follow our newsletter. We will regularly update. <br /> Our latest project and availability.
            </p>
            <div className="w-11/12 lg:w-6/12 p-1 lg:p-2 bg-gray-200 rounded-xl flex items-center justify-between">
              <div className="flex items-center justify-center gap-1 ">
                <MdEmail className='text-2xl text-text'/>
                <input className='w-full p-1 bg-gray-100 lg:p-2 text-xs text-text focus:border-transparent focus:outline-none' type="text" placeholder='Enter your email address'/>
              </div>
              <button className='text-xs px-2 py-2 lg:px-4 bg-primary text-white rounded-md hover:shadow-md hover:bg-opacity-85'>
                  Subscribe
                </button>

            </div>
          </div>

          <div className="my-8 grid grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div className="flex flex-col items-start justify-center gap-2 my-4">
                  <img src={service.image} alt={service.title} />
                  <h1 className='font-bold cursor-pointer hover:text-primary'>{service.title}</h1>
                  <p className='text-xs lg:text-md text-text'>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default CalltoAction
