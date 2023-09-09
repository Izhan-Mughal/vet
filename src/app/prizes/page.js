import React from 'react'
import { Header } from '../Components/layout/Header'
import  Prices  from '../Components/pages/prizes/Prices'
import Footer from '../Components/layout/Footer'

const page = () => {
    return (
        <>
            <Header/>
                <Prices/>
            <Footer/>
        </>
    )
}

export default page