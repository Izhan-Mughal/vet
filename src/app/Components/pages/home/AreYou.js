import React from 'react'

const AreYou = () => {
    return (
        <>
            <section className='are-you-section'>
                <div className='container-fluid'>
                    <div className='row are-you-row'>
                        <div className='col-xl-4 col-md-5 p-0'>
                            <div className='are-you-box d-flex align-items-start justify-content-center flex-column  h-100'>
                                <h2 className='text-white mb-0 fw-500'>Sei un veterinario?</h2>
                                <p className='text-white my-4'>Registrati e trova nuovi clienti</p>
                                <button className='theme-btn-white px-3 mt-2 gap-2 fw-bold d-flex align-items-center' style={{ letterSpacing: 1 }}>
                                    <span>Scopri di più</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 17" fill="none">
                                        <g clipPath="url(#clip0_133_295)">
                                            <path d="M13.8113 9.20707C13.9986 9.01957 14.1038 8.7654 14.1038 8.5004C14.1038 8.2354 13.9986 7.98123 13.8113 7.79373L10.0406 4.02173C9.94775 3.92884 9.83748 3.85516 9.71611 3.80489C9.59475 3.75462 9.46467 3.72875 9.33331 3.72875C9.20194 3.72875 9.07186 3.75462 8.9505 3.80489C8.82914 3.85516 8.71886 3.92884 8.62597 4.02173C8.53308 4.11462 8.4594 4.2249 8.40913 4.34626C8.35886 4.46762 8.33299 4.5977 8.33299 4.72907C8.33299 4.86043 8.35886 4.99051 8.40913 5.11187C8.4594 5.23324 8.53308 5.34351 8.62597 5.4364L10.69 7.5004L2.99997 7.5004C2.73476 7.5004 2.4804 7.60576 2.29287 7.79329C2.10533 7.98083 1.99997 8.23518 1.99997 8.5004C1.99997 8.76562 2.10533 9.01997 2.29287 9.20751C2.4804 9.39504 2.73476 9.5004 2.99997 9.5004L10.69 9.5004L8.62597 11.5644C8.43846 11.752 8.33316 12.0064 8.33322 12.2716C8.33328 12.5369 8.43871 12.7912 8.62631 12.9787C8.8139 13.1662 9.0683 13.2715 9.33354 13.2715C9.59878 13.2714 9.85313 13.166 10.0406 12.9784L13.8113 9.20707Z" fill="#194B5F" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_133_295">
                                                <rect width="16" height="16" fill="white" transform="matrix(-1 0 0 -1 16 16.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className='col-xl-8 col-md-7 p-0'>
                            <img src="/are-you.png" className='w-100 are-you-img' alt="image" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AreYou