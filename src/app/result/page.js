import React from 'react'
import { Header } from '../Components/layout/Header'
import Footer from '../Components/layout/Footer';
import SearchBanner from '../Components/pages/result/SearchBanner';
import Results from '../Components/pages/result/Results';

export default function result() {
  return (
    <>
      <Header/>
      <SearchBanner/>
      <div className='result-bg'>
        <Results/>
      </div>
      <Footer/>
    </>
  )
}
