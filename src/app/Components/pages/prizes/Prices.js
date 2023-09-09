'use client'
import React, { useState } from 'react'

const prices = () => {
  const [changePrice, setChangePrice] = useState(0)
  return (
    <>
      <section>
        <div className='container-fluid'>
          <div className='row py-5'>
            <div>
              <h1 className='fs-heading mb-0'>Prezzi</h1>
              <span style={{ color: '#7B8583', fontSize: '16px', fontWeight: 400 }}>Scegli il piano</span>
            </div>
            <div className='prizing-cards'>
              <div className='row justify-content-center'>
                <div className='banner-switch-box flex-wrap d-flex align-items-center' style={{ width: 'max-content' }}>
                  <label className="form-check-label fw-500" style={{ fontWeight: '#194B5F', cursor: 'pointer' }} htmlFor="flexSwitchCheckChecked">Mensile</label>
                  <div className="form-check form-switch">
                    <input className="form-check-input p-0" onChange={() => (changePrice === 1 ? setChangePrice(0) : setChangePrice(1))} style={{ position: 'relative', left: '17px', cursor: 'pointer' }} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                  </div>
                  <label className='fw-500' style={{ fontWeight: '#194B5F' }}>Annuale (-16%)</label>
                </div>
              </div>
              <div className='row price-box-div justify-content-between mt-5'>
                <div className='price-box'>
                  <div className='price-box-price'>
                    <span>Base</span>
                    <h2>€{(changePrice === 1 ? '243' : '289')}</h2>
                    <span>All’anno</span>
                  </div>
                  <div className='text-center my-4'>
                    <h5>1 operatore</h5>
                  </div>
                  <div className='mx-auto' style={{ backgroundColor: '#D9D9D9', height: 2, width: '60%' }}></div>
                  <div>
                    <button className='theme-btn-2 mx-auto fw-bold d-block price-btn' style={{ fontSize: 'small' }}>Prova gratis</button>
                  </div>
                </div>
                <div className='price-box'>
                  <div className='price-box-price'>
                    <span>Base</span>
                    <h2>€{(changePrice === 1 ? '410' : '489')}</h2>
                    <span>All’anno</span>
                  </div>
                  <div className='text-center my-4'>
                    <h5>2 operatore</h5>
                  </div>
                  <div className='mx-auto' style={{ backgroundColor: '#D9D9D9', height: 2, width: '60%' }}></div>
                  <div>
                    <button className='theme-btn-2 mx-auto fw-bold d-block price-btn' style={{ fontSize: 'small' }}>Prova gratis</button>
                  </div>
                </div>
                <div className='price-box'>
                  <div className='price-box-price'>
                    <span>Base</span>
                    <h2>€{(changePrice === 1 ? '578' : '689')}</h2>
                    <span>All’anno</span>
                  </div>
                  <div className='text-center my-4'>
                    <h5>3 operatore</h5>
                  </div>
                  <div className='mx-auto' style={{ backgroundColor: '#D9D9D9', height: 2, width: '60%' }}></div>
                  <div>
                    <button className='theme-btn-2 mx-auto fw-bold d-block price-btn' style={{ fontSize: 'small' }}>Prova gratis</button>
                  </div>
                </div>

              </div>
              <div style={{ color: '#000', textAlign: 'center', fontWeight: 500, marginTop: 40 }}>
                L’app è sempre gratis per i tuoi clienti.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default prices