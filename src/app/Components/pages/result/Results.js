import Link from 'next/link'
import React from 'react'

const results = () => {
    return (
        <>
            <section className='result-section'>
                <div className='container-fluid'>
                    <div className='row justify-content-center'>
                        <div className='col-xxl-8 col-xl-9 col-md-11 pb-3'>
                            <h6 className='text-theme-2 fw-500'>324 risultati</h6>
                        </div>
                        <div className='col-xxl-8 col-xl-9 col-md-11'>
                            <div className='row'>
                                <div className='result-box'>
                                    <div className='result-profile'>
                                        <div className="result-img">
                                            <img src="/professionals/vector.svg" alt="image" />
                                        </div>
                                        <div className='result-detail'>
                                            <div>
                                                <div className='d-flex align-items-center gap-md-3 gap-2 result-box-pro flex-md-row flex-wrap'>
                                                    <h5 className='mb-0'>Luca Moretti - Clinica animalistica</h5>
                                                    <button className='theme-btn-2' style={{ fontSize: 'small', padding: '4px 16px' }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{marginTop:'-3px'}} width="20" height="20" viewBox="0 0 16 16" fill="none">
                                                            <path d="M3.33333 8H2L8 2L14 8H12.6667M3.33333 8V12.6667C3.33333 13.0203 3.47381 13.3594 3.72386 13.6095C3.97391 13.8595 4.31304 14 4.66667 14H11.3333C11.687 14 12.0261 13.8595 12.2761 13.6095C12.5262 13.3594 12.6667 13.0203 12.6667 12.6667V8" fill="white" />
                                                            <path d="M6 13.9993V9.99935C6 9.64573 6.14048 9.30659 6.39052 9.05654C6.64057 8.80649 6.97971 8.66602 7.33333 8.66602H8.66667C9.02029 8.66602 9.35943 8.80649 9.60948 9.05654C9.85952 9.30659 10 9.64573 10 9.99935V13.9993" fill="#4AC5B5" />
                                                        </svg>
                                                        <span>Disponibile a domicilio</span>
                                                    </button>
                                                </div>
                                                <p>Il Dr. Luca Moretti è un veterinario esperto nel campo dell'ortopedia veterinaria.</p>
                                            </div>
                                            <div>
                                                <div className='resut-contact'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <path d="M14 2L9.66671 14C9.63746 14.0638 9.5905 14.1179 9.53141 14.1558C9.47232 14.1938 9.40359 14.2139 9.33338 14.2139C9.26317 14.2139 9.19444 14.1938 9.13535 14.1558C9.07626 14.1179 9.0293 14.0638 9.00005 14L6.66671 9.33333L2.00005 7C1.93622 6.97075 1.88213 6.92379 1.84421 6.8647C1.80629 6.80561 1.78613 6.73688 1.78613 6.66667C1.78613 6.59646 1.80629 6.52772 1.84421 6.46863C1.88213 6.40954 1.93622 6.36258 2.00005 6.33333L14 2Z" stroke="#2B7980" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <span>Via Vittorio Emanuele, 10, Roma</span>
                                                </div>
                                                <div className='resut-contact'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <path d="M7.41462 3.40134C7.31599 3.13281 7.11835 2.91221 6.86224 2.78478C6.60613 2.65734 6.31096 2.63273 6.03729 2.716C4.73995 3.116 3.83329 4.22934 4.02795 5.51734C4.24567 6.94685 4.73007 8.32273 5.45595 9.57333C6.17407 10.8211 7.1155 11.9261 8.23329 12.8333C9.23862 13.6467 10.6493 13.4227 11.644 12.4893C11.8532 12.293 11.9801 12.0245 11.9992 11.7382C12.0182 11.4519 11.928 11.169 11.7466 10.9467L11.0346 10.076C10.892 9.90092 10.7001 9.77273 10.4837 9.70807C10.2674 9.6434 10.0366 9.64523 9.82129 9.71334L8.17862 10.2333L7.89195 9.93734C7.53076 9.56273 7.21482 9.14699 6.95062 8.69867C6.6942 8.24529 6.49448 7.76211 6.35595 7.26L6.24529 6.86667L7.51195 5.7C7.6791 5.54481 7.79635 5.34343 7.84881 5.12147C7.90128 4.8995 7.88659 4.66694 7.80662 4.45334L7.41595 3.40267L7.41462 3.40134ZM5.64529 1.44134C6.24416 1.25811 6.89043 1.31084 7.45167 1.58874C8.01292 1.86663 8.44663 2.34864 8.66395 2.936L9.05462 3.98667C9.22696 4.44826 9.25813 4.95068 9.14416 5.43003C9.0302 5.90939 8.77626 6.34402 8.41462 6.67867L7.76129 7.28C7.84529 7.512 7.95862 7.77734 8.10529 8.03467C8.25195 8.288 8.42262 8.51867 8.57862 8.70667L9.41862 8.44C9.88824 8.29174 10.3915 8.28783 10.8634 8.42879C11.3353 8.56976 11.754 8.8491 12.0653 9.23067L12.7773 10.1013C13.173 10.5852 13.3702 11.2013 13.3291 11.825C13.288 12.4487 13.0117 13.0335 12.556 13.4613C11.2306 14.7053 9.06662 15.2213 7.39595 13.8693C6.15108 12.8594 5.10253 11.6292 4.30262 10.24C3.49282 8.84512 2.95233 7.31049 2.70929 5.716C2.38929 3.592 3.91329 1.97467 5.64529 1.44267V1.44134Z" fill="#2B7980" />
                                                    </svg>
                                                    <span>06 489 94 28 71</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-100 mt-xxl-4  mt-3 d-flex align-items-center justify-content-between result-card-btn'>
                                        <h5 className='mb-0 fw-500'>744 metri</h5>
                                        <Link href='/appointment' className='theme-btn-outline fw-bold text-decoration-none text-center d-block' style={{padding:'8px 23px',fontSize:'small'}}>Fissa un appuntamento</Link>
                                    </div>
                                </div>
                                <div className='result-box'>
                                    <div className='result-profile'>
                                        <div className="result-img">
                                            <img src="/professionals/vector2.svg" alt="image" />
                                        </div>
                                        <div className='result-detail'>
                                            <div>
                                                <div className='d-flex align-items-center gap-md-3 gap-2 result-box-pro'>
                                                    <h5 className='mb-0'>Luca Moretti - Clinica animalistica</h5>
                                                </div>
                                                <p>La Dr.ssa Elena Rossi è una veterinaria appassionata degli animali esotici.</p>
                                            </div>
                                            <div>
                                                <div className='resut-contact'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <path d="M14 2L9.66671 14C9.63746 14.0638 9.5905 14.1179 9.53141 14.1558C9.47232 14.1938 9.40359 14.2139 9.33338 14.2139C9.26317 14.2139 9.19444 14.1938 9.13535 14.1558C9.07626 14.1179 9.0293 14.0638 9.00005 14L6.66671 9.33333L2.00005 7C1.93622 6.97075 1.88213 6.92379 1.84421 6.8647C1.80629 6.80561 1.78613 6.73688 1.78613 6.66667C1.78613 6.59646 1.80629 6.52772 1.84421 6.46863C1.88213 6.40954 1.93622 6.36258 2.00005 6.33333L14 2Z" stroke="#2B7980" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <span>Via Vittorio Emanuele, 10, Roma</span>
                                                </div>
                                                <div className='resut-contact'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <path d="M7.41462 3.40134C7.31599 3.13281 7.11835 2.91221 6.86224 2.78478C6.60613 2.65734 6.31096 2.63273 6.03729 2.716C4.73995 3.116 3.83329 4.22934 4.02795 5.51734C4.24567 6.94685 4.73007 8.32273 5.45595 9.57333C6.17407 10.8211 7.1155 11.9261 8.23329 12.8333C9.23862 13.6467 10.6493 13.4227 11.644 12.4893C11.8532 12.293 11.9801 12.0245 11.9992 11.7382C12.0182 11.4519 11.928 11.169 11.7466 10.9467L11.0346 10.076C10.892 9.90092 10.7001 9.77273 10.4837 9.70807C10.2674 9.6434 10.0366 9.64523 9.82129 9.71334L8.17862 10.2333L7.89195 9.93734C7.53076 9.56273 7.21482 9.14699 6.95062 8.69867C6.6942 8.24529 6.49448 7.76211 6.35595 7.26L6.24529 6.86667L7.51195 5.7C7.6791 5.54481 7.79635 5.34343 7.84881 5.12147C7.90128 4.8995 7.88659 4.66694 7.80662 4.45334L7.41595 3.40267L7.41462 3.40134ZM5.64529 1.44134C6.24416 1.25811 6.89043 1.31084 7.45167 1.58874C8.01292 1.86663 8.44663 2.34864 8.66395 2.936L9.05462 3.98667C9.22696 4.44826 9.25813 4.95068 9.14416 5.43003C9.0302 5.90939 8.77626 6.34402 8.41462 6.67867L7.76129 7.28C7.84529 7.512 7.95862 7.77734 8.10529 8.03467C8.25195 8.288 8.42262 8.51867 8.57862 8.70667L9.41862 8.44C9.88824 8.29174 10.3915 8.28783 10.8634 8.42879C11.3353 8.56976 11.754 8.8491 12.0653 9.23067L12.7773 10.1013C13.173 10.5852 13.3702 11.2013 13.3291 11.825C13.288 12.4487 13.0117 13.0335 12.556 13.4613C11.2306 14.7053 9.06662 15.2213 7.39595 13.8693C6.15108 12.8594 5.10253 11.6292 4.30262 10.24C3.49282 8.84512 2.95233 7.31049 2.70929 5.716C2.38929 3.592 3.91329 1.97467 5.64529 1.44267V1.44134Z" fill="#2B7980" />
                                                    </svg>
                                                    <span>06 489 94 28 71</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-100 mt-xxl-4  mt-3 d-flex align-items-center justify-content-between result-card-btn'>
                                        <h5 className='mb-0 fw-500'>839 metri</h5>
                                        <Link href='/appointment' className='theme-btn-outline fw-bold text-decoration-none text-center d-block' style={{padding:'8px 23px',fontSize:'small'}}>Fissa un appuntamento</Link>
                                    </div>
                                </div>
                                <div className='result-box'>
                                    <div className='result-profile'>
                                        <div className="result-img">
                                            <img src="/professionals/profile4.png" alt="image" />
                                        </div>
                                        <div className='result-detail'>
                                            <div>
                                                <div className='d-flex align-items-center gap-md-3 gap-2 result-box-pro'>
                                                    <h5 className='mb-0'>Luca Moretti - Clinica animalistica</h5>
                                           
                                                </div>
                                                <p>Il Dr. Luca Moretti è un veterinario esperto nel campo dell'ortopedia veterinaria.</p>
                                            </div>
                                            <div>
                                                <div className='resut-contact'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <path d="M14 2L9.66671 14C9.63746 14.0638 9.5905 14.1179 9.53141 14.1558C9.47232 14.1938 9.40359 14.2139 9.33338 14.2139C9.26317 14.2139 9.19444 14.1938 9.13535 14.1558C9.07626 14.1179 9.0293 14.0638 9.00005 14L6.66671 9.33333L2.00005 7C1.93622 6.97075 1.88213 6.92379 1.84421 6.8647C1.80629 6.80561 1.78613 6.73688 1.78613 6.66667C1.78613 6.59646 1.80629 6.52772 1.84421 6.46863C1.88213 6.40954 1.93622 6.36258 2.00005 6.33333L14 2Z" stroke="#2B7980" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <span>Via Vittorio Emanuele, 10, Roma</span>
                                                </div>
                                                <div className='resut-contact'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <path d="M7.41462 3.40134C7.31599 3.13281 7.11835 2.91221 6.86224 2.78478C6.60613 2.65734 6.31096 2.63273 6.03729 2.716C4.73995 3.116 3.83329 4.22934 4.02795 5.51734C4.24567 6.94685 4.73007 8.32273 5.45595 9.57333C6.17407 10.8211 7.1155 11.9261 8.23329 12.8333C9.23862 13.6467 10.6493 13.4227 11.644 12.4893C11.8532 12.293 11.9801 12.0245 11.9992 11.7382C12.0182 11.4519 11.928 11.169 11.7466 10.9467L11.0346 10.076C10.892 9.90092 10.7001 9.77273 10.4837 9.70807C10.2674 9.6434 10.0366 9.64523 9.82129 9.71334L8.17862 10.2333L7.89195 9.93734C7.53076 9.56273 7.21482 9.14699 6.95062 8.69867C6.6942 8.24529 6.49448 7.76211 6.35595 7.26L6.24529 6.86667L7.51195 5.7C7.6791 5.54481 7.79635 5.34343 7.84881 5.12147C7.90128 4.8995 7.88659 4.66694 7.80662 4.45334L7.41595 3.40267L7.41462 3.40134ZM5.64529 1.44134C6.24416 1.25811 6.89043 1.31084 7.45167 1.58874C8.01292 1.86663 8.44663 2.34864 8.66395 2.936L9.05462 3.98667C9.22696 4.44826 9.25813 4.95068 9.14416 5.43003C9.0302 5.90939 8.77626 6.34402 8.41462 6.67867L7.76129 7.28C7.84529 7.512 7.95862 7.77734 8.10529 8.03467C8.25195 8.288 8.42262 8.51867 8.57862 8.70667L9.41862 8.44C9.88824 8.29174 10.3915 8.28783 10.8634 8.42879C11.3353 8.56976 11.754 8.8491 12.0653 9.23067L12.7773 10.1013C13.173 10.5852 13.3702 11.2013 13.3291 11.825C13.288 12.4487 13.0117 13.0335 12.556 13.4613C11.2306 14.7053 9.06662 15.2213 7.39595 13.8693C6.15108 12.8594 5.10253 11.6292 4.30262 10.24C3.49282 8.84512 2.95233 7.31049 2.70929 5.716C2.38929 3.592 3.91329 1.97467 5.64529 1.44267V1.44134Z" fill="#2B7980" />
                                                    </svg>
                                                    <span>06 489 94 28 71</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-100 mt-xxl-4  mt-3 d-flex align-items-center justify-content-between result-card-btn'>
                                        <h5 className='mb-0 fw-500'>1.2 km</h5>
                                        <Link href='/appointment' className='theme-btn-outline fw-bold text-decoration-none text-center d-block' style={{padding:'8px 23px',fontSize:'small'}}>Fissa un appuntamento</Link>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default results