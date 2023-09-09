import React, { useState } from 'react'
import CollaboratoreForm from './CollaboratoreForm'

const NewClininc = () => {
  const [collabForm, setcollabForm] = useState(0)

  return (
    <>
      {/* ITS OFFCANVUS NOT A SECTION */}
      <div class="offcanvas offcanvas-end" tabindex="-1" id="NewClinic" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-body">
          <div className='p-2'>
            <h2 className='fw-500'>Nuovo ambulatorio</h2>
            <h5 className='mt-4'>Nome e luogo</h5>
            <div className='form-group pro-account-input mt-4'>
              <label htmlFor="">Nome</label>
              <input type="text" placeholder='Nome' />
            </div>
            <div className='form-group pro-account-input mt-4'>
              <label htmlFor="">Indirizzo</label>
              <input type="text" placeholder='Indirizzo' />
            </div>
            <h5 className='mt-4'>Aggiungi collaboratori</h5>
            <div className='form-group  mt-4 d-flex align-items-center gap-2 pro-account-input'>
              <input type="text" placeholder='Nome' value='Francesco Bollino' readOnly />
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ cursor: 'pointer' }}>
                <path d="M7 7L17 17M7 17L17 7" stroke="#E95744" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div className='form-group  mt-4 d-flex align-items-center gap-2 pro-account-input'>
              <input type="text" placeholder='Nome' value='Francesco Bollino' readOnly />
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ cursor: 'pointer' }}>
                <path d="M7 7L17 17M7 17L17 7" stroke="#E95744" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <p className='my-2' style={{ color: "#2B7980", fontWeight: 500,cursor:'pointer' }} onClick={()=> (collabForm === 1 ? setcollabForm(0) : setcollabForm(1))}>
              Nuovo collaboratore
            </p>
            <div className={`${collabForm === 1 ? 'd-block' : 'd-none'}`}>
              <CollaboratoreForm />
            </div>
            <h5 className='mt-4'>Servizi</h5>
            <div className='form-group mb-2  mt-4 d-flex align-items-center gap-2 pro-account-input  collab2Fields'>
              <input type="text" placeholder='Nome' value='Francesco Bollino' readOnly />
              <select name="" >
                <option value="">60 minuti</option>
                <option value="">60 minuti</option>
                <option value="">60 minuti</option>
                <option value="">60 minuti</option>
              </select>
              <select name="" className="new-clinic-select" style={{ width: 130 }}>
                <option value="">100-250€</option>
                <option value="">100-250€</option>
                <option value="">100-250€</option>
                <option value="">100-250€</option>
              </select>
              <svg xmlns="http://www.w3.org/2000/svg" className='NewClinicSvg' width="50" height="50" viewBox="0 0 24 24" fill="none" style={{ cursor: 'pointer' }}>
                <path d="M7 7L17 17M7 17L17 7" stroke="#E95744" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div className='form-group d-flex align-items-center gap-2 pro-account-input collab2Fields'>
              <input type="text" placeholder='Nome' value='Francesco Bollino' readOnly />
              <select name="">
                <option value="">60 minuti</option>
                <option value="">60 minuti</option>
                <option value="">60 minuti</option>
                <option value="">60 minuti</option>
              </select>
              <select name="" className="new-clinic-select" style={{ width: 130 }}>
                <option value="">100-250€</option>
                <option value="">100-250€</option>
                <option value="">100-250€</option>
                <option value="">100-250€</option>
              </select>
              <svg xmlns="http://www.w3.org/2000/svg" className='NewClinicSvg' width="50" height="50" viewBox="0 0 24 24" fill="none" style={{ cursor: 'pointer' }}>
                <path d="M7 7L17 17M7 17L17 7" stroke="#E95744" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <p className='my-2' style={{ color: "#2B7980", fontWeight: 500 }}>
              Nuovo servizio
            </p>
            <button className='theme-btn-2 newcline-btn fw-bold w-100' data-bs-dismiss="offcanvas" aria-label="Close" style={{ fontSize: 16, marginTop: '13%' }}>Crea un nuovo ambulatorio</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewClininc