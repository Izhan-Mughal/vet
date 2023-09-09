import React from 'react'

const TrustedCompanion = () => {
    return (
        <>
            <section>
                <div className='container-fluid'>
                    <div className='row trusted-row'>
                        <div className='col-xl-8 col-md-7 p-0'>
                            <img src="/trusted.png" className='trusted-img w-100' alt="image" />
                        </div>
                        <div className='col-xl-4 col-md-5 p-0'>
                            <div className='trusted-box d-flex align-items-start justify-content-center flex-column  h-100'>
                                <h2 className='text-theme mb-0 fw-500'>Il tuo compagno fidato nella ricerca del veterinario</h2>
                                <div className='trusted-millions'>
                                    <h2 className='text-theme'>4 milioni</h2>
                                    <p className='text-white'>hanno trovato il loro veterinario grazie a noi</p>
                                </div>
                                <div className='trusted-millions'>
                                    <h2 className='text-theme'>542 mila</h2>
                                    <p className='text-white'>di appuntamenti nell’ultimo anno</p>
                                </div>
                                <button className='theme-btn-2 fw-500  d-flex align-items-center gap-2 px-4'><span>Chi siamo</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <g clipPath="url(#clip0_133_284)">
                                        <path d="M13.8113 9.20707C13.9986 9.01957 14.1038 8.7654 14.1038 8.5004C14.1038 8.2354 13.9986 7.98123 13.8113 7.79373L10.0407 4.02173C9.94778 3.92884 9.8375 3.85516 9.71614 3.80489C9.59477 3.75462 9.4647 3.72875 9.33333 3.72875C9.20197 3.72875 9.07189 3.75462 8.95053 3.80489C8.82916 3.85516 8.71889 3.92884 8.626 4.02173C8.53311 4.11462 8.45943 4.2249 8.40916 4.34626C8.35889 4.46762 8.33301 4.5977 8.33301 4.72907C8.33301 4.86043 8.35889 4.99051 8.40916 5.11187C8.45943 5.23324 8.53311 5.34351 8.626 5.4364L10.69 7.5004L3 7.5004C2.73478 7.5004 2.48043 7.60576 2.29289 7.79329C2.10536 7.98083 2 8.23518 2 8.5004C2 8.76562 2.10536 9.01997 2.29289 9.20751C2.48043 9.39504 2.73478 9.5004 3 9.5004L10.69 9.5004L8.626 11.5644C8.43849 11.752 8.33319 12.0064 8.33325 12.2716C8.33331 12.5369 8.43874 12.7912 8.62633 12.9787C8.81393 13.1662 9.06833 13.2715 9.33357 13.2715C9.59881 13.2714 9.85316 13.166 10.0407 12.9784L13.8113 9.20707Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_133_284">
                                            <rect width="16" height="16" fill="white" transform="matrix(-1 0 0 -1 16 16.5)" />
                                        </clipPath>
                                    </defs>
                                </svg></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TrustedCompanion 