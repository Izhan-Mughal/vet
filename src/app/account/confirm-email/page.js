import React from 'react'
import { Header } from '../layout/Header'

const page = () => {
    return (
        <div className='bg-theme2 vh-100'>
            <Header />
            <section>
                <div className='container-fluid'>
                    <div className='row py-5'>
                        <div className='col-lg-6'>
                            <h1 className='fw-500 fs-heading'>Conferma email</h1 >
                            <p className='text-black fw-500 mt-5' style={{fontSize:14}}>Ti abbiamo inviato una mail, segui le istruzioni all’interno per confermare il tuo account, questa pagina si aggiornerà automaticamente una volta confermato il tuo account.</p>
                            <button className='theme-btn-outline mt-lg-0 mt-2 btn-confirm-email' style={{ width: 'max-content', fontWeight: 'bold', padding: '8px 20px', fontSize: 16 }}>Richiedi supporto</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page