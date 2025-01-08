import React from 'react'
import HeroSlider from './HeroSlider'

import HotelRoomsCarousel from './HotelRoomsCarousel'
import WhyChooseUs from './WhyChooseUs'
import ReviewCarousel from './ReviewCarousel'
import ServiceCarousel from './ServiceCarousel'
import HotelGallery from './HotelGallery'
import CEOSection from './CEOSection'

export default function Home() {
  return (
    <div>
      <HeroSlider/>
      <WhyChooseUs/>
      <HotelRoomsCarousel/>
      <ServiceCarousel/>
      <ReviewCarousel/>
      <HotelGallery/>
      <CEOSection/>
    </div>
  )
}
