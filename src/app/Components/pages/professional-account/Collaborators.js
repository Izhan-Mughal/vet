import React from 'react'
import NewClininc from './NewClininc'

const Collaborators = () => {
  return (
    <>
        <section>
            <div className='row py-5'>
              <h5 className='fw-500 mb-4'>I tuoi ambulatori</h5>
              <p style={{color:'#939393',fontWeight:500}}>Devi ricevere un invito da un ambulatorio oppure crearne uno </p>
              <p style={{color:'#2B7980',fontWeight:500,cursor:'pointer'}} data-bs-toggle="offcanvas" data-bs-target="#NewClinic" aria-controls="NewClinic">Nuovo ambulatorio</p>
            </div>
        </section>
        <NewClininc/>
    </>
  )
}

export default Collaborators