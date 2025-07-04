import React from 'react'
import SubFooter from '@/components/about/SubFooter'
import TeamSection from '@/components/about/TeamSection'
import StatsTable from '@/components/about/StatsTable'




const Page = () => {
  return (
    <div>
                                    <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero" className="w-full h-[50vh] object-cover rounded-b-lg my- 6" />

      <TeamSection />
      <StatsTable />
      <SubFooter />
    </div>
  )
}

export default Page
