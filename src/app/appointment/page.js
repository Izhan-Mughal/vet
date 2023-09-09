import React from 'react'
import { Header } from '../Components/layout/Header'
import Footer from '../Components/layout/Footer'
import Banner from '../Components/pages/appointment/Banner'
import Details from '../Components/pages/appointment/Details'
import DetailCard from '../Components/pages/appointment/DetailCard'

const page = () => {
    return (
        <>
            <Header />
            <Banner />
            <section className='appointment-section'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-xxl-9 col-lg-8'>
                            <Details />
                        </div>
                        <div className='col-xxl-3 col-lg-4'>
                            <DetailCard/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default page