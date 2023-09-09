import React from 'react'

const FindVet = () => {
    return (
        <>
            <section className='find-vet-section'>
                <div className='container-fluid'>
                    <div className='row find-vet-row'>
                        <div className='col-xl-4 col-md-5 p-0'>
                            <div className='find-vet-box d-flex align-items-start justify-content-center flex-column  h-100'>
                                <h2 className='text-theme-2 mb-0 fw-500'>Trova il tuo veterinario</h2>
                                <p className='text-theme-2 my-3'>Con Veterinari.pro puoi trovare il miglior veterinario adatto a te</p>
                                <button className='theme-btn px-4 gap-2 fw-bold d-flex align-items-center' style={{letterSpacing:1}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path d="M14 14.5001L11.1047 11.6048M11.1047 11.6048C11.5999 11.1095 11.9928 10.5216 12.2608 9.8745C12.5289 9.22742 12.6668 8.53387 12.6668 7.83347C12.6668 7.13307 12.5289 6.43953 12.2608 5.79244C11.9928 5.14535 11.5999 4.5574 11.1047 4.06214C10.6094 3.56688 10.0215 3.17402 9.37438 2.90599C8.72729 2.63795 8.03375 2.5 7.33335 2.5C6.63295 2.5 5.9394 2.63795 5.29232 2.90599C4.64523 3.17402 4.05727 3.56688 3.56202 4.06214C2.5618 5.06236 1.99988 6.41895 1.99988 7.83347C1.99988 9.248 2.5618 10.6046 3.56202 11.6048C4.56224 12.605 5.91882 13.1669 7.33335 13.1669C8.74787 13.1669 10.1045 12.605 11.1047 11.6048Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg> <span>Cerca veterinario</span></button>
                            </div>
                        </div>
                        <div className='col-xl-8 col-md-7 p-0'>
                            <img src="/findvet.png" className='w-100 find-vet-img' alt="image" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FindVet