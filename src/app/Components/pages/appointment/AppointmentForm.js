'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const AppointmentForm = () => {

    const [activDate, setactivDate] = useState(4)
    const [activeTime, setactiveTime] = useState(3)
    const [chooseSite, setchooseSite] = useState(1)

    return (
        <>
            <div>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="detailCard" aria-labelledby="detailCardLabel">
                    <div className="offcanvas-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div className='p-2'>
                            <h4>Fissa un appuntamento con Luca <br className='d-lg-block d-none' /> Moretti - Clinica animalistica</h4>
                            <div className="d-flex gap-2 mt-4 flex-wrap">
                                <div className='w-100 d-flex align-items-center gap-2' style={{ fontSize: 'small', fontWeight: '500' }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14 2L9.66671 14C9.63746 14.0638 9.5905 14.1179 9.53141 14.1558C9.47232 14.1938 9.40359 14.2139 9.33338 14.2139C9.26317 14.2139 9.19444 14.1938 9.13535 14.1558C9.07626 14.1179 9.0293 14.0638 9.00005 14L6.66671 9.33333L2.00005 7C1.93622 6.97075 1.88213 6.92379 1.84421 6.8647C1.80629 6.80561 1.78613 6.73688 1.78613 6.66667C1.78613 6.59646 1.80629 6.52772 1.84421 6.46863C1.88213 6.40954 1.93622 6.36258 2.00005 6.33333L14 2Z" stroke="#2B7980" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg><span style={{ color: '#2B7980' }}>Via Vittorio Emanuele, 10, Roma</span></div>
                                <div className='w-100 d-flex align-items-center gap-2' style={{ fontSize: 'small', fontWeight: '500' }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M7.41462 3.40134C7.31599 3.13281 7.11835 2.91221 6.86224 2.78478C6.60613 2.65734 6.31096 2.63273 6.03729 2.716C4.73995 3.116 3.83329 4.22934 4.02795 5.51734C4.24567 6.94685 4.73007 8.32273 5.45595 9.57333C6.17407 10.8211 7.1155 11.9261 8.23329 12.8333C9.23862 13.6467 10.6493 13.4227 11.644 12.4893C11.8532 12.293 11.9801 12.0245 11.9992 11.7382C12.0182 11.4519 11.928 11.169 11.7466 10.9467L11.0346 10.076C10.892 9.90092 10.7001 9.77273 10.4837 9.70807C10.2674 9.6434 10.0366 9.64523 9.82129 9.71334L8.17862 10.2333L7.89195 9.93734C7.53076 9.56273 7.21482 9.14699 6.95062 8.69867C6.6942 8.24529 6.49448 7.76211 6.35595 7.26L6.24529 6.86667L7.51195 5.7C7.6791 5.54481 7.79635 5.34343 7.84881 5.12147C7.90128 4.8995 7.88659 4.66694 7.80662 4.45334L7.41595 3.40267L7.41462 3.40134ZM5.64529 1.44134C6.24416 1.25811 6.89043 1.31084 7.45167 1.58874C8.01292 1.86663 8.44663 2.34864 8.66395 2.936L9.05462 3.98667C9.22696 4.44826 9.25813 4.95068 9.14416 5.43003C9.0302 5.90939 8.77626 6.34402 8.41462 6.67867L7.76129 7.28C7.84529 7.512 7.95862 7.77734 8.10529 8.03467C8.25195 8.288 8.42262 8.51867 8.57862 8.70667L9.41862 8.44C9.88824 8.29174 10.3915 8.28783 10.8634 8.42879C11.3353 8.56976 11.754 8.8491 12.0653 9.23067L12.7773 10.1013C13.173 10.5852 13.3702 11.2013 13.3291 11.825C13.288 12.4487 13.0117 13.0335 12.556 13.4613C11.2306 14.7053 9.06662 15.2213 7.39595 13.8693C6.15108 12.8594 5.10253 11.6292 4.30262 10.24C3.49282 8.84512 2.95233 7.31049 2.70929 5.716C2.38929 3.592 3.91329 1.97467 5.64529 1.44267V1.44134Z" fill="#2B7980"></path></svg><span style={{ color: '#2B7980' }}>06 489 94 28 71</span></div>
                            </div>
                            <div className='choose-specific-date'>
                                <span style={{ color: '#050100', fontSize: '16px' }}>Seleziona una data</span>
                                <span className='specific-date' style={{ color: '#2B7980', fontSize: 'small' }}>Scegli una data precisa</span>
                            </div>
                            <Swiper className='specific-dates-slider' navigation={true} modules={[Navigation]} spaceBetween={0} slidesPerView={6} breakpoints={{
                                // when window width is >= 768px
                                300: {
                                    spaceBetween: 10,
                                    slidesPerView: 3,
                                },
                                800: {
                                    spaceBetween: 10,
                                    slidesPerView: 6,
                                }
                            }}>
                                <SwiperSlide>
                                    <div className={`dates-slider-item ${activDate == 1 ? 'active-date' : ''}`} onClick={() => { setactivDate(1) }}>
                                        <div>LUN</div>
                                        <div>07 GIU</div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={`dates-slider-item ${activDate == 2 ? 'active-date' : ''}`} onClick={() => { setactivDate(2) }}>
                                        <div>LUN</div>
                                        <div>07 GIU</div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={`dates-slider-item ${activDate == 3 ? 'active-date' : ''}`} onClick={() => { setactivDate(3) }}>
                                        <div>LUN</div>
                                        <div>07 GIU</div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={`dates-slider-item ${activDate == 4 ? 'active-date' : ''}`} onClick={() => { setactivDate(4) }}>
                                        <div>LUN</div>
                                        <div>07 GIU</div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='dates-slider-item disabled-date'>
                                        <div>LUN</div>
                                        <div>07 GIU</div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='dates-slider-item disabled-date'>
                                        <div>LUN</div>
                                        <div>07 GIU</div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={`dates-slider-item ${activDate == 7 ? 'active-date' : ''}`} onClick={() => { setactivDate(7) }}>
                                        <div>LUN</div>
                                        <div>07 GIU</div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={`dates-slider-item ${activDate == 8 ? 'active-date' : ''}`} onClick={() => { setactivDate(8) }}>
                                        <div>LUN</div>
                                        <div>07 GIU</div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={`dates-slider-item ${activDate == 9 ? 'active-date' : ''}`} onClick={() => { setactivDate(9) }}>
                                        <div>LUN</div>
                                        <div>07 GIU</div>
                                    </div>
                                </SwiperSlide>


                            </Swiper>
                            <div className='choose-time-box mt-4'>
                                <span style={{ color: '#050100', fontWeight: 500, fontSize: '16px' }}>Seleziona una data</span>

                                <div className='choose-time-slider'>
                                    <div className={`choose-time-item ${activeTime == 1 ? 'active-time-choose' : ''}`} onClick={() => { setactiveTime(1) }}>
                                        08:00
                                    </div>
                                    <div className={`choose-time-item ${activeTime == 2 ? 'active-time-choose' : ''}`} onClick={() => { setactiveTime(2) }}>
                                        08:00
                                    </div>
                                    <div className={`choose-time-item ${activeTime == 3 ? 'active-time-choose' : ''}`} onClick={() => { setactiveTime(3) }}>
                                        08:00
                                    </div>
                                    <div className={`choose-time-item ${activeTime == 4 ? 'active-time-choose' : ''}`} onClick={() => { setactiveTime(4) }}>
                                        08:00
                                    </div>
                                    <div className={`choose-time-item ${activeTime == 5 ? 'active-time-choose' : ''}`} onClick={() => { setactiveTime(5) }}>
                                        08:00
                                    </div>
                                    <div className={`choose-time-item ${activeTime == 6 ? 'active-time-choose' : ''}`} onClick={() => { setactiveTime(6) }}>
                                        08:00
                                    </div>
                                    <div className={`choose-time-item ${activeTime == 7 ? 'active-time-choose' : ''}`} onClick={() => { setactiveTime(7) }}>
                                        08:00
                                    </div>
                                    <div className={`choose-time-item ${activeTime == 8 ? 'active-time-choose' : ''}`} onClick={() => { setactiveTime(8) }}>
                                        08:00
                                    </div>
                                    <div className={`choose-time-item ${activeTime == 9 ? 'active-time-choose' : ''}`} onClick={() => { setactiveTime(9) }}>
                                        08:00
                                    </div>
                                    <div className={`choose-time-item ${activeTime == 10 ? 'active-time-choose' : ''}`} onClick={() => { setactiveTime(10) }}>
                                        08:00
                                    </div>
                                    <div className={`choose-time-item ${activeTime == 11 ? 'active-time-choose' : ''}`} onClick={() => { setactiveTime(11) }}>
                                        08:00
                                    </div>
                                    <div className={`choose-time-item ${activeTime == 12 ? 'active-time-choose' : ''}`} onClick={() => { setactiveTime(12) }}>
                                        08:00
                                    </div>
                                </div>
                            </div>

                            <div className='appointment-set-box'>
                                <span style={{ color: '#050100', fontWeight: 500, fontSize: '16px' }}>Appuntamento</span>
                                <div className='choose-site'>
                                    <div className={`choose-site1 ${chooseSite == 1 ? 'active-site' : ''}`} onClick={() => { setchooseSite(1) }}>
                                        In sede
                                    </div>
                                    <div className={`choose-site2 ${chooseSite == 2 ? 'active-site2' : ''}`} onClick={() => { setchooseSite(2) }}>
                                        domicilio
                                    </div>
                                </div>
                            </div>
                            {
                                (chooseSite === 1) ? (
                                    <p className='fst-italic mt-2' style={{ fontSize: 12, color: '#B3B3B3', fontWeight: 500 }}>Via Roma, 53, 20010, Milano, Italia</p>
                                ) : (
                                    <input type="text" className='appointment-input' />
                                )
                            }



                            <div className='add-animal-dropdown'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <span style={{ color: '#050100', fontWeight: 500, fontSize: '16px' }}>Animale</span>
                                    <span style={{ color: '#2B7980', fontWeight: 500, fontSize: '13px' }}>Aggiungi un animale</span>
                                </div>
                                <select name="" id="">
                                    <option>Otto</option>
                                    <option >Otto</option>
                                    <option>Otto</option>
                                    <option>Otto</option>
                                    <option>Otto</option>
                                    <option>Otto</option>
                                </select>
                            </div>
                        </div>
                        <div className='request-button'>
                            <p>Appuntamento richiesto per <span className='text-theme fw-bold'>mercoledì 9 giugno</span> alle ore <span className='text-theme fw-bold'>10:00</span> </p>
                            <button className='theme-btn-2 w-100'>Richiedi un appuntamento</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppointmentForm