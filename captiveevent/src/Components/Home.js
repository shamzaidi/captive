import React from 'react'
import Banner from './Banner'
import Services from './Services'
import Work from './Work'
import Connect from './Connect'
import ServiceIcon from './ServiceIcon'
import ContactNew from './ContactNew'

const Home = () => {
  return (
    <>
        <Banner/>
        {/* <Services/> */}
        <ServiceIcon/>
        <Work/>
        <Connect/>
    </>
  )
}

export default Home