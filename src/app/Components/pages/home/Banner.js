import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <>
      <section className='bg-white'>
        <div className='banner-image' style={{ backgroundImage: "url('/banner.png')" }}>
        </div>
        <div className='banner-content'>
          <h1 className='display-3'>Trova il veterinario <span className='text-theme'>ideale</span></h1>
          <div className='search-bar'>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M13 1L8.66665 13C8.6374 13.0638 8.59044 13.1179 8.53135 13.1558C8.47226 13.1938 8.40353 13.2139 8.33332 13.2139C8.26311 13.2139 8.19437 13.1938 8.13528 13.1558C8.0762 13.1179 8.02923 13.0638 7.99999 13L5.66665 8.33333L0.999986 6C0.936158 5.97075 0.88207 5.92379 0.84415 5.8647C0.80623 5.80561 0.786072 5.73688 0.786072 5.66667C0.786072 5.59646 0.80623 5.52772 0.84415 5.46863C0.88207 5.40954 0.936158 5.36258 0.999986 5.33333L13 1Z" fill="#6F7E84" stroke="#6F7E84" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <input type="text" name="" placeholder='Inserisci un indirizzo' />
            <Link href='/result' className='theme-btn ms-auto d-block text-decoration-none text-center fw-bold' style={{ width: 250 }}>Trova un veterinario</Link>
          </div>
          <div className='banner-switch-box d-flex align-items-center'>
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Solo veterinari a domicilio</label>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
            </div>
          </div>
        </div>


      </section>
    </>
  )
}

export default Banner