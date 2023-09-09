import React from 'react'

const ClosingPeriod = () => {
    return (
        <>
            <section>
                <div className='row py-5'>
                    <div className='appointment-scheduled-box'>
                        <div className='d-flex gap-2 flex-wrap'>
                            <div className='appointment-scheduled-lbl'>
                                <label htmlFor="">Da</label>
                                <div className='appointment-scheduled-item'>
                                    <div className='appointment-scheduled-m'>24 Dicembre 2023</div>
                                    <div>9:00</div>
                                </div>
                            </div>
                            <div className='appointment-scheduled-lbl'>
                                <label htmlFor="">Da</label>
                                <div className='appointment-scheduled-item'>
                                    <div className='appointment-scheduled-m'>31 Dicembre 2023</div>
                                    <div>18:00</div>
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className='d-lg-block d-none' width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M7 7L17 17M7 17L17 7" stroke="#E95744" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className='d-flex gap-1 my-3' style={{ color: '#00A110', fontWeight: 500, fontSize: 14 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M20.207 6.79303C20.3945 6.98056 20.4998 7.23487 20.4998 7.50003C20.4998 7.76519 20.3945 8.0195 20.207 8.20703L10.707 17.707C10.5195 17.8945 10.2652 17.9998 10 17.9998C9.73488 17.9998 9.48057 17.8945 9.29304 17.707L4.79304 13.207C4.61088 13.0184 4.51009 12.7658 4.51237 12.5036C4.51465 12.2414 4.61981 11.9906 4.80522 11.8052C4.99063 11.6198 5.24144 11.5146 5.50364 11.5124C5.76584 11.5101 6.01844 11.6109 6.20704 11.793L10 15.586L18.793 6.79303C18.9806 6.60556 19.2349 6.50024 19.5 6.50024C19.7652 6.50024 20.0195 6.60556 20.207 6.79303Z" fill="#00A110" />
                        </svg>
                        Ottimo, nessun appuntamento fissato nel periodo selezionato
                    </div>
                    <div className='appointment-scheduled-box mt-2'>
                        <div className='d-flex gap-2 flex-wrap'>
                            <div className='appointment-scheduled-lbl'>
                                <label htmlFor="">Da</label>
                                <div className='appointment-scheduled-item'>
                                    <div className='appointment-scheduled-m'>24 Dicembre 2023</div>
                                    <div>9:00</div>
                                </div>
                            </div>
                            <div className='appointment-scheduled-lbl'>
                                <label htmlFor="">Da</label>
                                <div className='appointment-scheduled-item'>
                                    <div className='appointment-scheduled-m'>31 Dicembre 2023</div>
                                    <div>18:00</div>
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className='d-lg-block d-none' width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M7 7L17 17M7 17L17 7" stroke="#E95744" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className='d-flex gap-1 my-3' style={{ color: '#AC9C0C', fontWeight: 500, fontSize: 14 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L1 21H23M12 6L19.53 19H4.47M11 10V14H13V10M11 16V18H13V16" fill="#AC9C0C" />
                        </svg>
                       <span> Ci sono 3 appuntamenti in questo periodo da spostare, <span style={{textDecoration:'underline'}}>vedi gli appuntamenti.</span></span>
                    </div>
                    <div className='mt-1 closingPeriodbtn'>
                        <button className='theme-btn-2' style={{ padding:'7px 18px'}}>Aggiungi un periodo <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M7.33325 12.6663V8.66634H3.33325V7.33301H7.33325V3.33301H8.66658V7.33301H12.6666V8.66634H8.66658V12.6663H7.33325Z" fill="white" />
                        </svg></button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ClosingPeriod