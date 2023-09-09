import React from 'react'

const NearBy = () => {
    return (
        <>
            <section className='neary-by'>
                <div className='container-fluid'>
                    <div className='d-flex w-100 align-items-center justify-content-between py-4 professional-title'>
                        <h3 className='mb-0 fw-bold'>Cerca veterinari per città</h3>
                        <button className='theme-btn-outline fw-bold'>Vedi tutti</button>
                    </div>
                    <div className='row near-by-row'>
                        <div className='near-by-box'>
                            <div className='near-by-img'>
                                <img src="/near-by/city1.png" alt="image" />
                            </div>
                            <div className='near-by-title'>
                                <h4>Milano</h4>
                            </div>
                        </div>
                        <div className='near-by-box'>
                            <div className='near-by-img'>
                                <img src="/near-by/city2.png" alt="image" />
                            </div>
                            <div className='near-by-title'>
                                <h4>Roma</h4>
                            </div>
                        </div>
                        <div className='near-by-box'>
                            <div className='near-by-img'>
                                <img src="/near-by/city3.png" alt="image" />
                            </div>
                            <div className='near-by-title'>
                                <h4>Torino</h4>
                            </div>
                        </div>
                        <div className='near-by-box'>
                            <div className='near-by-img'>
                                <img src="/near-by/city4.png" alt="image" />
                            </div>
                            <div className='near-by-title'>
                                <h4>Venezia</h4>
                            </div>
                        </div>
                        <div className='near-by-box'>
                            <div className='near-by-img'>
                                <img src="/near-by/city5.png" alt="image" />
                            </div>
                            <div className='near-by-title'>
                                <h4>Bologna</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NearBy