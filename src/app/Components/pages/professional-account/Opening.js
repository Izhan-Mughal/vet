import React, { useState } from 'react'

const Opening = () => {
    const [activeDays, setactiveDays] = useState(1)
    const [activeTime, setactiveTime] = useState(5)
    return (
        <>
            <section>
                <div className='row py-5'>
                    <div className='col-lg-5'>
                        <h6 className='fw-500 mb-3'>Giorni e orari</h6>
                        <div className='days-container'>
                            <div className='days-box'>
                                <div className={`${activeDays === 1 ? 'acitve-box' : ''}`} onClick={() => setactiveDays(1)}>LUN</div>
                                <div className={`${activeDays === 2 ? 'acitve-box' : ''}`} onClick={() => setactiveDays(2)}>MAR</div>
                                <div className={`${activeDays === 3 ? 'acitve-box' : ''}`} onClick={() => setactiveDays(3)}>MER</div>
                                <div className={`${activeDays === 4 ? 'acitve-box' : ''}`} onClick={() => setactiveDays(4)}>GIO</div>
                                <div className={`${activeDays === 5 ? 'acitve-box' : ''}`} onClick={() => setactiveDays(5)}>VEN</div>
                                <div className={`${activeDays === 6 ? 'acitve-box' : ''}`} onClick={() => setactiveDays(6)}>SAB</div>
                                <div className={`${activeDays === 7 ? 'acitve-box' : ''}`} onClick={() => setactiveDays(7)}>DOM</div>
                            </div>
                        </div>
                        <h6 className='fw-500 mt-4 mb-3'>Appuntamento ogni</h6>
                        <div className='days-container'>
                            <div className='time-box'>
                                <div className={`${activeTime === 1 ? 'acitve-box' : ''}`} onClick={() => setactiveTime(1)}>10 min</div>
                                <div className={`${activeTime === 2 ? 'acitve-box' : ''}`} onClick={() => setactiveTime(2)}>50 min</div>
                                <div className={`${activeTime === 3 ? 'acitve-box' : ''}`} onClick={() => setactiveTime(3)}>1 ora</div>
                                <div className={`${activeTime === 4 ? 'acitve-box' : ''}`} onClick={() => setactiveTime(4)}>30 min</div>
                                <div className={`${activeTime === 5 ? 'acitve-box' : ''}`} onClick={() => setactiveTime(5)}>Scegli</div>
                            </div>
                        </div>
                        <div className='form-group pro-account-input mt-3'>
                            <input type="text" placeholder='Minutes' />
                        </div>
                        <div>
                            <button className='theme-btn-outline fw-bold' style={{ fontSize: 13 }}>Vedi anteprima calendario</button>
                        </div>
                        <hr className='my-5' style={{ color: '#ECEDED', opacity: 1 }} />
                        <h6 className='fw-500 mb-3'>Nuove richieste</h6>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlhtmlFor="flexCheckDefault" style={{ fontWeight: 500, fontSize: '14px' }}>
                                Accetta in automatico nuove richieste di appuntamento
                            </label>
                        </div>
                        <hr className='my-5' style={{ color: '#ECEDED', opacity: 1 }} />
                        <h6 className='fw-500 mb-3'>Luogo di attività</h6>
                        <div className='place-of-business'>
                            <div className='place-of-business-item'>
                                <div>00049, Roma (RM), Italia </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                                    <path d="M7 7L17 17M7 17L17 7" stroke="#E95744" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className='place-of-business-item'>
                                <div>00049, Roma (RM), Italia</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                                    <path d="M7 7L17 17M7 17L17 7" stroke="#E95744" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <span style={{color:'#2B7980',fontWeight:500}}>Aggiungi orario</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Opening