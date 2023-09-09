'use client'
import React, { useState } from 'react';

const RegistrationForm = () => {
    const [chooseSite, setchooseSite] = useState(2)

    return (
        <>
            <div className="modal fade" id="registraionFormModal" tabIndex="-1" aria-labelledby="registraionFormModal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className='d-flex align-items-center justify-content-between'>
                                <h4 className="modal-title fw-500" id="registraionFormModal" style={{ fontWeight: 600 }}>Registrazione</h4>
                                <button type="button" className="btn p-0" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M7 7L17 17M7 17L17 7" stroke="#050100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg></button>
                            </div>
                            <p className='mt-2' style={{ color: '#939393', fontSize: '13px', fontWeight: 500 }}>Possiedi già un account? <span className='text-decoration-none fw-bold' data-bs-toggle="modal" data-bs-target="#lgoinModal" style={{ color: '#2B7980', cursor: 'pointer' }}>Accedi</span></p>
                            <div>
                                <div className='appointment-set-box mt-3'>
                                    <span style={{ color: '#050100', fontWeight: 500, fontSize: '14px' }}>Vuoi registrarti come</span>
                                    <div className='choose-site'>
                                        <div className={`choose-site1 ${chooseSite == 1 ? 'active-site' : ''}`} onClick={() => { setchooseSite(1) }} style={{ fontSize: '14px' }}>
                                            Cliente
                                        </div>
                                        <div className={`choose-site2 ${chooseSite == 2 ? 'active-site2' : ''}`} onClick={() => { setchooseSite(2) }} style={{ fontSize: '14px' }}>
                                            Veterinario
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4'>
                                {(chooseSite === 2) ? (

                                    <div className='login-form'>
                                        <span style={{ color: "#050100", fontSize: '14px', fontWeight: 500, marginBottom: '5px' }}>Nome dell’azienda</span>
                                        <input type="text" />
                                    </div>
                                ) : (
                                    <div className='row'>
                                        <div className='col-lg-6 login-form'>
                                            <span style={{ color: "#050100", fontSize: '14px', fontWeight: 500, marginBottom: '5px' }}>Nome</span>
                                            <input type="text" />
                                        </div>
                                        <div className='col-lg-6 login-form'>
                                            <span style={{ color: "#050100", fontSize: '14px', fontWeight: 500, marginBottom: '5px' }}>Cognome</span>
                                            <input type="text" />
                                        </div>
                                    </div>
                                )
                                }

                                <div className='login-form'>
                                    <span style={{ color: "#050100", fontSize: '14px', fontWeight: 500, marginBottom: '5px' }}>Numero di telefono</span>
                                    <div className='d-flex algin-items-center gap-1'>
                                        <select className="form-select" style={{ width: 100 }}>
                                            <option value="1">+92</option>
                                            <option value="2">+93</option>
                                            <option value="3">+94</option>
                                        </select>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className='login-form'>
                                    <span style={{ color: "#050100", fontSize: '14px', fontWeight: 500, marginBottom: '5px' }}>Email</span>
                                    <input type="email" />
                                </div>
                                <div className='login-form'>
                                    <span style={{ color: "#050100", fontSize: '14px', fontWeight: 500, marginBottom: '5px' }}>Password</span>
                                    <input type="password" />
                                </div>
                                <div className='login-form'>
                                    <span style={{ color: "#050100", fontSize: '14px', fontWeight: 500, marginBottom: '5px' }}>Indirizzo</span>
                                    <input type="password" />
                                </div>
                                <div className='login-form'>
                                    <span style={{ color: "#050100", fontSize: '14px', fontWeight: 500, marginBottom: '5px' }}>Descrivi la tua attività</span>
                                    <textarea name="" id="" cols="12" rows="3"></textarea>
                                </div>
                                <div className='mb-3'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault" style={{ fontWeight: 500, fontSize: '14px' }}>
                                            Sono interessato a sfruttare le funzionalità base di Veterinari.pro e per questo dichiaro di aver letto e di accettare integralmente <span style={{ color: '#2B7980' }}>l’informativa sul trattamento dei dati personali</span> rilasciata da Veterinari.pro
                                        </label>
                                    </div>

                                </div>
                                <div className='login-btn-modal'>
                                    <button className='theme-btn-2 w-100' style={{ fontSize: '16px', padding: '6px', fontWeight: 500 }}>Registrati</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegistrationForm