import React from 'react'
import { Header } from '../Components/layout/Header'
import Footer from '../Components/layout/Footer'

const page = () => {
    return (
        <>
            <Header />
            <section>
                <div className='container-fluid  my-5'>
                    <div className='row'>
                        <h3 className="fw-bold mb-0 fs-heading">Chi siamo</h3>
                        <p style={{ color: '#7B8583', fontWeight: 500 }}>Scopri chi fa parte del team di Veterinari.pro</p>
                    </div>
                </div>
            </section>
            <section className='position-relative d-flex who-sec1' style={{ backgroundImage: "url('/who-we-are.png')", backgroundRepeat: "no-repeat", backgroundPosition: 'right', height: 600, backgroundSize: 'contain' }}>
                <div className='container-fluid d-flex'>
                    <div className='row'>
                        <div className='col-lg-6 d-lg-none d-block'>
                            <img src="/who-we-are.png" className='w-100' alt="image" />
                        </div>
                        <div className='col-lg-6 d-flex align-items-center'>
                            <div className='mt-lg-0 mt-5'>
                                <div className='who-we-are-1'>
                                    <h4>Rendiamo semplice trovare la tua spiaggia ideale</h4>
                                    <p style={{ fontSize: 13, color: '#7B8583', fontWeight: 500 }}>Abbiamo reso accessibile il concetto di spiaggia, perché crediamo che tutti meritino di rilassarsi cullati dal suono delle onde respirando un senso di libertà e rilassatezza a pieni polmoni. Ecco perché sul nostro portale sono presenti stabilimenti adatti ad accogliere ogni tipo di esigenza.</p>
                                </div>
                                <div className='who-we-are-2 mt-5'>
                                    <h4>Progettare la tua vacanza al mare in meno tempo</h4>
                                    <p style={{ fontSize: 13, color: '#7B8583', fontWeight: 500 }}>Il tempo è la nostra risorsa più preziosa, dargli il giusto valore è quello che possiamo fare per viverlo al meglio.La vacanza al mare segna l’inizio di un tempo in cui siamo protagonisti assoluti, pianificarla in modo semplice e comodo è ciò che fa la differenza.Grazie alla varietà di servizi e alla praticità di utilizzo del portale e dell’App, facilitiamo l’organizzazione del tuo soggiorno in spiaggia.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            <section className='position-relative  who-sec2 d-flex align-items-center' style={{ backgroundImage: "url('/who-we-are2.png')", backgroundRepeat: "no-repeat", height: 600, backgroundSize: 'contain',marginBottom:'5rem' }}>
                <div className='container-fluid d-flex'>
                    <div className='row justify-content-end'>
                        <div className='col-lg-6 d-lg-none d-block'>
                            <img src="/who-we-are2.png" className='w-100' alt="image" />
                        </div>
                        <div className='col-xxl-8 col-xl-7 col-lg-6 d-flex align-items-center'>
                            <div className='mt-lg-0 mt-5'>
                                <div className='who-we-are-1'>
                                    <h4>Rendiamo semplice trovare la tua spiaggia ideale</h4>
                                    <p style={{ fontSize: 13, color: '#7B8583', fontWeight: 500 }}>Abbiamo reso accessibile il concetto di spiaggia, perché crediamo che tutti meritino di rilassarsi cullati dal suono delle onde respirando un senso di libertà e rilassatezza a pieni polmoni. Ecco perché sul nostro portale sono presenti stabilimenti adatti ad accogliere ogni tipo di esigenza.</p>
                                </div>
                                <div className='who-we-are-2 mt-5'>
                                    <h4>Progettare la tua vacanza al mare in meno tempo</h4>
                                    <p style={{ fontSize: 13, color: '#7B8583', fontWeight: 500 }}>Il tempo è la nostra risorsa più preziosa, dargli il giusto valore è quello che possiamo fare per viverlo al meglio.La vacanza al mare segna l’inizio di un tempo in cui siamo protagonisti assoluti, pianificarla in modo semplice e comodo è ciò che fa la differenza.Grazie alla varietà di servizi e alla praticità di utilizzo del portale e dell’App, facilitiamo l’organizzazione del tuo soggiorno in spiaggia.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <img src="/who-we-are2.png" alt="image" /> */}
            </section>
            <Footer />
        </>
    )
}

export default page