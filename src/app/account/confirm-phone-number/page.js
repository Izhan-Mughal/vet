import React from 'react'
import { Header } from '../layout/Header'

const page = () => {
  return (
    <>
        <div className='bg-theme2 vh-100'>
            <Header />
            <section>
                <div className='container-fluid'>
                    <div className='row py-5'>
                        <div className='col-lg-6'>
                            <h1 className='fw-500 fs-heading'>Conferma numero di telefono</h1>
                            <div className='verify-number-fields mt-5'>
                                <h6 style={{fontSize:14}}>Inserisci il codice di conferma</h6>
                                <div className='verify-number-box'>
                                    <input type="text" maxLength={1} placeholder='-' />
                                    <input type="text" maxLength={1} placeholder='-' />
                                    <input type="text" maxLength={1} placeholder='-' />
                                    <input type="text" maxLength={1} placeholder='-' />
                                    <input type="text" maxLength={1} placeholder='-' />
                                    <input type="text" maxLength={1} placeholder='-' />
                                </div>
                            </div>
                            <button className='theme-btn-2 mt-4 btn-confirm-email' style={{ width: 'max-content', fontWeight: 'bold', padding: '8px 20px', fontSize: 16 }}>Verifica</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default page