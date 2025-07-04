import React from 'react'
import AllSectionSliders from '@/components/portfolio/AllSectionSliders'
import ClientMarquee from '@/components/ClientMarquee'




const Page = () => {
  return (
    <div className='bg-'>
                                    <img src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero" className="w-full h-[50vh] object-cover rounded-b-lg my- 6" />

      <ClientMarquee />
      <AllSectionSliders />
    </div>
  )
}

export default Page
