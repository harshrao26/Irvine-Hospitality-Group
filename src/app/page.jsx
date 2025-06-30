import React from 'react'
import Hero from '@/components/Hero'
import BrandIntro from '@/components/BrandIntro'
import ExpertiseSection from '@/components/ExpertiseSection'
import ServicesOverlay from '@/components/ServicesOverlay'
import MagnifierTextBlock from '@/components/MagnifierTextBlock'
import FindNearestContact from '@/components/FindNearestContact'
import LayoutProject from '@/components/LayoutProject'
import BusinessCTASection from '@/components/BusinessCTASection'
import ImageMarquee from '@/components/ImageMarquee'
import StatsSection from '@/components/StatsSection'
import AboutUsSection from '@/components/AboutUsSection'
import BestCollection from '@/components/BestCollection'     
import ClientMarquee from '@/components/ClientMarquee' 
import ProcessTimeline from '@/components/ProcessTimeline'











 const Page = () => {
  return (
    <div>
      <Hero />
            <AboutUsSection />
                  <StatsSection />


                  <ClientMarquee />
      <BrandIntro />



      <ExpertiseSection />
      <ProcessTimeline />
      <BestCollection />
      <ServicesOverlay />
      <MagnifierTextBlock />
      <FindNearestContact />
      <LayoutProject />
      <BusinessCTASection />
      <ImageMarquee />
     </div>
  )
}

export default Page
