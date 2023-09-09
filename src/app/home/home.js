import React from 'react'
import Banner from '../Components/pages/home/Banner'
import Dedicate from '../Components/pages/home/Dedicate'
import Oupartner from '../Components/sliders/Ourpartner'
import Professionals from '../Components/pages/home/Professionals'
import NearBy from '../Components/pages/home/NearBy'
import FindVet from '../Components/pages/home/FindVet'
import TrustedCompanion from '../Components/pages/home/TrustedCompanion '
import AreYou from '../Components/pages/home/AreYou'

const home = () => {
  return (
    <>
      <div className='bg-theme-grey home-page'>
        <Banner />
        <Dedicate />
        <Oupartner />
        <Professionals />
        <NearBy/>
        <FindVet/>
        <TrustedCompanion/>
        <AreYou/>
      </div>
    </>
  )
}

export default home