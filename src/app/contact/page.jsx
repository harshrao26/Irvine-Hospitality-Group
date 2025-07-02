import React from 'react'
import Contact from '@/components/contact/Contact'
import ContactForm from '@/components/contact/ContactForm'
import Location from '@/components/contact/Location'
 

const Page = () => {
  return (
    <div>
                              <img src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero" className="w-full h-[50vh] object-cover rounded-b-lg my- 6" />

      <Contact />
      <ContactForm />
      <Location />
      
    </div>
  )
}

export default Page
