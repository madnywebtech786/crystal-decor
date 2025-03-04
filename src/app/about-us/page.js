import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import AboutUs from '../sections/AboutUs'

export default function page() {
  return (
    <div>
        <Breadcrumb name={'About Us'} />
        <AboutUs pageType='exterior' />
    </div>
  )
}
